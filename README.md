# Using `jest` to start a server for its testing

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
