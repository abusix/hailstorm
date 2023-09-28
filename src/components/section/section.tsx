import React from "react";
import { SectionDescription } from "./section-description";
import { SectionPanel } from "./section-panel";
import { SectionTitle } from "./section-title";
import { SectionTitleGroup } from "./section-title-group";
import { classNames } from "../../util/class-names";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
}

const Section = ({ children, className }: SectionProps) => {
    return <section className={classNames("flex flex-col gap-2", className)}>{children}</section>;
};

Section.TitleGroup = SectionTitleGroup;
Section.Title = SectionTitle;
Section.Description = SectionDescription;
Section.Panel = SectionPanel;

export { Section };
