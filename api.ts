import { Router } from "./dept.ts";
import * as planets from "./models/planets.ts";
import * as launches from "./models/lanuches.ts";
const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello world";
});
router.get("/planets", (ctx) => {
  // ctx.throw(501, "sorry  planets arent ");
  ctx.response.body = planets.getAllPlanets();
});

router.get("/launches", (ctx) => {
  ctx.response.body = launches.getAll();
});
router.get("/launches/:id", (ctx) => {
  if (ctx.params?.id) {
    const launchesList = ctx.response.body = launches.getOne(
      Number(ctx.params.id),
    );
    if (launchesList) {
      ctx.response.body = launchesList;
    } else {
      ctx.throw(400, "Launch Id doesnt exist");
    }
  }
});

router.post("/launches", async (ctx) => {
  const body = await ctx.request.body();

  launches.addOne(body.value);
  ctx.response.body = { success: true };
  ctx.response.status = 201;
});

router.delete("/launches/:id", async (ctx) => {
  if (ctx.params?.id) {
    const result = launches.removeOne(Number(ctx.params.id));
    ctx.response.body = { success: result };
  } else {
  }
});
export default router;
