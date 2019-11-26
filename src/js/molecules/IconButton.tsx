import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  disabled: boolean;
  onClick: () => void;
  className?: string;
};

const IconButton = (props: Props) => {
  const { children, disabled, onClick } = props;
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };
  return (
    <Button
      className="material-icons"
      role="button"
      tabIndex={0}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

IconButton.defaultProps = {
  disabled: false
};

const Button = styled.div<{ disabled: boolean }>`
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  outline: none;
  color: ${props => (props.disabled ? "#ccc" : "#000")};
  user-select: none;
`;

export default IconButton;
