import { it } from "vitest";
import { render } from "@testing-library/vue";

import FooterComponent from "./FooterComponent.vue";

it("Should have three subtitles", () => {
  const { getByText } = render(FooterComponent);

  getByText("Features");
  getByText("Resources");
  getByText("Company");
});
