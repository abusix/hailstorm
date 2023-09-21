import { describe, expect, it } from "vitest";
import { getByText, render } from "@testing-library/react";
import React from "react";
import { Alert } from "./alert";

describe("Alert", () => {
    it("renders an alert with a title and children", () => {
        // ARRANGE
        const { getByRole } = render(
            <Alert intent="info" title="Hello">
                World
            </Alert>
        );

        // ASSERT
        const alert = getByRole("alert");
        expect(alert).toBeInTheDocument();
        expect(getByText(alert, "Hello")).toBeInTheDocument();
        expect(getByText(alert, "World")).toBeInTheDocument();
    });
});
