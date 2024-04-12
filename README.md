# Using `jest` to start a server for its testing

> [!TIP]
> See also: <https://github.com/peterbe/vitest-ts-and-http> which is very much
what this repo contrasts itself with

This is a simulation where you have end-to-end tests that use HTTP
as part of its tests.
This is useful when you don't want to *unit test* the server but instead
treat it bit more like a **black box**. The tests look like this:

```js
  const r = await fetch("http://localhost:3000");
  expect(r.status).toBe(200);
```

What the `jest` config does is that it starts that server for you when
the tests begin. One server, multiple tests. When all tests have run
(successful or not) it closes the server.

## To play

To manually run the server:

```shell
npm run start
```

You have to Ctrl-C kill it yourself.

## To test

Just run:

```shell
npm run test
```

You'll see:

```shell
❯ npm run test

> jest-and-ts@1.0.0 test
> jest

Server running at http://127.0.0.1:3000/
 PASS  src/server.test.ts
 PASS  src/server-failures.test.ts

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.912 s, estimated 2 s
Ran all test suites.
```
