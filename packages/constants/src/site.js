/*******************************
         Site Settings
*******************************/

import { lighten, saturate, darken } from "polished";

/*-------------------
   Fonts
   --------------------*/

export const fontName = "Lato";
export const fontSmoothing = "antialiased";

export const headerFont = `${fontName}, sans-serif`;
export const pageFont = `${fontName}, serif`;

/*-------------------
      Base Sizes
--------------------*/

/* This is the single variable that controls them all */
export const emSize = "14px";

/* The size of page text  */
export const fontSize = "14px";

/*-------------------
    Border Radius
--------------------*/

export const defaultBorderRadius = 0;

/*-------------------
   Site Colors
   --------------------*/
export const textColor = "rgba(0, 0, 0, 0.87)";

/*---  Colors  ---*/
export const red = "#DB2828";
export const orange = "#F2711C";
export const yellow = "#FBBD08";
export const olive = "#B5CC18";
export const green = "#21BA45";
export const teal = "#00B5AD";
export const blue = "#2185D0";
export const violet = "#6435C9";
export const purple = "#A333C8";
export const pink = "#E03997";
export const brown = "#A5673F";
export const grey = "#767676";
export const black = "#1B1C1D";

/*---  Light Colors  ---*/
export const lightRed = "#FF695E";
export const lightOrange = "#FF851B";
export const lightYellow = "#FFE21F";
export const lightOlive = "#D9E778";
export const lightGreen = "#2ECC40";
export const lightTeal = "#6DFFFF";
export const lightBlue = "#54C8FF";
export const lightViolet = "#A291FB";
export const lightPurple = "#DC73FF";
export const lightPink = "#FF8EDF";
export const lightBrown = "#D67C1C";
export const lightGrey = "#DCDDDE";
export const lightBlack = "#545454";

/*---   Neutrals  ---*/
export const fullBlack = "#000000";
export const offWhite = "#F9FAFB";
export const darkWhite = "#F3F4F5";
export const midWhite = "#DCDDDE";
export const white = "#FFFFFF";

/*--- Colored Backgrounds ---*/
export const redBackground = "#FFE8E6";
export const orangeBackground = "#FFEDDE";
export const yellowBackground = "#FFF8DB";
export const oliveBackground = "#FBFDEF";
export const greenBackground = "#E5F9E7";
export const tealBackground = "#E1F7F7";
export const blueBackground = "#DFF0FF";
export const violetBackground = "#EAE7FF";
export const purpleBackground = "#F6E7FF";
export const pinkBackground = "#FFE3FB";
export const brownBackground = "#F1E2D3";

/*--- Colored Text ---*/
export const redTextColor = red;
export const orangeTextColor = orange;
export const yellowTextColor = "#B58105"; // Yellow text is difficult to read
export const oliveTextColor = "#8ABC1E"; // Olive is difficult to read
export const greenTextColor = "#1EBC30"; // Green is difficult to read
export const tealTextColor = "#10A3A3"; // Teal text is difficult to read
export const blueTextColor = blue;
export const violetTextColor = violet;
export const purpleTextColor = purple;
export const pinkTextColor = pink;
export const brownTextColor = brown;

/*--- Colored Headers ---*/
export const redHeaderColor = darken(0.05, redTextColor);
export const oliveHeaderColor = darken(0.05, oliveTextColor);
export const greenHeaderColor = darken(0.05, greenTextColor);
export const yellowHeaderColor = darken(0.05, yellowTextColor);
export const blueHeaderColor = darken(0.05, blueTextColor);
export const tealHeaderColor = darken(0.05, tealTextColor);
export const pinkHeaderColor = darken(0.05, pinkTextColor);
export const violetHeaderColor = darken(0.05, violetTextColor);
export const purpleHeaderColor = darken(0.05, purpleTextColor);
export const orangeHeaderColor = darken(0.05, orangeTextColor);
export const brownHeaderColor = darken(0.05, brownTextColor);

/*--- Colored Border ---*/
export const redBorderColor = redTextColor;
export const orangeBorderColor = orangeTextColor;
export const yellowBorderColor = yellowTextColor;
export const oliveBorderColor = oliveTextColor;
export const greenBorderColor = greenTextColor;
export const tealBorderColor = tealTextColor;
export const blueBorderColor = blueTextColor;
export const violetBorderColor = violetTextColor;
export const purpleBorderColor = purpleTextColor;
export const pinkBorderColor = pinkTextColor;
export const brownBorderColor = brownTextColor;

/*-------------------
   Alpha Colors
   --------------------*/

