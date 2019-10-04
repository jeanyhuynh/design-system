<ClientOnly>

# Toasts

**Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.**

<br>

Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. They’re built with flexbox, so they’re easy to align and position.

## Overview
<br>

Things to know when using the toast plugin:

* If you’re building our JavaScript from source, it [requires util.js](https://getbootstrap.com/docs/4.3/getting-started/javascript/#util).
* Toasts are opt-in for performance reasons, so *you must initialize them yourself*.
* **Please note that you are responsible for positioning toasts.**
* Toasts will automatically hide if you do not specify `autohide: false`.

<br>

## Examples

### Basic

To encourage extensible and predictable toasts, we recommend a header and body. Toast headers use `display: flex`, allowing easy alignment of content thanks to our margin and flexbox utilities.
<br>

Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.

<br/>

<element-slot :elementCode="content.data_1" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.data_1" />

<br>

## Translucent
<br>

Toasts are slightly translucent, too, so they blend over whatever they might appear over. For browsers that support the `backdrop-filter` CSS property, we’ll also attempt to blur the elements under a toast.

<br/>

<element-slot :elementCode="content.toastID_2" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.toastID_2" />

<br>

## Stacking
<br>

When you have multiple toasts, we default to vertically stacking them in a readable manner.

<br/>

<element-slot :elementCode="content.toastID_3" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.toastID_3" />

<br>

## Placement
<br>

Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you’re only ever going to show one toast at a time, put the positioning styles right on the `.toast`.

<br/>

<element-slot :elementCode="content.toastID_4" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.toastID_4" />

<br>

For systems that generate more notifications, consider using a wrapping element so they can easily stack.

<br/>

<element-slot :elementCode="content.toastID_5" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.toastID_5" />

<br>

You can also get fancy with flexbox utilities to align toasts horizontally and/or vertically.

<br/>

<element-slot :elementCode="content.toastID_6" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.toastID_6" />

<br>

## Accessibility

<br>

Toasts are intended to be small interruptions to your visitors or users, so to help those with screen readers and similar assistive technologies, you should wrap your toasts in an [aria-live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Changes to live regions (such as injecting/updating a toast component) are automatically announced by screen readers without needing to move the user’s focus or otherwise interrupt the user. Additionally, include `aria-atomic="true"` to ensure that the entire toast is always announced as a single (atomic) unit, rather than announcing what was changed (which could lead to problems if you only update part of the toast’s content, or if displaying the same toast content at a later point in time). If the information needed is important for the process, e.g. for a list of errors in a form, then use the [alert component](/components/alerts/) instead of toast.

Note that the live region needs to be present in the markup before the toast is generated or updated. If you dynamically generate both at the same time and inject them into the page, they will generally not be announced by assistive technologies.

You also need to adapt the `role` and `aria-live` level depending on the content. If it’s an important message like an error, use `role="alert" aria-live="assertive"`, otherwise use `role="status" aria-live="polite"` attributes.

As the content you’re displaying changes, be sure to update the [delay timeout](/components/toasts/#options) to ensure people have enough time to read the toast.

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.toastID_7" />

<br>

When using `autohide: false`, you must add a close button to allow users to dismiss the toast.

<br/>

<element-slot :elementCode="content.toastID_8" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.toastID_8" />

<br>

## JavaScript behavior

### Usage
<br>

Initialize toasts via JavaScript:

<source-code :codeType="codeTypes.JS" :content="content.toastID_9" />

### Options
<br>

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-animation=""`.

| Name          |	Type	| Default |	Description |
| ------------- |-------| ------- | ----------- |
| animation |	boolean |	true |	Apply a CSS fade transition to the toast|
| autohide |	boolean |	true |	Auto hide the toast|
| delay |	number |	500	| Delay hiding the toast (ms)|

### Methods
<br>

> **`Asynchronous methods and transitions`**
>
> All API methods are **asynchronous and** start a **transition**. They return to the caller as soon as the transition is started but **before it ends**. In addition, a method call on a **transitioning component will be ignored**.
>
>[See our JavaScript documentation for more information](https://getbootstrap.com/docs/4.3/getting-started/javascript/).

### `$().toast(options)`
<br>

Attaches a toast handler to an element collection.

### `.toast('show')`
<br>

Reveals an element’s toast. Returns to the caller before the toast has actually been shown (i.e. before the `shown.bs.toast` event occurs). You have to manually call this method, instead your toast won’t show.


<source-code :codeType="codeTypes.JS" :content="content.toastID_10" />

<br>

### `.toast('hide')`
<br>

Hides an element’s toast. **Returns to the caller before the toast has actually been hidden** (i.e. before the `hidden.bs.toast` event occurs). You have to manually call this method if you made `autohide` to `false`.

<source-code :codeType="codeTypes.JS" :content="content.toastID_11" />

<br>

### `.toast('dispose')`
<br>

Hides an element’s toast. Your toast will remain on the DOM but won’t show anymore.

<source-code :codeType="codeTypes.JS" :content="content.toastID_12" />

<br>

### Events

| Event Type    |	Description  |
| ------------- |------------- |
| show.bs.toast |	This event fires immediately when the show instance method is called. |
| shown.bs.toast |	This event is fired when the toast has been made visible to the user. |
| hide.bs.toast |	This event is fired immediately when the hide instance method has been called. |
| hidden.bs.toast	| This event is fired when the toast has finished being hidden from the user. |

<source-code :codeType="codeTypes.JS" :content="content.toastID_13" />

</ClientOnly>

<script>
import jQuery from "jquery";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/js/src";
import * as codeTypes from "@/utils/codeTypes";
import ToastsContent from '@/content/components/toasts'
export default {
  mounted() {
    jQuery(function() {
      jQuery('.toast').toast({ autohide: false }).toast('show')
    })
  },
  data() {
    return {
      codeTypes: codeTypes,
        content: ToastsContent
    };
  }
};
</script>