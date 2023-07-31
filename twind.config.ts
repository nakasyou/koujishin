import { Options } from "$fresh/plugins/twindv1.ts";

import { defineConfig, Preset } from "@twind/core";
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.1.4";

export default {
  ...defineConfig({
    presets: [presetTailwind() as Preset],
  }),
  selfURL: import.meta.url,
} as Options;
