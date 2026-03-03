import { render, screen, act, cleanup } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { ThemeProvider } from "./theme-provider";
import { useTheme } from "./use-theme";

const TestComponent = () => {
    const { theme, resolvedTheme, setTheme } = useTheme();
    return (
        <div>
            <span data-testid="theme">{theme}</span>
            <span data-testid="resolved">{resolvedTheme}</span>
            <button onClick={() => setTheme("dark")}>Set Dark</button>
            <button onClick={() => setTheme("light")}>Set Light</button>
            <button onClick={() => setTheme("system")}>Set System</button>
        </div>
    );
};

// Mock matchMedia
const mockMatchMedia = (matches: boolean) => {
    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: vi.fn().mockImplementation((query: string) => ({
            matches,
            media: query,
            onchange: null,
            addListener: vi.fn(),
            removeListener: vi.fn(),
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
        })),
    });
};

describe("ThemeProvider", () => {
    beforeEach(() => {
        localStorage.clear();
        document.documentElement.classList.remove("light", "dark");
        mockMatchMedia(false); // Default to light mode for system preference
    });

    afterEach(() => {
        cleanup();
    });

    it("renders children", () => {
        render(
            <ThemeProvider>
                <div data-testid="child">Hello</div>
            </ThemeProvider>
        );
        expect(screen.getByTestId("child")).toBeInTheDocument();
    });

    it("defaults to system theme", () => {
        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>
        );
        expect(screen.getByTestId("theme")).toHaveTextContent("system");
    });

    it("applies light class when theme is light", () => {
        render(
            <ThemeProvider defaultTheme="light">
                <TestComponent />
            </ThemeProvider>
        );
        expect(document.documentElement.classList.contains("light")).toBe(true);
        expect(screen.getByTestId("resolved")).toHaveTextContent("light");
    });

    it("applies dark class when theme is dark", () => {
        render(
            <ThemeProvider defaultTheme="dark">
                <TestComponent />
            </ThemeProvider>
        );
        expect(document.documentElement.classList.contains("dark")).toBe(true);
        expect(screen.getByTestId("resolved")).toHaveTextContent("dark");
    });

    it("allows changing theme", async () => {
        render(
            <ThemeProvider defaultTheme="light">
                <TestComponent />
            </ThemeProvider>
        );

        await act(async () => {
            screen.getByText("Set Dark").click();
        });

        expect(screen.getByTestId("theme")).toHaveTextContent("dark");
        expect(document.documentElement.classList.contains("dark")).toBe(true);
    });

    it("persists theme to localStorage", async () => {
        render(
            <ThemeProvider defaultTheme="light" storageKey="test-theme">
                <TestComponent />
            </ThemeProvider>
        );

        await act(async () => {
            screen.getByText("Set Dark").click();
        });

        expect(localStorage.getItem("test-theme")).toBe("dark");
    });
});

describe("useTheme", () => {
    beforeEach(() => {
        mockMatchMedia(false);
    });

    afterEach(() => {
        cleanup();
    });

    it("throws when used outside ThemeProvider", () => {
        const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

        expect(() => render(<TestComponent />)).toThrow(
            "useTheme must be used within a ThemeProvider"
        );

        consoleError.mockRestore();
    });
});
