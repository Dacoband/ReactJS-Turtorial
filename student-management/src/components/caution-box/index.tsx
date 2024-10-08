import React from "react";
import "./index.scss";

type CautionBoxProps = {
    heading: string;
    children: React.ReactNode;
}
type CautionBoxGroupProps = {
    children: React.ReactNode;
}

function CautionBox({heading, children}: CautionBoxProps) {
  return (
    <div className="caution-box">
        <h1 className="caution-box__heading">{heading}</h1>
        <div className="caution-box__content">{children}</div>
    </div>
  )
}
export function CautionBoxGroup({children}: CautionBoxGroupProps) {
    return <div className="caution-box-group">{children}</div>
}
type CautionBoxHeadingProps = {
    children: React.ReactNode;
};

export function CautionBoxHeading({children}: CautionBoxHeadingProps) {
    return <h2 className="caution-box-heading">{children}</h2>;
}

export type CautionBoxListProps = {
    items: string[];
}

export function CautionBoxList({items}: CautionBoxListProps) {
    return <ul className="caution-box-list">
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>;
}
export default CautionBox;
