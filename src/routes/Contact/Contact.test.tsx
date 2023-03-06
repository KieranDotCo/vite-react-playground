import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "./Contact";
import { vi } from "vitest";

describe("Contact", () => {
  beforeEach(() => {
    vi.spyOn(window, "alert").mockImplementation(() => {});
    render(<Contact />);
  });

  it("should on submit show validation errors", async () => {
    userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(await screen.findByText(/name is required/i)).toBeDefined();
    expect(await screen.findByText(/email is required/i)).toBeDefined();
  });

  it("should on valid submit call alert", async () => {
    await userEvent.type(screen.getByLabelText(/name/i), "Kieran");
    await userEvent.type(screen.getByLabelText(/email/i), "kieran@scibite.com");
    await userEvent.type(
      screen.getByLabelText(/website/i),
      "https://scibite.com"
    );

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(window.alert).toHaveBeenCalled();
  });
});
