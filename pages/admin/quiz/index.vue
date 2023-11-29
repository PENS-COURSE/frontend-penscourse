<template>
    <div class="h-screen w-full px-4 pb-24 overflow-auto">
      <!-- component -->
        <div class="overflow-hidden rounded-lg border border-[#E0E8F3] shadow-md m-5">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead class="bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">ID</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Title</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Course Name</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Date</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Duration</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Quantity</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Type</th>
            </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 border-t border-[#E0E8F3]">
            <tr class="hover:bg-gray-50">
                <td class="px-2 py-4">
                <span
                    class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs text-left font-semibold text-green-600"
                >
                    <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                    122234
                </span>
                </td>
                <td class="px-6 py-4">AWS Cloud Infrastructure</td>
                <td class="px-2 py-4">
                <span
                    class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                >
                    <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                    Komputasi Awan
                </span>
                </td>
                <td class="px-6 py-4">01-11-2023</td>
                <td class="px-6 py-4">15:00 - 15:15</td>
                <td class="px-4 py-4">
                    <div class="flex gap-2">
                        <span
                        class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                        >
                        10
                        </span>
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div class="flex flex-col gap-2">
                        <span
                        class="inline-flex items-center gap-1 rounded-full bg-[#E3F2FD] px-2 py-1 text-xs font-semibold text-blue-600"
                        >
                        Easy
                        </span>
                        <span
                        class="inline-flex items-center gap-1 rounded-full bg-[#E8EAF6] px-2 py-1 text-xs font-semibold text-indigo-600"
                        >
                        Medium
                        </span>
                        <span
                        class="inline-flex items-center gap-1 rounded-full bg-[#FFEBEE] px-2 py-1 text-xs font-semibold text-violet-600"
                        >
                        Hard
                        </span>
                    </div>
                </td>
                <td class="px-6 py-4">
                <div class="flex justify-end gap-4">
                    <a x-data="{ tooltip: 'Delete' }" href="#">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                        x-tooltip="tooltip"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>
                    </a>
                    <a x-data="{ tooltip: 'Edite' }" href="#">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                        x-tooltip="tooltip"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                    </svg>
                    </a>
                </div>
                </td>
            </tr>
            <tr class="hover:bg-gray-50 border-[#E0E8F3]">
              <td class="px-2 py-4">
                <span
                    class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs text-left font-semibold text-green-600"
                >
                    <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                    122234
                </span>
                </td>
                <td class="px-6 py-4">Komputasi Awan</td>
                <td class="px-2 py-4">
                <span
                    class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                >
                    <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                    Teknik Informatika
                </span>
                </td>
                <td class="px-6 py-4">...</td>
                <td class="px-6 py-4">...</td>
                <td class="py-3 px-6 text-center">
                    <span class="bg-[#EF9A9A] text-yellow-600 py-1 px-3 rounded-full text-xs">Pending</span>
                </td>
                <td class="px-4 py-4">
                <div class="flex gap-2">
                    <span
                    class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                    >
                    Detail
                    </span>
                </div>
                </td>
                <td class="px-6 py-4">
                <div class="flex justify-end gap-4">
                    <a x-data="{ tooltip: 'Delete' }" href="#">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                        x-tooltip="tooltip"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>
                    </a>
                    <a x-data="{ tooltip: 'Edite' }" href="#">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                        x-tooltip="tooltip"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                    </svg>
                    </a>
                </div>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
      </div>
  </template>
  
  <script setup>
  definePageMeta({
    layout: "admin",
  });
  </script>
  