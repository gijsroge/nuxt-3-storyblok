export default defineNuxtPlugin(({ ssrContext }) => {
  const router = useRouter();
  if (process.server && ssrContext) {
    const { res, url } = ssrContext;
    if (url === "/") {
      res.writeHead(302, {
        Location: "/nl",
      });
      res.end();
    }
  } else if (process.client) {
    router.beforeEach((to, _, next) => {
      if (to.path === "/") {
        return next("/nl");
      }

      return next();
    });
  }
});
