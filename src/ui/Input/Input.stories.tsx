/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/await-thenable */
import { Input } from ".";
import { within, userEvent } from "@storybook/testing-library";

export default {
  title: "Input",
  component: Input,
};

export const Default = {
  args: {
    text: "Input",
  },
};

export const Placeholder = {
  args: {
    placeholder: "Type something",
  },
};

export const Email = {
  args: {
    placeholder: "email@email.com",
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement as HTMLElement);

    const emailInput = canvas.getByPlaceholderText("email@email.com");

    await userEvent.click(emailInput);
    await userEvent.type(emailInput, "dima@dima.com");
  },

  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};
