<ClientOnly>

# Collapse

**Toggle the visibility of content across your project with a few classes and our JavaScript plugins.**

## How it works
<br />

The collapse JavaScript plugin is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Collapsing an element will animate the `height` from its current value to `0`. Given how CSS handles animations, you cannot use `padding` on a `.collapse` element. Instead, use the class as an independent wrapping element.

> The animation effect of this component is dependent on the `prefers-reduced-motion` media query. See the [reduced motion section of our accessibility documentation](https://getbootstrap.com/docs/4.3/getting-started/accessibility/#reduced-motion).

## Example
<br />

Click the buttons below to show and hide another element via class changes:

- `.collapse` hides content
- `.collapsing` is applied during transitions
- `.collapse.show` shows content

You can use a link with the `href` attribute, or a button with the `data-target` attribute. In both cases, the `data-toggle="collapse"` is required.

<element-slot :elementCode="content.data_1" />

<source-code :codeType="codeTypes.HTML" :content="content.data_1" />

## Multiple targets
<br />

A `<button>` or `<a>` can show and hide multiple elements by referencing them with a JQuery selector in its `href` or `data-target` attribute. Multiple `<button>` or `<a>` can show and hide an element if they each reference it with their `href` or `data-target` attribute

<element-slot :elementCode="content.data_2" />

<source-code :codeType="codeTypes.HTML" :content="content.data_2" />

## Accordion example
<br />

Using the [card](/components/cards/) component, you can extend the default collapse behavior to create an accordion. To properly achieve the accordion style, be sure to use `.accordion` as a wrapper.

<element-slot :elementCode="content.data_3" />

<source-code :codeType="codeTypes.HTML" :content="content.data_3" />

## Accessibility
<br />

Be sure to add `aria-expanded` to the control element. This attribute explicitly conveys the current state of the collapsible element tied to the control to screen readers and similar assistive technologies. If the collapsible element is closed by default, the attribute on the control element should have a value of `aria-expanded="false"`. If you’ve set the collapsible element to be open by default using the `show` class, set `aria-expanded="true"` on the control instead. The plugin will automatically toggle this attribute on the control based on whether or not the collapsible element has been opened or closed (via JavaScript, or because the user triggered another control element also tied to the same collapsbile element). If the control element’s HTML element is not a button (e.g., an `<a>` or `<div>`), the attribute `role="button"` should be added to the element.

If your control element is targeting a single collapsible element – i.e. the `data-target` attribute is pointing to an `id` selector – you should add the `aria-controls` attribute to the control element, containing the `id` of the collapsible element. Modern screen readers and similar assistive technologies make use of this attribute to provide users with additional shortcuts to navigate directly to the collapsible element itself.

Note that Bootstrap’s current implementation does not cover the various keyboard interactions described in the [WAI-ARIA Authoring Practices 1.1 accordion pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion) - you will need to include these yourself with custom JavaScript.

## Usage
<br />

The collapse plugin utilizes a few classes to handle the heavy lifting:

- `.collapse` hides content
- `.collapse.show` shows the content
- `.collapsing` is added when the transition starts, and removed when it finishes

These classes can be found in `_transitions.scss`.

## Via data attributes
<br />

Just add `data-toggle="collapse"` and a `data-target` to the element to automatically assign control of one or more collapsible elements. The `data-target` attribute accepts a CSS selector to apply the collapse to. Be sure to add the class `collapse` to the collapsible element. If you’d like it to default open, add the additional class `show`.

To add accordion-like group management to a collapsible area, add the data attribute `data-parent="#selector"`. Refer to the demo to see this in action.

## Via JavaScript
<br />

Enable manually with:

<source-code :codeType="codeTypes.JS" :content="content.data_4" />

## Options
<br />

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-parent=""`.

| Name        | Type           | Default  | Description  |
| ------------- |-------------| -----| -----|
| parent      | selector \| jQuery object \| DOM element | false | If parent is provided, then all collapsible elements under the specified parent will be closed when this collapsible item is shown. (similar to traditional accordion behavior - this is dependent on the `card` class). The attribute has to be set on the target collapsible area.
| toggle    | boolean      |   true | Toggles the collapsible element on invocation |

## Sizing
<br />

Cards assume no specific `width` to start, so they’ll be 100% wide unless otherwise stated. You can change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities.

## Methods
<br />

> #### Asynchronous methods and transitions
>
> All API methods are **asynchronous** and start a **transition**. They return to the caller as soon as the transition is started but **before it ends**. In addition, a method call on a **transitioning component will be ignored**.
>
> [See our JavaScript documentation for more information](https://getbootstrap.com/docs/4.3/getting-started/javascript/).

### `.collapse(options)`
<br />

Activates your content as a collapsible element. Accepts an optional options `object`.

<source-code :codeType="codeTypes.JS" :content="content.data_5" />

### `.collapse('toggle')`
<br />

Toggles a collapsible element to shown or hidden. **Returns to the caller before the collapsible element has actually been shown or hidden** (i.e. before the `shown.bs.collapse` or `hidden.bs.collapse` event occurs).

### `.collapse('show')`
<br />

Shows a collapsible element. **Returns to the caller before the collapsible element has actually been shown** (i.e. before the `shown.bs.collapse` event occurs).

### `.collapse('hide')`
<br />

Hides a collapsible element. **Returns to the caller before the collapsible element has actually been hidden** (i.e. before the `hidden.bs.collapse` event occurs).

### `.collapse('dispose')`
<br />

Destroys an element’s collapse.

## Events
<br />

Bootstrap’s collapse class exposes a few events for hooking into collapse functionality.

| Event Type | Description |
| ------------- |-------------|
| **show.bs.collapse**      | This event fires immediately when the `show` instance method is called. |
| **shown.bs.collapse**      | This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete).      |
| **hide.bs.collapse** | This event is fired immediately when the `hide` method has been called.      |
| **hidden.bs.collapse** | This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete).     |

<source-code :codeType="codeTypes.JS" :content="content.data_6" />

</ClientOnly>

<script>
  import * as codeTypes from '@/utils/codeTypes'
  import CollapseContent from '@/content/components/collapse'

  export default {
    data() {
      return {
        codeTypes: codeTypes,
        content: CollapseContent          
      }
    }
  }
</script>