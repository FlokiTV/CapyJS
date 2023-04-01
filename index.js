// import "./lib/express.js";
import { $Manager } from "./src/index.js";

const $ = new $Manager();

$.onload(() => {
  console.log("Server ready");
});
export const $Server = $.server;
export { $State, $Ticker } from "./src/index.js";
