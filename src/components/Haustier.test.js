/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import Haustier from "./Haustier.js";
import { render } from "@testing-library/react";
import { StaticRouter } from 'react-router-dom/server';

it("displays a default thumbnail", async () => {
  const haustier = render(<StaticRouter><Haustier /></StaticRouter>);

  const petThumbnail = await haustier.findByTestId("thumbnail");
  expect(petThumbnail.src).toContain("DCI");
});

it("displays a non-default thumbnail", async () => {
  const haustier = render(<StaticRouter><Haustier images={["1.jpg", "2.png", "3.webm"]}/></StaticRouter>);

  const petThumbnail = await haustier.findByTestId("thumbnail");
  expect(petThumbnail.src).toContain("1.jpg");
});