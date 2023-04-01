import * as path from "path";
import { $Ticker } from "./index.js";
const __dirname = process.cwd();
/**
 * A class that handles loading and setup of a server adapter based on a configuration file.
 */
export class $Manager {
  #onload;
  tick;
  /** @type {import("./adapters").$Server} server*/
  server;
  /**
   * Creates a new instance of the Manager class and reads in the configuration file.
   */
  constructor() {
    console.log("[mp:manager] reading config");
    let cfgPath = path.join(__dirname, "config.mjs");
    import(`file://${cfgPath}`).then(async (e) => {
      let config = e.default;
      this.config = config;
      let adapterPath = path.join(__dirname, config.adapter.path);
      let scriptPath = path.join(__dirname, config.script);
      const { Server } = await import(`file://${adapterPath}`);
      this.server = new Server(config.adapter.options);
      await this.server.setup(scriptPath);
      this.server.listen();
      if (this.server.onInit) this.server.onInit(this.server);
      if (this.server.onTick) {
        let tick = this.config.tick || false;
        this.tick = new $Ticker(tick.fps || 60, tick.autoStart || true);
        this.tick.onTick(this.server.onTick);
      }
      if (this.#onload) this.#onload();
    });
  }

  /**
   * Sets a callback function to be executed after the initial setup has completed.
   * @param {Function} callback - The callback function to execute.
   */
  onload(callback) {
    this.#onload = callback;
  }
}
