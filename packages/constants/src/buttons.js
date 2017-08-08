import { lighten, darken } from "polished";
import colors from "./colors";
import {
  borderColor,
  defaultBorderRadius,
  defaultDuration,
  inputVerticalPadding,
  defaultEasing,
  hoveredTextColor,
  pressedTextColor,
  selectedTextColor,
  white,
  lightTextColor,
  mediumSize,
  offWhite,
  pageFont,
  relative6px
} from "./site";

/*******************************
            Button
*******************************/

/*-------------------
       Element
--------------------*/

/* Button */
export const verticalMargin = "0em";
export const horizontalMargin = "0.25em";
export const backgroundColor = "#E0E1E2";
export const backgroundImage = "none";
export const background = `${backgroundColor} ${backgroundImage}`;
export const lineHeight = "1em";

/* Button defaults to using same height as input globally */
export const verticalPadding = inputVerticalPadding;
export const horizontalPadding = "1.5em";

/* Text */
export const textTransform = "none";
export const tapColor = "transparent";
export const fontFamily = pageFont;
export const fontWeight = "bold";
export const textColor = "rgba(0, 0, 0, 0.6)";
export const textShadow = "none";
export const invertedTextShadow = textShadow;
export const borderRadius = defaultBorderRadius;
export const verticalAlign = "baseline";

/* Internal Shadow */
export const shadowDistance = "0em";
export const shadowOffset = shadowDistance / 2;
export const shadowBoxShadow = `0px -${shadowDistance} 0px 0px ${borderColor} inset`;

/* Box Shadow */
export const borderBoxShadowColor = "transparent";
export const borderBoxShadowWidth = "1px";
export const borderBoxShadow = `0px 0px 0px ${borderBoxShadowWidth} ${borderBoxShadowColor} inset`;
export const boxShadow = `${borderBoxShadow}, ${shadowBoxShadow}`;

/* Icon */
//export const iconHeight = relativeTiny;
export const iconOpacity = "0.8";
export const iconDistance = relative6px;
export const iconColor = "''";
export const iconTransition = `opacity ${defaultDuration} ${defaultEasing}`;
export const iconVerticalAlign = "''";

export const iconMargin = `0em ${iconDistance} 0em -(${iconDistance} / 2)`;
export const rightIconMargin = `0em -(${iconDistance} / 2) 0em ${iconDistance}`;

/* Loader */
export const invertedLoaderFillColor = "rgba(0, 0, 0, 0.15)";

/* export const transition =
 *   opacity @defaultDuration @defaultEasing,
 *   background-color @defaultDuration @defaultEasing,
 *   color @defaultDuration @defaultEasing,
 *   box-shadow @defaultDuration @defaultEasing,
 *   background @defaultDuration @defaultEasing
 * ;*/
/*
export const willChange: "box-shadow, transform, opacity, color, background";
*/
export const willChange = "''";

/*-------------------
        Group
--------------------*/

export const groupBoxShadow = "none";
export const groupButtonBoxShadow = boxShadow;
export const verticalBoxShadow = "none";
export const groupButtonOffset = "0px 0px 0px 0px";
export const verticalGroupOffset = "0px 0px 0px 0px";

/*-------------------
        States
--------------------*/

/* Hovered */
export const hoverBackgroundColor = "#CACBCD";
export const hoverBackgroundImage = backgroundImage;
export const hoverBoxShadow = boxShadow;
export const hoverColor = hoveredTextColor;
export const iconHoverOpacity = "0.85";

/* Focused */
export const focusBackgroundColor = hoverBackgroundColor;
export const focusBackgroundImage = "''";
export const focusBoxShadow = "''";
export const focusColor = hoveredTextColor;
export const iconFocusOpacity = "0.85";

/* Disabled */
export const disabledBackgroundImage = "none";
export const disabledBoxShadow = "none";

/* Pressed Down */
export const downBackgroundColor = "#BABBBC";
export const downBackgroundImage = "''";
export const downPressedShadow = "none";
export const downBoxShadow = `${borderBoxShadow}, ${downPressedShadow}`;
export const downColor = pressedTextColor;

/* Active */
export const activeBackgroundColor = "#C0C1C2";
export const activeBackgroundImage = "none";
export const activeColor = selectedTextColor;
export const activeBoxShadow = borderBoxShadow;

/* Active + Hovered */
export const activeHoverBackgroundColor = activeBackgroundColor;
export const activeHoverBackgroundImage = "none";
export const activeHoverColor = activeColor;
export const activeHoverBoxShadow = activeBoxShadow;

/* Loading */
export const loadingOpacity = 1;
export const loadingPointerEvents = "auto";
export const loadingTransition = `all 0s linear,
  opacity ${defaultDuration} ${defaultEasing}`;

/*-------------------
        Types
--------------------*/

/* Or */
export const orText = "'or'";

export const orGap = "0.3em";
export const orHeight = `(${verticalPadding} * 2) + 1em`;
export const orZIndex = 3;

