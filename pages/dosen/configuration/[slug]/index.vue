<template>
  <div>
    <h1 class="text-2xl font-medium">
      Update {{ configuration?.title ?? "-" }}
    </h1>
    <Breadcrumb class="mt-1" />

    <div class="mt-10">
      <div class="relative overflow-x-auto">
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 "
        >
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">No</th>
              <th scope="col" class="px-6 py-3">Key</th>
              <th scope="col" class="px-6 py-3">Value</th>
              <th scope="col" class="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, idx) in configuration?.DynamicConfigurationValues"
              class="bg-white border-b hover:bg-gray-50"
            >
              <th class="px-6 py-4">
                {{ idx + 1 }}
              </th>
              <td class="px-6 py-4 font-medium text-gray-900">
                {{ item.key }}
              </td>
              <td class="px-6 py-4 font-medium text-gray-900">
                {{ item.value }}
              </td>
              <td class="px-6 py-4 flex space-x-5">
                <NuxtLink
                  :to="`/dosen/configuration/${slugParams}/edit/${item.id}`"
                  class="font-medium text-yellow-600 hover:underline"
                  >Edit Value</NuxtLink
                >
                <button
                  class="font-medium text-red-600 hover:underline"
                  v-if="item.can_delete === true"
                >
                  Hapus
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Configuration } from "~/models/Configuration";

const { slug: slugParams } = useRoute().params as { slug: string };

definePageMeta({
  middleware: "authenticated",
  layout: "admin",
});

const { data: dataConfiguration } = await useRestClient<
  APIResponseDetail<Configuration>
>(`/dynamic-configurations/${slugParams}`);

const configuration = computed(() => dataConfiguration?.value?.data);
</script>
