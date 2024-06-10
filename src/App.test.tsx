// DateInput.test.tsx
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { DateInput } from "Components/DonationBox/DateInput";
import { AmountInput } from "Components/DonationBox/AmountInput";
import { getMonthName } from "utils";

/* write me test cases for the DateInput component */
const mockStore = configureStore([]);
const store = mockStore({
  donation: {
    amount: "",
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  },
});

describe("DateInput", () => {
  it("disables the decrement button if the date is in the past", () => {
    render(
      <Provider store={store}>
        <DateInput />
      </Provider>
    );

    const leftButton = screen.getByRole("button", { name: /previous month/i });
    expect(leftButton).toBeInTheDocument();
    expect(leftButton).toBeDisabled();
  });

  it("check if increment button exist", () => {
    render(
      <Provider store={store}>
        <DateInput />
      </Provider>
    );

    const rightButton = screen.getByRole("button", { name: /next month/i });
    expect(rightButton).toBeInTheDocument();
  });

  it("check if display date correctly", () => {
    const currentDate = new Date();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const monthName = getMonthName(month);

    render(
      <Provider store={store}>
        <DateInput />
      </Provider>
    );
    const monthElement = screen.getByLabelText("current month");
    const yearElement = screen.getByText(year);
    expect(monthElement.textContent).toBe(monthName);
    expect(yearElement).toBeInTheDocument();
    expect(yearElement.textContent).toBe(year.toString());
  });
});

describe("AmountInput", () => {
  it("should format the input value correctly", () => {
    render(
      <Provider store={store}>
        <AmountInput />
      </Provider>
    );

    const input = screen.getByLabelText("donation amount");
    fireEvent.change(input, { target: { value: "12345" } });
    expect(input).toHaveValue("12,345");
  });

  it("should format the input decimal value correctly", () => {
    render(
      <Provider store={store}>
        <AmountInput />
      </Provider>
    );

    const input = screen.getByLabelText("donation amount");
    fireEvent.change(input, { target: { value: "12222.23" } });
    expect(input).toHaveValue("12,222.23");
  });

  it("should format the input maxium value value correctly", () => {
    render(
      <Provider store={store}>
        <AmountInput />
      </Provider>
    );

    const input = screen.getByLabelText("donation amount");
    fireEvent.change(input, { target: { value: "100123" } });
    expect(input).toHaveValue("100,000");
  });
});
