<template>
  <v-md-editor v-model="text" height="400px"></v-md-editor>
</template>

<script setup>
import VueMarkdownEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";

import Prism from "prismjs";

const text = ref("");

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

const nuxtApp = useNuxtApp();
nuxtApp.vueApp.use(VueMarkdownEditor);
</script>
