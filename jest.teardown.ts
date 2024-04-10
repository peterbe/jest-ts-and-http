import { type Config } from "@jest/types";

async function tearDown(
  globalConfig: Config.GlobalConfig,
  projectConfig: Config.ProjectConfig
) {
  // console.log({ globalConfig, projectConfig });
  const server = (global as any).__SERVER__;
  server.close();
}
export default tearDown;
