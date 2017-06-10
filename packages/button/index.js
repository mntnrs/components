import { css } from 'glamor';
import { buttons } from '@ocode/constants';

const buttonF = ({
  color,
  backgroundColor,
  borderColor,

}) => css({
    color: $color;
    background-color: $backgroundColor;
    border-color: $borderColor;

    &:focus,
    &:active,
    &:hover {
      color: $color;
      background-color: color($backgroundColor blackness(+10%));
      border-color: color($borderColor blackness(12%));
    }
    &:active {
      /* Remove the gradient for the pressed/active state */
      background-image: none;
      box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    }
    &:disabled,
    fieldset[disabled] & {
      &:hover,
      &:focus {
        background-color: $backgroundColor;
        border-color: $borderColor;
      }
    }
  }
`

export default const Button = emotion('button')`
display: inline-block;
font-weight: 400;
text-align: center;
white-space: nowrap;
vertical-align: middle;
touch-action: manipulation;
cursor: pointer;
user-select: none;
border: .0625rem solid transparent;
transition: all .2s ease-in-out;

&:active:focus {
    /* Default */
    outline: thin dotted;
    /* WebKit */
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
}

&:hover,
&:focus {
    text-decoration: none;
}

&:active {
    background-image: none;
    outline: 0;
    box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
}

&:disabled,
fieldset[disabled] & {
    cursor: not-allowed;
    opacity: .65;
    box-shadow: none;
}



  /* Ghost Variants */
  .ghost-$(variant) {
      color: $borderColor;
      background-image: none;
      background-color: transparent;
      border-color: $borderColor;

      &:focus,
      &.focus,
      &:active,
      &.active,
      &:hover,
      .open > &.dropdown-toggle {
          color: #fff;
          background-color: $borderColor;
          border-color: $borderColor;
      }

      &.disabled,
      &:disabled,
      fieldset[disabled] & {
          &:hover,
          &:focus,
          &.focus {
              border-color: lighten($borderColor, 20%);
          }
      }
  }
}

/* Sizes */
@each $variant, $padding-x, $padding-y, $font-size, $line-height, $border-radius in ~fateElementButton.sizes {
  .size-$(variant) {
    padding: $padding-y $padding-x;
    font-size: $font-size;
    line-height: $line-height;
    border-radius: $border-radius;
  }
}
`
