module.exports = {
  "stories": [
    "../componentes/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-css-modules",
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook",
    "@storybook/addon-mdx-gfm"
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