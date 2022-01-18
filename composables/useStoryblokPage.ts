// This will auto fetch the current page based on the route
export default async function () {
  const route = useRoute();

  // Get slug from route.
  // If empty slug we assume it is the 'home' slug
  const slug = computed(() => {
    if (Array.isArray(route.params.slug)) {
      return route.params.slug.join("/");
    }
    if (route.params.slug === "") return "/home";
    return "";
  });

  const { data } = await useStoryblok({ slug: `cdn/stories/${slug.value}` });

  /**
   * Load bridge only on storyblok editor
   */
  if (process.client && window.location.search.includes("_storyblok")) {
    const { default: useBridge } = await import(
      "~/composables/useStoryblokBridge"
    );
    const { bridgeInstance } = await useBridge();

    bridgeInstance.value.on("input", (inputEvent) => {
      if (data.value) data.value.story = inputEvent.story;
    });
  }

  return { data };
}
