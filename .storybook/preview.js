import "./style.css"
import theme from './theme';
const customViewports = {
  small: {
    name: 'small',
    styles: {
      width: '360px',
      height: '640px',
    },
  },
  medium480: {
    name: 'medium 480p',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  medium720: {
    name: 'medium 720p',
    styles: {
      width: '1366px',
      height: '768px',
    },
  },
  large: {
    name: 'large',
    styles: {
      width: '1440px',
      height: '900px',
    },
  },
  xlarge: {
    name: 'xlarge 1080p',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  xxlarge: {
    name: 'xxlarge',
    styles: {
      width: '2560px',
      height: '900px',
    },  
  },
};


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  viewport: {
    viewports: customViewports
  },
  layout: 'fullscreen',
  docs: {
    theme: theme,
  },
}

