export default function ({ component }: { component: string }) {
  const components = import.meta.glob("../components/*.vue");
  return defineAsyncComponent(components[`../components/${component}.vue`]);
}
