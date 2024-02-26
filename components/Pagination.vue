<template>
  <section class="mt-16 mx-auto">
    <div class="flex justify-center gap-4">
      <nav aria-label="Page navigation example">
        <ul class="inline-flex -space-x-px text-base h-10">
          <li>
            <button
              type="button"
              @click="onClickPreviousPage"
              :disabled="isInFirstPage"
              class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
            >
              Previous
            </button>
          </li>
          <li v-for="page in pages" :key="page.name">
            <button
              type="button"
              :disabled="page.isDisabled"
              @click="onClickPage(page.name)"
              class="flex items-center justify-center px-4 h-10 leading-tight"
              :class="
                isPageActive(page.name)
                  ? 'bg-blue-600 hover:bg-blue-700 active:bg-blue-400 text-white'
                  : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100'
              "
            >
              {{ page.name }}
            </button>
          </li>
          <li>
            <button
              type="button"
              @click="onClickNextPage"
              :disabled="isInLastPage"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  maxVisibleButtons: {
    type: Number,
    required: false,
    default: 3,
  },
  total_page: {
    type: Number,
    required: true,
  },
  per_page: {
    type: Number,
    required: true,
  },
  current_page: {
    type: Number,
    required: true,
  },
  //   last_page: {
  //     type: Number,
  //     required: true,
  //   },
  //   prev_page: {
  //     type: Number,
  //     required: true,
  //   },
  //   next_page: {
  //     type: Number,
  //     required: true,
  //   },
});

const emit = defineEmits(["pagechanged"]);

const startPage = computed(() => {
  // When on the first page
  if (props.current_page === 1) {
    return 1;
  }

  // When on the last page
  if (props.current_page === props.total_page) {
    return props.total_page - props.maxVisibleButtons;
  }

  // When inbetween
  return props.current_page - 1;
});

const pages = computed(() => {
  const range = [];

  for (
    let i = startPage.value;
    i <=
    Math.min(startPage.value + props.maxVisibleButtons - 1, props.total_page);
    i++
  ) {
    range.push({ name: i, isDisabled: i === props.current_page });
  }
  return range;
});

const isInFirstPage = computed(() => {
  return props.current_page === 1;
});

const isInLastPage = computed(() => {
  return props.current_page === props.total_page;
});

const onClickFirstPage = () => {
  emit("pagechanged", 1);
};
const onClickPreviousPage = () => {
  emit("pagechanged", props.current_page - 1);
  //get data by nextpage
};
const onClickPage = (page: number) => {
  emit("pagechanged", page);
};
const onClickNextPage = () => {
  emit("pagechanged", props.current_page + 1);
};
const onClickLastPage = () => {
  emit("pagechanged", props.total_page);
};

const isPageActive = (page: number) => {
  return props.current_page === page;
};
</script>
