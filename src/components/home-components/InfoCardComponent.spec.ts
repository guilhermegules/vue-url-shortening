import { it } from "vitest";
import { render } from "@testing-library/vue";

import InfoCardComponent from "./InfoCardComponent.vue";

it("Should set a text and title on card based on props", () => {
  const { getByText } = render(InfoCardComponent, {
    props: {
      title: "My title",
      text: "My text",
      icon: "My icon",
    },
  });

  getByText("My title");
  getByText("My text");
});
