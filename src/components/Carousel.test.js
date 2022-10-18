/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable no-unused-vars */
/* eslint-disable testing-library/render-result-naming-convention */
import { render, waitFor, cleanup } from "@testing-library/react";
import Carousel from "./Carousel.js";
import { MemoryRouter, Routes, Route } from "react-router-dom";

it("lets users click on thumbnails to make them the hero image", async () => {
  const haustierArray = [
    {
      name: "Aristoteles",
      animal: "Meerschweinchen",
      breed: "Glatthaar",
      id: 1,
      images: ["0.jpg", "1.jpg", "2.jpg", "3.jpg"],
    },
    {
      name: "Leo",
      animal: "Katze",
      breed: "British",
      id: 2,
      images: ["0.png", "1.png"],
    },
    {
      name: "Lady",
      animal: "Hund",
      breed: "Dackel",
      id: 3,
      images: ["0.gif", "1.gif", "2.gif"],
    },
  ];
  for (let j = 0; j < haustierArray.length; j++) {
    const carousel = render(
      <MemoryRouter initialEntries={[`/pictures/${j + 1}`]}>
        <Routes>
          <Route path="/pictures/:id" element={<Carousel haustierArray={haustierArray} />} />
        </Routes>
      </MemoryRouter>
    );

    const images = haustierArray[j].images;

    const hero = await carousel.findByTestId("hero");
    expect(hero.src).toContain(images[0]);

    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const thumb = await carousel.findByTestId(`thumbnail${i}`);
      thumb.click();
      await waitFor(() => {
        expect(hero.src).toContain(image);
        expect(thumb.classList).toContain("active");
      });
    }
    cleanup();
  }
});
