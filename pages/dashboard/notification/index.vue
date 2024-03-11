<template>
  <h4 class="font-semibold text-2xl">Notifikasi</h4>

  <div class="flex items-center justify-between mt-8 gap-2">
    <form>
      <div class="relative text-alto-500 focus-within:text-alto-500">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <!-- <font-awesome-icon
                :icon="['fas', 'magnifying-glass']"
                class="text-dark-500"
              /> -->
        </span>
        <input
          type="search"
          name="q"
          class="w-56 lg:w-96 py-2 text-s bg-alto-500 rounded-md pl-10 focus:outline-none focus:text-regal-blue-500"
          placeholder="Search..."
          autocomplete="off"
        />
      </div>
    </form>

    <button class="bg-regal-blue-500 text-white py-2 px-6 rounded-lg">
      Search
    </button>
  </div>

  <div class="mt-10 border border-alto-500 rounded-lg">
    <p v-if="loadingNotif" class="text-center">Loading...</p>
    <template v-for="notif in returnData" v-else>
      <NuxtLink
        :to="`/dashboard/notification/${notif.id}`"
        class="flex justify-between items-center gap-4 cursor-pointer transition-colors"
        :class="
          notif.read_at == null
            ? 'bg-blue-100 p-4 hover:bg-blue-200'
            : 'bg-white p-4'
        "
      >
        <div class="flex items-center gap-6">
          <div class="rounded-full bg-regal-blue-5002 p-2">
            <Icon
              name="ic:round-file-copy"
              class="w-5 h-5 text-regal-blue-500"
            />
          </div>
          <h6>{{ notif.title }}</h6>
        </div>
        <div>
          <h5 class="text-sm md:text-sm text-justify text-slate-800">
            {{ notif.description }}
          </h5>
        </div>
        <!-- <div>
          <p class="text-sm text-regal-blue-500">Sekarang</p>
        </div> -->
      </NuxtLink>
    </template>
  </div>

  <div class="mt-10">
    <Pagination
      v-model.number="page"
      :query="true"
      :total="getTotalPages(notifications?.length as number, limit)"
      :prev-show-count="3"
      :next-show-count="3"
    />
  </div>
</template>

<script setup lang="ts">
import usePagination from "~/composables/usePagination";

definePageMeta({
  layout: "profile",
});

const { getCurrentPage, getTotalPages, query } = usePagination();
const page = ref(getCurrentPage(true, 1));
const limit: number = 6;

const route = useRoute();
const cacheEnabled = true; // Enables/Disabled cache

// Cache key has to be unique key across all the pages
const cacheKey = computed(() => {
  return route.path;
});

// Cache key has to be unique key to store correct page data
const cacheKeyPage = computed(() => {
  return route.fullPath;
});

const { data: dataNotif, pending: loadingNotif } = useRestClient<
  APIResponsePagination<Notif>
>(`/notifications?page=${page.value}&filter_read=unread`);

const notifications = computed(() => dataNotif.value?.data.data);

watch(
  () => query.value.page,
  async (value) => {
    if (!value) {
      page.value = 1;
    }
    // On page change refresh data
    await refreshNuxtData();
  }
);

const returnData = computed(() => {
  return dataNotif?.value?.data.data;
});
</script>

<style></style>
