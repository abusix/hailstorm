import { describe, expect, it } from "vitest";
import { getByText, render, screen } from "@testing-library/react";
import React from "react";
import { Avatar } from "./avatar";

describe("Avatar", () => {
    it("renders an avatar with substring of child", () => {
        // ARRANGE
        render(<Avatar color="primary">Test User</Avatar>);

        // ASSERT
        const alert = screen.getByRole("button");
        expect(alert).toBeInTheDocument();
        expect(getByText(alert, "Te")).toBeInTheDocument();
    });
});
