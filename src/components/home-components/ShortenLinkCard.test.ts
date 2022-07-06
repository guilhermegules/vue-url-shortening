import { it } from "vitest";
import { render } from "@testing-library/vue";

import ShortenLinkCard from "./ShortenLinkCard.vue";

it("Should set link and short link based on props", () => {
  const { getByText } = render(ShortenLinkCard, {
    props: {
      originalLink: "https://github.com",
      shortenLink: "https://shorten.com",
    },
  });

  getByText("https://github.com");
  getByText("https://shorten.com");
});
