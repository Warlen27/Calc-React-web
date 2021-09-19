import React, { useCallback } from "react";

import { ButtonContainer, ImageIcon } from "./styles";
type Props = {
  label: string;
  click(param: string): void;
  bgColor?: string;
  bgActive?: string;
  gridColumn?: number;
  borderRadius?: string;
  img?: boolean;
  icon?: string;
};

export default function Button({
  label,
  click,
  bgColor,
  bgActive,
  gridColumn,
  borderRadius,
  img,
  icon,
}: Props) {
  const handleClick = useCallback(() => {
    click(label);
  }, [click, label]);

  return (
    <ButtonContainer
      borderRadius={borderRadius}
      gridColumn={gridColumn}
      bgColor={bgColor}
      bgActive={bgActive}
      onClick={handleClick}
      aria-label={label}
    >
      {img ? <ImageIcon src={icon} alt="icon" /> : label}
    </ButtonContainer>
  );
}
