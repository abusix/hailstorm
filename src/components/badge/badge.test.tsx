import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { Badge } from "./badge";

describe("Badge", () => {
    it("renders a badge with default appearance and passed string", () => {
        const text = "Default Badge";
        // ARRANGE
        render(<Badge>{text}</Badge>);

        // ASSERT
        const badge = screen.getByText(text);
        expect(badge).toBeInTheDocument();
        expect(badge).toHaveAttribute("role", "button");
        expect(badge).toHaveClass("rounded");
    });

    it("renders a badge with rounded appearance and passed string", () => {
        const text = "Rounded Badge";
        // ARRANGE
        render(<Badge shape="rounded">{text}</Badge>);

        // ASSERT
        const badge = screen.getByText(text);
        expect(badge).toBeInTheDocument();
        expect(badge).toHaveAttribute("role", "button");
        expect(badge).toHaveClass("rounded-full");
    });
});
