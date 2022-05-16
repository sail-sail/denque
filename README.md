# sail_denque

Denque is a well tested, extremely fast and lightweight double-ended queue implementation with zero dependencies and includes TypeScript types.

## usage
```ts
import { assert } from "https://deno.land/std@0.139.0/testing/asserts.ts";
import { Denque } from "https://deno.land/x/sail_denque@v1.0.0/mod.ts";

Deno.test("compile", function() {
  const denque = new Denque([ 1, 2, 3, 4 ]);
  assert(denque.shift(), "1");
  assert(denque.pop(), "4");
});
```
