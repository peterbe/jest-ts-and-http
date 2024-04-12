import { type Config } from "@jest/types";
import { main } from "./server";

async function setUp(
  globalConfig: Config.GlobalConfig,
  projectConfig: Config.ProjectConfig
) {
  (global as any).__SERVER__ = await main();
}
export default setUp;