export const subtleTransparentBlack = "rgba(0, 0, 0, 0.03)";
export const transparentBlack = "rgba(0, 0, 0, 0.05)";
export const strongTransparentBlack = "rgba(0, 0, 0, 0.10)";
export const veryStrongTransparentBlack = "rgba(0, 0, 0, 0.15)";

export const subtleTransparentWhite = "rgba(255, 255, 255, 0.02)";
export const transparentWhite = "rgba(255, 255, 255, 0.08)";
export const strongTransparentWhite = "rgba(255, 255, 255, 0.15)";

/*-------------------
   Brand Colors
   --------------------*/

export const primaryColor = blue;
export const secondaryColor = black;

export const lightPrimaryColor = lightBlue;
export const lightSecondaryColor = lightBlack;

/*--------------
   Page Heading
   ---------------*/

export const headerFontWeight = "bold";
export const headerLineHeight = `${18 / 14}em`;

export const h1 = `${28 / 14}rem`;
export const h2 = `${24 / 14}rem`;
export const h3 = `${18 / 14}rem`;
export const h4 = `${15 / 14}rem`;
export const h5 = `${14 / 14}rem`;

/*--------------
   Form Input
   ---------------*/

/* This adjusts the default form input across all elements */
export const inputBackground = white;
export const inputVerticalPadding = "11px";
export const inputHorizontalPadding = "14px";
export const inputPadding = `${inputVerticalPadding} ${inputHorizontalPadding}`;

/* Input Text Color */
export const inputColor = textColor;
export const inputPlaceholderColor = lighten(75, inputColor);
export const inputPlaceholderFocusColor = lighten(0.45, inputColor);

/* Line Height Default For Inputs in Browser (Descendors are 17px at 14px base em) */
export const inputLineHeight = `${17 / 14}em`;

/*-------------------
   Focused Input
   --------------------*/

/* Used on inputs, textarea etc */
export const focusedFormBorderColor = "#85B7D9";

/* Used on dropdowns, other larger blocks */
export const focusedFormMutedBorderColor = "#96C8DA";

/*-------------------
   Sizes
   --------------------*/

/*
   Sizes are all expressed in terms of 14px/em (default em)
   This ensures these "ratios" remain constant despite changes in EM
 */

export const miniSize = 11 / 14;
export const tinySize = 12 / 14;
export const smallSize = 13 / 14;
export const mediumSize = 14 / 14;
export const largeSize = 16 / 14;
export const bigSize = 18 / 14;
export const hugeSize = 20 / 14;
export const massiveSize = 24 / 14;

/*-------------------
   Page
   --------------------*/

export const pageBackground = "#FFFFFF";
export const pageOverflowX = "hidden";

export const lineHeight = "1.4285em";

/*-------------------
   Paragraph
   --------------------*/

export const paragraphMargin = "0em 0em 1em";
export const paragraphLineHeight = lineHeight;

/*-------------------
       Links
--------------------*/

export const linkColor = "#4183C4";
export const linkUnderline = "none";
export const linkHoverColor = darken(0.15, saturate(0.2, linkColor));
export const linkHoverUnderline = linkUnderline;

/*-------------------
    Scroll Bars
--------------------*/

export const useCustomScrollbars = true;

export const customScrollbarWidth = "10px";

export const trackBackground = "rgba(0, 0, 0, 0.1)";
export const trackBorderRadius = "0px";

export const thumbBorderRadius = "5px";
export const thumbBackground = "rgba(0, 0, 0, 0.25)";
export const thumbTransition = "color 0.2s ease";

export const thumbInactiveBackground = "rgba(0, 0, 0, 0.15)";
export const thumbHoverBackground = "rgba(128, 135, 139, 0.8)";

/* Inverted */
export const trackInvertedBackground = "rgba(255, 255, 255, 0.1)";
export const thumbInvertedBackground = "rgba(255, 255, 255, 0.25)";
export const thumbInvertedInactiveBackground = "rgba(255, 255, 255, 0.15)";
export const thumbInvertedHoverBackground = "rgba(255, 255, 255, 0.35)";

/*-------------------
  Highlighted Text
--------------------*/

export const highlightBackground = "#CCE2FF";
export const highlightColor = textColor;

export const inputHighlightBackground = "rgba(100, 100, 100, 0.4)";
export const inputHighlightColor = textColor;

/*-------------------
     Transitions
--------------------*/

export const defaultDuration = "0.1s";
export const defaultEasing = "ease";

/*******************************
           Power-User
*******************************/

/*-------------------
    Emotive Colors
--------------------*/

