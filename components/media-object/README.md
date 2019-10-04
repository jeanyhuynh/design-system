<ClientOnly>

# Media object

**Documentation and examples for Bootstrap’s media object to construct highly repetitive components like blog comments, tweets, and the like.**

## Example
<br />

The [media object](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/) helps build complex and repetitive components where some media is positioned alongside content that doesn’t wrap around said media. Plus, it does this with only two required classes thanks to flexbox.

Below is an example of a single media object. Only two classes are required—the wrapping `.media` and the `.media-body` around your content. Optional padding and margin can be controlled through [spacing utilities](https://getbootstrap.com/docs/4.3/utilities/spacing/).

<element-slot :elementCode="content.data_1" />

<source-code :codeType="codeTypes.HTML" :content="content.data_1" />

<br />

> #### Flexbug #12: Inline elements aren’t treated as flex items
>
> Internet Explorer 10-11 do not render inline elements like links or images (or `::before` and `::after` pseudo-elements) as flex items. The only workaround is to set a non-inline `display` value (e.g., `block`, `inline-block`, or `flex`). We suggest using `.d-flex`, one of our [display utilities](https://getbootstrap.com/docs/4.3/utilities/display/), as an easy fix.
>
> **Source:** [Flexbugs on GitHub](https://github.com/philipwalton/flexbugs#flexbug-12)

## Nesting
<br />

Media objects can be infinitely nested, though we suggest you stop at some point. Place nested `.media` within the `.media-body` of a parent media object.

<element-slot :elementCode="content.data_2" />

<source-code :codeType="codeTypes.HTML" :content="content.data_2" />

## Alignment
<br />

Media in a media object can be aligned with flexbox utilities to the top (default), middle, or end of your `.media-body` content.

<element-slot :elementCode="content.data_3" />

<source-code :codeType="codeTypes.HTML" :content="content.data_3" />

<element-slot :elementCode="content.data_4" />

<source-code :codeType="codeTypes.HTML" :content="content.data_4" />

<element-slot :elementCode="content.data_5" />

<source-code :codeType="codeTypes.HTML" :content="content.data_5" />

## Order
<br />

Change the order of content in media objects by modifying the HTML itself, or by adding some custom flexbox CSS to set the `order` property (to an integer of your choosing).

<element-slot :elementCode="content.data_6" />

<source-code :codeType="codeTypes.HTML" :content="content.data_6" />

## Media list
<br />

Because the media object has so few structural requirements, you can also use these classes on list HTML elements. On your `<ul>` or `<ol>`, add the `.list-unstyled` to remove any browser default list styles, and then apply `.media` to your `<li>`s. As always, use spacing utilities wherever needed to fine tune.

<element-slot :elementCode="content.data_7" />

<source-code :codeType="codeTypes.HTML" :content="content.data_7" />

</ClientOnly>

<script>
  import * as codeTypes from '@/utils/codeTypes'
  import dataContent from '@/content/components/mediaObject'

  export default {
    data() {
      return {
        codeTypes: codeTypes,
        content: dataContent          
      }
    }
  }
</script>