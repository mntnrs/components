import { h } from "preact";
//import { buttons, sizes } from "@ocode/constants/lib/buttons";
import styled, { css } from "emotion/react";

export default styled.button`
  cursor: pointer;
  display: inline-block;

  min-height: 1em;

  outline: none;
  border: none;
  vertical-align: ${({ verticalAlign }) => verticalAlign};
  background: ${({ background }) => background};
  color: ${({ textColor }) => textColor};

  font-family: ${({ fontFamily }) => fontFamily};

  margin: ${({ verticalMargin, horizontalMargin }) =>
    `0em ${horizontalMargin} ${verticalMargin} 0em`};
  padding: ${({ verticalPadding, horizontalPadding, shadowOffset }) =>
    `@verticalPadding @horizontalPadding (@verticalPadding + @shadowOffset)`};

  text-transform: ${({ textTransform }) => textTransform};
  text-shadow: ${({ textShadow }) => textShadow};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight};
  font-style: normal;
  text-align: center;
  text-decoration: none;

  border-radius: ${({ borderRadius }) => borderRadius};

  user-select: none;
  transition: ${({ transition }) => transition};
  will-change: ${({ willChange }) => willChange};

  -webkit-tap-highlight-color: ${({ tapColor }) => tapColor};

  &:hover {
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
    background-image: ${({ hoverBackgroundImage }) => hoverBackgroundImage};
    box-shadow: ${({ hoverBoxShadow }) => hoverBoxShadow};
    color: ${({ hoverColor }) => hoverColor};
  }

  &:hover .icon {
    opacity: ${({ iconHoverOpacity }) => iconHoverOpacity};
  }

  &:focus {
    background-color: ${({ focusBackgroundColor }) => focusBackgroundColor};
    color: ${({ focusColor }) => focusColor};
    background-image: @focusBackgroundImage !important;
    box-shadow: @focusBoxShadow !important;
  }

  &:focus .icon {
    opacity: ${({ iconFocusOpacity }) => iconFocusOpacity};
  }
  &:active {
    background-color: ${({ downBackgroundColor }) => downBackgroundColor};
    background-image: ${({ downBackgroundImage }) => downBackgroundImage};
    color: ${({ downColor }) => downColor};
    box-shadow: ${({ downBoxShadow }) => downBoxShadow};
  }

  &:active {
    background-color: ${({ activeBackgroundColor }) => activeBackgroundColor};
    background-image: ${({ activeBackgroundImage }) => activeBackgroundImage};
  }

  &:disabled,
  &:disabled:hover {
    cursor: default;
    opacity: @disabledOpacity !important;
    background-image: none !important;
    box-shadow: none !important;
    pointer-events: none !important;
  }

  /* Basic Group With Disabled */
  .ui.basic.buttons .ui.disabled.button {
    border-color: ${({ disabledBorderColor }) => disabledBorderColor};
  }
`;
