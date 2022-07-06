import { afterAll, afterEach, beforeAll, it } from "vitest";
import { fireEvent, render, waitFor } from "@testing-library/vue";
import { rest } from "msw";
import { setupServer } from "msw/node";

import ShorteningUrlFormComponent from "./ShorteningUrlFormComponent.vue";

export const mockServer = setupServer(
  rest.get("https://api.shrtco.de/v2/shorten", (request, response, context) => {
    return response(
      context.json({
        result: {
          short_link: "https://shorten.com",
        },
      })
    );
  })
);

beforeAll(() => mockServer.listen());
afterEach(() => mockServer.resetHandlers());
afterAll(() => mockServer.close());

it("Should get value from server and short link", async () => {
  const { getByText, getByTestId } = render(ShorteningUrlFormComponent);

  const shorteningInput = getByTestId("shortening-input");

  await fireEvent.update(shorteningInput, "https://github.com/");

  const shorteningButton = getByTestId("shortening-button");

  await fireEvent.click(shorteningButton);

  waitFor(() => {
    getByText("https://github.com/");
    getByText("https://shorten.com");
  });
});
