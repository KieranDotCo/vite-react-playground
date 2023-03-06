import { render, screen } from "@testing-library/react";
import Paths from "../../routes/Paths";
import TestWrapper from "../../test/TestWrapper";
import NavBar from "./NavBar";

describe("NavBar", () => {
  it("should add active to Home", () => {
    render(
      <TestWrapper path={Paths.home}>
        <NavBar />
      </TestWrapper>
    );

    expect(
      screen.getByRole("link", { name: /home/i }).classList.contains("active")
    ).toBeTruthy();
  });

  it("should add active to Contact", () => {
    render(
      <TestWrapper path={Paths.contact}>
        <NavBar />
      </TestWrapper>
    );

    expect(
      screen.getByRole("link", { name: /contact/i }).classList.contains("active")
    ).toBeTruthy();
  });
});
