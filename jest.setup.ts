import { main } from "./src/server";

async function setUp(globalConfig, projectConfig) {
  // return __awaiter(this, void 0, void 0, function* () {
  // console.log({ globalConfig, projectConfig });
  // globalThis.__MONGOD__ = await globalThis.__MONGOD__.start();
  // (globalThis as any).__THIS_SERVER__ = "serverThis";
  (global as any).__SERVER__ = yield main();
  // Set reference to mongod in order to close the server during teardown.
  // globalThis.__MONGOD__ = mongod;
  // });
}
export default setUp;
