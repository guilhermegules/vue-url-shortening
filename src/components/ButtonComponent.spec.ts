import { it } from "vitest";
import { render } from "@testing-library/vue";

import ButtonComponent from "./ButtonComponent.vue";

it("Should set a text on button based on text prop", () => {
  const { getByText } = render(ButtonComponent, {
    props: { text: "My button" },
  });

  getByText("My button");
});