/* Positive */
export const positiveColor = green;
export const positiveBackgroundColor = "#FCFFF5";
export const positiveBorderColor = "#A3C293";
export const positiveHeaderColor = "#1A531B";
export const positiveTextColor = "#2C662D";

/* Negative */
export const negativeColor = red;
export const negativeBackgroundColor = "#FFF6F6";
export const negativeBorderColor = "#E0B4B4";
export const negativeHeaderColor = "#912D2B";
export const negativeTextColor = "#9F3A38";

/* Info */
export const infoColor = "#31CCEC";
export const infoBackgroundColor = "#F8FFFF";
export const infoBorderColor = "#A9D5DE";
export const infoHeaderColor = "#0E566C";
export const infoTextColor = "#276F86";

/* Warning */
export const warningColor = "#F2C037";
export const warningBorderColor = "#C9BA9B";
export const warningBackgroundColor = "#FFFAF3";
export const warningHeaderColor = "#794B02";
export const warningTextColor = "#573A08";

/*-------------------
       Em Sizes
--------------------*/

/*
  This rounds @size values to the closest pixel then expresses that value in (r)em.
  This ensures all size values round to exact pixels
*/
// export const mini            = unit( round(@miniSize * @emSize) / @emSize, rem);
// export const tiny            = unit( round(@tinySize * @emSize) / @emSize, rem);
// export const small           = unit( round(@smallSize * @emSize) / @emSize, rem);
// export const medium          = unit( round(@mediumSize * @emSize) / @emSize, rem);
// export const large           = unit( round(@largeSize * @emSize) / @emSize, rem);
// export const big             = unit( round(@bigSize * @emSize) / @emSize, rem);
// export const huge            = unit( round(@hugeSize * @emSize) / @emSize, rem);
// export const massive         = unit( round(@massiveSize * @emSize) / @emSize, rem);
//
// /* em */
// export const relativeMini    = unit( round(@miniSize * @emSize) / @emSize, em);
// export const relativeTiny    = unit( round(@tinySize * @emSize) / @emSize, em);
// export const relativeSmall   = unit( round(@smallSize * @emSize) / @emSize, em);
// export const relativeMedium  = unit( round(@mediumSize * @emSize) / @emSize, em);
// export const relativeLarge   = unit( round(@largeSize * @emSize) / @emSize, em);
// export const relativeBig     = unit( round(@bigSize * @emSize) / @emSize, em);
// export const relativeHuge    = unit( round(@hugeSize * @emSize) / @emSize, em);
// export const relativeMassive = unit( round(@massiveSize * @emSize) / @emSize, em);
//
// /* rem */
// export const absoluteMini    = unit( round(@miniSize * @emSize) / @emSize, rem);
// export const absoluteTiny    = unit( round(@tinySize * @emSize) / @emSize, rem);
// export const absoluteSmall   = unit( round(@smallSize * @emSize) / @emSize, rem);
// export const absoluteMedium  = unit( round(@mediumSize * @emSize) / @emSize, rem);
// export const absoluteLarge   = unit( round(@largeSize * @emSize) / @emSize, rem);
// export const absoluteBig     = unit( round(@bigSize * @emSize) / @emSize, rem);
// export const absoluteHuge    = unit( round(@hugeSize * @emSize) / @emSize, rem);
// export const absoluteMassive = unit( round(@massiveSize * @emSize) / @emSize, rem);

/*-------------------
       Icons
--------------------*/

/* Maximum Glyph Width of Icon */
export const iconWidth = "1.18em";

/*-------------------
     Neutral Text
--------------------*/

export const darkTextColor = "rgba(0, 0, 0, 0.85)";
export const mutedTextColor = "rgba(0, 0, 0, 0.6)";
export const lightTextColor = "rgba(0, 0, 0, 0.4)";

export const unselectedTextColor = "rgba(0, 0, 0, 0.4)";
export const hoveredTextColor = "rgba(0, 0, 0, 0.8)";
export const pressedTextColor = "rgba(0, 0, 0, 0.9)";
export const selectedTextColor = "rgba(0, 0, 0, 0.95)";
//export const disabledTextColor           = "rgba(0, 0, 0, 0.2)";

export const invertedTextColor = "rgba(255, 255, 255, 0.9)";
export const invertedMutedTextColor = "rgba(255, 255, 255, 0.8)";
export const invertedLightTextColor = "rgba(255, 255, 255, 0.7)";
export const invertedUnselectedTextColor = "rgba(255, 255, 255, 0.5)";
export const invertedHoveredTextColor = "rgba(255, 255, 255, 1)";
export const invertedPressedTextColor = "rgba(255, 255, 255, 1)";
export const invertedSelectedTextColor = "rgba(255, 255, 255, 1)";
//export const invertedDisabledTextColor   = "rgba(255, 255, 255, 0.2)";

