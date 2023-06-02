import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["server/index.js"],
  bundle: true,
  outfile: "server/index.min.mjs",
  format: "esm",
  target: "esnext",
  platform: "node",
  banner: {
    js: `
        import { fileURLToPath } from 'url';
        import { createRequire as topLevelCreateRequire } from 'module';
        const require = topLevelCreateRequire(import.meta.url);
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        `,
  },
});
