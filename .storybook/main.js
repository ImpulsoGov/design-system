module.exports = {
  "stories": [
    "../componentes/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-css-modules",
    "@chromatic-com/storybook"
  ],

  "framework": {
    name: "@storybook/nextjs",
    options: {}
  },

  features: {
    postcss: false,
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
}