/*-------------------
     Brand Colors
--------------------*/

export const facebookColor = "#3B5998";
export const twitterColor = "#55ACEE";
export const googlePlusColor = "#DD4B39";
export const linkedInColor = "#1F88BE";
export const youtubeColor = "#CC181E";
export const pinterestColor = "#BD081C";
export const vkColor = "#4D7198";
export const instagramColor = "#49769C";

/*-------------------
      Borders
--------------------*/

export const circularRadius = "500rem";

export const borderColor = "rgba(34, 36, 38, 0.15)";
export const strongBorderColor = "rgba(34, 36, 38, 0.22)";
export const internalBorderColor = "rgba(34, 36, 38, 0.1)";
export const selectedBorderColor = "rgba(34, 36, 38, 0.35)";
export const strongSelectedBorderColor = "rgba(34, 36, 38, 0.5)";
export const disabledBorderColor = "rgba(34, 36, 38, 0.5)";

export const solidInternalBorderColor = "#FAFAFA";
export const solidBorderColor = "#D4D4D5";
export const solidSelectedBorderColor = "#BCBDBD";

export const whiteBorderColor = "rgba(255, 255, 255, 0.1)";
export const selectedWhiteBorderColor = "rgba(255, 255, 255, 0.8)";

export const solidWhiteBorderColor = "#555555";
export const selectedSolidWhiteBorderColor = "#999999";

/*-------------------
    Derived Values
--------------------*/

/* Rendered Scrollbar Width */
export const scrollbarWidth = "17px";

/* Maximum Single Character Glyph Width, aka Capital "W" */
export const glyphWidth = "1.1em";

/* Used to match floats with text */
export const lineHeightOffset = `calc((${lineHeight} - 1em) / 2)`;
export const headerLineHeightOffset = `calc((${headerLineHeight} - 1em) / 2)`;

/* Header Spacing */
export const headerTopMargin = `calc(2rem - "${headerLineHeightOffset}")`;
export const headerBottomMargin = "1rem";
export const headerMargin = `${headerTopMargin} 0em ${headerBottomMargin}`;

/* Minimum Mobile Width */
export const pageMinWidth = "320px";

/* Positive / Negative Dupes */
export const successBackgroundColor = positiveBackgroundColor;
export const successColor = positiveColor;
export const successBorderColor = positiveBorderColor;
export const successHeaderColor = positiveHeaderColor;
export const successTextColor = positiveTextColor;

export const errorBackgroundColor = negativeBackgroundColor;
export const errorColor = negativeColor;
export const errorBorderColor = negativeBorderColor;
export const errorHeaderColor = negativeHeaderColor;
export const errorTextColor = negativeTextColor;

/*-------------------
  Exact Pixel Values
--------------------*/
/*
  These are used to specify exact pixel values in em
  for things like borders that remain constantly
  sized as emSize adjusts

  Since there are many more sizes than names for sizes,
  these are named by their original pixel values.

*/

