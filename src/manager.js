import * as path from "path";
const __dirname = process.cwd();
/**
 * A class that handles loading and setup of a server adapter based on a configuration file.
 */
export class $Manager {
  #onload;
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
