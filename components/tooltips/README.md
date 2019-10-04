<ClientOnly>
# Tooltips

**Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-attributes for local title storage.**

## Overview
<br/>

Things to know when using the tooltip plugin:

* Tooltips rely on the 3rd party library [Popper.js](https://popper.js.org/) for positioning. You must include [popper.min.js](https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js) before bootstrap.js or use `bootstrap.bundle.min.js` / `bootstrap.bundle.js` which contains Popper.js in order for tooltips to work!
* If you’re building our JavaScript from source, it [requires util.js](https://getbootstrap.com/docs/4.3/getting-started/javascript/#util).
* Tooltips are opt-in for performance reasons, so **you must initialize them yourself**.
* Tooltips with zero-length titles are never displayed.
* Specify `container: 'body'` to avoid rendering problems in more complex components (like our input groups, button groups, etc).
* Triggering tooltips on hidden elements will not work.
* Tooltips for `.disabled` or `disabled` elements must be triggered on a wrapper element.
* When triggered from hyperlinks that span multiple lines, tooltips will be centered. Use `white-space: nowrap;` on your `<a>`s to avoid this behavior.
* Tooltips must be hidden before their corresponding elements have been removed from the DOM.
* Tooltips can be triggered thanks to an element inside a shadow DOM.


> The animation effect of this component is dependent on the `prefers-reduced-motion` media query. See the [reduced motion section of our accessibility documentation](https://getbootstrap.com/docs/4.3/getting-started/accessibility/#reduced-motion).

Got all that? Great, let’s see how they work with some examples.

<br/>

## Example: Enable tooltips everywhere

<br/>

One way to initialize all tooltips on a page would be to select them by their `data-toggle` attribute:

<source-code :codeType="codeTypes.JS" :content="content.ID_1" />


## Examples

<br/>

Hover over the links below to see tooltips:

Tight pants next level keffiyeh [you probably](https://getbootstrap.com/docs/4.3/components/tooltips/#) haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel [have a](#) terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's cleanse vegan chambray. A really ironic artisan [whatever keytar](#), scenester farm-to-table banksy Austin [twitter handle](#) freegan cred raw denim single-origin coffee viral.

***

Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left.

***

<br/>

<element-slot :elementCode="`${content.ID_2} ${content.ID_3}`" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.ID_2" />

And with custom HTML added:

<source-code :codeType="codeTypes.HTML" :content="content.ID_3" />

<br/>

## Usage

<br/>

The tooltip plugin generates content and markup on demand, and by default places tooltips after their trigger element.

Trigger the tooltip via JavaScript:

<source-code :codeType="codeTypes.JS" :content="content.ID_4" />

<br/>

> #### Overflow `auto` and `scroll`
>
> Tooltip position attempts to automatically change when a parent container has `overflow: auto` or `overflow: scroll` like our `.table-responsive`, but still keeps the original placement’s positioning. To resolve, set the `boundary` option to anything other than default value, `'scrollParent'`, such as `'window'`:
>
><source-code :codeType="codeTypes.JS" :content="content.ID_5" />

## Markup

<br/>

The required markup for a tooltip is only a `data` attribute and `title` on the HTML element you wish to have a tooltip. The generated markup of a tooltip is rather simple, though it does require a position (by default, set to `top` by the plugin).

<br/>

> #### Making tooltips work for keyboard and assistive technology users
>
> You should only add tooltips to HTML elements that are traditionally keyboard-focusable and interactive (such as links or form controls). Although arbitrary HTML elements (such as `<span>`s) can be made focusable by adding the `tabindex="0"` attribute, this will add potentially annoying and confusing tab stops on non-interactive elements for keyboard users. In addition, most assistive technologies currently do not announce the tooltip in this situation.
>
> Additionally, do not rely solely on `hover` as the trigger for your tooltip, as this will make your tooltips impossible to trigger for keyboard users.

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.ID_6" />

## Disabled elements

<br/>

Elements with the `disabled` attribute aren’t interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). As a workaround, you’ll want to trigger the tooltip from a wrapper `<div>` or `<span>`, ideally made keyboard-focusable using `tabindex="0"`, and override the `pointer-events` on the disabled element.

<br/>

<element-slot :elementCode="content.ID_7" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.ID_7" />

<br/>

## Options
<br>

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-animation=""`.

> Note that for security reasons the `sanitize`, `sanitizeFn` and `whiteList` options cannot be supplied using data attributes.

| Name          | Type        | Default | Description |
| ------------- |:------------|:------- |:----------- |
| animation     | boolean     | true    | Apply a CSS fade transition to the tooltip |
| container     | string \| element\| false |   false  |   Appends the tooltip to a specific element. Example: `container: 'body'`. This option is particularly useful in that it allows you to position the tooltip in the flow of the document near the triggering element - which will prevent the tooltip from floating away from the triggering element during a window resize. |
| delay | number \| object  |    0  |  Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type. If a number is supplied, delay is applied to both hide/show. Object structure is: `delay: { "show": 500, "hide": 100 } `  | 
| html |boolean  |    false   |    Allow HTML in the tooltip. <br><br>If true, HTML tags in the tooltip's `title` will be rendered in the tooltip. If false, jQuery's `text` method will be used to insert content into the DOM. <br><br>Use text if you're worried about XSS attacks.|
| placement |string \| function  |    'top'   | How to position the tooltip - auto \| top \| bottom \| left \| right. <br>When `auto` is specified, it will dynamically reorient the tooltip.<br><br> When a function is used to determine the placement, it is called with the tooltip DOM node as its first argument and the triggering element DOM node as its second. The `this` context is set to the tooltip instance.|
| selector     | string \| false     | false    | If a selector is provided, tooltip objects will be delegated to the specified targets. In practice, this is used to also apply tooltips to dynamically added DOM elements (`jQuery.on support`). See [this and an informative example](https://github.com/twbs/bootstrap/issues/4215). |
| template     | string     |**`'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'`**   | Base HTML to use when creating the tooltip. <br><br>The tooltip's `title` will be injected into the `.tooltip-inner`.<br><br> `.arrow` will become the tooltip's arrow. <br><br>The outermost wrapper element should have the .tooltip class and `role="tooltip"`. |
| title |	string \| element\| function	| '' |	Default title value if title attribute isn't present.<br><br> If a function is given, it will be called with its this reference set to the element that the tooltip is attached to.|
|trigger |	string | 'hover focus'	| How tooltip is triggered - click \| hover \| focus \| manual. You may pass multiple triggers; separate them with a space.<br><br> `'manual'` indicates that the tooltip will be triggered programmatically via the `.tooltip('show')`, `.tooltip('hide')` and `.tooltip('toggle')` methods; this value cannot be combined with any other trigger.<br><br> `'hover'` on its own will result in tooltips that cannot be triggered via the keyboard, and should only be used if alternative methods for conveying the same information for keyboard users is present.|
| offset |	number \| string \| function |	0	| Offset of the tooltip relative to its target.<br><br> When a function is used to determine the offset, it is called with an object containing the offset data as its first argument.<br><br> The function must return an object with the same structure. The triggering element DOM node is passed as the second argument.<br><br> For more information refer to Popper.js's [offset docs](https://popper.js.org/popper-documentation.html#modifiers..offset.offset).|
| fallbackPlacement | string \| array  |	'flip'	| Allow to specify which position Popper will use on fallback. For more information refer to Popper.js's [behavior docs](https://popper.js.org/popper-documentation.html#modifiers..flip.behavior)|
| boundary |	string \| element |	'scrollParent' | Overflow constraint boundary of the tooltip. Accepts the values of `'viewport'`, `'window'`, `'scrollParent'`, or an HTMLElement reference (JavaScript only). For more information refer to Popper.js's [preventOverflow docs](https://popper.js.org/popper-documentation.html#modifiers..preventOverflow.boundariesElement).|
| sanitize | boolean |	true |	Enable or disable the sanitization. If activated `'template'` and `'title'` options will be sanitized. |
| whiteList | object | [Default value](https://getbootstrap.com/docs/4.3/getting-started/javascript/#sanitizer) | Object which contains allowed attributes and tags |
| sanitizeFn |	null \| function  |	null  |	Here you can supply your own sanitize function. This can be useful if you prefer to use a dedicated library to perform sanitization. |

<br/>

> #### Data attributes for individual tooltips
> Options for individual tooltips can alternatively be specified through the use of data attributes, as explained above.

<br/>

## Methods
<br/>

> #### Asynchronous methods and transitions
> All API methods are asynchronous and start a transition. They return to the caller as soon as the transition is started but before it ends. In addition, a method call on a transitioning component will be ignored.
>
> [See our JavaScript documentation for more information](https://getbootstrap.com/docs/4.3/getting-started/javascript/).


### `$().tooltip(options)`

<br/>

Attaches a tooltip handler to an element collection.

### `.tooltip('show')`

<br/>

Reveals an element’s tooltip. Returns to the caller before the tooltip has actually been shown (i.e. before the `shown.bs.tooltip` event occurs). This is considered a “manual” triggering of the tooltip. Tooltips with zero-length titles are never displayed.


<source-code :codeType="codeTypes.JS" :content="content.ID_8" />

<br/>

### `.tooltip('hide')`

<br/>

Hides an element’s tooltip. **Returns to the caller before the tooltip has actually been hidden** (i.e. before the `hidden.bs.tooltip` event occurs). This is considered a “manual” triggering of the tooltip.

<source-code :codeType="codeTypes.JS" :content="content.ID_9" />

### `.tooltip('toggle')`

<br>

Toggles an element’s tooltip. **Returns to the caller before the tooltip has actually been shown or hidden** (i.e. before the `shown.bs.tooltip` or `hidden.bs.tooltip` event occurs). This is considered a “manual” triggering of the tooltip.

<source-code :codeType="codeTypes.JS" :content="content.ID_10" />

### `.tooltip('dispose')`

<br/>

Hides and destroys an element’s tooltip. Tooltips that use delegation (which are created using [the selector option](https://getbootstrap.com/docs/4.3/components/tooltips/#options)) cannot be individually destroyed on descendant trigger elements.

<source-code :codeType="codeTypes.JS" :content="content.ID_11" />

### `.tooltip('enable')`

<br>

Gives an element’s tooltip the ability to be shown. **Tooltips are enabled by default**.

<source-code :codeType="codeTypes.JS" :content="content.ID_12" />

### `.tooltip('disable')`

<br>

Removes the ability for an element’s tooltip to be shown. The tooltip will only be able to be shown if it is re-enabled.

<source-code :codeType="codeTypes.JS" :content="content.ID_13" />

### `.tooltip('toggleEnabled')`
<br>

Toggles the ability for an element’s tooltip to be shown or hidden.

<source-code :codeType="codeTypes.JS" :content="content.ID_14" />

### `.tooltip('update')`

<br>

Updates the position of an element’s tooltip.

<source-code :codeType="codeTypes.JS" :content="content.ID_15" />

## Events

<br>

| Event Type    | Description        |
| ------------- | ------------------ |
| show.bs.tooltip |	This event fires immediately when the `show `instance method is called. |
| shown.bs.tooltip | This event is fired when the tooltip has been made visible to the user (will wait for CSS transitions to complete). |
| hide.bs.tooltip |	This event is fired immediately when the `hide` instance method has been called |.
| hidden.bs.tooltip |	This event is fired when the tooltip has finished being hidden from the user (will wait for CSS transitions to complete).|
| inserted.bs.tooltip |	This event is fired after the `show.bs.tooltip` event when the tooltip template has been added to the DOM. |

<br>

<source-code :codeType="codeTypes.JS" :content="content.ID_16" />


</ClientOnly>

<script>
import jQuery from "jquery";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/js/src";
import * as codeTypes from '@/utils/codeTypes'
import TooltipsContent from '@/content/components/tooltips'
 export default {
    mounted() {
        jQuery(function() {
            jQuery('[data-toggle="tooltip"]').tooltip()
        })
    },
     data(){
         return {
             codeTypes: codeTypes, 
             content: TooltipsContent
         }
     }
 }
</script>

