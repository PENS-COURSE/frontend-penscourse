<!-- <template>
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
    type: Number || undefined,
    required: true,
  },
  per_page: {
    type: Number || undefined,
    required: true,
  },
  current_page: {
    type: Number || undefined,
    required: true,
  },
    last_page: {
      type: Number,
      required: true,
    },
    prev_page: {
      type: Number,
      required: true,
    },
    next_page: {
      type: Number,
      required: true,
    },
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
</script> -->

<template>
  <ul
    v-if="total > 1"
    class="el__pagination flex justify-center items-center gap-10"
    :class="[`el__pagination--${props?.type || 'default'}`]"
  >
    <li
      class="border border-regal-blue-500 p-5 rounded-full hover:bg-regal-blue-500 hover:text-white transition-colors cursor-pointer"
      @click="page = page - 1"
    >
      <Icon name="grommet-icons:form-previous" />
    </li>
    <template
      v-for="prevPage in arrayCreate(prevShowCount).reverse()"
      :key="`prevPage--${prevPage._id}}`"
    >
      <li
        v-if="page - prevPage._id > 0"
        class="hover:bg-regal-blue-500 hover:text-white transition-colors p-2 rounded-full"
      >
        <button
          type="button"
          :aria-label="`Move to page ${page - prevPage._id}`"
          @click="page = page - prevPage._id"
          v-text="page - prevPage._id"
        />
      </li>
    </template>
    <li
      class="text-regal-blue-500 transition-colors p-2 border border-b-regal-blue-500"
    >
      <button type="button" v-text="page" />
    </li>
    <template
      v-for="nextPage in arrayCreate(nextShowCount)"
      :key="`nextPage--${nextPage._id}}`"
    >
      <li
        v-if="page + nextPage._id <= total"
        class="hover:bg-regal-blue-500 hover:text-white transition-colors p-2 rounded-full"
        rounded-full
      >
        <button
          type="button"
          :aria-label="`Move to page ${page + nextPage._id}`"
          @click="page = page + nextPage._id"
          v-text="page + nextPage._id"
        />
      </li>
    </template>
    <li
      class="border border-regal-blue-500 p-5 rounded-full hover:bg-regal-blue-500 hover:text-white transition-colors cursor-pointer"
      @click="page = page + 1"
    >
      <Icon name="grommet-icons:form-next" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
// import debounce from "lodash-es/debounce";
import useHelpers from "~/composables/useHelpers";
const props = defineProps<{
  type?: "square" | "rounded";
  total: number;
  prevShowCount: number;
  nextShowCount: number;
  modelValue: number;
  query?: boolean;
  //hideSearch?: boolean;
  disableScrollTop?: boolean;
}>();

const page = ref<number>(props?.modelValue);

watch(
  () => props?.modelValue,
  async (val) => {
    page.value = val;
  }
);

const emit = defineEmits<{
  (event: "update:modelValue", payload: number): void;
}>();

const { arrayCreate } = useHelpers();

// const inputPage = ref(page.value);
// if (!props?.hideSearch) {
//   watch(inputPage, (newInputPage) => {
//     validatePage(newInputPage);
//   });

//   const validatePage = debounce((newInputPage) => {
//     const newInputPageValue = +newInputPage;
//     if (newInputPageValue > 0 && newInputPageValue <= props?.total) {
//       page.value = newInputPageValue;
//     } else {
//       inputPage.value = page.value;
//     }
//   }, 1000);
// }

if (props?.query) {
  const route = useRoute();
  const router = useRouter();

  const query = computed(() => {
    return route.query;
  });

  // Initial page population disable for now since we do it in root component
  // if (query.value.page) {
  //   page.value = +query.value.page || props?.modelValue;
  //   emit("update:modelValue", +page.value);
  // }

  watch(page, (newPage) => {
    router.push({ query: { ...query.value, page: `${newPage}` } });
    //inputPage.value = +newPage;
    emit("update:modelValue", +newPage);
    if (!props?.disableScrollTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
} else {
  watch(page, (newPage) => {
    // inputPage.value = +newPage;
    emit("update:modelValue", +newPage);
    if (!props?.disableScrollTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}
</script>
