import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";
import {defineConfig, globalIgnores} from "eslint/config";
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
    globalIgnores(['next-env.d.ts', '.next']),
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        plugins: {
            js,
            '@stylistic': stylistic,
        },
        extends: ["js/recommended"],
        languageOptions: {globals: globals.browser},
        rules: {
            "object-curly-spacing": ["error", "never"],
            "no-unused-vars": "error",
            "indent": ["error", 4],
            "comma-spacing": ["error", {"before": false, "after": true}],
            "comma-style": ["error", "last"],
            "comma-dangle": ["error", "always-multiline"],
            "curly": ["error", "multi-line"],
            "arrow-spacing": "error",
            "array-bracket-spacing": ["error", "never"],
            "no-mixed-spaces-and-tabs": "error",
            "no-extra-semi": "error",
            "semi-spacing": ["error", {"before": false, "after": true}],
            "semi-style": ["error", "last"],
            "semi": ["error", "always"],
            "template-curly-spacing": ["error", "never"],
            "no-implied-eval": "off",
            "no-console": ["error", {"allow": ["warn", "error"]}],

            "@typescript-eslint/no-duplicate-enum-values": "error",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-extra-non-null-assertion": "error",
            "@typescript-eslint/no-import-type-side-effects": "error",
            "@typescript-eslint/no-require-imports": "warn",
            "@typescript-eslint/no-var-requires": "error",

            "@stylistic/semi": "error",
            "@stylistic/indent": 'error',
            "@stylistic/eol-last": ["error", "always"],
        },
    },
    tseslint.configs.recommended,
    // pluginReact.configs.flat.recommended,
]);
