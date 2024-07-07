<template>
  <div
    class="mx-10 md:mx-28 xl:mx-40 2xl:mx-52 mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
  >
    <h2 class="text-title-md2 font-bold text-black">Tambah Mata Kuliah</h2>
    <nav>
      <ol class="flex items-center gap-2">
        <li>
          <NuxtLink :to="`/major/${id}`" class="font-medium"
            >{{ major?.name }} /</NuxtLink
          >
        </li>
        <li class="font-medium text-regal-blue-500">Tambah Mata Kuliah</li>
      </ol>
    </nav>
  </div>

  <div
    class="mx-10 md:mx-28 xl:mx-40 2xl:mx-52 rounded-sm border border-gray-200 bg-gray-50 shadow-lg"
  >
    <div class="border-b border-stroke py-4 px-6">
      <h3 class="font-semibold text-black">
        Tambah Mata Kuliah {{ major?.name }}
      </h3>
    </div>
    <div class="p-6">
      <form @submit.prevent="handleSubmit">
        <div class="p-6">
          <FileInput
            label="Thumbnail"
            v-model:model-value="payload.thumbnail"
          />
          <InputField
            label="Judul"
            placeholder="Masukkan Judul Mata Kuliah"
            v-model:model-value="payload.title"
            :value="payload.title"
          />
          <LargeInputField
            label="Masukkan Deskripsi Mata Kuliah"
            placeholder="Deskripsi Mata Pelajaran"
            v-model:model-value="payload.description"
            :value="payload.description"
          />
          <div
            :class="[
              'grid gap-5',
              payload.is_free === 'true' || payload.is_free === undefined
                ? 'grid-cols-2'
                : 'grid-cols-3',
            ]"
          >
            <SelectField
              label="Kelas Berbayar"
              :options="optionsIsFree"
              :value="payload.is_free"
              v-model:model-value="payload.is_free"
            />
            <InputField
              label="Harga"
              v-if="
                payload.is_free === 'false' && payload.is_free !== undefined
              "
              type="number"
              :value="payload.price"
              v-model:model-value="payload.price"
            />
            <SelectField
              label="Tersedia Sertifikat"
              :options="optionsIsCertificate"
              :value="payload.is_certified"
              v-model:model-value="payload.is_certified"
            />
          </div>
          <div class="grid grid-cols-2 gap-5">
            <InputField
              label="Tanggal Mulai"
              type="date"
              :value="payload.start_date"
              v-model:model-value="payload.start_date"
            />
            <InputField
              label="Tanggal Akhir"
              type="date"
              :value="payload.end_date"
              v-model:model-value="payload.end_date"
            />
          </div>
          <div class="grid grid-cols-2 gap-5">
            <SelectField
              label="Grade Level"
              :options="optionsGradeLevel"
              :value="payload.grade_level"
              v-model:model-value="payload.grade_level"
            />
            <InputField
              label="Maksimal Siswa"
              placeholder="30"
              :type="'number'"
              :value="payload.max_students?.toString()"
              v-model:model-value="payload.max_students"
            />
          </div>
          <div
            :class="[
              'grid',
              user.role === 'admin' ? 'grid-cols-2 gap-5' : 'grid-cols-1',
            ]"
          >
            <InputField
              label="Jurusan"
              readonly
              :on-click="setOpenModalJurusan"
              :value="payload.department_selected?.name"
              placeholder="Pilih Jurusan"
            />
            <InputField
              v-show="user.role === 'admin'"
              label="Author"
              readonly
              :on-click="setOpenModalJurusan"
              placeholder="Pilih Author"
              :value="payload.user_id?.toString()"
              v-model:model-value="payload.user_id"
            />
          </div>
          <button
            class="flex w-full justify-center rounded bg-regal-blue-500 p-3 font-medium text-gray-100"
            type="submit"
          >
            <span v-if="isLoading"><LoadingSpinner /></span>
            <span v-if="!isLoading">Simpan</span>
          </button>
        </div>
      </form>
    </div>
  </div>

  <Modal
    title="Pilih Jurusan"
    :is-open="modal.jurusanModal"
    :on-agree="handleAccept"
    :on-cancel="handleCancel"
    v-model:model-value="modal.jurusanModal"
  >
    <InputField
      label="Cari Jurusan"
      placeholder="Cari Jurusan"
      required
      :value="inputSearchJurusan"
      v-model:model-value="inputSearchJurusan"
      :on-input="debounceJurusan"
      class="w-full"
    />

    <div v-if="!loading.jurusan" class="w-full">
      <div
        class="grid grid-cols-2 w-full gap-3"
        v-if="items.jurusan.length > 0"
      >
        <div
          v-for="item in items.jurusan"
          class="border rounded p-2 flex items-center justify-between"
        >
          <span :key="item.id">{{ item.name }}</span>
          <input
            type="radio"
            name="jurusan"
            :value="item.id"
            @select="payload.department_id = item.id"
            v-model="payload.department_id"
          />
        </div>
      </div>
      <div
        v-if="items.jurusan.length == 0"
        class="flex items-center justify-center"
      >
        <span class="text-center">Tidak ada data</span>
      </div>
    </div>

    <div v-else>
      <p>Loading . . .</p>
    </div>
  </Modal>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "authenticated",
  layout: "livestream",
});