export const orCircleDistanceToEdge = verticalPadding;
export const orCircleSize = `${orHeight} - ${orCircleDistanceToEdge}`;
export const orLineHeight = orCircleSize;
export const orBoxShadow = borderBoxShadow;

export const orVerticalOffset = `-(${orCircleSize} / 2)`;
export const orHorizontalOffset = `-(${orCircleSize} / 2)`;

export const orBackgroundColor = white;
export const orTextShadow = invertedTextShadow;
export const orTextStyle = "normal";
export const orTextWeight = "bold";
export const orTextColor = lightTextColor;

export const orSpacerHeight = verticalPadding;
export const orSpacerColor = "transparent";

/* Icon */
export const iconButtonOpacity = "0.9";

/* Labeled */
export const labeledLabelFontSize = mediumSize;
export const labeledLabelAlign = "center";
export const labeledLabelPadding = "''";
export const labeledLabelBorderColor = borderColor;
export const labeledLabelBorderOffset = -borderBoxShadowWidth;
export const labeledTagLabelSize = "1.85em"; /* hypotenuse of triangle */
export const labeledIconMargin = "0em";

/* Labeled Icon */
export const labeledIconWidth = `1em + (${verticalPadding} * 2)`;
export const labeledIconBackgroundColor = "rgba(0, 0, 0, 0.05)";
export const labeledIconPadding = horizontalPadding + labeledIconWidth;
export const labeledIconBorder = "transparent";
export const labeledIconColor = "''";

export const labeledIconLeftShadow =
  "-1px 0px 0px 0px @labeledIconBorder inset";
export const labeledIconRightShadow =
  "1px 0px 0px 0px @labeledIconBorder inset";

/* Inverted */
export const invertedBorderSize = "2px";
export const invertedTextColor = white;
export const invertedTextHoverColor = hoverColor;
export const invertedGroupButtonOffset = `0px 0px 0px -(${invertedBorderSize})`;
export const invertedVerticalGroupButtonOffset = `0px 0px -(${invertedBorderSize}) 0px`;

/* Basic */
export const basicBorderRadius = borderRadius;
export const basicBorderSize = "1px";
export const basicTextColor = textColor;
export const basicColoredBorderSize = "1px";

export const basicBackground = "transparent none";
export const basicFontWeight = "normal";
export const basicBorder = `1px solid ${borderColor}`;
export const basicBoxShadow = `0px 0px 0px ${basicBorderSize} ${borderColor} inset`;
export const basicLoadingColor = offWhite;
export const basicTextTransform = "none";

