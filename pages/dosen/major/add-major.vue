<template>
  <div class="mx-auto">
    <h1 class="text-2xl font-medium mb-5">Tambah Mata Pelajaran</h1>

    <div class="border border-alto-500/50 rounded w-full p-4">
      <form>
        <div class="mt-3">
          <FileInput label="Icon Jurusan" v-model:model-value="payload.icon" />
          <InputField
            label="Nama"
            required
            placeholder="Pemrograman Dasar"
            v-model:model-value="payload.name"
            :value="payload.name"
          />
          <InputField
            label="Deskripsi"
            placeholder="Deskripsi Mata Pelajaran"
            v-model:model-value="payload.description"
            :value="payload.description"
          />
          <InputField
            label="Peserta"
            required
            :value="payload.participant_note"
            v-model:model-value="payload.participant_note"
          />
          <InputField
            label="Peluang"
            required
            :value="payload.opportunities_note"
            v-model:model-value="payload.opportunities_note"
          />
          <InputField
            label="Benefit"
            required
            :value="payload.benefits_note"
            v-model:model-value="payload.benefits_note"
          />
          <FileInput
            label="Thumbnail"
            v-model:model-value="payload.participant_thumbnail"
          />
          <FileInput
            label="Thumbnail"
            v-model:model-value="payload.opportunities_thumbnail"
          />
          <FileInput
            label="Thumbnail"
            v-model:model-value="payload.benefits_thumbnail"
          />
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
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "authenticated",
  layout: "admin",
});

const payload = reactive<{
  name: string | undefined;
  description: string | undefined;
  is_active: boolean | undefined;
  participant_note: string | undefined;
  benefits_note: string | undefined;
  opportunities_note: string | undefined;
  icon: File | undefined;
  participant_thumbnail: File | undefined;
  benefits_thumbnail: File | undefined;
  opportunities_thumbnail: File | undefined;
}>({
  name: undefined,
  description: undefined,
  is_active: undefined,
  participant_note: undefined,
  benefits_note: undefined,
  opportunities_note: undefined,
  icon: undefined,
  participant_thumbnail: undefined,
  benefits_thumbnail: undefined,
  opportunities_thumbnail: undefined,
});
</script>
