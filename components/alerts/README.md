<ClientOnly>
# Alerts

**Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.**

## Examples
<br />

Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight required contextual classes (e.g., `.alert-success`). For inline dismissal, use the [alerts jQuery plugin](/components/alerts/#dismissing) .

---

<element-slot :elementCode="content.data_1" />

<source-code :codeType="codeTypes.HTML" :content="content.data_1" />

<br />

> #### Conveying meaning to assistive technologies
>
> Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the ``.sr-only`` class.

## Link color
<br />

Use the `.alert-link` utility class to quickly provide matching colored links within any alert.

<element-slot :elementCode="content.data_2" />

<source-code :codeType="codeTypes.HTML" :content="content.data_2" />

## Additional content
<br />

Alerts can also contain additional HTML element-slots like headings, paragraphs and dividers.

<element-slot :elementCode="content.data_3" />

<source-code :codeType="codeTypes.HTML" :content="content.data_3" />

## Dismissing
<br />
Using the alert JavaScript plugin, it’s possible to dismiss any alert inline. Here’s how:
<br />
<br />

* Be sure you’ve loaded the alert plugin, or the compiled Bootstrap JavaScript.
* If you’re building our JavaScript from source, it [requires util.js](https://getbootstrap.com/docs/4.3/getting-started/javascript/#util) . The compiled version includes this.
* Add a dismiss button and the `.alert-dismissible` class, which adds extra padding to the right of the alert and positions the .close button.
* On the dismiss button, add the `data-dismiss="alert"` attribute, which triggers the JavaScript functionality. Be sure to use the `<button>` element-slot with it for proper behavior across all devices.
* To animate elementCode when dismissing them, be sure to add the `.fade` and `.show` classes.

You can see this in action with a live demo:

<element-slot :elementCode="content.data_4" />

<source-code :codeType="codeTypes.HTML" :content="content.data_4" />

## JavaScript behavior

### Triggers

Enable dismissal of an alert via JavaScript:

<source-code :codeType="codeTypes.JS" :content="content.data_5" />

Or with `data` attributes on a button **within the alert**, as demonstrated above:

<source-code :codeType="codeTypes.HTML" :content="content.data_6" />

Note that closing an alert will remove it from the DOM.

### Methods

| Method            | Description           |
| ----------------- |------------------ |
| **`$().alert()`**      | Makes an alert listen for click events on descendant elements which have the `data-dismiss="alert"` attribute. (Not necessary when using the data-api’s auto-initialization.) |
| **`$().alert('close')`**      | Closes an alert by removing it from the DOM. If the `.fade` and `.show` classes are present on the element, the alert will fade out before it is removed.      |
| **`$().alert('dispose')`** | Destroys an element’s alert.      |

<source-code :codeType="codeTypes.JS" :content="content.data_7" />

### Events

| Event        | Description           |
| ------------- |-------------| -----|
| **`close.bs.alert`**      | This event fires immediately when the `close` instance method is called. |
| **`closed.bs.alert`**      | This event is fired when the alert has been closed (will wait for CSS transitions to complete).      |

<source-code :codeType="codeTypes.JS" :content="content.data_8" />

</ClientOnly>

<script>
  import * as codeTypes from '@/utils/codeTypes'
  import AlertsContent from '@/content/components/alerts'

  export default {
    data() {
      return {
        codeTypes: codeTypes,
        content: AlertsContent
      }
    }
  }
</script>