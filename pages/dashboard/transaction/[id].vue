<template>
  <section class="mx-10 my-16 lg:mx-16 xl:mx-32">
    <div class="flex flex-col gap-10 md:flex-row">
      <div class="md:w-1/2 max-h-96">
        <h2 class="mb-6 text-2xl font-semibold">Rincian Pembelian</h2>
        <div class="p-4 border border-alto-500 rounded-lg">
          <img
            v-if="order?.course.thumbnail == null"
            src="~assets/images/course.png"
            alt=""
            class="w-full mb-2 max-h-52"
          />
          <img
            v-else
            :src="`${useRuntimeConfig().public.BASE_URL}/${
              order.course.thumbnail
            }`"
            :alt="order.course.name"
            class="w-full mb-2 max-h-72 object-cover"
          />
          <h4 class="font-semibold mb-2">{{ order?.course.name }}</h4>
          <p class="text-sm lg:text-base">
            {{ getMajorName(order?.course.department_id) }}
          </p>
        </div>
      </div>
      <div class="md:w-1/2">
        <div class="flex justify-between border border-alto-500 p-2 mb-4">
          <h4>Rincian Pembelian</h4>
          <p
            :class="
              order?.status == 'paid'
                ? 'text-green-500'
                : order?.status == 'expired'
                  ? 'text-red-500'
                  : order?.status == 'pending'
                    ? 'text-regal-blue-500'
                    : ''
            "
          >
            {{
              order?.status == "paid"
                ? "Terbayar"
                : order?.status == "expired"
                  ? "Kadaluarsa"
                  : order?.status == "pending"
                    ? "Pending"
                    : ""
            }}
          </p>
        </div>
        <h2 class="mb-4 font-semibold text-xl">Informasi Pembelian</h2>
        <div class="flex flex-col gap-2 border border-alto-500 p-2">
          <div class="flex justify-between text-sm">
            <p>Tanggal Pembelian</p>
            <p>{{ order?.created_at }}</p>
          </div>
          <div class="flex justify-between text-sm">
            <p>Kode Transaksi</p>
            <p>{{ order?.xendit_id }}</p>
          </div>
          <div class="flex justify-between">
            <p>Total Pembayaran</p>
            <p class="font-semibold">
              Rp
              {{
                new Intl.NumberFormat("id-ID").format(
                  order?.total_price as number
                )
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const { id } = useRoute().params as { id: string };

const { data } = await useRestClient<APIResponseDetail<Order>>(`/orders/${id}`);
const order = computed(() => data.value?.data);

const { data: majorData } =
  await useRestClient<APIResponsePagination<Department>>("/departments");

const major = computed(() => majorData?.value?.data.data);

const getMajorName = (id: number | undefined) => {
  const majorName = major.value?.find((major) => major.id === id);
  return majorName ? majorName.name : "";
};
</script>