export const px1 = `${1 / emSize}rem`;
export const px2 = `${2 / emSize}rem`;
export const px3 = `${3 / emSize}rem`;
export const px4 = `${4 / emSize}rem`;
export const px5 = `${5 / emSize}rem`;
export const px6 = `${6 / emSize}rem`;
export const px7 = `${7 / emSize}rem`;
export const px8 = `${8 / emSize}rem`;
export const px9 = `${9 / emSize}rem`;
export const px10 = `${10 / emSize}rem`;
export const px11 = `${11 / emSize}rem`;
export const px12 = `${12 / emSize}rem`;
export const px13 = `${13 / emSize}rem`;
export const px14 = `${14 / emSize}rem`;
export const px15 = `${15 / emSize}rem`;
export const px16 = `${16 / emSize}rem`;
export const px17 = `${17 / emSize}rem`;
export const px18 = `${18 / emSize}rem`;
export const px19 = `${19 / emSize}rem`;
export const px20 = `${20 / emSize}rem`;
export const px21 = `${21 / emSize}rem`;
export const px22 = `${22 / emSize}rem`;
export const px23 = `${23 / emSize}rem`;
export const px24 = `${24 / emSize}rem`;
export const px25 = `${25 / emSize}rem`;
export const px26 = `${26 / emSize}rem`;
export const px27 = `${27 / emSize}rem`;
export const px28 = `${28 / emSize}rem`;
export const px29 = `${29 / emSize}rem`;
export const px30 = `${30 / emSize}rem`;
export const px31 = `${31 / emSize}rem`;
export const px32 = `${32 / emSize}rem`;
export const px33 = `${33 / emSize}rem`;
export const px34 = `${34 / emSize}rem`;
export const px35 = `${35 / emSize}rem`;
export const px36 = `${36 / emSize}rem`;
export const px37 = `${37 / emSize}rem`;
export const px38 = `${38 / emSize}rem`;
export const px39 = `${39 / emSize}rem`;
export const px40 = `${40 / emSize}rem`;
export const px41 = `${41 / emSize}rem`;
export const px42 = `${42 / emSize}rem`;
export const px43 = `${43 / emSize}rem`;
export const px44 = `${44 / emSize}rem`;
export const px45 = `${45 / emSize}rem`;
export const px46 = `${46 / emSize}rem`;
export const px47 = `${47 / emSize}rem`;
export const px48 = `${48 / emSize}rem`;
export const px49 = `${49 / emSize}rem`;
export const px50 = `${50 / emSize}rem`;
export const px51 = `${51 / emSize}rem`;
export const px52 = `${52 / emSize}rem`;
export const px53 = `${53 / emSize}rem`;
export const px54 = `${54 / emSize}rem`;
export const px55 = `${55 / emSize}rem`;
export const px56 = `${56 / emSize}rem`;
export const px57 = `${57 / emSize}rem`;
export const px58 = `${58 / emSize}rem`;
export const px59 = `${59 / emSize}rem`;
export const px60 = `${60 / emSize}rem`;
export const px61 = `${61 / emSize}rem`;
export const px62 = `${62 / emSize}rem`;
export const px63 = `${63 / emSize}rem`;
export const px64 = `${64 / emSize}rem`;

export const relative1px = `${1 / emSize}em`;
export const relative2px = `${2 / emSize}em`;
export const relative3px = `${3 / emSize}em`;
export const relative4px = `${4 / emSize}em`;
export const relative5px = `${5 / emSize}em`;
export const relative6px = `${6 / emSize}em`;
export const relative7px = `${7 / emSize}em`;
export const relative8px = `${8 / emSize}em`;
export const relative9px = `${9 / emSize}em`;
export const relative10px = `${10 / emSize}em`;
export const relative11px = `${11 / emSize}em`;
export const relative12px = `${12 / emSize}em`;
export const relative13px = `${13 / emSize}em`;
export const relative14px = `${14 / emSize}em`;
export const relative15px = `${15 / emSize}em`;
export const relative16px = `${16 / emSize}em`;
export const relative17px = `${17 / emSize}em`;
export const relative18px = `${18 / emSize}em`;
export const relative19px = `${19 / emSize}em`;
export const relative20px = `${20 / emSize}em`;
export const relative21px = `${21 / emSize}em`;
export const relative22px = `${22 / emSize}em`;
export const relative23px = `${23 / emSize}em`;
export const relative24px = `${24 / emSize}em`;
export const relative25px = `${25 / emSize}em`;
export const relative26px = `${26 / emSize}em`;
export const relative27px = `${27 / emSize}em`;
export const relative28px = `${28 / emSize}em`;
export const relative29px = `${29 / emSize}em`;
export const relative30px = `${30 / emSize}em`;
export const relative31px = `${31 / emSize}em`;
export const relative32px = `${32 / emSize}em`;
export const relative33px = `${33 / emSize}em`;
export const relative34px = `${34 / emSize}em`;
export const relative35px = `${35 / emSize}em`;
export const relative36px = `${36 / emSize}em`;
export const relative37px = `${37 / emSize}em`;
export const relative38px = `${38 / emSize}em`;
export const relative39px = `${39 / emSize}em`;
export const relative40px = `${40 / emSize}em`;
export const relative41px = `${41 / emSize}em`;
export const relative42px = `${42 / emSize}em`;
export const relative43px = `${43 / emSize}em`;
export const relative44px = `${44 / emSize}em`;
export const relative45px = `${45 / emSize}em`;
export const relative46px = `${46 / emSize}em`;
export const relative47px = `${47 / emSize}em`;
export const relative48px = `${48 / emSize}em`;
export const relative49px = `${49 / emSize}em`;
export const relative50px = `${50 / emSize}em`;
export const relative51px = `${51 / emSize}em`;
export const relative52px = `${52 / emSize}em`;
export const relative53px = `${53 / emSize}em`;
export const relative54px = `${54 / emSize}em`;
export const relative55px = `${55 / emSize}em`;
export const relative56px = `${56 / emSize}em`;
export const relative57px = `${57 / emSize}em`;
export const relative58px = `${58 / emSize}em`;
export const relative59px = `${59 / emSize}em`;
export const relative60px = `${60 / emSize}em`;
export const relative61px = `${61 / emSize}em`;
export const relative62px = `${62 / emSize}em`;
export const relative63px = `${63 / emSize}em`;
export const relative64px = `${64 / emSize}em`;

