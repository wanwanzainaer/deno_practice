import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std/testing/asserts.ts";
import { filterHabitablePlanets } from "./models/planets.ts";
const HABIITABLE_PLANET = {
  koi_prad: "1",
  koi_smass: "1",
  koi_srad: "1",
  koi_disposition: "CONFIRMED",
};
const NOT_CONFIRMED = {
  koi_disposition: "FALSEPOSITIVE",
};

const TOO_LAGE_PLANETRAY = {
  koi_prad: "1.5",
  koi_smass: "1",
  koi_srad: "1",
  koi_disposition: "CONFIRMED",
};
const TOO_LAGE_SOLAR_RADIUS = {
  koi_prad: "1",
  koi_smass: "1",
  koi_srad: "1.01",
  koi_disposition: "CONFIRMED",
};

const TOO_LAGE_SOLAR_MASS = {
  koi_prad: "1",
  koi_smass: "1.04",
  koi_srad: "1",
  koi_disposition: "CONFIRMED",
};

Deno.test("Filter only habitable plaents", () => {
  const filtered = filterHabitablePlanets([
    HABIITABLE_PLANET,
    NOT_CONFIRMED,
    TOO_LAGE_PLANETRAY,
    TOO_LAGE_SOLAR_RADIUS,
    TOO_LAGE_SOLAR_MASS,
  ]);
  assertEquals(filtered, [HABIITABLE_PLANET]);
  assertNotEquals({ runtime: "deno" }, { runtime: "node" });
});
// Deno.test({
//   name: "example test",
//   fn() {
//     assertEquals("deno", "deno");
//     assertNotEquals({ runtime: "deno" }, { runtime: "node" });
//   },
// });
