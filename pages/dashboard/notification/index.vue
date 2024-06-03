<template>
  <div class="flex items-center justify-between mt-8 gap-2">
    <h4 class="font-semibold text-2xl">Notifikasi</h4>
    <!-- <div class="flex gap-5">
      <select
        v-model="selectedStatus"
        class="border border-regal-blue-500 py-2 px-4 rounded-lg"
      >
        <option value="unread">Belum dibaca</option>
        <option value="read">Dibaca</option>
      </select>
    </div> -->
  </div>

  <div
    v-if="displayedNotif?.length == 0"
    class="mt-10 flex flex-col justify-center items-center"
  >
    <img src="/images/empty.jpg" alt="empty image" class="w-96 h-80 mb-10" />
    <h2 class="text-xl font-semibold">
      Anda tidak memiliki notifikasi yang masuk
    </h2>
  </div>

  <div v-if="loadingNotif" class="text-center">Loading...</div>
  <div class="mt-10 border border-alto-500 rounded-lg" v-else>
    <template v-for="notif in displayedNotif">
      <NuxtLink
        :to="`/dashboard/notification/${notif.id}`"
        class="flex justify-between items-center gap-4 p-4 cursor-pointer transition-colors"
        :class="
          notif.read_at == null ? 'bg-gray-100 hover:bg-gray-200' : 'bg-white'
        "
      >
        <div class="flex items-center gap-6 w-2/12">
          <div class="rounded-full bg-regal-blue-5002 p-2">
            <Icon
              name="ic:round-file-copy"
              class="w-5 h-5 text-regal-blue-500"
            />
          </div>
          <h6 class="font-medium">{{ notif.title }}</h6>
        </div>
        <div class="w-6/12">
          <h5 class="text-sm md:text-sm text-justify text-slate-800 truncate">
            {{ notif.description }}
          </h5>
        </div>
        <div class="w-4/12 flex justify-around">
          <p class="text-sm text-regal-blue-500">
            {{ convertDate(notif.created_at) }}
          </p>
          <!-- <button
            @click="markAsRead(notif.id)"
            class="text-sm text-gray-800 hover:underline"
          >
            mark as read
          </button> -->
        </div>
      </NuxtLink>
    </template>
  </div>

  <div class="mt-10 flex justify-center">
    <vue-awesome-paginate
      :total-items="totalNotif"
      :items-per-page="itemsPerPage"
      :max-pages-shown="3"
      v-model="currentPage"
      :on-click="onClickHandler"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "profile",
  middleware: "authenticated",
});

const itemsPerPage = 5;
const currentPage = ref(1);
// const notifications = ref<Notif[]>([]);
const selectedStatus = ref<string>("read");

const {
  data: dataNotif,
  pending: loadingNotif,
  refresh: refreshNotif,
} = useRestClient<APIResponsePagination<Notif>>(`/notifications`);
const notifications = computed(() => dataNotif.value?.data.data);

const markAsRead = async (id: string) => {
  const { data } = await useRestClient<APIResponseDetail<any>>(
    `/notifications/${id}/mark-as-read`
  );

  if (data.value) {
    console.log(data.value);

    await refreshNotif();
  }
};

const onClickHandler = (page: number) => {
  currentPage.value = page;
  scrollToTop();
};

const totalNotif = computed(() => {
  if (Array.isArray(notifications.value)) {
    return notifications.value.length;
  } else {
    return 0;
  }
});

const displayedNotif = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return Array.isArray(notifications.value)
    ? notifications.value.slice(startIndex, endIndex)
    : [];
});

const convertDate = (date: Date) => {
  const isoDateString = date;
  const newDate: Date = new Date(isoDateString);
  const options: Intl.DateTimeFormatOptions = { weekday: "long" };
  const dayName: string = newDate.toLocaleDateString("id-ID", options);
  const day: string = String(newDate.getDate()).padStart(2, "0");
  const month: string = newDate.toLocaleString("id-ID", { month: "long" });
  const year: string = String(newDate.getFullYear());
  const formattedDate: string = `${dayName}, ${day}-${month}-${year}`;

  return formattedDate;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  scrollToTop();
});
</script>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #0f497a;
  border: 1px solid grey;
  color: white;
}
.active-page:hover {
  background-color: #0c3e6e;
}
</style>
