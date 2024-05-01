<template>
  <h4 class="font-semibold text-2xl">Transaksi</h4>

  <div class="flex items-center justify-between mt-8 gap-2">
    <!-- <form>
      <div class="relative text-alto-500 focus-within:text-alto-500">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <Icon name="mdi:magnify" class="text-regal-blue-500 w-5 h-5" />
        </span>
        <input
          type="search"
          name="q"
          class="w-56 lg:w-96 py-2 text-s bg-alto-500 rounded-md pl-10 focus:outline-none focus:text-regal-blue-500"
          placeholder="Search..."
          autocomplete="off"
        />
      </div>
    </form> -->

    <div class="flex gap-5">
      <select
        v-model="selectedStatus"
        class="border border-regal-blue-500 py-2 px-4 rounded-lg"
      >
        <option value="all">Semua</option>
        <option value="pending">Pending</option>
        <option value="expired">Kadaluarsa</option>
        <option value="paid">Terbayar</option>
        <!-- <option v-for="order in orderStatus" :value="order" :key="order">
          {{ order }}
        </option> -->
      </select>
    </div>
  </div>

  <p v-if="isLoading" class="text-center mt-5">Loading...</p>
  <div
    v-if="filteredOrder.length"
    class="mt-8 gap-8 grid grid-cols-1 md:grid-cols-3"
    :class="isLoading ? 'animate-pulse' : ''"
  >
    <template v-for="order in filteredOrder" :key="order.id">
      <NuxtLink
        :to="`/dashboard/transaction/${order.id}`"
        class="border border-alto-500 p-4"
      >
        <img
          v-if="order.course.thumbnail == null"
          src="~assets/images/course.png"
          alt=""
          class="w-full mb-2"
        />
        <img
          v-else
          :src="`${useRuntimeConfig().public.BASE_URL}/${
            order.course.thumbnail
          }`"
          :alt="order.course.name"
          class="w-full mb-2 max-h-28 object-cover"
        />
        <h4 class="font-semibold text-base mb-1">{{ order.course.name }}</h4>
        <p class="text-slate-gray-500 mb-4">
          {{ getMajorName(order.course.department_id) }}
        </p>
        <p class="text-slate-gray-500 text-sm mb-1">Total</p>
        <div class="flex justify-between items-center">
          <h4 class="font-semibold text-base text-regal-blue-500">
            Rp {{ new Intl.NumberFormat("id-ID").format(order.total_price) }}
          </h4>
          <p
            class="text-sm"
            :class="
              order.status == 'paid'
                ? 'text-green-500'
                : order.status == 'expired'
                  ? 'text-red-500'
                  : order.status == 'pending'
                    ? 'text-regal-blue-500'
                    : ''
            "
          >
            {{
              order.status == "paid"
                ? "Terbayar"
                : order.status == "expired"
                  ? "Kadaluarsa"
                  : order.status == "pending"
                    ? "Pending"
                    : ""
            }}
          </p>
        </div>
      </NuxtLink>
    </template>
  </div>
  <div
    v-if="filteredOrder.length == 0"
    class="mt-10 flex flex-col justify-center items-center"
  >
    <img src="/images/empty.jpg" alt="empty image" class="w-96 h-80 mb-10" />
    <h2 class="text-xl font-semibold">Belum ada transaksi</h2>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "profile",
});

const selectedStatus = ref<string>("all");
const orders = ref<Order[]>([]);
const isLoading = ref(false);

const getOrder = async () => {
  isLoading.value = true;
  const { data: dataOrders } =
    await useRestClient<APIResponsePagination<Order>>("/orders");
  if (dataOrders.value) {
    orders.value = dataOrders.value.data.data;
  }
  isLoading.value = false;
};

const filteredOrder = computed(() => {
  if (selectedStatus.value == "all") {
    return orders.value;
  }
  return orders.value?.filter((item) => item.status === selectedStatus.value);
});

const { data: detailMajor } =
  await useRestClient<APIResponsePagination<Department>>("/departments");

const major = computed(() => detailMajor?.value?.data);

const getMajorName = (id: number | undefined) => {
  const majorName = major.value?.data.find((major) => major.id === id);
  return majorName ? majorName.name : "";
};

onMounted(() => {
  getOrder();
});

// console.log(orders.value);
</script>

<style></style>