import type { APIResponsePagination } from "../../../models/Data";

const { user } = storeToRefs(useAuthStore());
const { id } = useRoute().params as { id: string };

const inputSearchJurusan = ref("");
const isLoading: Ref<boolean> = ref(false);
const modal = reactive({
  jurusanModal: false,
});
const items = reactive({
  jurusan: [] as Department[],
});
const loading = reactive({
  jurusan: false,
});

const { data } = await useRestClient<APIResponseDetail<Department>>(
  `/departments/${id}`
);
const major = computed(() => data?.value?.data);

const payload = reactive<{
  title: string | undefined;
  description: string | undefined;
  price: string | undefined;
  is_free: string | undefined;
  is_certified: string | undefined;
  grade_level: string | undefined;
  start_date: string | undefined;
  end_date: string | undefined;
  is_active: boolean | undefined;
  max_students: string | undefined;
  department_id: number | undefined;
  department_selected: Department | undefined;
  user_id: number | undefined;
  thumbnail: File | undefined;
}>({
  title: undefined,
  description: undefined,
  price: undefined,
  is_free: undefined,
  is_certified: undefined,
  grade_level: undefined,
  start_date: undefined,
  end_date: undefined,
  is_active: undefined,
  max_students: undefined,
  department_id: undefined,
  department_selected: undefined,
  user_id: undefined,
  thumbnail: undefined,
});

watch(modal, async (value) => {
  if (value.jurusanModal) {
    await getJurusan({ search: "" });
  } else {
    items.jurusan = [];
  }
});

watch(inputSearchJurusan, async () => {
  debounceJurusan();
});

const optionsIsFree = [
  { value: "true", label: "Gratis" },
  { value: "false", label: "Berbayar" },
];

const optionsIsCertificate = [
  { value: "true", label: "Ya" },
  { value: "false", label: "Tidak" },
];

const optionsGradeLevel = [
  { value: "beginner", label: "Pemula" },
  { value: "intermediate", label: "Menengah" },
  { value: "advanced", label: "Lanjutan" },
];

const debounceJurusan = debounce(async () => {
  await getJurusan({ search: inputSearchJurusan.value });
}, 500);

const getJurusan = async ({ search }: { search: string }) => {
  const {
    data: { value: jurusan },
    pending: pendingJurusan,
  } = await useRestClient<APIResponsePagination<Department>>("/departments", {
    query: {
      name: search,
    },
    lazy: true,
    server: false,
  });

  loading.jurusan = pendingJurusan.value;

  items.jurusan = [];

  await Promise.all([
    jurusan?.data.data.map(async (item) => {
      items.jurusan.push(item);
    }),
  ]);
};

const handleAccept = () => {
  payload.department_selected = items.jurusan.find(
    (item) => item.id === payload.department_id
  );
};

const handleCancel = () => {
  payload.department_id = undefined;
  payload.department_selected = undefined;
};

const handleSubmit = async () => {
  const { error } = await useRestClient<APIResponsePagination<Department>>(
    "/courses/create",
    {
      method: "POST",

      body: !payload.thumbnail
        ? {
            name: payload.title,
            description: payload.description,
            price: payload.price,
            is_free: payload.is_free,
            is_certified: payload.is_certified,
            grade_level: payload.grade_level,
            start_date: payload.start_date,
            end_date: payload.end_date,
            is_active: payload.is_active,
            max_students: payload.max_students,
            department_id: payload.department_id,
            user_id: user.value.id,
          }
        : converterFormData({
            name: payload.title,
            description: payload.description,
            price: payload.price,
            is_free: payload.is_free,
            is_certified: payload.is_certified,
            grade_level: payload.grade_level,
            start_date: payload.start_date,
            end_date: payload.end_date,
            is_active: payload.is_active,
            max_students: payload.max_students,
            department_id: payload.department_id,
            user_id: user.value.id,
            thumbnail: payload.thumbnail,
          }),
    }
  );

  if (!error.value) {
    navigateTo("/major");
  }
};

const setOpenModalJurusan = () => {
  inputSearchJurusan.value = "";
  modal.jurusanModal = true;
};
</script>