/*******************************
             States
*******************************/

/*-------------------
      Disabled
--------------------*/

export const disabledOpacity = "0.45";
export const disabledTextColor = "rgba(40, 40, 40, 0.3)";
export const invertedDisabledTextColor = "rgba(225, 225, 225, 0.3)";

/*-------------------
        Hover
--------------------*/

/*---  Shadows  ---*/
export const floatingShadowHover = `
  0px 2px 4px 0px rgba(34, 36, 38, 0.15),
  0px 2px 10px 0px rgba(34, 36, 38, 0.25)
`;

/*---  Colors  ---*/
export const primaryColorHover = saturate(10, darken(0.05, primaryColor));
export const secondaryColorHover = saturate(10, lighten(0.05, secondaryColor));

export const redHover = saturate(10, darken(0.05, red));
export const orangeHover = saturate(10, darken(0.05, orange));
export const yellowHover = saturate(10, darken(0.05, yellow));
export const oliveHover = saturate(10, darken(0.05, olive));
export const greenHover = saturate(10, darken(0.05, green));
export const tealHover = saturate(10, darken(0.05, teal));
export const blueHover = saturate(10, darken(0.05, blue));
export const violetHover = saturate(10, darken(0.05, violet));
export const purpleHover = saturate(10, darken(0.05, purple));
export const pinkHover = saturate(10, darken(0.05, pink));
export const brownHover = saturate(10, darken(0.05, brown));

export const lightRedHover = saturate(10, darken(0.05, lightRed));
export const lightOrangeHover = saturate(10, darken(0.05, lightOrange));
export const lightYellowHover = saturate(10, darken(0.05, lightYellow));
export const lightOliveHover = saturate(10, darken(0.05, lightOlive));
export const lightGreenHover = saturate(10, darken(0.05, lightGreen));
export const lightTealHover = saturate(10, darken(0.05, lightTeal));
export const lightBlueHover = saturate(10, darken(0.05, lightBlue));
export const lightVioletHover = saturate(10, darken(0.05, lightViolet));
export const lightPurpleHover = saturate(10, darken(0.05, lightPurple));
export const lightPinkHover = saturate(10, darken(0.05, lightPink));
export const lightBrownHover = saturate(10, darken(0.05, lightBrown));
export const lightGreyHover = saturate(10, darken(0.05, lightGrey));
export const lightBlackHover = saturate(10, darken(0.05, fullBlack));

/*---  Emotive  ---*/
export const positiveColorHover = saturate(10, darken(0.05, positiveColor));
export const negativeColorHover = saturate(10, darken(0.05, negativeColor));

/*---  Brand   ---*/
export const facebookHoverColor = saturate(10, darken(0.05, facebookColor));
export const twitterHoverColor = saturate(10, darken(0.05, twitterColor));
export const googlePlusHoverColor = saturate(10, darken(0.05, googlePlusColor));
export const linkedInHoverColor = saturate(10, darken(0.05, linkedInColor));
export const youtubeHoverColor = saturate(10, darken(0.05, youtubeColor));
export const instagramHoverColor = saturate(10, darken(0.05, instagramColor));
export const pinterestHoverColor = saturate(10, darken(0.05, pinterestColor));
export const vkHoverColor = saturate(10, darken(0.05, vkColor));

/*---  Dark Tones  ---*/
export const fullBlackHover = lighten(0.05, fullBlack);
export const blackHover = lighten(0.05, black);
export const greyHover = lighten(0.05, grey);

/*---  Light Tones  ---*/
export const whiteHover = darken(0.05, white);
export const offWhiteHover = darken(0.05, offWhite);
export const darkWhiteHover = darken(0.05, darkWhite);

/*-------------------
        Focus
--------------------*/

/*---  Colors  ---*/
export const primaryColorFocus = saturate(20, darken(0.08, primaryColor));
export const secondaryColorFocus = saturate(20, lighten(0.08, secondaryColor));

