<ClientOnly>

# Spinners

**Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.**

<br>

## About
<br>

Bootstrap “spinners” can be used to show the loading state in your projects. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.
<br>

For accessibility purposes, each loader here includes `role="status"` and a nested `<span class="sr-only">Loading...</span>`.

## Border spinner
<br>

Use the border spinners for a lightweight loading indicator.

<br>

<element-slot :elementCode="content.inst_Id_1" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.inst_Id_1" />

## Colors
<br>

The border spinner uses `currentColor` for its `border-color`, meaning you can customize the color with [text color utilities](/components/colors/). You can use any of our text color utilities on the standard spinner.

<br>

<element-slot :elementCode="content.inst_Id_2" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.inst_Id_2" />

<br>

> **Why not use** `border-color` **utilities?** Each border spinner specifies a `transparent` border for at least one side, so `.border-{color}` utilities would override that.

## Growing spinner 
<br>

If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!

<br>

<element-slot :elementCode="content.inst_Id_3" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.inst_Id_3" />

<br>

Once again, this spinner is built with `currentColor`, so you can easily change its appearance with [text color utilities](/components/colors/). Here it is in blue, along with the supported variants.

<br>

<element-slot :elementCode="content.inst_Id_4" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.inst_Id_4" />

<br>

## Alignment

<br>

Spinners in Bootstrap are built with `rem`s, `currentColor`, and `display: inline-flex`. This means they can easily be resized, recolored, and quickly aligned.

## Margin

<br>

Use [margin utilities]() like `.m-5` for easy spacing.

<element-slot :elementCode="content.inst_Id_5" />

<source-code :codeType="codeTypes.HTML" :content="content.inst_Id_5" />

<br>

## Placement

<br>

Use [flexbox utilities](/utilities/flex/), [float utilities](https://getbootstrap.com/docs/4.3/utilities/float/), or [text alignment](https://getbootstrap.com/docs/4.3/content/typography/) utilities to place spinners exactly where you need them in any situation.

### Flex

<element-slot :elementCode="content.inst_Id_6" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.inst_Id_6" />

<br>

<element-slot :elementCode="content.inst_Id_7" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.inst_Id_7" />

<br>

## Floats
<br>

<element-slot :elementCode="content.inst_Id_8" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.inst_Id_8" />

<br>

## Text align
<br>

<element-slot :elementCode="content.inst_Id_9" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.inst_Id_9" />

<br>

## Size
<br>

Add `.spinner-border-sm` and `.spinner-grow-sm` to make a smaller spinner that can quickly be used within other components.

<br>

<element-slot :elementCode="content.inst_Id_10" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.inst_Id_10" />

<br>

Or, use custom CSS or inline styles to change the dimensions as needed.


<element-slot :elementCode="content.inst_Id_11" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.inst_Id_11" />

<br>

## Buttons
<br>

Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.

<br>

<element-slot :elementCode="content.inst_Id_12" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.inst_Id_12" />

<br>

<element-slot :elementCode="content.inst_Id_13" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.inst_Id_13" />

<br>

</ClientOnly>

<script>
import jQuery from 'jquery';
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/js/src";

import * as codeTypes from "@/utils/codeTypes";
import SpinnersContent from '@/content/components/spinners'
export default {
    data(){
        return{
            codeTypes: codeTypes,
            content: SpinnersContent
        }
    }
}

</script>