<ClientOnly>

# Breadcrumb

**Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.**

## Examples
<br />

<element-slot :elementCode="content.data_1" />

<source-code :codeType="codeTypes.HTML" :content="content.data_1" />

## Changing the separator
<br />

Separators are automatically added in CSS through [::before](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) and [content](https://developer.mozilla.org/en-US/docs/Web/CSS/content). They can be changed by changing `$breadcrumb-divider`. The [quote](https://sass-lang.com/documentation/functions#quote-instance_method) function is needed to generate the quotes around a string, so if you want > as separator, you can use this:

<source-code :codeType="codeTypes.CSS" :content="content.data_2" />

It’s also possible to use a **base64 embedded SVG icon**

<source-code :codeType="codeTypes.CSS" :content="content.data_3" />

The separator can be removed by setting `$breadcrumb-divider` to `none:`

<source-code :codeType="codeTypes.CSS" :content="content.data_4" />

<br />

## Accessibility
<br />

Since breadcrumbs provide a navigation, it’s a good idea to add a meaningful label such as `aria-label="breadcrumb"` to describe the type of navigation provided in the `<nav>` element, as well as applying an `aria-current="page"` to the last item of the set to indicate that it represents the current page.

For more information, see the [WAI-ARIA Authoring Practices for the breadcrumb pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).

</ClientOnly>

<script>
  import * as codeTypes from '@/utils/codeTypes'
  import BreadcrumbContent from '@/content/components/breadcrumb'

  export default {
    data() {
      return {
        codeTypes: codeTypes,
        content: BreadcrumbContent
      }
    }
  }
</script>