<template>
  <div class="flex items-center justify-between">
    <h4 class="font-semibold text-2xl">Sertifikat Anda</h4>
  </div>

  <div class="mt-8 gap-8 grid grid-cols-1 md:grid-cols-3">
    <template v-for="certificate in certificates" :key="certificate.uuid">
      <div
        class="border border-alto-500 p-4 hover:bg-gray-50 transition-colors"
      >
        <img
          :src="`${useRuntimeConfig().public.API_URL}/certificates/thumbnail/${
            certificate?.certificate_thumbnail
          }`"
          :alt="certificate.course.name"
          class="w-full mb-2 max-h-40 object-cover"
        />
        <h4 class="font-semibold text-base mb-4">
          Sertifikat {{ certificate.course.name }}
        </h4>
        <div class="flex justify-between items-center">
          <p class="text-slate-gray-500">
            {{ getMajorName(certificate.course.department_id) }}
          </p>
          <button
            @click="
              downloadCertificate(certificate.uuid, certificate.course.name)
            "
            class="bg-regal-blue-500 hover:bg-regal-blue-600 text-white py-2 px-3 rounded-md"
          >
            Download
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import type { Certificate } from "~/models/Certificate";

definePageMeta({
  layout: "profile",
  middleware: "authenticated",
});

const { access_token } = storeToRefs(useAuthStore());

const { data } =
  await useRestClient<APIResponsePagination<Certificate>>("/certificates");
const { data: detailMajor } =
  await useRestClient<APIResponsePagination<Department>>("/departments");

const certificates = computed(() => data.value?.data.data);
const major = computed(() => detailMajor?.value?.data);

const downloadCertificate = async (id: string, name: string | undefined) => {
  await axios
    .get(`${useRuntimeConfig().public.API_URL}/certificates/download/${id}`, {
      headers: {
        Authorization: `Bearer ${access_token.value}`,
      },
      responseType: "blob",
    })
    .then((res) => {
      const blob = new Blob([res.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.setAttribute("download", `${name}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);
    });
};

const getMajorName = (id: number | undefined) => {
  const majorName = major.value?.data.find((major) => major.id === id);
  return majorName ? majorName.name : "";
};
</script>

<style></style>
