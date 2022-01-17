export default defineNuxtPlugin(({ ssrContext }) => {
  if (process.server && ssrContext) {
    const { res, url } = ssrContext;
    if (url === "/") {
      res.writeHead(302, {
        Location: "/nl",
      });
      res.end();
    }
  } else if (process.client) {
    const router = useRouter();
    router.beforeEach((to, _, next) => {
      if (to.path === "/") {
        return next("/nl");
      }

      return next();
    });
  }
});
