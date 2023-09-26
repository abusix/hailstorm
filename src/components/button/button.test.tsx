import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Button } from "./button";
import { AddIcon } from "../../icons";

describe("Button", () => {
    it("renders a button with text and button type", () => {
        const text = "Button Type";
        // ARRANGE
        render(<Button onClick={() => null}>{text}</Button>);

        // ASSERT
        const button = screen.getByText(text);
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute("type", "button");
    });

    it("renders a button with text and submit type", () => {
        const text = "Submit Type";
        // ARRANGE
        render(
            <Button isSubmitButton onClick={() => null}>
                {text}
            </Button>
        );

        // ASSERT
        const button = screen.getByText(text);
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute("type", "submit");
    });

    it("renders a button with text and left icon", () => {
        const text = "Left icon";
        // ARRANGE
        render(
            <Button LeftIcon={AddIcon} onClick={() => null}>
                {text}
            </Button>
        );

        // ASSERT
        const button = screen.getByText(text);
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute("type", "button");
        expect(button.firstChild?.nodeName.toLowerCase()).toBe("svg");
    });

    it("renders a button with text and right icon", () => {
        const text = "Right icon";
        // ARRANGE
        render(
            <Button RightIcon={AddIcon} onClick={() => null}>
                {text}
            </Button>
        );

        // ASSERT
        const button = screen.getByText(text);
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute("type", "button");
        expect(button.lastChild?.nodeName.toLowerCase()).toBe("svg");
    });

    it("renders a button with text and onClick", () => {
        const text = "Onclick button";
        const mock = vi.fn();
        // ARRANGE
        render(<Button onClick={mock}>{text}</Button>);

        // ASSERT
        const button = screen.getByText(text);
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute("type", "button");
        fireEvent.click(button);
        expect(mock).toHaveBeenCalledTimes(1);
    });

    it("renders a button with text and disabled state", () => {
        const text = "Disabled button";
        const mock = vi.fn();
        // ARRANGE
        render(
            <Button onClick={mock} disabled>
                {text}
            </Button>
        );

        // ASSERT
        const button = screen.getByText(text);
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute("type", "button");
        expect(button).toBeDisabled();
        fireEvent.click(button);
        expect(mock).toHaveBeenCalledTimes(0);
    });

    it("renders a button with text and form", () => {
        const text = "Form button";
        const mock = vi.fn();
        // ARRANGE
        render(
            <Button onClick={mock} form="form-test" isSubmitButton>
                {text}
            </Button>
        );

        // ASSERT
        const button = screen.getByText(text);
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute("type", "submit");
        expect(button).toHaveAttribute("form", "form-test");
    });

    it("renders a button with loading state", () => {
        const text = "Loading button";
        const mock = vi.fn();
        // ARRANGE
        render(
            <Button onClick={mock} loading>
                {text}
            </Button>
        );

        // ASSERT
        const button = screen.getByText(text);
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute("type", "button");
        expect(button.firstChild?.nodeName.toLowerCase()).toBe("svg");
        expect(button.firstChild).toHaveClass("animate-spin");
    });
});
