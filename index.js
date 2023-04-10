#! /usr/bin/env node
import { $Manager } from "./src/index.js";
const $ = new $Manager();

$.onload(() => {
  console.log("[capy:manager] server ready");
});

export const $Server = $.server;
export { $State, $Ticker } from "./src/index.js";
