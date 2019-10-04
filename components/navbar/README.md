<ClientOnly>

# Navbar

**Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.**
<br>

## How it works
<br>

Here’s what you need to know before getting started with the navbar:

* Navbars require a wrapping `.navbar` with `.navbar-expand{-sm|-md|-lg|-xl}` for responsive collapsing and [color scheme](/components/navbar/#color-schemes) classes.
* Navbars and their contents are fluid by default. Use [optional containers](/components/navbar/#containers) to limit their horizontal width.
* Use our [spacing](https://getbootstrap.com/docs/4.3/utilities/spacing/) and [flex](https://getbootstrap.com/docs/4.3/utilities/flex/) utility classes for controlling spacing and alignment within navbars.
* Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
* Navbars are hidden by default when printing. Force them to be printed by adding .d-print to the `.navbar`. See the [display](https://getbootstrap.com/docs/4.3/utilities/display/) utility class.
* Ensure accessibility by using a `<nav>` element or, if using a more generic element such as a `<div>`, add a `role="navigation"` to every navbar to explicitly identify it as a landmark region for users of assistive technologies.

> The animation effect of this component is dependent on the `prefers-reduced-motion`  media query. See the [reduced motion section of our accessibility documentation](https://getbootstrap.com/docs/4.3/getting-started/accessibility/#reduced-motion).

Read on for an example and list of supported sub-components.

## Supported content
<br>

Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:

* `.navbar-brand` for your company, product, or project name.
* `.navbar-nav` for a full-height and lightweight navigation (including support for dropdowns).
* `.navbar-toggler` for use with our collapse plugin and other [navigation toggling](/components/navbar/#responsive-behaviors) behaviors.
* `.form-inline` for any form controls and actions.
* `.navbar-text` for adding vertically centered strings of text.
* `.collapse.navbar-collapse` for grouping and hiding navbar contents by a parent breakpoint.

Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the `lg` (large) breakpoint.

<br/>

<element-slot :elementCode="content.navbar_Id_1" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_1" />

<br>

This example uses [color](https://getbootstrap.com/docs/4.3/utilities/colors/) (`bg-light`) and [spacing](https://getbootstrap.com/docs/4.3/utilities/spacing/) (`my-2`, `my-lg-0`, `mr-sm-0`, `my-sm-0`) utility classes.

## Brand

<br>

The `.navbar-brand` can be applied to most elements, but an anchor works best as some elements might require utility classes or custom styles.

<br/>

<element-slot :elementCode="content.navbar_Id_2" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_2" />
<br>

Adding images to the `.navbar-brand` will likely always require custom styles or utilities to properly size. Here are some examples to demonstrate.
<br/>

<element-slot :elementCode="content.navbar_Id_3" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_3" />

<br/>

<element-slot :elementCode="content.navbar_Id_4" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_4" />

## Nav
<br>

Navbar navigation links build on our `.nav` options with their own modifier class and require the use of [toggler classes](/components/navbar/#toggler) for proper responsive styling. **Navigation in navbars will also grow to occupy as much horizontal space as possible** to keep your navbar contents securely aligned.

Active states—with `.active`—-to indicate the current page can be applied directly to `.nav-link`s or their immediate parent `.nav-item`s.

<br/>

<element-slot :elementCode="content.navbar_Id_5" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_5" />

And because we use classes for our navs, you can avoid the list-based approach entirely if you like.

<br/>

<element-slot :elementCode="content.navbar_Id_6" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_6" />

You may also utilize dropdowns in your navbar nav. Dropdown menus require a wrapping element for positioning, so be sure to use separate and nested elements for `.nav-item` and `.nav-link` as shown below.
<br/>

<element-slot :elementCode="content.navbar_Id_7" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_7" />

## Forms
<br>

Place various form controls and components within a navbar with `.form-inline`.


<br/>

<element-slot :elementCode="content.navbar_Id_8" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_8" />

Immediate children elements in `.navbar` use flex layout and will default to `justify-content: between`. Use additional [flex utilities](https://getbootstrap.com/docs/4.3/utilities/flex/) as needed to adjust this behavior.

<br/>

<element-slot :elementCode="content.navbar_Id_9" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_9" />

Input groups work, too:

<br/>

<element-slot :elementCode="content.navbar_Id_10" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_10" />

Various buttons are supported as part of these navbar forms, too. This is also a great reminder that vertical alignment utilities can be used to align different sized elements.

<br/>

<element-slot :elementCode="content.navbar_Id_11" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_11" />

## Text
<br>

Navbars may contain bits of text with the help of `.navbar-text`. This class adjusts vertical alignment and horizontal spacing for strings of text.

<br/>

<element-slot :elementCode="content.navbar_Id_12" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_12" />

<br>

Mix and match with other components and utilities as needed.

<br/>

<element-slot :elementCode="content.navbar_Id_13" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_13" />

## Color schemes
<br>

Theming the navbar has never been easier thanks to the combination of theming classes and `background-color` utilities. Choose from `.navbar-light` for use with light background colors, or `.navbar-dark` for dark background colors. Then, customize with `.bg-*` utilities.

<br/>

<element-slot :elementCode="content.navbar_Id_14" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_14" />

## Containers
<br>

Although it’s not required, you can wrap a navbar in a `.container` to center it on a page or add one within to only center the contents of a [fixed or static top navbar](/components/navbar/#placement).

<br/>

<element-slot :elementCode="content.navbar_Id_15" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_15" />

When the container is within your navbar, its horizontal padding is removed at breakpoints lower than your specified `.navbar-expand{-sm|-md|-lg|-xl}` class. This ensures we’re not doubling up on padding unnecessarily on lower viewports when your navbar is collapsed.

<br/>

<element-slot :elementCode="content.navbar_Id_16" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_16" />

## Placement
<br>

Use our [position utilities](https://getbootstrap.com/docs/4.3/utilities/position/) to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, or stickied to the top (scrolls with the page until it reaches the top, then stays there). Fixed navbars use `position: fixed`, meaning they’re pulled from the normal flow of the DOM and may require custom CSS (e.g., `padding-top` on the `<body>`) to prevent overlap with other elements.

Also note that `.sticky-top` uses `position: sticky`, which [isn’t fully supported in every browser](https://caniuse.com/#feat=css-sticky).

<br/>

<element-slot :elementCode="content.navbar_Id_17" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_17" />

<br/>

<element-slot :elementCode="content.navbar_Id_18" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_18" />

<br/>

<element-slot :elementCode="content.navbar_Id_19" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_19" />

<br/>

<element-slot :elementCode="content.navbar_Id_20" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_20" />

## Responsive behaviors
<br>

Navbars can utilize `.navbar-toggler`, `.navbar-collapse`, and `.navbar-expand{-sm|-md|-lg|-xl}` classes to change when their content collapses behind a button. In combination with other utilities, you can easily choose when to show or hide particular elements.

For navbars that never collapse, add the `.navbar-expand` class on the navbar. For navbars that always collapse, don’t add any `.navbar-expand` class.

## Toggler
<br>

Navbar togglers are left-aligned by default, but should they follow a sibling element like a `.navbar-brand`, they’ll automatically be aligned to the far right. Reversing your markup will reverse the placement of the toggler. Below are examples of different toggle styles.

With no `.navbar-brand` shown in lowest breakpoint:

<br/>

<element-slot :elementCode="content.navbar_Id_21" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_21" />

<br>

With a brand name shown on the left and toggler on the right:

<br/>

<element-slot :elementCode="content.navbar_Id_22" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_22" />

With a toggler on the left and brand name on the right:

<br/>

<element-slot :elementCode="content.navbar_Id_23" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_23" />

## External content
<br>

Sometimes you want to use the collapse plugin to trigger hidden content elsewhere on the page. Because our plugin works on the `id` and `data-target` matching, that’s easily done!
<br/>

<element-slot :elementCode="content.navbar_Id_24" />

<br/>

<source-code :codeType="codeTypes.HTML" :content="content.navbar_Id_24" />




</ClientOnly>

<script>
import jQuery from "jquery";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/js/src";
import * as codeTypes from "@/utils/codeTypes";
import NavbarContent from '@/content/components/navbar'
export default {
  mounted() {
    jQuery(function() {
      //jQuery('.toast').toast({ autohide: false }).toast('show')
    })
  },
  data() {
    return {
      codeTypes: codeTypes,
        content: NavbarContent
    };
  }
};
</script>

<style lang="scss">
.bd-example{
    nav {
        margin: 10px 0;
    }
}
.bd-example1{
    position: relative;
    .fixed-top, .sticky-top,.fixed-bottom {
    position: static;
    
}
}
</style>