import React from "react";
import { render } from "@testing-library/react";

import TestButton from "./TestButton";

describe("TestButton", () => {
  test("renders the TestButton component", () => {
    render(<TestButton variant="danger" label="Hello world!" />);
  });
});
