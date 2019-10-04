<ClientOnly>

# Badge

**Documentation and examples for badges, our small count and labeling component.**

## Examples
<br />

Badges scale to match the size of the immediate parent element by using relative font sizing and `em` units.

---

<element-slot :elementCode="content.data_1" />

<source-code :codeType="codeTypes.HTML" :content="content.data_1" />

Badges can be used as part of links or buttons to provide a counter.

<element-slot :elementCode="content.data_2" />

<source-code :codeType="codeTypes.HTML" :content="content.data_2" />

Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.

Unless the context is clear (as with the “Notifications” example, where it is understood that the “4” is the number of notifications), consider including additional context with a visually hidden piece of additional text.

<element-slot :elementCode="content.data_3" />

<source-code :codeType="codeTypes.HTML" :content="content.data_3" />

## Contextual variations
<br />

Add any of the below mentioned modifier classes to change the appearance of a badge.

<element-slot :elementCode="content.data_4" />

<source-code :codeType="codeTypes.HTML" :content="content.data_4" />

<br />

> #### Conveying meaning to assistive technologies
>
> Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.sr-only` class.

## Pill badges
<br />

Use the `.badge-pill` modifier class to make badges more rounded (with a larger `border-radius` and additional horizontal `padding`).
Useful if you miss the badges from v3.

<element-slot :elementCode="content.data_5" />

<source-code :codeType="codeTypes.HTML" :content="content.data_5" />

## Links
<br />

Using the contextual `.badge-*` classes on an `<a>` element quickly provide actionable badges with hover and focus states.

<element-slot :elementCode="content.data_6" />

<source-code :codeType="codeTypes.HTML" :content="content.data_6" />

</ClientOnly>

<script>
  import * as codeTypes from '../../utils/codeTypes'
  import BadgeContent from '@/content/components/badge'

  export default {
    data() {
      return {
        codeTypes: codeTypes,
        content: BadgeContent
      }
    }
  }
</script>