export const redFocus = saturate(20, darken(0.08, red));
export const orangeFocus = saturate(20, darken(0.08, orange));
export const yellowFocus = saturate(20, darken(0.08, yellow));
export const oliveFocus = saturate(20, darken(0.08, olive));
export const greenFocus = saturate(20, darken(0.08, green));
export const tealFocus = saturate(20, darken(0.08, teal));
export const blueFocus = saturate(20, darken(0.08, blue));
export const violetFocus = saturate(20, darken(0.08, violet));
export const purpleFocus = saturate(20, darken(0.08, purple));
export const pinkFocus = saturate(20, darken(0.08, pink));
export const brownFocus = saturate(20, darken(0.08, brown));

export const lightRedFocus = saturate(20, darken(0.08, lightRed));
export const lightOrangeFocus = saturate(20, darken(0.08, lightOrange));
export const lightYellowFocus = saturate(20, darken(0.08, lightYellow));
export const lightOliveFocus = saturate(20, darken(0.08, lightOlive));
export const lightGreenFocus = saturate(20, darken(0.08, lightGreen));
export const lightTealFocus = saturate(20, darken(0.08, lightTeal));
export const lightBlueFocus = saturate(20, darken(0.08, lightBlue));
export const lightVioletFocus = saturate(20, darken(0.08, lightViolet));
export const lightPurpleFocus = saturate(20, darken(0.08, lightPurple));
export const lightPinkFocus = saturate(20, darken(0.08, lightPink));
export const lightBrownFocus = saturate(20, darken(0.08, lightBrown));
export const lightGreyFocus = saturate(20, darken(0.08, lightGrey));
export const lightBlackFocus = saturate(20, darken(0.08, fullBlack));

/*---  Emotive  ---*/
export const positiveColorFocus = saturate(20, darken(0.08, positiveColor));
export const negativeColorFocus = saturate(20, darken(0.08, negativeColor));

/*---  Brand   ---*/
export const facebookFocusColor = saturate(20, darken(0.08, facebookColor));
export const twitterFocusColor = saturate(20, darken(0.08, twitterColor));
export const googlePlusFocusColor = saturate(20, darken(0.08, googlePlusColor));
export const linkedInFocusColor = saturate(20, darken(0.08, linkedInColor));
export const youtubeFocusColor = saturate(20, darken(0.08, youtubeColor));
export const instagramFocusColor = saturate(20, darken(0.08, instagramColor));
export const pinterestFocusColor = saturate(20, darken(0.08, pinterestColor));
export const vkFocusColor = saturate(20, darken(0.08, vkColor));

/*---  Dark Tones  ---*/
export const fullBlackFocus = lighten(0.08, fullBlack);
export const blackFocus = lighten(0.08, black);
export const greyFocus = lighten(0.08, grey);

/*---  Light Tones  ---*/
export const whiteFocus = darken(0.08, white);
export const offWhiteFocus = darken(0.08, offWhite);
export const darkWhiteFocus = darken(0.08, darkWhite);

/*-------------------
    Down (:active)
--------------------*/

/*---  Colors  ---*/
export const primaryColorDown = darken(0.1, primaryColor);
export const secondaryColorDown = lighten(0.1, secondaryColor);

export const redDown = darken(0.1, red);
export const orangeDown = darken(0.1, orange);
export const yellowDown = darken(0.1, yellow);
export const oliveDown = darken(0.1, olive);
export const greenDown = darken(0.1, green);
export const tealDown = darken(0.1, teal);
export const blueDown = darken(0.1, blue);
export const violetDown = darken(0.1, violet);
export const purpleDown = darken(0.1, purple);
export const pinkDown = darken(0.1, pink);
export const brownDown = darken(0.1, brown);

export const lightRedDown = darken(0.1, lightRed);
export const lightOrangeDown = darken(0.1, lightOrange);
export const lightYellowDown = darken(0.1, lightYellow);
export const lightOliveDown = darken(0.1, lightOlive);
export const lightGreenDown = darken(0.1, lightGreen);
export const lightTealDown = darken(0.1, lightTeal);
export const lightBlueDown = darken(0.1, lightBlue);
export const lightVioletDown = darken(0.1, lightViolet);
export const lightPurpleDown = darken(0.1, lightPurple);
export const lightPinkDown = darken(0.1, lightPink);
export const lightBrownDown = darken(0.1, lightBrown);
export const lightGreyDown = darken(0.1, lightGrey);
export const lightBlackDown = darken(0.1, fullBlack);

/*---  Emotive  ---*/
export const positiveColorDown = darken(0.1, positiveColor);
export const negativeColorDown = darken(0.1, negativeColor);

