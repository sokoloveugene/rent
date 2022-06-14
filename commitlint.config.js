module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "revert"],
    ],
    "scope-enum": [
      2,
      "always",
      ["core", "ui-components", "settings", "styles"],
    ],
  },
};
