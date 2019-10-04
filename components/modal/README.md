<ClientOnly>

# Modal

**Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.**

## How it works
<br>

Before getting started with Bootstrap’s modal component, be sure to read the following as our menu options have recently changed.

* Modals are built with HTML, CSS, and JavaScript. They’re positioned over everything else in the document and remove scroll from the `<body>` so that modal content scrolls instead.
* Clicking on the modal “backdrop” will automatically close the modal.
* Bootstrap only supports one modal window at a time. Nested modals aren’t supported as we believe them to be poor user experiences.
* Modals use `position: fixed`, which can sometimes be a bit particular about its rendering. Whenever possible, place your modal HTML in a top-level position to avoid potential interference from other elements. You’ll likely run into issues when nesting a `.modal` within another fixed element.
* Once again, due to `position: fixed`, there are some caveats with using modals on mobile devices. [See our browser support](https://getbootstrap.com/docs/4.3/getting-started/browsers-devices/#modals-and-dropdowns-on-mobile) docs for details.
* Due to how HTML5 defines its semantics, [the autofocus HTML attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus) has no effect in Bootstrap modals. To achieve the same effect, use some custom JavaScript:

<source-code :codeType="codeTypes.JS" :content="content.modal_Id_1" />
<br>

> The animation effect of this component is dependent on the `prefers-reduced-motion` media query. See the [reduced motion section of our accessibility documentation](https://getbootstrap.com/docs/4.3/getting-started/accessibility/#reduced-motion).

Keep reading for demos and usage guidelines.

## Examples
<br>

### Modal components
<br>

Below is a static modal example (meaning its `position` and `display` have been overridden). Included are the modal header, modal body (required for `padding`), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.

<element-slot :elementCode="content.modal_Id_2" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.modal_Id_2" />

## Live demo
<br>

Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.
<br>

<element-slot :elementCode="content.modal_Id_3" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.modal_Id_3" />

## Scrolling long content
<br>

When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.
<br>

<element-slot :elementCode="content.modal_Id_21" />

<source-code :codeType="codeTypes.HTML" :content="content.modal_Id_22" />

You can also create a scrollable modal that allows scroll the modal body by adding `.modal-dialog-scrollable` to `.modal-dialog`.

<element-slot :elementCode="content.modal_Id_23" />

<source-code :codeType="codeTypes.HTML" :content="content.modal_Id_24" />


## Vertically centered
<br>

Add `.modal-dialog-centered` to `.modal-dialog` to vertically center the modal.

<element-slot :elementCode="content.modal_Id_4" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.modal_Id_5" />

## Tooltips and popovers
<br>

[Tooltips](/components/tooltips/) and [popovers](/components/popovers/) can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed.

<br>

<element-slot :elementCode="content.modal_Id_6" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.modal_Id_7" />
<br>

## Using the grid
<br>

Utilize the Bootstrap grid system within a modal by nesting `.container-fluid` within the `.modal-body`. Then, use the normal grid system classes as you would anywhere else.

<br>

<element-slot :elementCode="content.modal_Id_8" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.modal_Id_9" />
<br>

## Varying modal content
<br>

Have a bunch of buttons that all trigger the same modal with slightly different contents? Use `event.relatedTarget` and [HTML data-* attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) (possibly [via jQuery](https://api.jquery.com/data/)) to vary the contents of the modal depending on which button was clicked.

Below is a live demo followed by example HTML and JavaScript. For more information, [read the modal events docs](/components/modal/#events) for details on `relatedTarget`.

<br>

<element-slot :elementCode="content.modal_Id_10" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.modal_Id_10" />
<br>

<source-code :codeType="codeTypes.JS" :content="content.modal_Id_11" />

## Change animation
<br>

The `$modal-fade-transform` variable determines the transform state of `.modal-dialog` before the modal fade-in animation, the `$modal-show-transform` variable determines the transform of `.modal-dialog` at the end of the modal fade-in animation.

If you want for example a zoom-in animation, you can set `$modal-fade-transform: scale(.8)`.

## Remove animation
<br>

For modals that simply appear rather than fade in to view, remove the `.fade` class from your modal markup.

<source-code :codeType="codeTypes.HTML" :content="content.modal_Id_12" />

## Dynamic heights
<br>

If the height of a modal changes while it is open, you should call `$('#myModal').modal('handleUpdate')` to readjust the modal’s position in case a scrollbar appears.

## Accessibility
<br>

Be sure to add `role="dialog"` and `aria-labelledby="..."`, referencing the modal title, to `.modal`, and `role="document"` to the `.modal-dialog` itself. Additionally, you may give a description of your modal dialog with `aria-describedby` on `.modal`.

## Embedding YouTube videos
<br>

Embedding YouTube videos in modals requires additional JavaScript not in Bootstrap to automatically stop playback and more. [See this helpful Stack Overflow post](https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal) for more information.

## Optional sizes
<br>

Modals have three optional sizes, available via modifier classes to be placed on a `.modal-dialog`. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.

| Size        | Class     ` | Modal max-width |
|-------------|-------------|-----------------|
| Small       | `.modal-sm` | 300px           |
| Default     | None        | 500px           |
| Large       | `.modal-lg` | 800px           |
| Extra large | `.modal-xl` | 1140px          |


Our default modal without modifier class constitutes the “medium” size modal.

<br>

<element-slot :elementCode="content.modal_Id_13" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.modal_Id_13" />

## Usage
<br>

The modal plugin toggles your hidden content on demand, via data attributes or JavaScript. It also adds `.modal-open` to the `<body>` to override default scrolling behavior and generates a `.modal-backdrop` to provide a click area for dismissing shown modals when clicking outside the modal.

## Via data attributes
<br>

Activate a modal without writing JavaScript. Set `data-toggle="modal"` on a controller element, like a button, along with a `data-target="#foo"` or `href="#foo"` to target a specific modal to toggle.

<br>

<source-code :codeType="codeTypes.HTML" :content="content.modal_Id_14" />

## Via JavaScript
<br>

Call a modal with id `myModal` with a single line of JavaScript:

<br>

<source-code :codeType="codeTypes.JS" :content="content.modal_Id_25" />

## Options
<br>

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-backdrop=""`.

| Name     | Type                           | Default | Description                                                                                                             |
|----------|--------------------------------|---------|-------------------------------------------------------------------------------------------------------------------------|
| backdrop | boolean or the string `'static'` | true    | Includes a modal-backdrop element. Alternatively, specify `static` for a backdrop which doesn't close the modal on click. |
| keyboard | boolean                        | true    | Closes the modal when escape key is pressed                                                                             |
| focus    | boolean                        | true    | Puts the focus on the modal when initialized.                                                                           |
| show     | boolean                        | true    | Shows the modal when initialized.                                                                                       |

## Methods
<br>

> ### `Asynchronous methods and transitions`
> All API methods are **asynchronous** and start a **transition**. They return to the caller as soon as the transition is started but **before it ends**. In addition, a method call on a **transitioning component will be ignored**.
>
> [See our JavaScript documentation for more information](https://getbootstrap.com/docs/4.3/getting-started/javascript/).

### `.modal(options)`
<br>

Activates your content as a modal. Accepts an optional options `object`.

<source-code :codeType="codeTypes.JS" :content="content.modal_Id_15" />

### `.modal('toggle')`
<br>

Manually toggles a modal. **Returns to the caller before the modal has actually been shown or hidden** (i.e. before the `shown.bs.modal` or `hidden.bs.modal` event occurs).

<source-code :codeType="codeTypes.JS" :content="content.modal_Id_16" />

<br>

### `.modal('show')`
<br>

Manually opens a modal. **Returns to the caller before the modal has actually been shown** (i.e. before the `shown.bs.modal` event occurs).


<source-code :codeType="codeTypes.JS" :content="content.modal_Id_17" />

### `.modal('hide')`
<br>

Manually hides a modal. **Returns to the caller before the modal has actually been hidden** (i.e. before the `hidden.bs.modal` event occurs).

<source-code :codeType="codeTypes.JS" :content="content.modal_Id_18" />

### `.modal('handleUpdate')`
<br>

Manually readjust the modal’s position if the height of a modal changes while it is open (i.e. in case a scrollbar appears).

<source-code :codeType="codeTypes.JS" :content="content.modal_Id_19" />

### `.modal('dispose')`
<br>

Destroys an element’s modal.

## Events
<br>

Bootstrap’s modal class exposes a few events for hooking into modal functionality. All modal events are fired at the modal itself (i.e. at the `<div class="modal">`).

| Event Type      | Description                                                                                                                                                                                                          |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| show.bs.modal   | This event fires immediately when the `show` instance method is called. If caused by a click, the clicked element is available as the `relatedTarget` property of the event.                                             |
| shown.bs.modal  | This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete). If caused by a click, the clicked element is available as the `relatedTarget` property of the event. |
| hide.bs.modal   | This event is fired immediately when the `hide` instance method has been called.                                                                                                                                       |
| hidden.bs.modal | This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete).                                                                                              |

<source-code :codeType="codeTypes.JS" :content="content.modal_Id_20" />

</ClientOnly>

<script>

import jQuery from "jquery";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/js/src";
import * as codeTypes from '@/utils/codeTypes'
import ModalContent from '@/content/components/modal'
 export default {
    mounted() {
        jQuery(function() {
                jQuery('[data-toggle="popover"]').popover()
                jQuery('[data-toggle="tooltip"]').tooltip()
                jQuery('#exampleModalVarying').on('show.bs.modal', function (event) {
                    
                var button = jQuery(event.relatedTarget) // Button that triggered the modal
                var recipient = button.data('whatever') // Extract info from data-* attributes
                var modal = jQuery(this)
                modal.find('.modal-title').text('New message to ' + recipient)
                modal.find('.modal-body input').val(recipient)
            })
        })
    },
     data(){
         return {
             codeTypes: codeTypes, 
             content: ModalContent
         }
     }
 }

</script>

<style lang="scss">

.bd-example {
    position: relative;
    padding: 1rem;

   .modal {
        position: relative;
        top: auto;
        right: auto;
        bottom: auto;
        left: auto;
        z-index: 1;
        display: block;
    }
    .modal-dialog {
        left: auto;
        margin-right: auto;
        margin-left: auto;
    }

}
.modal-dialog-scrollable 
{
    .modal-body {
        overflow-y: auto;
    }
    .modal-content {
        max-height: 300px;
    }
}

.bd-example-row 
{
    .row>.col,.row>[class^=col-] {
        padding-top: .75rem;
        padding-bottom: .75rem;
        background-color: rgba(86,61,124,.15);
        border: 1px solid rgba(86,61,124,.2);
    }
    .row + .row {
        margin-top: 1rem;
    }
}

</style>