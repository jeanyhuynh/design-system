<ClientOnly>

# List group

**List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.**

## Basic example
<br />

The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.

<element-slot :elementCode="content.data_1" />

<source-code :codeType="codeTypes.HTML" :content="content.data_1" />

## Active items
<br />

Add `.active` to a `.list-group-item` to indicate the current active selection.

<element-slot :elementCode="content.data_2" />

<source-code :codeType="codeTypes.HTML" :content="content.data_2" />

## Disabled items
<br />

Add `.disabled` to a `.list-group-item` to make it appear disabled. Note that some elements with `.disabled` will also require custom JavaScript to fully disable their click events (e.g., links).

<element-slot :elementCode="content.data_3" />

<source-code :codeType="codeTypes.HTML" :content="content.data_3" />

## Links and buttons
<br />

Use `<a>`s or `<button>`s to create actionable list group items with hover, disabled, and active states by adding `.list-group-item-action`. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like `<li>`s or `<div>`s) don’t provide a click or tap affordance.

Be sure to **not use the standard** `.btn` **classes here**.

<element-slot :elementCode="content.data_4" />

<source-code :codeType="codeTypes.HTML" :content="content.data_4" />

With `<button>`s, you can also make use of the `disabled` attribute instead of the `.disabled` class. Sadly, `<a>`s don’t support the disabled attribute.

<element-slot :elementCode="content.data_5" />

<source-code :codeType="codeTypes.HTML" :content="content.data_5" />

## Flush
<br />

Add `.list-group-flush` to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).

<element-slot :elementCode="content.data_6" />

<source-code :codeType="codeTypes.HTML" :content="content.data_6" />

## Horizontal
<br />

Add `.list-group-horizontal` to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant `.list-group-horizontal-{sm|md|lg|xl}` to make a list group horizontal starting at that breakpoint’s `min-width`. Currently **horizontal list groups cannot be combined with flush list groups.**

**ProTip:** Want equal-width list group items when horizontal? Add `.flex-fill` to each list group item.

<element-slot :elementCode="content.data_7" />

<source-code :codeType="codeTypes.HTML" :content="content.data_7" />

<element-slot :elementCode="content.data_8" />

<source-code :codeType="codeTypes.HTML" :content="content.data_8" />

<element-slot :elementCode="content.data_9" />

<source-code :codeType="codeTypes.HTML" :content="content.data_9" />

<element-slot :elementCode="content.data_10" />

<source-code :codeType="codeTypes.HTML" :content="content.data_10" />

<element-slot :elementCode="content.data_11" />

<source-code :codeType="codeTypes.HTML" :content="content.data_11" />

## Contextual classes
<br />

Use contextual classes to style list items with a stateful background and color.

<element-slot :elementCode="content.data_12" />

<source-code :codeType="codeTypes.HTML" :content="content.data_12" />

Contextual classes also work with `.list-group-item-action`. Note the addition of the hover styles here not present in the previous example. Also supported is the `.active` state; apply it to indicate an active selection on a contextual list group item.

<element-slot :elementCode="content.data_13" />

<source-code :codeType="codeTypes.HTML" :content="content.data_13" />

<br />

> #### Conveying meaning to assistive technologies
>
> Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.sr-only` class.

## With badges
<br />

Add badges to any list group item to show unread counts, activity, and more with the help of some [utilities](https://getbootstrap.com/docs/4.3/utilities/flex/).

<element-slot :elementCode="content.data_14" />

<source-code :codeType="codeTypes.HTML" :content="content.data_14" />

## Custom content
<br />

Add nearly any HTML within, even for linked list groups like the one below, with the help of [flexbox utilities](https://getbootstrap.com/docs/4.3/utilities/flex/).

<element-slot :elementCode="content.data_15" />

<source-code :codeType="codeTypes.HTML" :content="content.data_15" />

## JavaScript behavior
<br />

Use the tab JavaScript plugin—include it individually or through the compiled `bootstrap.js` file—to extend our list group to create tabbable panes of local content.

<element-slot :elementCode="content.data_16" />

<source-code :codeType="codeTypes.HTML" :content="content.data_16" />

### Using data attributes
<br />

You can activate a list group navigation without writing any JavaScript by simply specifying `data-toggle="list"` or on an element. Use these data attributes on `.list-group-item`.

<source-code :codeType="codeTypes.HTML" :content="content.data_17" />

### Via JavaScript
<br />

Enable tabbable list item via JavaScript (each list item needs to be activated individually):

<source-code :codeType="codeTypes.JS" :content="content.data_18" />

You can activate individual list item in several ways:

<source-code :codeType="codeTypes.JS" :content="content.data_19" />

### Fade effect
<br />

To make tabs panel fade in, add `.fade` to each `.tab-pane`. The first tab pane must also have `.show` to make the initial content visible.

<source-code :codeType="codeTypes.HTML" :content="content.data_20" />

### Methods

#### $().tab
<br />

Activates a list item element and content container. Tab should have either a `data-target` or an href targeting a container node in the DOM.

<source-code :codeType="codeTypes.HTML" :content="content.data_21" />

#### .tab(‘show’)
<br />

Selects the given list item and shows its associated pane. Any other list item that was previously selected becomes unselected and its associated pane is hidden. **Returns to the caller before the tab pane has actually been shown** (for example, before the `shown.bs.tab` event occurs).

<source-code :codeType="codeTypes.JS" :content="content.data_22" />

## Events
<br />

When showing a new tab, the events fire in the following order:

1. `hide.bs.tab` (on the current active tab)
2. `show.bs.tab` (on the to-be-shown tab)
3. `hidden.bs.tab` (on the previous active tab, the same one as for the `hide.bs.tab` event)
4. `shown.bs.tab` (on the newly-active just-shown tab, the same one as for the `show.bs.tab` event)

If no tab was already active, the `hide.bs.tab` and `hidden.bs.tab` events will not be fired.

| Event type    	| Description                                                                                                                                                                                                                   	|
|---------------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| show.bs.tab   	| This event fires on tab show, but before the new tab has been shown. Use `event.target` and `event.relatedTarget` to target the active tab and the previous active tab (if available) respectively.                               	|
| shown.bs.tab  	| This event fires on tab show after a tab has been shown. Use `event.target` and `event.relatedTarget` to target the active tab and the previous active tab (if available) respectively.                                           	|
| hide.bs.tab   	| This event fires when a new tab is to be shown (and thus the previous active tab is to be hidden). Use `event.target` and `event.relatedTarget` to target the current active tab and the new soon-to-be-active tab, respectively. 	|
| hidden.bs.tab 	| This event fires after a new tab is shown (and thus the previous active tab is hidden). Use `event.target` and `event.relatedTarget` to target the previous active tab and the new active tab, respectively.                      	|

<source-code :codeType="codeTypes.JS" :content="content.data_23" />

</ClientOnly>

<script>
  import * as codeTypes from '@/utils/codeTypes'
  import dataContent from '@/content/components/listGroup'

  export default {
    data() {
      return {
        codeTypes: codeTypes,
        content: dataContent          
      }
    }
  }
</script>