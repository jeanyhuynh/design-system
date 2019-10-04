<ClientOnly>
# Scrollspy 

**Automatically update Bootstrap navigation or list group components based on scroll position to indicate which link is currently active in the viewport.**

## How it works

<br>

Scrollspy has a few requirements to function properly:

* If you’re building our JavaScript from source, it [requires util.js](https://getbootstrap.com/docs/4.3/getting-started/javascript/#util).
* It must be used on a Bootstrap [nav component](/components/navs/) or [list group](/components/list-group/#basic-example).
* Scrollspy requires `position: relative;` on the element you’re spying on, usually the `<body>`.
* When spying on elements other than the `<body>`, be sure to have a `height` set and `overflow-y: scroll`; applied.
* Anchors (`<a>`) are required and must point to an element with that `id`.

When successfully implemented, your nav or list group will update accordingly, moving the `.active` class from one item to the next based on their associated targets.

## Example in navbar
<br>

Scroll the area below the navbar and watch the active class change. The dropdown items will be highlighted as well.

<br>

<element-slot :elementCode="content.scroll_Id_1" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.scroll_Id_1" />

<br>

## Example with nested nav 
<br>

Scrollspy also works with nested `.nav`s. If a nested `.nav` is `.active`, its parents will also be `.active`. Scroll the area next to the navbar and watch the active class change.

<br>

<element-slot :elementCode="content.scroll_Id_2" />

<br>

<br>

<source-code :codeType="codeTypes.HTML" :content="content.scroll_Id_2" />

<br>

## Example with list-group
<br>

Scrollspy also works with `.list-group`s. Scroll the area next to the list group and watch the active class change.


<br>

<element-slot :elementCode="content.scroll_Id_3" />

<br>

<br>

<source-code :codeType="codeTypes.HTML" :content="content.scroll_Id_3" />

<br>

## Usage
<br>

### Via data attributes
<br>

To easily add scrollspy behavior to your topbar navigation, add `data-spy="scroll"` to the element you want to spy on (most typically this would be the `<body>`). Then add the `data-target` attribute with the ID or class of the parent element of any Bootstrap `.nav` component.

<br>

<source-code :codeType="codeTypes.CSS" :content="content.scroll_Id_4" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.scroll_Id_5" />

## Via JavaScript

<br>

After adding `position: relative;` in your CSS, call the scrollspy via JavaScript:


<source-code :codeType="codeTypes.JS" :content="content.scroll_Id_6" />

<br>

> **Resolvable ID targets required**
>
> Navbar links must have resolvable id targets. For example, a `<a href="#home">home</a>` must correspond to something in the DOM like `<div id="home"></div>`.

> **Non-:`visible` target elements ignored**
>
> Target elements that are not [`:visible according to jQuery`](https://api.jquery.com/visible-selector/) will be ignored and their corresponding nav items will never be highlighted.

## Methods

### `.scrollspy('refresh')`
<br>

When using scrollspy in conjunction with adding or removing of elements from the DOM, you’ll need to call the refresh method like so:


<source-code :codeType="codeTypes.JS" :content="content.scroll_Id_7" />

### `.scrollspy('dispose')`
<br>

Destroys an element’s scrollspy.

## Options
<br>

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-offset=""`.


| Name	  | Type	| Default	| Description | 
| ------- | ------- | --------- | ----------- |
| offset  |	number  |	10	    |Pixels to offset from top when calculating position of scroll. |
| method  |	string	| auto  |	Finds which section the spied element is in. `auto` will choose the best method get scroll coordinates. `offset` will use jQuery offset method to get scroll coordinates. `position` will use jQuery position method to get scroll coordinates. |
| target  |	string	 |	     |  Specifies element to apply Scrollspy plugin. |

## Events
<br>

| Event Type            |	Description |
| --------------------- | ------------- |
| activate.bs.scrollspy |	This event fires on the scroll element whenever a new item becomes activated by the scrollspy. |

<br>

<source-code :codeType="codeTypes.JS" :content="content.scroll_Id_8" />

<br>

</ClientOnly>

<script>

import jQuery from "jquery"
import "bootstrap/scss/bootstrap.scss"
import "bootstrap/js/src"
import * as codeTypes from '@/utils/codeTypes'
import JqueryMethods from '@/utils/methods'
import ScrollspyContent from '@/content/components/scrollspy'

 export default {
     mounted() {
         this.initScrollSpy()
     },
     methods: {
         initScrollSpy() {
            JqueryMethods.reloadPage()
         }
     },
     data(){
         return {
             codeTypes: codeTypes, 
             content: ScrollspyContent
         }
     }
 }

</script>

<style lang="scss">
.navbar-demo {
  position: relative;
  display: flex;
  flex-wrap: wrap; // allow us to do the line break for collapsing content
  align-items: center;
  justify-content: space-between; // space out brand from logo
  padding: 5px 10px;

  > .container,
  > .container-fluid {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
}

.scrollspy-example{
    position: relative;
    height: 200px;
    margin-top: .5rem;
    overflow: auto;
}
.navbar{
    line-height: normal;
    }
.bd-example {
    position: relative;
    padding: 1rem;
    margin: 1rem -15px 0;
    border: solid #f8f9fa;
    border-width: .2rem 0 0;
}
.bg-light {
    background-color: #f8f9fa!important;
}
.scrollspy-example-2 {
    position: relative;
    height: 350px;
    overflow: auto;
}

</style>