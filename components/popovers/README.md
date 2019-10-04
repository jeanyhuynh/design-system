<ClientOnly>

# Popovers
<br>

**Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site.**

<br>

## Overview
<br>

Things to know when using the popover plugin:

* Popovers rely on the 3rd party library [Popper.js](https://popper.js.org/) for positioning. You must include [popper.min.js](https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js) before bootstrap.js or use `bootstrap.bundle.min.js` /  `bootstrap.bundle.js` which contains Popper.js in order for popovers to work!
* Popovers require the [tooltip plugin](/components/tooltips/) as a dependency.
* If you’re building our JavaScript from source, it [requires util.js](https://getbootstrap.com/docs/4.3/getting-started/javascript/#util).
* Popovers are opt-in for performance reasons, so **you must initialize them yourself**.
* Zero-length `title` and `content` values will never show a popover.
* Specify `container: 'body'` to avoid rendering problems in more complex components (like our input groups, button groups, etc).
* Triggering popovers on hidden elements will not work.
* Popovers for `.disabled` or `disabled` elements must be triggered on a wrapper element.
* When triggered from anchors that wrap across multiple lines, popovers will be centered between the anchors’ overall width. Use `.text-nowrap` on your `<a>`s to avoid this behavior.
* Popovers must be hidden before their corresponding elements have been removed from the DOM.
* Popovers can be triggered thanks to an element inside a shadow DOM.

<br>

> The animation effect of this component is dependent on the `prefers-reduced-motion`
> media query. See the [reduced motion section of our accessibility documentation](https://getbootstrap.com/docs/4.3/getting-started/accessibility/#reduced-motion).

Keep reading to see how popovers work with some examples.

## Example: Enable popovers everywhere
<br>

One way to initialize all popovers on a page would be to select them by their `data-toggle` attribute:

<source-code :codeType="codeTypes.JS" :content="content.popvers_Id_1" />

## Example: Using the `container` option
<br>

When you have some styles on a parent element that interfere with a popover, you’ll want to specify a custom `container` so that the popover’s HTML appears within that element instead.

<source-code :codeType="codeTypes.JS" :content="content.popvers_Id_2" />

## Example

<br/>

<element-slot :elementCode="content.popvers_Id_3" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.popvers_Id_3" />

<br>

## Four directions
<br>

Four options are available: top, right, bottom, and left aligned.

<br/>

<element-slot :elementCode="content.popvers_Id_4" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.popvers_Id_4" />

## Dismiss on next click
<br>

Use the `focus` trigger to dismiss popovers on the user’s next click of a different element than the toggle element.

<br>

> **Specific markup required for dismiss-on-next-click**
> 
> For proper cross-browser and cross-platform behavior, you must use the `<a>` tag, not the `<button>` tag, and you also must include a [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) attribute.

<br/>

<element-slot :elementCode="content.popvers_Id_5" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.popvers_Id_5" />

<br/>

<source-code :codeType="codeTypes.JS" :content="content.popvers_Id_6" />

## Disabled elements
<br>

Elements with the `disabled` attribute aren’t interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you’ll want to trigger the popover from a wrapper `<div>` or `<span>` and override the `pointer-events` on the disabled element.

For disabled popover triggers, you may also prefer `data-trigger="hover"` so that the popover appears as immediate visual feedback to your users as they may not expect to click on a disabled element.

<br/>

<element-slot :elementCode="content.popvers_Id_7" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.popvers_Id_7" />

## Usage
<br>

Enable popovers via JavaScript:
<br/>

<source-code :codeType="codeTypes.JS" :content="content.popvers_Id_8" />

## Options
<br>

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-animation=""`.

> Note that for security reasons the `sanitize`, `sanitizeFn` and `whiteList` options cannot be supplied using data attributes.

<br>


| Name |	Type	| Default	 |  Description |
| ---- | ----------	| ---------- |  ----------- |
| animation  |	boolean   | 	true  |	Apply a CSS fade transition to the popover |
| container  |	string\| element\| false  |	false	|  Appends the popover to a specific element. Example: `container: 'body'`. This option is particularly useful in that it allows you to position the popover in the flow of the document near the triggering element - which will prevent the popover from floating away from the triggering element during a window resize.  |
| content  |  string\| element\| function	 | ''	| Default content value if `data-content` attribute isn't present.<br>If a function is given, it will be called with its this reference set to the element that the popover is attached to. |
|  delay  |	number\| object  | 	0  |  Delay showing and hiding the popover (ms) - does not apply to manual trigger type <br> If a number is supplied, delay is applied to both hide/show <br> Object structure is: `delay: { "show": 500, "hide": 100 }` |
| html	|  boolean  | 	false	| Insert HTML into the popover. If false, jQuery's text method will be used to insert content into the DOM. Use text if you're worried about XSS attacks. |
| placement	 | string\| function	|  'right'	 |  How to position the popover - auto \| top \| bottom \| left \| right. <br> When `auto` is specified, it will dynamically reorient the popover. <br> When a function is used to determine the placement, it is called with the popover DOM node as its first argument and the triggering element DOM node as its second. The `this` context is set to the popover instance.
| selector	|  string \| false 	|  false	|  If a selector is provided, popover objects will be delegated to the specified targets. In practice, this is used to enable dynamic HTML content to have popovers added. See [this](https://github.com/twbs/bootstrap/issues/4215) and [an informative example](https://codepen.io/Johann-S/pen/djJYPb). |
| template	| string	| `'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'` |  Base HTML to use when creating the popover.<br> The popover's `title` will be injected into the `.popover-header`.<br> The popover's `content` will be injected into the `.popover-body`.<br> `.arrow` will become the popover's arrow.<br> The outermost wrapper element should have the `.popover` class. |
|  title  |  string\| element\| function  |	''	|  Default title value if title attribute isn't present.<br> If a function is given, it will be called with its this reference set to the element that the popover is attached to. |
| trigger	|  string	|  'click'	| How popover is triggered - click\| hover\| focus\| manual. You may pass multiple triggers; separate them with a space. `manual` cannot be combined with any other trigger. |
|  offset	|  number\| string	|  0  |  Offset of the popover relative to its target. For more information refer to Popper.js's [offset docs](https://popper.js.org/popper-documentation.html#modifiers..offset.offset). |
|  fallbackPlacement	|  string\| array  |  'flip'  |	Allow to specify which position Popper will use on fallback. For more information refer to Popper.js's [behavior docs](https://popper.js.org/popper-documentation.html#modifiers..flip.behavior)  |
| boundary	|  string\| element  |	'scrollParent'  |  Overflow constraint boundary of the popover. Accepts the values of `'viewport'`, `'window'`, `'scrollParent'`, or an HTMLElement reference (JavaScript only). For more information refer to Popper.js's [preventOverflow](https://popper.js.org/popper-documentation.html#modifiers..preventOverflow.boundariesElement) docs. |
|  sanitize	 |  boolean	 |  true  |  Enable or disable the sanitization. If activated `'template'`, `'content'` and `'title'` options will be sanitized. |
|  whiteList  |  object	 |  [Default value](https://getbootstrap.com/docs/4.3/getting-started/javascript/#sanitizer)  |   Object which contains allowed attributes and tags |
|  sanitizeFn	|  null\| function	 |   null  |  Here you can supply your own sanitize function. This can be useful if you prefer to use a dedicated library to perform sanitization. |
<br>

> ##### Data attributes for individual popovers
>
> Options for individual popovers can alternatively be specified through the use of data attributes, as explained above.

## Methods
<br>

> #### Asynchronous methods and transitions
> All API methods are **asynchronous** and start a **transition**. They return to the caller > as soon as the transition is started but **before it ends**. In addition, a method  call on a **transitioning component will be ignored**.
> 
> [See our JavaScript documentation for more information](https://getbootstrap.com/docs/4.3/getting-started/javascript/).

### `$().popover(options)`
<br>

Initializes popovers for an element collection.

### `.popover('show')`
<br>

Reveals an element’s popover. **Returns to the caller before the popover has actually been shown** (i.e. before the `shown.bs.popover` event occurs). This is considered a “manual” triggering of the popover. Popovers whose both title and content are zero-length are never displayed.

<source-code :codeType="codeTypes.JS" :content="content.popvers_Id_9" />

### `.popover('hide')`
<br>

Hides an element’s popover. **Returns to the caller before the popover has actually been hidden** (i.e. before the `hidden.bs.popover` event occurs). This is considered a “manual” triggering of the popover.

<source-code :codeType="codeTypes.JS" :content="content.popvers_Id_10" />

### `.popover('toggle')`
<br>

Toggles an element’s popover. **Returns to the caller before the popover has actually been shown or hidden** (i.e. before the `shown.bs.popover` or `hidden.bs.popover` event occurs). This is considered a “manual” triggering of the popover.

<source-code :codeType="codeTypes.JS" :content="content.popvers_Id_11" />

### `.popover('dispose')`
<br>

Hides and destroys an element’s popover. Popovers that use delegation (which are created using [the selector option](https://getbootstrap.com/docs/4.3/components/popovers/#options)) cannot be individually destroyed on descendant trigger elements.

<source-code :codeType="codeTypes.JS" :content="content.popvers_Id_12" />

### `.popover('enable')`
<br>

Gives an element’s popover the ability to be shown. **Popovers are enabled by default.**

<source-code :codeType="codeTypes.JS" :content="content.popvers_Id_13" />

### `.popover('disable')`
<br>

Removes the ability for an element’s popover to be shown. The popover will only be able to be shown if it is re-enabled.

<source-code :codeType="codeTypes.JS" :content="content.popvers_Id_14" />

### `.popover('toggleEnabled')`
<br>

Toggles the ability for an element’s popover to be shown or hidden.

<source-code :codeType="codeTypes.JS" :content="content.popvers_Id_15" />

### `.popover('update')`
<br>

Updates the position of an element’s popover.

<source-code :codeType="codeTypes.JS" :content="content.popvers_Id_16" />

## Events

| Event  | Type	| Description |
| ------ | ------ | ---------- |
| show.bs.popover	|  This event fires immediately when the `show` instance method is called. |
| shown.bs.popover	| This event is fired when the popover has been made visible to the user (will wait for CSS transitions to complete). |
| hide.bs.popover	| This event is fired immediately when the `hide` instance method has been called. |
| hidden.bs.popover	 | This event is fired when the popover has finished being hidden from the user (will wait for CSS transitions to complete). | 
| inserted.bs.popover	| This event is fired after the `show.bs.popover` event when the popover template has been added to the DOM. |


<source-code :codeType="codeTypes.JS" :content="content.popvers_Id_17" />

</ClientOnly>

<script>
import jQuery from "jquery";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/js/src";
import * as codeTypes from "@/utils/codeTypes";
import PopversContent from '@/content/components/popovers'
export default {
  mounted() {
    jQuery(function() {
      jQuery('[data-toggle="popover"]').popover()
      jQuery('#popover-dismiss').popover({
                trigger: 'focus'
            })
    })
  },
  data() {
    return {
      codeTypes: codeTypes,
        content: PopversContent
    };
  }
};
</script>