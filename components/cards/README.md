<ClientOnly>

# Cards

**Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.**

## About
<br />

A **card** is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.

## Example
<br />

Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no `margin` by default, so use [spacing utilities](https://getbootstrap.com/docs/4.3/utilities/spacing/) as needed.

Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element. This is easily customized with our various [sizing options](/components/card/#sizing).

<element-slot :elementCode="content.data_1" />

<source-code :codeType="codeTypes.HTML" :content="content.data_1" />

## Content types
<br />

Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.

## Body
<br />

The building block of a card is the `.card-body`. Use it whenever you need a padded section within a card.

<element-slot :elementCode="content.data_2" />

<source-code :codeType="codeTypes.HTML" :content="content.data_2" />

## Titles, text, and links
<br />

Card titles are used by adding `.card-title` to a `<h*>` tag. In the same way, links are added and placed next to each other by adding `.card-link` to an `<a>` tag.

Subtitles are used by adding a `.card-subtitle` to a `<h*>` tag. If the `.card-title` and the `.card-subtitle` items are placed in a `.card-body` item, the card title and subtitle are aligned nicely.

<element-slot :elementCode="content.data_3" />

<source-code :codeType="codeTypes.HTML" :content="content.data_3" />

## Images
<br />

`.card-img-top` places an image to the top of the card. With `.card-text`, text can be added to the card. Text within `.card-text` can also be styled with the standard HTML tags.

<element-slot :elementCode="content.data_4" />

<source-code :codeType="codeTypes.HTML" :content="content.data_4" />

## List groups
<br />

Create lists of content in a card with a flush list group.

<element-slot :elementCode="content.data_5" />

<source-code :codeType="codeTypes.HTML" :content="content.data_5" />

<br />

<element-slot :elementCode="content.data_6" />

<source-code :codeType="codeTypes.HTML" :content="content.data_6" />

## Kitchen sink
<br />

Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.

<element-slot :elementCode="content.data_7" />

<source-code :codeType="codeTypes.HTML" :content="content.data_7" />

## Header and footer
<br />

Add an optional header and/or footer within a card.

<element-slot :elementCode="content.data_8" />

<source-code :codeType="codeTypes.HTML" :content="content.data_8" />

Card headers can be styled by adding `.card-header` to `<h*>` elements.

<element-slot :elementCode="content.data_9" />

<source-code :codeType="codeTypes.HTML" :content="content.data_9" />

<br />

<element-slot :elementCode="content.data_10" />

<source-code :codeType="codeTypes.HTML" :content="content.data_10" />

<br />

<element-slot :elementCode="content.data_11" />

<source-code :codeType="codeTypes.HTML" :content="content.data_11" />

## Sizing
<br />

Cards assume no specific `width` to start, so they’ll be 100% wide unless otherwise stated. You can change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities.

## Using grid markup
<br />

Using the grid, wrap cards in columns and rows as needed.

<element-slot :elementCode="content.data_12" />

<source-code :codeType="codeTypes.HTML" :content="content.data_12" />

## Using utilities
<br />

Use our handful of [available sizing utilities](https://getbootstrap.com/docs/4.3/utilities/sizing/) to quickly set a card’s width.

<element-slot :elementCode="content.data_13" />

<source-code :codeType="codeTypes.HTML" :content="content.data_13" />

## Using custom CSS
<br />

Use custom CSS in your stylesheets or as inline styles to set a width.

<element-slot :elementCode="content.data_14" />

<source-code :codeType="codeTypes.HTML" :content="content.data_14" />

## Text alignment
<br />

You can quickly change the text alignment of any card—in its entirety or specific parts—with our [text align classes](https://getbootstrap.com/docs/4.3/utilities/text/#text-alignment).

<element-slot :elementCode="content.data_15" />

<source-code :codeType="codeTypes.HTML" :content="content.data_15" />

## Navigation
<br />

Add some navigation to a card’s header (or block) with Bootstrap’s [nav components](https://getbootstrap.com/docs/4.3/components/navs/).

<element-slot :elementCode="content.data_16" />

<source-code :codeType="codeTypes.HTML" :content="content.data_16" />

<br />

<element-slot :elementCode="content.data_17" />

<source-code :codeType="codeTypes.HTML" :content="content.data_17" />

## Images
<br />

Cards include a few options for working with images. Choose from appending “image caps” at either end of a card, overlaying images with card content, or simply embedding the image in a card.

## Image caps
<br />

Similar to headers and footers, cards can include top and bottom “image caps”—images at the top or bottom of a card.

<element-slot :elementCode="content.data_18" />

<source-code :codeType="codeTypes.HTML" :content="content.data_18" />

## Image overlays
<br />

Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities.

<element-slot :elementCode="content.data_19" />

<source-code :codeType="codeTypes.HTML" :content="content.data_19" />

<br />

> Note that content should not be larger than the height of the image. If content is larger than the image the content will be displayed outside the image.

## Horizontal
<br />

Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with `.no-gutters` and use `.col-md-*` classes to make the card horizontal at the `md` breakpoint. Further adjustments may be needed depending on your card content.

<element-slot :elementCode="content.data_20" />

<source-code :codeType="codeTypes.HTML" :content="content.data_20" />

## Card styles
<br />

Cards include various options for customizing their backgrounds, borders, and color.

## Background and color
<br />

Use [text and background utilities](https://getbootstrap.com/docs/4.3/utilities/colors/) to change the appearance of a card.

<element-slot :elementCode="content.data_21" />

<source-code :codeType="codeTypes.HTML" :content="content.data_21" />

<br />

> #### Conveying meaning to assistive technologies
>
> Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the ``.sr-only`` class.

## Border
<br />

Use [border utilities](https://getbootstrap.com/docs/4.3/utilities/borders/) to change just the `border-color` of a card. Note that you can put `.text-{color}` classes on the parent `.card` or a subset of the card’s contents as shown below.

<element-slot :elementCode="content.data_22" />

<source-code :codeType="codeTypes.HTML" :content="content.data_22" />

## Mixins utilities
<br />

You can also change the borders on the card header and footer as needed, and even remove their `background-color` with `.bg-transparent`.

<element-slot :elementCode="content.data_23" />

<source-code :codeType="codeTypes.HTML" :content="content.data_23" />

## Card layout
<br />

In addition to styling the content within cards, Bootstrap includes a few options for laying out series of cards. For the time being, **these layout options are not yet responsive.**

## Card groups
<br />

Use card groups to render cards as a single, attached element with equal width and height columns. Card groups use `display: flex;` to achieve their uniform sizing.

<element-slot :elementCode="content.data_24" />

<source-code :codeType="codeTypes.HTML" :content="content.data_24" />

When using card groups with footers, their content will automatically line up.

<element-slot :elementCode="content.data_25" />

<source-code :codeType="codeTypes.HTML" :content="content.data_25" />

## Card decks
<br />

Need a set of equal width and height cards that aren’t attached to one another? Use card decks.

<element-slot :elementCode="content.data_26" />

<source-code :codeType="codeTypes.HTML" :content="content.data_26" />

Just like with card groups, card footers in decks will automatically line up.

<element-slot :elementCode="content.data_27" />

<source-code :codeType="codeTypes.HTML" :content="content.data_27" />

## Card columns
<br />

Cards can be organized into [Masonry](https://masonry.desandro.com/)-like columns with just CSS by wrapping them in `.card-columns`. Cards are built with CSS `column` properties instead of flexbox for easier alignment. Cards are ordered from top to bottom and left to right.

**Heads up!** Your mileage with card columns may vary. To prevent cards breaking across columns, we must set them to `display: inline-block` as `column-break-inside: avoid` isn’t a bulletproof solution yet.

<element-slot :elementCode="content.data_28" />

<source-code :codeType="codeTypes.HTML" :content="content.data_28" />

Card columns can also be extended and customized with some additional code. Shown below is an extension of the `.card-columns` class using the same CSS we use—CSS columns— to generate a set of responsive tiers for changing the number of columns.

<source-code :codeType="codeTypes.CSS" :content="content.data_29" />

</ClientOnly>

<script>
  import * as codeTypes from '@/utils/codeTypes'
  import CardContent from '@/content/components/cards'

  export default {
    data() {
      return {
        codeTypes: codeTypes,
        content: CardContent          
      }
    }
  }
</script>