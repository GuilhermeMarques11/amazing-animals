import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
];

module.exports = {
  extends: "airbnb-base",
  env: {
    browser: true,
  },
};