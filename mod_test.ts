import { assert } from "https://deno.land/std@0.139.0/testing/asserts.ts";
import { Denque } from "./mod.ts";

Deno.test("compile", function() {
  const denque = new Denque([ 1, 2, 3, 4 ]);
  assert(denque.shift(), "1");
  assert(denque.pop(), "4");
});
