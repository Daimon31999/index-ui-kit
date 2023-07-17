import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const MY_VIEWPORTS = {
  FHD: {
    name: "FHD - 1800px",
    styles: {
      width: "1900px",
      height: "1080px",
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
