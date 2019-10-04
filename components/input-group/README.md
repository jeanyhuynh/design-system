<ClientOnly>

# Input group

**Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.**

## Basic example
<br />

Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place `<label>`s outside the input group.

<element-slot :elementCode="content.data_1" />

<source-code :codeType="codeTypes.HTML" :content="content.data_1" />

## Wrapping
<br />

Input groups wrap by default via `flex-wrap: wrap` in order to accommodate custom form field validation within an input group. You may disable this with `.flex-nowrap`.

<element-slot :elementCode="content.data_2" />

<source-code :codeType="codeTypes.HTML" :content="content.data_2" />

## Sizing
<br />

Add the relative form sizing classes to the `.input-group` itself and contents within will automatically resize—no need for repeating the form control size classes on each element.

**Sizing on the individual input group elements isn’t supported.**

<element-slot :elementCode="content.data_3" />

<source-code :codeType="codeTypes.HTML" :content="content.data_3" />

## Checkboxes and radios
<br />

Place any checkbox or radio option within an input group’s addon instead of text.

<element-slot :elementCode="content.data_4" />

<source-code :codeType="codeTypes.HTML" :content="content.data_4" />

## Multiple inputs
<br />

While multiple `<input>`s are supported visually, validation styles are only available for input groups with a single `<input>`.

<element-slot :elementCode="content.data_5" />

<source-code :codeType="codeTypes.HTML" :content="content.data_5" />

## Multiple addons
<br />

Multiple add-ons are supported and can be mixed with checkbox and radio input versions.

<element-slot :elementCode="content.data_6" />

<source-code :codeType="codeTypes.HTML" :content="content.data_6" />

## Button addons
<br />

Multiple add-ons are supported and can be mixed with checkbox and radio input versions.

<element-slot :elementCode="content.data_7" />

<source-code :codeType="codeTypes.HTML" :content="content.data_7" />

## Buttons with dropdowns
<br />

<element-slot :elementCode="content.data_8" />

<source-code :codeType="codeTypes.HTML" :content="content.data_8" />

## Segmented buttons
<br />

<element-slot :elementCode="content.data_9" />

<source-code :codeType="codeTypes.HTML" :content="content.data_9" />

## Custom forms
<br />

Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported.

### Custom select
<br />

<element-slot :elementCode="content.data_10" />

<source-code :codeType="codeTypes.HTML" :content="content.data_10" />

### Custom file input
<br />

<element-slot :elementCode="content.data_11" />

<source-code :codeType="codeTypes.HTML" :content="content.data_11" />

## Accessibility
<br />

Screen readers will have trouble with your forms if you don’t include a label for every input. For these input groups, ensure that any additional label or functionality is conveyed to assistive technologies.

The exact technique to be used (`<label>` elements hidden using the `.sr-only` class, or use of the `aria-label` and `aria-labelledby` attributes, possibly in combination with `aria-describedby`) and what additional information will need to be conveyed will vary depending on the exact type of interface widget you’re implementing. The examples in this section provide a few suggested, case-specific approaches.

</ClientOnly>

<script>
  import * as codeTypes from '@/utils/codeTypes'
  import dataContent from '@/content/components/inputGroup'

  export default {
    data() {
      return {
        codeTypes: codeTypes,
        content: dataContent          
      }
    }
  }
</script>