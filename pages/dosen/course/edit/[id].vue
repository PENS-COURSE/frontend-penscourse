<template>
  <div class="mx-auto">
    <div class="border border-alto-500/50 rounded w-full p-4">
      <h1 class="text-2xl font-medium mb-5">
        Edit Mata Kuliah {{ course?.name }}
      </h1>
      <hr class="border border-alto-500/40 mt-2" />
      <form @submit.prevent="handleSubmit">
        <div class="mt-3">
          <FileInput
            label="Thumbnail"
            v-model:model-value="payload.thumbnail"
          />
          <InputField
            label="Judul"
            required
            placeholder="Pemrograman Dasar"
            v-model:model-value="payload.title"
            :value="payload.title"
          />
          <InputField
            label="Deskripsi"
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
              required
              :value="payload.is_free"
              v-model:model-value="payload.is_free"
            />
            <InputField
              label="Harga"
              required
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
              required
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
              :required="payload.start_date !== undefined"
            />
          </div>
          <div class="grid grid-cols-2 gap-5">
            <SelectField
              label="Grade Level"
              :options="optionsGradeLevel"
              required
              :value="payload.grade_level"
              v-model:model-value="payload.grade_level"
            />
            <InputField
              label="Maksimal Siswa"
              type="number"
              placeholder="30"
              :value="payload.max_students"
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
              required
              readonly
              :on-click="setOpenModalJurusan"
              :value="payload.department_selected?.name"
              placeholder="Pilih Jurusan"
            />
            <InputField
              v-show="user.role === 'admin'"
              label="Author"
              required
              readonly
              :on-click="setOpenModalJurusan"
              placeholder="Pilih Author"
              :value="payload.user_id?.toString()"
              v-model:model-value="payload.user_id"
            />
          </div>
        </div>
        <div class="mt-3 flex justify-end">
          <button
            class="bg-regal-blue-500 text-white rounded-lg text-sm font-medium gap-2 px-6 py-2"
            type="submit"
          >
            Simpan
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
  layout: "admin",
});

const { user } = storeToRefs(useAuthStore());
const route = useRoute().params;

const inputSearchJurusan = ref("");
const modal = reactive({
  jurusanModal: false,
});
const items = reactive({
  jurusan: [] as Department[],
});
const loading = reactive({
  jurusan: false,
});

const payload = reactive<{
  title: string | undefined;
  description: string | undefined;
  price: any | undefined;
  is_free: any | undefined;
  is_certified: any | undefined;
  grade_level: string | undefined;
  start_date: any | undefined;
  end_date: any | undefined;
  is_active: boolean | undefined;
  max_students: any | undefined;
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

const { data } = await useRestClient<APIResponseDetail<Course>>(
  `/courses/${route.id}`
);

const course = computed(() => data?.value?.data);

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
    `/courses/${route.id}/update`,
    {
      method: "PATCH",
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
            user_id: payload.user_id,
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
            user_id: payload.user_id,
            thumbnail: payload.thumbnail,
          }),
    }
  );

  if (!error.value) {
    navigateTo("/dosen/course");
  }
};

const setOpenModalJurusan = () => {
  inputSearchJurusan.value = "";
  modal.jurusanModal = true;
};

onMounted(() => {
  payload.title = course.value?.name;
  payload.description = course.value?.description;
  payload.price = course.value?.price;
  payload.is_free = course.value?.is_free;
  payload.is_certified = course.value?.is_certified;
  payload.grade_level = course.value?.grade_level;
  payload.start_date = course.value?.start_date;
  payload.end_date = course.value?.end_date;
  payload.is_active = course.value?.is_active;
  payload.max_students = course.value?.max_students;
  payload.department_id = course.value?.department_id;
  payload.user_id = course.value?.user_id;
});
</script>

<style scoped>
.router-link-exact-active {
  background-color: #14487a;
  color: white;
}
</style>
