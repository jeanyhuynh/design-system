<ClientOnly>

# Button group

**Group a series of buttons together on a single line with the button group, and super-power them with JavaScript.**

## Basic example

<br />

Wrap a series of buttons with `.btn` in `.btn-group`. Add on optional JavaScript radio and checkbox style behavior with [our buttons plugin](/components/buttons/#button-plugin).

<element-slot :elementCode="content.data_1" />

<source-code :codeType="codeTypes.HTML" :content="content.data_1" />

<br />

> #### Ensure correct `role` and provide a label
>
> In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate `role` attribute needs to be provided. For button groups, this would be `role="group"`, while toolbars should have a `role="toolbar"`.
>
>In addition, groups and toolbars should be given an explicit label, as most assistive technologies will otherwise not announce them, despite the presence of the correct role attribute. In the examples provided here, we use `aria-label`, but alternatives such as `aria-labelledby` can also be used.

## Button toolbar
<br />

Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.

<element-slot :elementCode="content.data_2" />

<source-code :codeType="codeTypes.HTML" :content="content.data_2" />

Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some utilities though to space things properly.

<element-slot :elementCode="content.data_3" />

<source-code :codeType="codeTypes.HTML" :content="content.data_3" />

## Sizing
<br />

Instead of applying button sizing classes to every button in a group, just add `.btn-group-*` to each `.btn-group`, including each one when nesting multiple groups.

<element-slot :elementCode="content.data_4" />

<source-code :codeType="codeTypes.HTML" :content="content.data_4" />

## Nesting
<br />

Place a `.btn-group` within another `.btn-group` when you want dropdown menus mixed with a series of buttons.

<element-slot :elementCode="content.data_5" />

<source-code :codeType="codeTypes.HTML" :content="content.data_5" />

## Vertical variation
<br />

Make a set of buttons appear vertically stacked rather than horizontally. **Split button dropdowns are not supported here.**

<element-slot :elementCode="content.data_6" />

<br />

<element-slot :elementCode="content.data_7" />

<source-code :codeType="codeTypes.HTML" :content="content.data_6" />

</ClientOnly>

<script>
  import * as codeTypes from '@/utils/codeTypes'
  import ButtonGroupContent from '@/content/components/buttonGroup'

  export default {
    data() {
      return {
        codeTypes: codeTypes,
        content: ButtonGroupContent
      }
    }
  }
</script>