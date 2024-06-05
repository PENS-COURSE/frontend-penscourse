<script lang="ts" setup>
const route = useRoute();
const router = useRouter();

defineProps({
  class: {
    type: String,
    required: false,
  },
});

interface Breadcrumb {
  path: string;
  meta: {
    title: string;
    isRoot: boolean;
    isLast: boolean;
  };
}

const getBreadcrumbs = () => {
  const fullPath = route.path;
  const requestPath = fullPath.startsWith("/")
    ? fullPath.substring(1)
    : fullPath;
  const crumbs = requestPath.split("/");

  const breadcrumbs: Breadcrumb[] = [];

  let path = "";

  crumbs.forEach((crumb) => {
    if (crumb) {
      path = `${path}/${crumb}`;
      breadcrumbs.push({
        path,
        meta: {
          title: titleCase(crumb),
          isRoot: breadcrumbs.length === 0,
          isLast: breadcrumbs.length === crumbs.length - 1,
        },
      });
    }
  });

  return breadcrumbs;
};

const ariaCurrent = (index: number) =>
  index === getBreadcrumbs().length - 1 ? "page" : "false";
</script>

<template>
  <nav :class="class">
    <ol class="flex items-center gap-2">
      <li v-for="(breadcrumb, index) in getBreadcrumbs()" :key="index">
        <NuxtLink
          v-if="!breadcrumb.meta.isLast"
          :to="`${breadcrumb?.path}`"
          class="font-medium"
          aria-current="{{ ariaCurrent(index) }}"
          >{{ breadcrumb?.meta.title }} /</NuxtLink
        >

        <NuxtLink
          v-else
          :to="`${breadcrumb?.path}`"
          class="font-medium text-regal-blue-500"
          aria-current="{{ ariaCurrent(index) }}"
          >{{ breadcrumb?.meta.title }}</NuxtLink
        >
      </li>
    </ol>
  </nav>
</template>
