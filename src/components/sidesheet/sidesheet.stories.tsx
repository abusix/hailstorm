import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Sidesheet } from "./sidesheet";
import { Button } from "../button/button";

const meta: Meta<typeof Sidesheet> = {
  title: "Sidesheet",
  component: Sidesheet,
};

export default meta;
type Story = StoryObj<typeof Sidesheet>;

const SidesheetWithHooks = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  function handleCloseModal() {
    setIsOpen(false);
  }

  function handleClickOpenModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <Button
        onClick={() => {
          handleClickOpenModal();
        }}
      >
        Open Sidesheet
      </Button>

      <Sidesheet isOpen={isOpen} onClose={() => handleCloseModal()}>
        <Sidesheet.Panel>
          <Sidesheet.PanelHeader>
            <Sidesheet.PanelHeader.Title>
              Modal Title
            </Sidesheet.PanelHeader.Title>
            <Sidesheet.PanelHeader.ActionGroup>
              <Button onClick={() => null}>Button 1</Button>
              <Button onClick={() => null}>Button 2</Button>
              <Button onClick={() => null}>Button 3</Button>
            </Sidesheet.PanelHeader.ActionGroup>
          </Sidesheet.PanelHeader>
          <Sidesheet.PanelContent>
            <p>Sidesheet Content</p>
          </Sidesheet.PanelContent>
        </Sidesheet.Panel>
      </Sidesheet>
    </div>
  );
};

export const Default: Story = {
  render: () => <SidesheetWithHooks />,
};
