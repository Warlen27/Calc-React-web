import React from "react";

import { render, within, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Test calculator", () => {
  beforeEach(() => render(<App />));

  const setClickButton = (name: RegExp) =>
    userEvent.click(
      screen.getByRole("button", {
        name,
      })
    );
  const ValueIntodisplay = (value: RegExp) => {
    const contentinfo = screen.getByRole("contentinfo");

    within(contentinfo).getByText(value);
  };

  it("Enter a number and it appears on the display", () => {
    expect(ValueIntodisplay(/0/i));

    setClickButton(/7/i);
    expect(ValueIntodisplay(/7/i));
  });
  it("Enter a number of numbers and click on the AC, the display should return to 0", () => {
    expect(ValueIntodisplay(/0/i));
    setClickButton(/7/i);
    setClickButton(/7/i);
    setClickButton(/7/i);

    setClickButton(/AC/i);
    expect(ValueIntodisplay(/0/i));
  });
  it("Enter a number number and click on the DEL, the number on the display should decrease one", () => {
    expect(ValueIntodisplay(/0/i));
    setClickButton(/7/i);
    setClickButton(/7/i);
    setClickButton(/7/i);
    setClickButton(/DEL/i);
    expect(ValueIntodisplay(/77/i));
  });
  it("Test subtraction", () => {
    expect(ValueIntodisplay(/0/i));
    setClickButton(/1/i);
    setClickButton(/0/i);
    setClickButton(/-/i);
    setClickButton(/8/i);
    setClickButton(/=/i);
    expect(ValueIntodisplay(/2/i));
  });
  it("Test split", () => {
    expect(ValueIntodisplay(/0/i));
    setClickButton(/9/i);
    userEvent.click(
      screen.getByRole("button", {
        name: "/",
      })
    );
    setClickButton(/3/i);
    setClickButton(/=/i);
    expect(ValueIntodisplay(/3/i));
  });
  it("Test multiplication", () => {
    expect(ValueIntodisplay(/0/i));
    setClickButton(/1/i);
    setClickButton(/0/i);
    userEvent.click(
      screen.getByRole("button", {
        name: "*",
      })
    );
    setClickButton(/8/i);
    setClickButton(/=/i);
    expect(ValueIntodisplay(/80/i));
  });
  it("Test sum", () => {
    expect(ValueIntodisplay(/0/i));
    setClickButton(/1/i);
    setClickButton(/0/i);
    setClickButton(/\+/i);
    setClickButton(/8/i);
    setClickButton(/=/i);
    expect(ValueIntodisplay(/18/i));
  });
  it("Test point.", () => {
    expect(ValueIntodisplay(/0/i));
    setClickButton(/\./i);
    setClickButton(/2/i);
    setClickButton(/\+/i);
    setClickButton(/0/i);
    setClickButton(/\./i);
    setClickButton(/2/i);
    setClickButton(/=/i);
    expect(ValueIntodisplay(/0.4/i));
  });
  it("Test percentage", () => {
    expect(ValueIntodisplay(/0/i));
    setClickButton(/1/i);
    setClickButton(/0/i);
    setClickButton(/0/i);
    setClickButton(/-/i);
    setClickButton(/9/i);
    setClickButton(/0/i);
    setClickButton(/%/i);

    setClickButton(/=/i);
    expect(ValueIntodisplay(/10/i));
  });
});
