import { it } from "vitest";
import { render } from "@testing-library/vue";

import HeaderComponent from "./HeaderComponent.vue";

it("Should have a subtitle on header component", () => {
  const { getByText } = render(HeaderComponent);

  getByText("More than just shorter links");
});
