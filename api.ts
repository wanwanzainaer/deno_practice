import { Router } from "./dept.ts";
import * as planets from "./models/planets.ts";
const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello world";
});
router.get("/planets", (ctx) => {
  ctx.response.body = planets.getAllPlanets();
});

export default router;
