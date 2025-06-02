import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import stylisticJs from "@stylistic/eslint-plugin";
import globals from "globals";


/** @type {import('eslint').Linter.Config[]} */
export default [
    { "files": ["**/*.{js,mjs,cjs,ts}"] },
    { "ignores": ["dist/**/*.{js,mjs,cjs,ts}", "eslint.config.mjs"] },
    { "languageOptions": { 
        "globals": globals.nodeBuiltin,
        "ecmaVersion": "latest",
        "sourceType": "module",
    }},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    { "plugins": 
    { "@stylistic/js": stylisticJs},
    "rules": {
        "prefer-const": "error",
        "no-with": "error",
        "no-unsafe-optional-chaining": "error",
        "no-unsafe-negation": "error",
        "getter-return": "error",
        "no-var": "error",
        "require-await": "error",
        "yoda": ["warn", "never"],
        "no-unreachable": "warn",
        "no-useless-escape": "warn",
        "valid-typeof": "warn",
        "use-isnan": "warn",
        "no-unused-vars": "off",
        "no-unused-private-class-members": "warn",
        "camelcalse": "off",

        // @typescript-eslint
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/no-duplicate-enum-values": "error",
        "@typescript-eslint/no-array-constructor": "warn",
        "@typescript-eslint/no-empty-object-type": "warn",
        "@typescript-eslint/no-extra-non-null-assertion": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/naming-convention": "error",


        // @stylistic/js
        "@stylistic/js/quotes": ["error", "double"],
        "@stylistic/js/semi": ["error", "always"],
        "@stylistic/js/no-multi-spaces": "error",
        "@stylistic/js/quote-props": ["warn", "always"],
        "@stylistic/js/comma-spacing": ["warn", {"after": true, "before": false}],
        "@stylistic/js/arrow-spacing": ["warn", { "before": true, "after": true }],
        "@stylistic/js/arrow-parens": ["warn", "always"],
        "@stylistic/js/brace-style": ["warn", "1tbs"],
        "@stylistic/js/semi-spacing": ["warn", {"before": false}],
        "@stylistic/js/block-spacing": ["warn", "always"],
        "@stylistic/js/space-before-blocks": ["warn", "always"],
        "@stylistic/js/space-in-parens": ["warn", "never"],
        "@stylistic/js/no-confusing-arrow": "warn",
        "@stylistic/js/no-extra-semi": "warn",
        "@stylistic/js/indent": ["error", 4],
    }}
];