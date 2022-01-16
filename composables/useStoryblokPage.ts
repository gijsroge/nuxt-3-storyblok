// This will auto fetch the current page based on the route
export default async function () {
  const route = useRoute();
  const slug = computed(() => {
    if (Array.isArray(route.params.slug)) {
      return route.params.slug.join("/");
    }
    if (route.params.slug === "") return "/home";
    return "";
  });

  return useStoryblok({ slug: `cdn/stories/${slug.value}` });
}
