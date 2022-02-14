export default function ({ component }: { component: string }) {
  const components = import.meta.glob("../components/*.vue");
  const resolvedComponent = components[`../components/${component}.vue`];

  if (resolvedComponent) return defineAsyncComponent(resolvedComponent);
  return defineAsyncComponent(components[`../components/_missing.vue`]);
}
