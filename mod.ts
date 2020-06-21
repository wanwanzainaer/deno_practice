import { Application } from "./dept.ts";
const app = new Application();
const PORT = 9000;

app.use((ctx) => {
  ctx.response.body = "Hello world";
});

if (import.meta.main) {
  app.listen({ port: PORT });
}
