import type { Meta, StoryObj } from "@storybook/react";

import { Dialog } from "./dialog";
import { Button } from "../button/button";
import React from "react";

const meta: Meta<typeof Dialog> = {
  title: "Dialog",
  component: Dialog,
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <div>
      <h1 className="headline-500">Here is something in the background</h1>

      <Dialog isShown title="Title">
        Content
      </Dialog>
    </div>
  ),
};
export const CornerDialog: Story = {
  render: () => (
    <Dialog isShown title="Title" position="bottom-right" hasBackground={false}>
      Content
    </Dialog>
  ),
};
export const DefaultLongerText: Story = {
  render: () => (
    <Dialog isShown title="Title">
      Content
    </Dialog>
  ),
};

export const CustomFooter = () => {
  const title = "Title";
  const description = "Description";

  const [modalOpened, setModalOpened] = React.useState(false);

  const handleModalClose = () => {
    setModalOpened(false);
  };

  const handleSubmit = () => {
    alert("Modal was submitted");
    handleModalClose();
  };

  return (
    <>
      <Button type="primary" onClick={() => setModalOpened(true)}>
        Open Modal
      </Button>

      <Dialog
        isShown={modalOpened}
        title={title}
        onClose={handleModalClose}
        footer={
          <>
            <Button type="minimal" onClick={() => handleModalClose()}>
              Cancel
            </Button>

            <Button type="danger" onClick={() => handleSubmit()}>
              Delete this element
            </Button>
          </>
        }
      >
        {description}
      </Dialog>
    </>
  );
};
