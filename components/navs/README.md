<ClientOnly>

# Navs

**Documentation and examples for how to use Bootstrap’s included navigation components.**

## Base nav
<br>

Navigation available in Bootstrap share general markup and styles, from the base `.nav` class to the active and disabled states. Swap modifier classes to switch between each style.

The base `.nav` component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling.

> The base `.nav` component does not include any `.active` state. The following 
 examples include the class, mainly to demonstrate that this particular class does not trigger any special styling.

<br>

<element-slot :elementCode="content.navs_Id_1" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.navs_Id_1" />

Classes are used throughout, so your markup can be super flexible. Use `<ul>`s like above, `<ol>` if the order of your items is important, or roll your own with a `<nav>` element. Because the `.nav` uses `display: flex`, the nav links behave the same as nav items would, but without the extra markup.

<br>

<element-slot :elementCode="content.navs_Id_2" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.navs_Id_2" />

## Available styles
<br>

Change the style of `.nav`s component with modifiers and utilities. Mix and match as needed, or build your own.

## Horizontal alignment
<br>

Change the horizontal alignment of your nav with [flexbox utilities](https://getbootstrap.com/docs/4.3/layout/grid/#horizontal-alignment). By default, navs are left-aligned, but you can easily change them to center or right aligned.


Centered with `.justify-content-center`:

<br>

<element-slot :elementCode="content.navs_Id_3" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.navs_Id_3" />

<br>

Right-aligned with `.justify-content-end`:

<br>

<element-slot :elementCode="content.navs_Id_4" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.navs_Id_4" />

## Vertical
<br>

Stack your navigation by changing the flex item direction with the `.flex-column` utility. Need to stack them on some viewports but not others? Use the responsive versions (e.g., `.flex-sm-column`).

<br>

<element-slot :elementCode="content.navs_Id_5" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.navs_Id_5" />

<br>

As always, vertical navigation is possible without `<ul>`s, too.

<br>

<element-slot :elementCode="content.navs_Id_6" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.navs_Id_6" />

<br>

## Tabs
<br>

Takes the basic nav from above and adds the `.nav-tabs` class to generate a tabbed interface. Use them to create tabbable regions with our [tab JavaScript plugin](/components/navs/#javascript-behavior).

<br>

<element-slot :elementCode="content.navs_Id_7" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.navs_Id_7" />

## Pills
<br>

Take that same HTML, but use `.nav-pills` instead:

<br>

<element-slot :elementCode="content.navs_Id_8" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.navs_Id_8" />

## Fill and justify
<br>

Force your `.nav` ’s contents to extend the full available width one of two modifier classes. To proportionately fill all available space with your `.nav-item`s, use `.nav-fill`. Notice that all horizontal space is occupied, but not every nav item has the same width.

<br>

<element-slot :elementCode="content.navs_Id_9" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.navs_Id_9" />
<br>

When using a `<nav>`-based navigation, be sure to include `.nav-item` on the anchors.

<br>

<element-slot :elementCode="content.navs_Id_10" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.navs_Id_10" />
<br>

For equal-width elements, use `.nav-justified`. All horizontal space will be occupied by nav links, but unlike the `.nav-fill` above, every nav item will be the same width.

<br>

<element-slot :elementCode="content.navs_Id_11" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.navs_Id_11" />
<br>

Similar to the `.nav-fill` example using a `<nav>`-based navigation, be sure to include `.nav-item` on the anchors.

<br>

<element-slot :elementCode="content.navs_Id_12" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.navs_Id_12" />

## Working with flex utilities
<br>

If you need responsive nav variations, consider using a series of [flexbox utilities](https://getbootstrap.com/docs/4.3/utilities/flex/). While more verbose, these utilities offer greater customization across responsive breakpoints. In the example below, our nav will be stacked on the lowest breakpoint, then adapt to a horizontal layout that fills the available width starting from the small breakpoint.

<br>

<element-slot :elementCode="content.navs_Id_13" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.navs_Id_13" />

## Regarding accessibility
<br>

If you’re using navs to provide a navigation bar, be sure to add a `role="navigation"` to the most logical parent container of the `<ul>`, or wrap a `<nav>` element around the whole navigation. Do not add the role to the `<ul>` itself, as this would prevent it from being announced as an actual list by assistive technologies.

Note that navigation bars, even if visually styled as tabs with the `.nav-tabs` class, should **not** be given `role="tablist"`, `role="tab"` or `role="tabpanel"` attributes. These are only appropriate for dynamic tabbed interfaces, as described in the [WAI ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel). See [JavaScript behavior](/components/navs/#javascript-behavior) for dynamic tabbed interfaces in this section for an example.

## Using dropdowns
<br>

Add dropdown menus with a little extra HTML and the [dropdowns JavaScript plugin](/components/dropdowns/#usage).

<br>

## Tabs with dropdowns

<br>

<element-slot :elementCode="content.navs_Id_14" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.navs_Id_14" />

## Pills with dropdowns
<br>

<element-slot :elementCode="content.navs_Id_15" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.navs_Id_15" />

## JavaScript behavior
<br>

Use the tab JavaScript plugin—include it individually or through the compiled `bootstrap.js` file—to extend our navigational tabs and pills to create tabbable panes of local content, even via dropdown menus.

<br>

If you’re building our JavaScript from source, it [requires util.js](https://getbootstrap.com/docs/4.3/getting-started/javascript/#util).


Dynamic tabbed interfaces, as described in the [WAI ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel), require `role="tablist"`, `role="tab"`, `role="tabpanel"`, and additional `aria-` attributes in order to convey their structure, functionality and current state to users of assistive technologies (such as screen readers).


Note that dynamic tabbed interfaces should not contain dropdown menus, as this causes both usability and accessibility issues. From a usability perspective, the fact that the currently displayed tab’s trigger element is not immediately visible (as it’s inside the closed dropdown menu) can cause confusion. From an accessibility point of view, there is currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be easily made understandable to users of assistive technologies.
<br>

<element-slot :elementCode="content.navs_Id_16" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.navs_Id_16" />

To help fit your needs, this works with `<ul>`-based markup, as shown above, or with any arbitrary “roll your own” markup. Note that if you’re using `<nav>`, you shouldn’t add `role="tablist"` directly to it, as this would override the element’s native role as a navigation landmark. Instead, switch to an alternative element (in the example below, a simple `<div>`) and wrap the `<nav>` around it.

<br>

<element-slot :elementCode="content.navs_Id_17" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.navs_Id_17" />

<br>

The tabs plugin also works with pills.
<br>

<element-slot :elementCode="content.navs_Id_18" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.navs_Id_18" />

And with vertical pills.

<br>

<element-slot :elementCode="content.navs_Id_19" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.navs_Id_19" /> 

## Using data attributes
<br>

You can activate a tab or pill navigation without writing any JavaScript by simply specifying `data-toggle="tab"` or `data-toggle="pill"` on an element. Use these data attributes on `.nav-tabs` or `.nav-pills.`

<source-code :codeType="codeTypes.HTML" :content="content.navs_Id_20" /> 

## Via JavaScript
<br>

Enable tabbable tabs via JavaScript (each tab needs to be activated individually):
<br>

<source-code :codeType="codeTypes.JS" :content="content.navs_Id_21" />
<br>

You can activate individual tabs in several ways:

<source-code :codeType="codeTypes.JS" :content="content.navs_Id_22" />

## Fade effect
<br>

To make tabs fade in, add `.fade` to each `.tab-pane`. The first tab pane must also have `.show` to make the initial content visible.

<source-code :codeType="codeTypes.HTML" :content="content.navs_Id_23" /> 

## Methods
<br>

> ### **Asynchronous methods and transitions**
> All API methods are **asynchronous** and start a **transition**. They return to the caller as soon as the transition is started but **before it ends**. In addition, a method call on a **transitioning component will be ignored**.
> 
> [See our JavaScript documentation for more information](https://getbootstrap.com/docs/4.3/getting-started/javascript/).

### `$().tab`
<br>

Activates a tab element and content container. Tab should have either a `data-target` or an `href` targeting a container node in the DOM.
<br>

<source-code :codeType="codeTypes.HTML" :content="content.navs_Id_24" /> 

### `.tab(‘show’)`
<br>

Selects the given tab and shows its associated pane. Any other tab that was previously selected becomes unselected and its associated pane is hidden. **Returns to the caller before the tab pane has actually been shown** (i.e. before the `shown.bs.tab` event occurs).

<br>

<source-code :codeType="codeTypes.JS" :content="content.navs_Id_25" />

### `.tab(‘dispose’)`
<br>

Destroys an element’s tab.

## Events
<br>

When showing a new tab, the events fire in the following order:

1. `hide.bs.tab` (on the current active tab)
2. `show.bs.tab` (on the to-be-shown tab)
3. `hidden.bs.tab` (on the previous active tab, the same one as for the `hide.bs.tab` event)
4. `shown.bs.tab` (on the newly-active just-shown tab, the same one as for the `show.bs.tab event`)

If no tab was already active, then the `hide.bs.tab` and `hidden.bs.tab` events will not be fired.

| Event Type    | Description                                                                                                                                                                                                                   |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| show.bs.tab   | This event fires on tab show, but before the new tab has been shown. Use `event.target` and `event.relatedTarget` to target the active tab and the previous active tab (if available) respectively.                               |
| shown.bs.tab  | This event fires on tab show after a tab has been shown. Use `event.target` and `event.relatedTarget` to target the active tab and the previous active tab (if available) respectively.                                           |
| hide.bs.tab   | This event fires when a new tab is to be shown (and thus the previous active tab is to be hidden). Use `event.target` and `event.relatedTarget` to target the current active tab and the new soon-to-be-active tab, respectively. |
| hidden.bs.tab | This event fires after a new tab is shown (and thus the previous active tab is hidden). Use `event.target` and `event.relatedTarget` to target the previous active tab and the new active tab, respectively.                      |


<source-code :codeType="codeTypes.JS" :content="content.navs_Id_26" />

</ClientOnly>


<script>
import jQuery from "jquery";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/js/src";
import * as codeTypes from "@/utils/codeTypes";
import NavsContent from '@/content/components/navs'
export default {
  mounted() {
    jQuery(function() {
      //jQuery('.toast').toast({ autohide: false }).toast('show')
    })
  },
  data() {
    return {
      codeTypes: codeTypes,
      content: NavsContent
    };
  }
};
</script>