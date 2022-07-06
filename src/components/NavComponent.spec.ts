import { it } from "vitest";
import { render } from "@testing-library/vue";
import NavComponent from "./NavComponent.vue";

it("should have a title with Shortly text", () => {
  const { getByText } = render(NavComponent);

  getByText("Shortly");
});
