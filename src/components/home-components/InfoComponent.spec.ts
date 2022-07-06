import { it } from "vitest";
import { render } from "@testing-library/vue";

import InfoComponent from "./InfoComponent.vue";

it("Should have a title, description and card info on component", () => {
  const { getByText } = render(InfoComponent);

  getByText("Advanced Statistics");
  getByText(
    "Track how your links are performing across the web with our advanced statistics dash board"
  );
  getByText("Brand Recognition");
  getByText("Detailed Records");
  getByText("Fully Customizable");
  getByText("Boost your links today");
  getByText("Get Started");
});
