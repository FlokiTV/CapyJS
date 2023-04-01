const Config = {
  adapter: {
    path: "./adapters/geckos/index.js",
    options: {
      port: 3000,
    },
  },
  tick: {
    fps: 30,
    autoStart: true,
  },
  script: "./examples/simple-events.js",
};

export default Config;
