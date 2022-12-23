module.exports = {
  "stories": [
    "../docs/**/*.stories.mdx",
    "../docs/**/*.stories.js",
    "../componentes/**/*.stories.mdx",
    "../componentes/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-css-modules"
  ],
  "framework": "@storybook/react"
}