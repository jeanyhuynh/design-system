<ClientOnly>

# Pagination

**Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.**

## Overview
<br>

We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies.

In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive `aria-label` for the `<nav>` to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be `aria-label="Search results pages"`.

<br/>

<element-slot :elementCode="content.pagin_Id_1" />

<source-code :codeType="codeTypes.HTML" :content="content.pagin_Id_1" />

## Working with icons
<br>

Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with `aria` attributes.

<br/>

<element-slot :elementCode="content.pagin_Id_2" />
<br>

<source-code :codeType="codeTypes.HTML" :content="content.pagin_Id_2" />

## Disabled and active states
<br>

Pagination links are customizable for different circumstances. Use `.disabled` for links that appear un-clickable and `.active` to indicate the current page.

While the `.disabled` class uses `pointer-events: none` to *try* to disable the link functionality of `<a>`s, that CSS property is not yet standardized and doesn’t account for keyboard navigation. As such, you should always add `tabindex="-1"` on disabled links and use custom JavaScript to fully disable their functionality.

<br/>

<element-slot :elementCode="content.pagin_Id_3" />
<br>

<source-code :codeType="codeTypes.HTML" :content="content.pagin_Id_3" />

You can optionally swap out active or disabled anchors for `<span>`, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.

<br/>

<element-slot :elementCode="content.pagin_Id_4" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.pagin_Id_4" />

## Sizing
<br>

Fancy larger or smaller pagination? Add `.pagination-lg` or `.pagination-sm` for additional sizes.

<br/>

<element-slot :elementCode="content.pagin_Id_5" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.pagin_Id_5" />

<br/>

<element-slot :elementCode="content.pagin_Id_6" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.pagin_Id_6" />

## Alignment
<br>

Change the alignment of pagination components with [flexbox utilities](https://getbootstrap.com/docs/4.3/utilities/flex/).

<br/>

<element-slot :elementCode="content.pagin_Id_7" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.pagin_Id_7" />

<br/>

<element-slot :elementCode="content.pagin_Id_8" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.pagin_Id_8" />

</ClientOnly>

<script>
import jQuery from "jquery";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/js/src";
import * as codeTypes from "@/utils/codeTypes";
import PaginContent from '@/content/components/pagination'
export default {
  mounted() {
    jQuery(function() {
      //jQuery('.toast').toast({ autohide: false }).toast('show')
    })
  },
  data() {
    return {
      codeTypes: codeTypes,
        content: PaginContent
    };
  }
};
</script>