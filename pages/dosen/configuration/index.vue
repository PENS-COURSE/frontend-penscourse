<template>
  <div>
    <h1 class="text-2xl font-medium">Settings</h1>
    <Breadcrumb class="mt-1" />

    <div class="mt-10">
      <div class="relative overflow-x-auto">
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 "
        >
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">No</th>
              <th scope="col" class="px-6 py-3">Name</th>
              <th scope="col" class="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, idx) in configurations"
              class="bg-white border-b hover:bg-gray-50"
            >
              <th class="px-6 py-4">
                {{ idx + 1 }}
              </th>
              <td class="px-6 py-4 font-medium text-gray-900">
                {{ item.title }}
              </td>
              <td class="px-6 py-4">
                <NuxtLink
                  :to="{
                    path: `/dosen/configuration/${item.slug}`,
                  }"
                  class="font-medium text-blue-600 hover:underline"
                  >View</NuxtLink
                >
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

definePageMeta({
  middleware: "authenticated",
  layout: "admin",
});

const { data: dataConfigurations } = await useRestClient<
  APIResponseList<Configuration>
>(`/dynamic-configurations`);

const configurations = computed(() => dataConfigurations?.value?.data);
</script>
