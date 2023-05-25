import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Sidesheet, SidesheetProps } from "./sidesheet";
import { hiddenArgControl } from "../../util/storybook-utils";
import { Button } from "../button/button";

const meta: Meta<typeof Sidesheet> = {
  title: "Sidesheet",
  component: Sidesheet,
};

export default meta;
type Story = StoryObj<typeof Sidesheet>;

const SidesheetWithHooks = (args: SidesheetProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(args.isOpen);
  }, [args.isOpen]);

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
  render: (args) => <SidesheetWithHooks {...args} />,
  args: {
    isOpen: false,
  },
  argTypes: {
    initialFocus: {
      control: {
        type: null,
      },
    },
  },
};
