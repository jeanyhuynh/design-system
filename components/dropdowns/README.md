<ClientOnly>

# Dropdowns

**Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.**

## Overview
<br />

Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included Bootstrap dropdown JavaScript plugin. They’re toggled by clicking, not by hovering; this is [an intentional design decision](http://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/).

Dropdowns are built on a third party library, [Popper.js](https://popper.js.org/), which provides dynamic positioning and viewport detection. Be sure to include [popper.min.js](https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js) before Bootstrap’s JavaScript or use `bootstrap.bundle.min.js` / `bootstrap.bundle.js` which contains Popper.js. Popper.js isn’t used to position dropdowns in navbars though as dynamic positioning isn’t required.

If you’re building our JavaScript from source, it [requires util.js](https://getbootstrap.com/docs/4.3/getting-started/javascript/#util).

## Accessibility
<br />

The [WAI ARIA](https://www.w3.org/TR/wai-aria/) standard defines an actual [role="menu" widget](https://www.w3.org/WAI/PF/aria/roles#menu), but this is specific to application-like menus which trigger actions or functions. ARIA menus can only contain menu items, checkbox menu items, radio button menu items, radio button groups, and sub-menus.

Bootstrap’s dropdowns, on the other hand, are designed to be generic and applicable to a variety of situations and markup structures. For instance, it is possible to create dropdowns that contain additional inputs and form controls, such as search fields or login forms. For this reason, Bootstrap does not expect (nor automatically add) any of the `role` and `aria-` attributes required for true ARIA menus. Authors will have to include these more specific attributes themselves.

However, Bootstrap does add built-in support for most standard keyboard menu interactions, such as the ability to move through individual `.dropdown-item` elements using the cursor keys and close the menu with the `ESC` key.

## Examples
<br />

Wrap the dropdown’s toggle (your button or link) and the dropdown menu within `.dropdown`, or another element that declares `position: relative;`. Dropdowns can be triggered from `<a>` or `<button>` elements to better fit your potential needs.

## Single button
<br />

Any single `.btn` can be turned into a dropdown toggle with some markup changes. Here’s how you can put them to work with either `<button>` elements:

<element-slot :elementCode="content.data_1" />

<source-code :codeType="codeTypes.HTML" :content="content.data_1" />

And with `<a>` elements:

<element-slot :elementCode="content.data_2" />

<source-code :codeType="codeTypes.HTML" :content="content.data_2" />

The best part is you can do this with any button variant, too:

<element-slot :elementCode="content.data_3" />

<source-code :codeType="codeTypes.HTML" :content="content.data_3" />

## Split button
<br />

Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` for proper spacing around the dropdown caret.

We use this extra class to reduce the horizontal `padding` on either side of the caret by 25% and remove the `margin-left` that’s added for regular button dropdowns. Those extra changes keep the caret centered in the split button and provide a more appropriately sized hit area next to the main button.

<element-slot :elementCode="content.data_4" />

<source-code :codeType="codeTypes.HTML" :content="content.data_4" />

## Sizing
<br />

Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.

<element-slot :elementCode="content.data_5" />

<source-code :codeType="codeTypes.HTML" :content="content.data_5" />

## Directions

### Dropup

Trigger dropdown menus above elements by adding `.dropup` to the parent element.

<element-slot :elementCode="content.data_6" />

<source-code :codeType="codeTypes.HTML" :content="content.data_6" />

### Dropright

Trigger dropdown menus at the right of the elements by adding `.dropright` to the parent element.

<element-slot :elementCode="content.data_7" />

<source-code :codeType="codeTypes.HTML" :content="content.data_7" />

### Dropleft

Trigger dropdown menus at the left of the elements by adding `.dropleft` to the parent element.

<element-slot :elementCode="content.data_8" />

<source-code :codeType="codeTypes.HTML" :content="content.data_8" />

## Menu items
<br />

Historically dropdown menu contents had to be links, but that’s no longer the case with v4. Now you can optionally use `<button>` elements in your dropdowns instead of just `<a>`s.

<element-slot :elementCode="content.data_9" />

<source-code :codeType="codeTypes.HTML" :content="content.data_9" />

You can also create non-interactive dropdown items with `.dropdown-item-text`. Feel free to style further with custom CSS or text utilities.

<element-slot class="show-item" :elementCode="content.data_10" />

<source-code :codeType="codeTypes.HTML" :content="content.data_10" />

## Active
<br />

Add `.active` to items in the dropdown to **style them as active**.

<element-slot class="show-item" :elementCode="content.data_11" />

<source-code :codeType="codeTypes.HTML" :content="content.data_11" />

## Disabled
<br />

Add `.disabled` to items in the dropdown to **style them as disabled**.

<element-slot class="show-item" :elementCode="content.data_12" />

<source-code :codeType="codeTypes.HTML" :content="content.data_12" />

## Menu alignment
<br />

By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. Add `.dropdown-menu-right` to a `.dropdown-menu` to right align the dropdown menu.

> **Heads up!** Dropdowns are positioned thanks to Popper.js (except when they are contained in a navbar).

<element-slot :elementCode="content.data_13" />

<source-code :codeType="codeTypes.HTML" :content="content.data_13" />

## Responsive alignment
<br />

If you want to use responsive alignment, disable dynamic positioning by adding the `data-display="static"` attribute and use the responsive variation classes.

To align **right** the dropdown menu with the given breakpoint or larger, add `.dropdown-menu{-sm|-md|-lg|-xl}-right`.

<element-slot :elementCode="content.data_14" />

<source-code :codeType="codeTypes.HTML" :content="content.data_14" />

To align **left** the dropdown menu with the given breakpoint or larger, add `.dropdown-menu-right` and `.dropdown-menu{-sm|-md|-lg|-xl}-left`.

<element-slot :elementCode="content.data_15" />

<source-code :codeType="codeTypes.HTML" :content="content.data_15" />

Note that you don’t need to add a `data-display="static"` attribute to dropdown buttons in navbars, since Popper.js isn’t used in navbars.

## Menu content

### Headers
<br />

Add a header to label sections of actions in any dropdown menu.

<element-slot class="show-item" :elementCode="content.data_16" />

<source-code :codeType="codeTypes.HTML" :content="content.data_16" />

### Dividers
<br />

Separate groups of related menu items with a divider.

<element-slot class="show-item" :elementCode="content.data_17" />

<source-code :codeType="codeTypes.HTML" :content="content.data_17" />

### Text
<br />

Place any freeform text within a dropdown menu with text and use [spacing utilities](https://getbootstrap.com/docs/4.3/utilities/spacing/). Note that you’ll likely need additional sizing styles to constrain the menu width.

<element-slot class="show-item" :elementCode="content.data_18" />

<source-code :codeType="codeTypes.HTML" :content="content.data_18" />

### Forms
<br />

Put a form within a dropdown menu, or make it into a dropdown menu, and use [margin or padding utilities](https://getbootstrap.com/docs/4.3/utilities/spacing/) to give it the negative space you require.

<element-slot class="show-item" :elementCode="content.data_19" />

<source-code :codeType="codeTypes.HTML" :content="content.data_19" />

<element-slot class="show-item" :elementCode="content.data_20" />

<source-code :codeType="codeTypes.HTML" :content="content.data_20" />

## Dropdown options
<br />

Use `data-offset` or `data-reference` to change the location of the dropdown.

<element-slot :elementCode="content.data_21" />

<source-code :codeType="codeTypes.HTML" :content="content.data_21" />

## Usage
<br />

Via data attributes or JavaScript, the dropdown plugin toggles hidden content (dropdown menus) by toggling the `.show` class on the parent list item. The `data-toggle="dropdown"` attribute is relied on for closing dropdown menus at an application level, so it’s a good idea to always use it.

> On touch-enabled devices, opening a dropdown adds empty (`$.noop`) `mouseover` handlers to the immediate children of the `<body>` element. This admittedly ugly hack is necessary to work around a [quirk in iOS’ event delegation](https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html), which would otherwise prevent a tap anywhere outside of the dropdown from triggering the code that closes the dropdown. Once the dropdown is closed, these additional empty `mouseover` handlers are removed.

## Via data attributes
<br />

Add `data-toggle="dropdown"` to a link or button to toggle a dropdown.

<source-code :codeType="codeTypes.HTML" :content="content.data_22" />

## Via JavaScript
<br />

Call the dropdowns via JavaScript:

<source-code :codeType="codeTypes.JS" :content="content.data_23" />
<br />

> #### `data-toggle="dropdown"` **still required**
> 
> Regardless of whether you call your dropdown via JavaScript or instead use the data-api, data-toggle="dropdown" is always required to be present on the dropdown’s trigger element.

## Options
<br />

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-offset=""`.

| Name      	| Type                         	| Default        	| Description                                                                                                                                                                                                                                                                                                                                                       	|
|-----------	|------------------------------	|----------------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| offset    	| number \| string \| function 	| 0              	| Offset of the dropdown relative to its target. <br /> When a function is used to determine the offset, it is called with an object containing the offset data as its first argument. The function must return an object with the same structure. <br /> The triggering element DOM node is passed as the second argument.For more information refer to Popper.js's [offset docs](https://popper.js.org/popper-documentation.html#modifiers..offset.offset). 	|
| flip      	| boolean                      	| true           	| Allow Dropdown to flip in case of an overlapping on the reference element. <br /> For more information refer to Popper.js's [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled).                                                                                                                                                                                                                                   	|
| boundary  	| string \| element            	| 'scrollParent' 	| Overflow constraint boundary of the dropdown menu. Accepts the values of `'viewport'`, `'window'`, `'scrollParent'`, or an HTMLElement reference (JavaScript only). For more information refer to Popper.js's [preventOverflow docs](https://popper.js.org/popper-documentation.html#modifiers..preventOverflow.boundariesElement).                                                                                                                                     	|
| reference 	| string \| element            	| 'toggle'       	| Reference element of the dropdown menu. Accepts the values of `'toggle'`, `'parent'`, or an HTMLElement reference. For more information refer to Popper.js's [referenceObject docs](https://popper.js.org/popper-documentation.html#referenceObject).                                                                                                                                                                                    	|
| display   	| string                       	| 'dynamic'      	| By default, we use Popper.js for dynamic positioning. Disable this with `static`.                                                                   
Note when `boundary` is set to any value other than `'scrollParent'`, the style `position: static` is applied to the `.dropdown` container.

## Methods
<br />

| Method                  	| Description                                                       	|
|-------------------------	|-------------------------------------------------------------------	|
| **`$().dropdown('toggle')`**  	| Toggles the dropdown menu of a given navbar or tabbed navigation. 	|
| **`$().dropdown('show')`**    	| Shows the dropdown menu of a given navbar or tabbed navigation.   	|
| **`$().dropdown('hide')`**    	| Hides the dropdown menu of a given navbar or tabbed navigation.   	|
| **`$().dropdown('update')`**  	| Updates the position of an element’s dropdown.                    	|
| **`$().dropdown('dispose')`**  	| Destroys an element’s dropdown.                    	|

## Events
<br />

All dropdown events are fired at the `.dropdown-menu’`s parent element and have a `relatedTarget` property, whose value is the toggling anchor element. `hide.bs.dropdown` and `hidden.bs.dropdown` events have a `clickEvent` property (only when the original event type is `click`) that contains an Event Object for the click event.

| Event              	| Description                                                                                                                 	|
|--------------------	|-----------------------------------------------------------------------------------------------------------------------------	|
| **`show.bs.dropdown`**   	| This event fires immediately when the show instance method is called.                                                       	|
| **`shown.bs.dropdown`**  	| This event is fired when the dropdown has been made visible to the user (will wait for CSS transitions, to complete).       	|
| **`hide.bs.dropdown`**   	| This event is fired immediately when the hide instance method has been called.                                              	|
| **`hidden.bs.dropdown`** 	| This event is fired when the dropdown has finished being hidden from the user (will wait for CSS transitions, to complete). 	|

<source-code :codeType="codeTypes.JS" :content="content.data_24" />

</ClientOnly>

<script>
  import * as codeTypes from '@/utils/codeTypes'
  import dataContent from '@/content/components/dropdowns'
  import Methods from '@/utils/methods'

  export default {
    data() {
      return {
        codeTypes: codeTypes,
        content: dataContent          
      }
    },
    mounted() {
      Methods.setMaxHeight()
    },
  }
</script>

