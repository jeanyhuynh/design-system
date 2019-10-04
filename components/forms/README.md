<ClientOnly>

# Forms

**Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.**

## Overview
<br />

Bootstrap’s form controls expand on [our Rebooted form styles](https://getbootstrap.com/docs/4.3/content/reboot/#forms) with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.

Be sure to use an appropriate `type` attribute on all inputs (e.g., `email` for email address or `number` for numerical information) to take advantage of newer input controls like email verification, number selection, and more.

Here’s a quick example to demonstrate Bootstrap’s form styles. Keep reading for documentation on required classes, form layout, and more.

<element-slot :elementCode="content.data_1" />

<source-code :codeType="codeTypes.HTML" :content="content.data_1" />

## Form controls
<br />

Textual form controls—like `<input>`s, `<select>`s, and `<textarea>`s—are styled with the `.form-control` class. Included are styles for general appearance, focus state, sizing, and more.

Be sure to explore our [custom forms](/components/forms/custom-forms/) to further style `<select>`s.

<element-slot :elementCode="content.data_2" />

<source-code :codeType="codeTypes.HTML" :content="content.data_2" />

For file inputs, swap the `.form-control` for `.form-control-file`.

<element-slot :elementCode="content.data_3" />

<source-code :codeType="codeTypes.HTML" :content="content.data_3" />

### Sizing
<br />

Set heights using classes like `.form-control-lg` and `.form-control-sm`.

<element-slot :elementCode="content.data_4" />

<source-code :codeType="codeTypes.HTML" :content="content.data_4" />

<element-slot :elementCode="content.data_5" />

<source-code :codeType="codeTypes.HTML" :content="content.data_5" />

### Readonly
<br />

Add the `readonly` boolean attribute on an input to prevent modification of the input’s value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.

<element-slot :elementCode="content.data_6" />

<source-code :codeType="codeTypes.HTML" :content="content.data_6" />

### Readonly plain text
<br />

If you want to have `<input readonly>` elements in your form styled as plain text, use the `.form-control-plaintext` class to remove the default form field styling and preserve the correct margin and padding.

<element-slot :elementCode="content.data_7" />

<source-code :codeType="codeTypes.HTML" :content="content.data_7" />

<element-slot :elementCode="content.data_8" />

<source-code :codeType="codeTypes.HTML" :content="content.data_8" />

## Range Inputs
<br />

Set horizontally scrollable range inputs using `.form-control-range`.

<element-slot :elementCode="content.data_9" />

<source-code :codeType="codeTypes.HTML" :content="content.data_9" />

## Checkboxes and radios

Default checkboxes and radios are improved upon with the help of `.form-check`, **a single class for both input types that improves the layout and behavior of their HTML elements**. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.

Disabled checkboxes and radios are supported. The `disabled` attribute will apply a lighter color to help indicate the input’s state.

Checkboxes and radios use are built to support HTML-based form validation and provide concise, accessible labels. As such, our `<input>`s and `<label>`s are sibling elements as opposed to an `<input>` within a `<label>`. This is slightly more verbose as you must specify `id` and `for` attributes to relate the `<input>` and `<label>`.

### Default (stacked)
<br />

By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with `.form-check`.

<element-slot :elementCode="content.data_10" />

<source-code :codeType="codeTypes.HTML" :content="content.data_10" />

<element-slot :elementCode="content.data_11" />

<source-code :codeType="codeTypes.HTML" :content="content.data_11" />

### Inline
<br />

Group checkboxes or radios on the same horizontal row by adding `.form-check-inline` to any `.form-check`.

<element-slot class="show-item" :elementCode="content.data_12" />

<source-code :codeType="codeTypes.HTML" :content="content.data_12" />

<element-slot class="show-item" :elementCode="content.data_13" />

<source-code :codeType="codeTypes.HTML" :content="content.data_13" />

### Without labels
<br />

Add `.position-static` to inputs within `.form-check` that don’t have any label text. Remember to still provide some form of label for assistive technologies (for instance, using aria-label).

<element-slot class="show-item" :elementCode="content.data_14" />

<source-code :codeType="codeTypes.HTML" :content="content.data_14" />

## Layout
<br />

Since Bootstrap applies `display: block` and `width: 100%` to almost all our form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis.

### Form groups
<br />

The `.form-group` class is the easiest way to add some structure to forms. It provides a flexible class that encourages proper grouping of labels, controls, optional help text, and form validation messaging. By default it only applies `margin-bottom`, but it picks up additional styles in `.form-inline` as needed. Use it with `<fieldset>`s, `<div>`s, or nearly any other element.

<element-slot :elementCode="content.data_15" />

<source-code :codeType="codeTypes.HTML" :content="content.data_15" />

### Form grid
<br />

More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.

<element-slot class="show-item" :elementCode="content.data_16" />

<source-code :codeType="codeTypes.HTML" :content="content.data_16" />

### Form row
<br />

You may also swap `.row` for `.form-row`, a variation of our standard grid row that overrides the default column gutters for tighter and more compact layouts.

<element-slot class="show-item" :elementCode="content.data_17" />

<source-code :codeType="codeTypes.HTML" :content="content.data_17" />

More complex layouts can also be created with the grid system.

<element-slot class="show-item" :elementCode="content.data_18" />

<source-code :codeType="codeTypes.HTML" :content="content.data_18" />

### Horizontal form
<br />

Create horizontal forms with the grid by adding the `.row` class to form groups and using the `.col-*-*` classes to specify the width of your labels and controls. Be sure to add `.col-form-label` to your `<label>`s as well so they’re vertically centered with their associated form controls.

At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, we’ve removed the `padding-top` on our stacked radio inputs label to better align the text baseline.

<element-slot class="show-item" :elementCode="content.data_19" />

<source-code :codeType="codeTypes.HTML" :content="content.data_19" />

### Horizontal form label sizing
<br />

Be sure to use `.col-form-label-sm` or `.col-form-label-lg` to your `<label>`s or `<legend>`s to correctly follow the size of `.form-control-lg` and `.form-control-sm`.

<element-slot class="show-item" :elementCode="content.data_20" />

<source-code :codeType="codeTypes.HTML" :content="content.data_20" />

### Column sizing
<br />

As shown in the previous examples, our grid system allows you to place any number of `.cols` within a `.row` or `.form-row`. They’ll split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining `.cols` equally split the rest, with specific column classes like `.col-7`.

<element-slot class="show-item" :elementCode="content.data_21" />

<source-code :codeType="codeTypes.HTML" :content="content.data_21" />

### Auto-sizing
<br />

The example below uses a flexbox utility to vertically center the contents and changes `.col` to `.col-auto` so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents.

<element-slot class="show-item" :elementCode="content.data_22" />

<source-code :codeType="codeTypes.HTML" :content="content.data_22" />

You can then remix that once again with size-specific column classes.

<element-slot class="show-item" :elementCode="content.data_23" />

<source-code :codeType="codeTypes.HTML" :content="content.data_23" />

And of course [custom form controls](/components/forms/custom-forms/) are supported.

<element-slot class="show-item" :elementCode="content.data_24" />

<source-code :codeType="codeTypes.HTML" :content="content.data_24" />

### Inline forms
<br />

Use the `.form-inline` class to display a series of labels, form controls, and buttons on a single horizontal row. Form controls within inline forms vary slightly from their default states.

- Controls are `display: flex`, collapsing any HTML white space and allowing you to provide alignment control with [spacing](https://getbootstrap.com/docs/4.3/utilities/spacing/) and [flexbox](https://getbootstrap.com/docs/4.3/utilities/flex/) utilities.
- Controls and input groups receive `width: auto` to override the Bootstrap default `width: 100%`.
- Controls **only appear inline in viewports that are at least 576px wide** to account for narrow viewports on mobile devices.

You may need to manually address the width and alignment of individual form controls with [spacing utilities](https://getbootstrap.com/docs/4.3/utilities/spacing/) (as shown below). Lastly, be sure to always include a `<label>` with each form control, even if you need to hide it from non-screenreader visitors with `.sr-only`.

<element-slot class="show-item" :elementCode="content.data_25" />

<source-code :codeType="codeTypes.HTML" :content="content.data_25" />

Custom form controls and selects are also supported.

<element-slot class="show-item" :elementCode="content.data_26" />

<source-code :codeType="codeTypes.HTML" :content="content.data_26" />
<br />

> #### Alternatives to hidden labels
>
> Assistive technologies such as screen readers will have trouble with your forms if you don’t include a label for every input. For these inline forms, you can hide the labels using the `.sr-only` class. There are further alternative methods of providing a label for assistive technologies, such as the `aria-label`, `aria-labelledby` or `title` attribute. If none of these are present, assistive technologies may resort to using the `placeholder` attribute, if present, but note that use of `placeholder` as a replacement for other labelling methods is not advised.

## Help text
<br />

Block-level help text in forms can be created using `.form-text` (previously known as `.help-block` in v3). Inline help text can be flexibly implemented using any inline HTML element and utility classes like `.text-muted`.

> #### Associating help text with form controls
>
> Help text should be explicitly associated with the form control it relates to using the `aria-describedby` attribute. This will ensure that assistive technologies—such as screen readers—will announce this help text when the user focuses or enters the control.

Help text below inputs can be styled with `.form-text`. This class includes `display: block` and adds some top margin for easy spacing from the inputs above.

<element-slot :elementCode="content.data_27" />

<source-code :codeType="codeTypes.HTML" :content="content.data_27" />

Inline text can use any typical inline HTML element (be it a `<small>`, `<span>`, or something else) with nothing more than a utility class.

<element-slot :elementCode="content.data_28" />

<source-code :codeType="codeTypes.HTML" :content="content.data_28" />

## Disabled forms
<br />

Add the `disabled` boolean attribute on an input to prevent user interactions and make it appear lighter.

<source-code :codeType="codeTypes.HTML" :content="content.data_29" />

Add the `disabled` attribute to a `<fieldset>` to disable all the controls within.

<element-slot :elementCode="content.data_30" />

<source-code :codeType="codeTypes.HTML" :content="content.data_30" />

> #### Caveat with anchors
>
> By default, browsers will treat all native form controls (`<input>`, `<select>` and `<button>` elements) inside a `<fieldset disabled>` as disabled, preventing both keyboard and mouse interactions on them. However, if your form also includes `<a ... class="btn btn-*">` elements, these will only be given a style of `pointer-events: none`. As noted in the section about [disabled state for buttons](/components/buttons/disabled-state/) (and specifically in the sub-section for anchor elements), this CSS property is not yet standardized and isn’t fully supported in Internet Explorer 10, and won’t prevent keyboard users from being able to focus or activate these links. So to be safe, use custom JavaScript to disable such links.

<br />

> #### Cross-browser compatibility
>
> While Bootstrap will apply these styles in all browsers, Internet Explorer 11 and below don’t fully support the `disabled` attribute on a `<fieldset>`. Use custom JavaScript to disable the fieldset in these browsers.

## Validation
<br />

Provide valuable, actionable feedback to your users with HTML5 form validation–[available in all our supported browsers](https://caniuse.com/#feat=form-validation). Choose from the browser default validation feedback, or implement custom messages with our built-in classes and starter JavaScript.

> We currently recommend using custom validation styles, as native browser default validation messages are not consistently exposed to assistive technologies in all browsers (most notably, Chrome on desktop and mobile).

### How it works
<br />

Here’s how form validation works with Bootstrap:

- HTML form validation is applied via CSS’s two pseudo-classes, `:invalid` and `:valid`. It applies to `<input>`, `<select>`, and `<textarea>` elements.
- Bootstrap scopes the `:invalid` and `:valid` styles to parent `.was-validated` class, usually applied to the `<form>`. Otherwise, any required field without a value shows up as invalid on page load. This way, you may choose when to activate them (typically after form submission is attempted).
- To reset the appearance of the form (for instance, in the case of dynamic form submissions using AJAX), remove the `.was-validated` class from the `<form>` again after submission.
- As a fallback, `.is-invalid` and `.is-valid` classes may be used instead of the pseudo-classes for [server side validation](https://getbootstrap.com/docs/4.3/components/forms/#server-side). They do not require a `.was-validated` parent class.
- Due to constraints in how CSS works, we cannot (at present) apply styles to a `<label>` that comes before a form control in the DOM without the help of custom JavaScript.
- All modern browsers support the [constraint validation API](https://www.w3.org/TR/html5/sec-forms.html#the-constraint-validation-api), a series of JavaScript methods for validating form controls.
- Feedback messages may utilize the [browser defaults](https://getbootstrap.com/docs/4.3/components/forms/#browser-defaults) (different for each browser, and unstylable via CSS) or our custom feedback styles with additional HTML and CSS.
- You may provide custom validity messages with `setCustomValidity` in JavaScript.

With that in mind, consider the following demos for our custom form validation styles, optional server side classes, and browser defaults.

### Custom styles
<br />

For custom Bootstrap form validation messages, you’ll need to add the `novalidate` boolean attribute to your `<form>`. This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you’ll see the :invalid and :valid styles applied to your form controls.

Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback. Background icons for `<select>`s are only available with `.custom-select`, and not `.form-control`.

<element-slot :elementCode="content.data_31" />

<source-code :codeType="codeTypes.HTML" :content="content.data_31" />

### Browser defaults
<br />

Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll see a slightly different style of feedback.

While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.

<element-slot :elementCode="content.data_32" />

<source-code :codeType="codeTypes.HTML" :content="content.data_32" />

### Server side
<br />

We recommend using client-side validation, but in case you require server-side validation, you can indicate invalid and valid form fields with `.is-invalid` and `.is-valid`. Note that `.invalid-feedback` is also supported with these classes.

<element-slot :elementCode="content.data_33" />

<source-code :codeType="codeTypes.HTML" :content="content.data_33" />

### Supported elements
<br />

Validation styles are available for the following form controls and components:

- `<input>`s and `<textarea>`s with `.form-control` (including up to one `.form-control` in input groups)
- `<select>`s with `.form-select` or `.custom-select`
- `.form-checks`
- `.custom-checkbox`s and `.custom-radios`
- `.custom-file`

<element-slot :elementCode="content.data_34" />

<source-code :codeType="codeTypes.HTML" :content="content.data_34" />

### Tooltips
<br />

If your form layout allows it, you can swap the `.{valid|invalid}-feedback` classes for `.{valid|invalid}-tooltip` classes to display validation feedback in a styled tooltip. Be sure to have a parent with `position: relative` on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.

<element-slot :elementCode="content.data_35" />

<source-code :codeType="codeTypes.HTML" :content="content.data_35" />

### Customizing
<br />

Validation states can be customized via Sass with the `$form-validation-states` map. Located in our `_variables.scss` file, this Sass map is looped over to generate the default `valid/invalid` validation states. Included is a nested map for customizing each state’s color and icon. While no other states are supported by browsers, those using custom styles can easily add more complex form feedback.

Please note that we do not recommend customizing these values without also modifying the `form-validation-state` mixin.

<source-code :codeType="codeTypes.CSS" :content="content.data_36" />

## Custom forms
<br />

For even more customization and cross browser consistency, use our completely custom form elements to replace the browser defaults. They’re built on top of semantic and accessible markup, so they’re solid replacements for any default form control.

### Checkboxes and radios
<br />

Each checkbox and radio `<input>` and `<label>` pairing is wrapped in a `<div>` to create our custom control. Structurally, this is the same approach as our default `.form-check`.

We use the sibling selector (`~`) for all our `<input>` states—like `:checked`—to properly style our custom form indicator. When combined with the `.custom-control-label` class, we can also style the text for each item based on the `<input>`’s state.

We hide the default `<input>` with `opacity` and use the `.custom-control-label` to build a new custom form indicator in its place with `::before` and `::after`. Unfortunately we can’t build a custom one from just the `<input>` because CSS’s `content` doesn’t work on that element.

In the checked states, we use **base64 embedded SVG icons** from [Open Iconic](https://github.com/iconic/open-iconic). This provides us the best control for styling and positioning across browsers and devices.

### Checkboxes
<br />

<element-slot :elementCode="content.data_37" />

<source-code :codeType="codeTypes.HTML" :content="content.data_37" />

Custom checkboxes can also utilize the `:indeterminate` pseudo class when manually set via JavaScript (there is no available HTML attribute for specifying it).

<element-slot :elementCode="content.data_38" />

If you’re using jQuery, something like this should suffice:

<source-code :codeType="codeTypes.JS" :content="content.data_39" />

### Radios
<br />

<element-slot :elementCode="content.data_40" />

<source-code :codeType="codeTypes.HTML" :content="content.data_40" />

### Inline
<br />

<element-slot :elementCode="content.data_41" />

<source-code :codeType="codeTypes.HTML" :content="content.data_41" />

### Disabled
<br />

Custom checkboxes and radios can also be `disabled`. Add the disabled boolean attribute to the `<input>` and the custom indicator and label description will be automatically styled.

<element-slot :elementCode="content.data_42" />

<source-code :codeType="codeTypes.HTML" :content="content.data_42" />

## Switches
<br />

A switch has the markup of a custom checkbox but uses the `.custom-switch` class to render a toggle switch. Switches also support the `disabled` attribute.

<element-slot :elementCode="content.data_43" />

<source-code :codeType="codeTypes.HTML" :content="content.data_43" />

## Select menu
<br />

Custom `<select>` menus need only a custom class, `.custom-select` to trigger the custom styles. Custom styles are limited to the `<select>`’s initial appearance and cannot modify the `<option>`s due to browser limitations.

<element-slot :elementCode="content.data_44" />

<source-code :codeType="codeTypes.HTML" :content="content.data_44" />

You may also choose from small and large custom selects to match our similarly sized text inputs.

<element-slot :elementCode="content.data_45" />

<source-code :codeType="codeTypes.HTML" :content="content.data_45" />

The `multiple` attribute is also supported:

<element-slot :elementCode="content.data_46" />

<source-code :codeType="codeTypes.HTML" :content="content.data_46" />

As is the `size` attribute:

<element-slot :elementCode="content.data_47" />

<source-code :codeType="codeTypes.HTML" :content="content.data_47" />

## Range
<br />

Create custom `<input type="range">` controls with `.custom-range`. The track (the background) and thumb (the value) are both styled to appear the same across browsers. As only IE and Firefox support “filling” their track from the left or right of the thumb as a means to visually indicate progress, we do not currently support it.

<element-slot :elementCode="content.data_48" />

<source-code :codeType="codeTypes.HTML" :content="content.data_48" />

Range inputs have implicit values for `min` and `max`—`0` and `100`, respectively. You may specify new values for those using the `min` and `max` attributes.

<element-slot :elementCode="content.data_49" />

<source-code :codeType="codeTypes.HTML" :content="content.data_49" />

By default, range inputs “snap” to integer values. To change this, you can specify a `step` value. In the example below, we double the number of steps by using `step="0.5"`.

<element-slot :elementCode="content.data_50" />

<source-code :codeType="codeTypes.HTML" :content="content.data_50" />

## File browser
<br />

> The recommended plugin to animate custom file input: [bs-custom-file-input](https://www.npmjs.com/package/bs-custom-file-input), that’s what we are using currently here in our docs.

The file input is the most gnarly of the bunch and requires additional JavaScript if you’d like to hook them up with functional Choose file… and selected file name text.

<element-slot :elementCode="content.data_51" />

<source-code :codeType="codeTypes.HTML" :content="content.data_51" />

We hide the default file `<input>` via `opacity` and instead style the `<label>`. The button is generated and positioned with `::after`. Lastly, we declare a `width` and `height` on the `<input>` for proper spacing for surrounding content.

### Translating or customizing the strings with SCSS
<br />

The [:lang() pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:lang) is used to allow for translation of the “Browse” text into other languages. Override or add entries to the `$custom-file-text` Sass variable with the relevant [language tag](https://en.wikipedia.org/wiki/IETF_language_tag) and localized strings. The English strings can be customized the same way. For example, here’s how one might add a Spanish translation (Spanish’s language code is `es`):

<source-code :codeType="codeTypes.CSS" :content="content.data_52" />

Here’s `lang(es)` in action on the custom file input for a Spanish translation:

<element-slot :elementCode="content.data_53" />

<source-code :codeType="codeTypes.HTML" :content="content.data_53" />

You’ll need to set the language of your document (or subtree thereof) correctly in order for the correct text to be shown. This can be done using [the lang attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) on the `<html>` element or the [Content-Language HTTP header](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.12), among other methods.

### Translating or customizing the strings with HTML
<br />

Bootstrap also provides a way to translate the “Browse” text in HTML with the `data-browse` attribute which can be added to the custom input label (example in Dutch):

<element-slot :elementCode="content.data_54" />

<source-code :codeType="codeTypes.HTML" :content="content.data_54" />

</ClientOnly>

<script>
  import * as codeTypes from '@/utils/codeTypes'
  import dataContent from '@/content/components/forms'
  import Methods from '@/utils/methods'
  import jQuery from 'jquery'

  export default {
    data() {
      return {
        codeTypes: codeTypes,
        content: dataContent          
      }
    },
    mounted() {
      Methods.setMaxHeight()

      setTimeout(() => {
        activeValidation()
        utils()
      }, 300)
    }
  }

const utils = () => {
  jQuery('.element-wrap').addClass('form-format')
  jQuery('.your-checkbox').prop('indeterminate', true)
}

const activeValidation = () => {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.getElementsByClassName('needs-validation')

  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
}
</script>