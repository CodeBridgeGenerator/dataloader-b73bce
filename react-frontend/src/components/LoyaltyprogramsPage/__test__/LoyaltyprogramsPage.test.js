import React from "react";
import { render, screen } from "@testing-library/react";

import LoyaltyprogramsPage from "../LoyaltyprogramsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders loyaltyprograms page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <LoyaltyprogramsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("loyaltyprograms-datatable")).toBeInTheDocument();
    expect(screen.getByRole("loyaltyprograms-add-button")).toBeInTheDocument();
});