// /* Basic Hover */
// export const basicHoverBackground: "#FFFFFF";
// export const basicHoverTextColor: "@hoveredTextColor";
// export const basicHoverBoxShadow:
//   0px 0px 0px @basicBorderSize @selectedBorderColor inset,
//   0px 0px 0px 0px @borderColor inset
// ;
// /* Basic Focus */
// export const basicFocusBackground: "@basicHoverBackground";
// export const basicFocusTextColor: "@basicHoverTextColor";
// export const basicFocusBoxShadow: "@basicHoverBoxShadow";
//
// /* Basic Down */
// export const basicDownBackground: "#F8F8F8";
// export const basicDownTextColor: "@pressedTextColor";
// export const basicDownBoxShadow:
//   0px 0px 0px @basicBorderSize rgba(0, 0, 0, 0.15) inset,
//   0px 1px 4px 0px @borderColor inset
// ;
// /* Basic Active */
// export const basicActiveBackground: "@transparentBlack";
// export const basicActiveBoxShadow: "''";
// export const basicActiveTextColor: "@selectedTextColor";
//
// /* Basic Inverted */
// export const basicInvertedBackground: "transparent";
// export const basicInvertedFocusBackground: "transparent";
// export const basicInvertedDownBackground: "@transparentWhite";
// export const basicInvertedActiveBackground: "@transparentWhite";
//
// export const basicInvertedBoxShadow: "0px 0px 0px @invertedBorderSize rgba(255, 255, 255, 0.5) inset";
// export const basicInvertedHoverBoxShadow: "0px 0px 0px @invertedBorderSize rgba(255, 255, 255, 1) inset";
// export const basicInvertedFocusBoxShadow: "0px 0px 0px @invertedBorderSize rgba(255, 255, 255, 1) inset";
// export const basicInvertedDownBoxShadow: "0px 0px 0px @invertedBorderSize rgba(255, 255, 255, 0.9) inset";
// export const basicInvertedActiveBoxShadow: "0px 0px 0px @invertedBorderSize rgba(255, 255, 255, 0.7) inset";
//
// export const basicInvertedColor: "@darkWhite";
// export const basicInvertedHoverColor: "@darkWhiteHover";
// export const basicInvertedDownColor: "@darkWhiteActive";
// export const basicInvertedActiveColor: "@invertedTextColor";
//
//
// /* Basic Group */
// export const basicGroupBorder: "@basicBorderSize solid @borderColor";
// export const basicGroupBoxShadow: "none";
//
// /*-------------------
//       Variations
// --------------------*/
//
// /* Colors */
// export const coloredBackgroundImage: "none";
// export const coloredBoxShadow: "@shadowBoxShadow";
//
// /* Colored */
// export const brownTextColor: "@invertedTextColor";
// export const brownTextShadow: "@invertedTextShadow";
// export const redTextColor: "@invertedTextColor";
// export const redTextShadow: "@invertedTextShadow";
// export const orangeTextColor: "@invertedTextColor";
// export const orangeTextShadow: "@invertedTextShadow";
// export const greenTextColor: "@invertedTextColor";
// export const greenTextShadow: "@invertedTextShadow";
// export const blueTextColor: "@invertedTextColor";
// export const blueTextShadow: "@invertedTextShadow";
// export const violetTextColor: "@invertedTextColor";
// export const violetTextShadow: "@invertedTextShadow";
// export const purpleTextColor: "@invertedTextColor";
// export const purpleTextShadow: "@invertedTextShadow";
// export const pinkTextColor: "@invertedTextColor";
// export const pinkTextShadow: "@invertedTextShadow";
// export const blackTextColor: "@invertedTextColor";
// export const blackTextShadow: "@invertedTextShadow";
// export const oliveTextColor: "@invertedTextColor";
// export const oliveTextShadow: "@invertedTextShadow";
// export const yellowTextColor: "@invertedTextColor";
// export const yellowTextShadow: "@invertedTextShadow";
// export const tealTextColor: "@invertedTextColor";
// export const tealTextShadow: "@invertedTextShadow";
// export const greyTextColor: "@invertedTextColor";
// export const greyTextShadow: "@invertedTextShadow";
//
// /* Inverted */
// export const lightBrownTextColor: "@invertedTextColor";
// export const lightBrownTextShadow: "@invertedTextShadow";
// export const lightRedTextColor: "@invertedTextColor";
// export const lightRedTextShadow: "@invertedTextShadow";
// export const lightOrangeTextColor: "@invertedTextColor";
// export const lightOrangeTextShadow: "@invertedTextShadow";
// export const lightGreenTextColor: "@invertedTextColor";
// export const lightGreenTextShadow: "@invertedTextShadow";
// export const lightBlueTextColor: "@invertedTextColor";
// export const lightBlueTextShadow: "@invertedTextShadow";
// export const lightVioletTextColor: "@invertedTextColor";
// export const lightVioletTextShadow: "@invertedTextShadow";
// export const lightPurpleTextColor: "@invertedTextColor";
// export const lightPurpleTextShadow: "@invertedTextShadow";
// export const lightPinkTextColor: "@invertedTextColor";
// export const lightPinkTextShadow: "@invertedTextShadow";
// export const lightBlackTextColor: "@invertedTextColor";
// export const lightBlackTextShadow: "@invertedTextShadow";
// export const lightOliveTextColor: "@textColor";
// export const lightOliveTextShadow: "@textShadow";
// export const lightYellowTextColor: "@textColor";
// export const lightYellowTextShadow: "@textShadow";
// export const lightTealTextColor: "@textColor";
// export const lightTealTextShadow: "@textShadow";
// export const lightGreyTextColor: "@textColor";
// export const lightGreyTextShadow: "@textShadow";
//
//
// /* Ordinality */
// export const primaryBackgroundImage: "@coloredBackgroundImage";
// export const primaryTextColor: "@invertedTextColor";
// export const primaryTextShadow: "@invertedTextShadow";
// export const primaryBoxShadow: "@coloredBoxShadow";
//
// export const secondaryBackgroundImage: "@coloredBackgroundImage";
// export const secondaryTextColor: "@invertedTextColor";
// export const secondaryTextShadow: "@invertedTextShadow";
// export const secondaryBoxShadow: "@coloredBoxShadow";
//
// export const positiveBackgroundImage: "@coloredBackgroundImage";
// export const positiveTextColor: "@invertedTextColor";
// export const positiveTextShadow: "@invertedTextShadow";
// export const positiveBoxShadow: "@coloredBoxShadow";
//
// export const negativeBackgroundImage: "@coloredBackgroundImage";
// export const negativeTextColor: "@invertedTextColor";
// export const negativeTextShadow: "@invertedTextShadow";
// export const negativeBoxShadow: "@coloredBoxShadow";
//
// /* Compact */
// export const compactVerticalPadding: "(@verticalPadding * 0.75)";
// export const compactHorizontalPadding: "(@horizontalPadding * 0.75)";
//
// /* Attached */
// export const attachedOffset: "-1px";
// export const attachedBoxShadow: "0px 0px 0px 1px @borderColor";
// export const attachedHorizontalPadding: "0.75em";
// export const attachedZIndex: "2";
//
// /* Floated */
// export const floatedMargin: "0.25em";
//
// /* Animated */
// export const animatedVerticalAlign: "middle";
// export const animatedZIndex: "1";
// export const animationDuration: "0.3s";
// export const animationEasing: "ease";
// export const fadeScaleHigh: "1.5";
// export const fadeScaleLow: "0.75";
//
