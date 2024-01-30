import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { TableUnvirtualized } from "../components/table-unvirtualized/table-unvirtualized";

const meta: Meta = {
    title: "Global CSS Style Classes",
};

export default meta;
type Story = StoryObj<object>;

export const Headlines: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <h3 className="headline-700">Headline Styles</h3>

            <TableUnvirtualized>
                <TableUnvirtualized.Header>
                    <TableUnvirtualized.Header.Row>
                        <TableUnvirtualized.Header.Cell>ClassName</TableUnvirtualized.Header.Cell>
                        <TableUnvirtualized.Header.Cell>Example</TableUnvirtualized.Header.Cell>
                    </TableUnvirtualized.Header.Row>
                </TableUnvirtualized.Header>

                <TableUnvirtualized.Body>
                    <TableUnvirtualized.Body.Row>
                        <TableUnvirtualized.Body.Cell>
                            <pre>headline-100</pre>
                        </TableUnvirtualized.Body.Cell>
                        <TableUnvirtualized.Body.Cell>
                            <h1 className="headline-100">
                                The quick brown fox jumps over the lazy dog
                            </h1>
                        </TableUnvirtualized.Body.Cell>
                    </TableUnvirtualized.Body.Row>

                    <TableUnvirtualized.Body.Row>
                        <TableUnvirtualized.Body.Cell>
                            <pre>headline-200</pre>
                        </TableUnvirtualized.Body.Cell>
                        <TableUnvirtualized.Body.Cell>
                            <h1 className="headline-200">
                                The quick brown fox jumps over the lazy dog
                            </h1>
                        </TableUnvirtualized.Body.Cell>
                    </TableUnvirtualized.Body.Row>

                    <TableUnvirtualized.Body.Row>
                        <TableUnvirtualized.Body.Cell>
                            <pre>headline-300</pre>
                        </TableUnvirtualized.Body.Cell>
                        <TableUnvirtualized.Body.Cell>
                            <h1 className="headline-300">
                                The quick brown fox jumps over the lazy dog
                            </h1>
                        </TableUnvirtualized.Body.Cell>
                    </TableUnvirtualized.Body.Row>

                    <TableUnvirtualized.Body.Row>
                        <TableUnvirtualized.Body.Cell>
                            <pre>headline-400</pre>
                        </TableUnvirtualized.Body.Cell>
                        <TableUnvirtualized.Body.Cell>
                            <h1 className="headline-400">
                                The quick brown fox jumps over the lazy dog
                            </h1>
                        </TableUnvirtualized.Body.Cell>
                    </TableUnvirtualized.Body.Row>

                    <TableUnvirtualized.Body.Row>
                        <TableUnvirtualized.Body.Cell>
                            <pre>headline-500</pre>
                        </TableUnvirtualized.Body.Cell>
                        <TableUnvirtualized.Body.Cell>
                            <h1 className="headline-500">
                                The quick brown fox jumps over the lazy dog
                            </h1>
                        </TableUnvirtualized.Body.Cell>
                    </TableUnvirtualized.Body.Row>

                    <TableUnvirtualized.Body.Row>
                        <TableUnvirtualized.Body.Cell>
                            <pre>headline-600</pre>
                        </TableUnvirtualized.Body.Cell>
                        <TableUnvirtualized.Body.Cell>
                            <h1 className="headline-600">
                                The quick brown fox jumps over the lazy dog
                            </h1>
                        </TableUnvirtualized.Body.Cell>
                    </TableUnvirtualized.Body.Row>

                    <TableUnvirtualized.Body.Row>
                        <TableUnvirtualized.Body.Cell>
                            <pre>headline-700</pre>
                        </TableUnvirtualized.Body.Cell>
                        <TableUnvirtualized.Body.Cell>
                            <h1 className="headline-700">
                                The quick brown fox jumps over the lazy dog
                            </h1>
                        </TableUnvirtualized.Body.Cell>
                    </TableUnvirtualized.Body.Row>

                    <TableUnvirtualized.Body.Row>
                        <TableUnvirtualized.Body.Cell>
                            <pre>headline-800</pre>
                        </TableUnvirtualized.Body.Cell>
                        <TableUnvirtualized.Body.Cell>
                            <h1 className="headline-800">
                                The quick brown fox jumps over the lazy dog
                            </h1>
                        </TableUnvirtualized.Body.Cell>
                    </TableUnvirtualized.Body.Row>

                    <TableUnvirtualized.Body.Row>
                        <TableUnvirtualized.Body.Cell>
                            <pre>headline-900</pre>
                        </TableUnvirtualized.Body.Cell>
                        <TableUnvirtualized.Body.Cell>
                            <h1 className="headline-900">
                                The quick brown fox jumps over the lazy dog
                            </h1>
                        </TableUnvirtualized.Body.Cell>
                    </TableUnvirtualized.Body.Row>
                </TableUnvirtualized.Body>
            </TableUnvirtualized>
        </div>
    ),
};

export const Paragraphs: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <h3 className="headline-700">Paragraph Styles</h3>

            <TableUnvirtualized>
                <TableUnvirtualized.Header>
                    <TableUnvirtualized.Header.Row>
                        <TableUnvirtualized.Header.Cell>ClassName</TableUnvirtualized.Header.Cell>
                        <TableUnvirtualized.Header.Cell>Example</TableUnvirtualized.Header.Cell>
                    </TableUnvirtualized.Header.Row>
                </TableUnvirtualized.Header>

                <TableUnvirtualized.Body>
                    <TableUnvirtualized.Body.Row>
                        <TableUnvirtualized.Body.Cell>
                            <pre>paragraph-100</pre>
                        </TableUnvirtualized.Body.Cell>
                        <TableUnvirtualized.Body.Cell>
                            <p className="paragraph-100">
                                The quick brown fox jumps over the lazy dog
                            </p>
                        </TableUnvirtualized.Body.Cell>
                    </TableUnvirtualized.Body.Row>

                    <TableUnvirtualized.Body.Row>
                        <TableUnvirtualized.Body.Cell>
                            <pre>paragraph-200</pre>
                        </TableUnvirtualized.Body.Cell>
                        <TableUnvirtualized.Body.Cell>
                            <p className="paragraph-200">
                                The quick brown fox jumps over the lazy dog
                            </p>
                        </TableUnvirtualized.Body.Cell>
                    </TableUnvirtualized.Body.Row>

                    <TableUnvirtualized.Body.Row>
                        <TableUnvirtualized.Body.Cell>
                            <pre>paragraph-300</pre>
                        </TableUnvirtualized.Body.Cell>
                        <TableUnvirtualized.Body.Cell>
                            <p className="paragraph-300">
                                The quick brown fox jumps over the lazy dog
                            </p>
                        </TableUnvirtualized.Body.Cell>
                    </TableUnvirtualized.Body.Row>
                </TableUnvirtualized.Body>
            </TableUnvirtualized>
        </div>
    ),
};

export const InlineLink: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <h3 className="headline-700 font-mono">inline-link</h3>

            <p className="paragraph-200">
                <a href="https://abusix.com" className="inline-link">
                    Be or not to be,
                </a>{" "}
                that is the question: Whether ’tis nobler in the mind to suffer The slings and
                arrows of outrageous fortune, …
            </p>
        </div>
    ),
};
