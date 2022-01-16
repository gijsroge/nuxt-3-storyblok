import { useFetch } from "#app";

export default async function ({ slug }: { slug: string }) {
  const config = useRuntimeConfig();
  return useFetch(
    `https://api.storyblok.com/v2/${slug}?token=${config.VITE_STORYBLOK_TOKEN}`
  );
}