/*---  Brand   ---*/
export const facebookDownColor = darken(0.1, facebookColor);
export const twitterDownColor = darken(0.1, twitterColor);
export const googlePlusDownColor = darken(0.1, googlePlusColor);
export const linkedInDownColor = darken(0.1, linkedInColor);
export const youtubeDownColor = darken(0.1, youtubeColor);
export const instagramDownColor = darken(0.1, instagramColor);
export const pinterestDownColor = darken(0.1, pinterestColor);
export const vkDownColor = darken(0.1, vkColor);

/*---  Dark Tones  ---*/
export const fullBlackDown = lighten(0.1, fullBlack);
export const blackDown = lighten(0.1, black);
export const greyDown = lighten(0.1, grey);

/*---  Light Tones  ---*/
export const whiteDown = darken(0.1, white);
export const offWhiteDown = darken(0.1, offWhite);
export const darkWhiteDown = darken(0.1, darkWhite);

/*-------------------
        Active
--------------------*/

/*---  Colors  ---*/
export const primaryColorActive = saturate(0.15, darken(0.05, primaryColor));
export const secondaryColorActive = saturate(
  0.15,
  lighten(0.05, secondaryColor)
);

export const redActive = saturate(0.15, darken(0.05, red));
export const orangeActive = saturate(0.15, darken(0.05, orange));
export const yellowActive = saturate(0.15, darken(0.05, yellow));
export const oliveActive = saturate(0.15, darken(0.05, olive));
export const greenActive = saturate(0.15, darken(0.05, green));
export const tealActive = saturate(0.15, darken(0.05, teal));
export const blueActive = saturate(0.15, darken(0.05, blue));
export const violetActive = saturate(0.15, darken(0.05, violet));
export const purpleActive = saturate(0.15, darken(0.05, purple));
export const pinkActive = saturate(0.15, darken(0.05, pink));
export const brownActive = saturate(0.15, darken(0.05, brown));

export const lightRedActive = saturate(0.15, darken(0.05, lightRed));
export const lightOrangeActive = saturate(0.15, darken(0.05, lightOrange));
export const lightYellowActive = saturate(0.15, darken(0.05, lightYellow));
export const lightOliveActive = saturate(0.15, darken(0.05, lightOlive));
export const lightGreenActive = saturate(0.15, darken(0.05, lightGreen));
export const lightTealActive = saturate(0.15, darken(0.05, lightTeal));
export const lightBlueActive = saturate(0.15, darken(0.05, lightBlue));
export const lightVioletActive = saturate(0.15, darken(0.05, lightViolet));
export const lightPurpleActive = saturate(0.15, darken(0.05, lightPurple));
export const lightPinkActive = saturate(0.15, darken(0.05, lightPink));
export const lightBrownActive = saturate(0.15, darken(0.05, lightBrown));
export const lightGreyActive = saturate(0.15, darken(0.05, lightGrey));
export const lightBlackActive = saturate(0.15, darken(0.05, fullBlack));

/*---  Emotive  ---*/
export const positiveColorActive = saturate(0.15, darken(0.05, positiveColor));
export const negativeColorActive = saturate(0.15, darken(0.05, negativeColor));

/*---  Brand   ---*/
export const facebookActiveColor = saturate(0.15, darken(0.05, facebookColor));
export const twitterActiveColor = saturate(0.15, darken(0.05, twitterColor));
export const googlePlusActiveColor = saturate(
  0.15,
  darken(0.05, googlePlusColor)
);
export const linkedInActiveColor = saturate(0.15, darken(0.05, linkedInColor));
export const youtubeActiveColor = saturate(0.15, darken(0.05, youtubeColor));
export const instagramActiveColor = saturate(
  0.15,
  darken(0.05, instagramColor)
);
export const pinterestActiveColor = saturate(
  0.15,
  darken(0.05, pinterestColor)
);
export const vkActiveColor = saturate(0.15, darken(0.05, vkColor));

/*---  Dark Tones  ---*/
export const fullBlackActive = darken(0.05, fullBlack);
export const blackActive = darken(0.05, black);
export const greyActive = darken(0.05, grey);

/*---  Light Tones  ---*/
export const whiteActive = darken(0.05, white);
export const offWhiteActive = darken(0.05, offWhite);
export const darkWhiteActive = darken(0.05, darkWhite);

/*-------------------
   Accents
   --------------------*/

/* Differentiating Neutrals */
export const subtleGradient = `linear-gradient(transparent, ${transparentBlack})`;

/* Differentiating Layers */
export const subtleShadow = `0px 1px 2px 0 ${borderColor}`;
export const floatingShadow = `
  0px 2px 4px 0px rgba(34, 36, 38, 0.12),
  0px 2px 10px 0px rgba(34, 36, 38, 0.15)
`;
