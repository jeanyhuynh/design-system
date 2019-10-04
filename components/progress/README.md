<ClientOnly>

# Progress

<br>

**Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.**

## How it works
<br>

Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don’t use [the HTML5 `<progress>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), ensuring you can stack progress bars, animate them, and place text labels over them.

* We use the `.progress` as a wrapper to indicate the max value of the progress bar.
* We use the inner `.progress-bar` to indicate the progress so far.
* The `.progress-bar` requires an inline style, utility class, or custom CSS to set their width.
* The `.progress-bar` also requires some `role` and `aria` attributes to make it accessible.

<br>

Put that all together, and you have the following examples.

<br/>

<element-slot :elementCode="content.progre_Id_1" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.progre_Id_1" />


Bootstrap provides a handful of [utilities for setting width](https://getbootstrap.com/docs/4.3/utilities/sizing/). Depending on your needs, these may help with quickly configuring progress.

<br>

<element-slot :elementCode="content.progre_Id_2" />

<source-code :codeType="codeTypes.HTML" :content="content.progre_Id_2" />


## Labels
<br>


Add labels to your progress bars by placing text within the `.progress-bar`.

<br/>

<element-slot :elementCode="content.progre_Id_3" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.progre_Id_3" />

## Height
<br>

We only set a `height` value on the `.progress`, so if you change that value the inner `.progress-bar` will automatically resize accordingly.

<br/>

<element-slot :elementCode="content.progre_Id_4" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.progre_Id_4" />

## Backgrounds
<br>

Use background utility classes to change the appearance of individual progress bars.

<br/>

<element-slot :elementCode="content.progre_Id_5" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.progre_Id_5" />

## Multiple bars
<br>

Include multiple progress bars in a progress component if you need.

<br/>

<element-slot :elementCode="content.progre_Id_6" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.progre_Id_6" />

## Striped
<br>

Add `.progress-bar-striped` to any `.progress-bar` to apply a stripe via CSS gradient over the progress bar’s background color.

<br/>

<element-slot :elementCode="content.progre_Id_7" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.progre_Id_7" />

## Animated stripes
<br>

The striped gradient can also be animated. Add `.progress-bar-animated` to `.progress-bar` to animate the stripes right to left via CSS3 animations.
<br/>

<element-slot :elementCode="content.progre_Id_8" />

<br>

<source-code :codeType="codeTypes.HTML" :content="content.progre_Id_8" />


</ClientOnly>

<script>

import jQuery from "jquery";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/js/src";
import * as codeTypes from '@/utils/codeTypes'
import ProgressContent from '@/content/components/progress'
 export default {
    mounted() {
        setTimeout(() => {
            jQuery('#progressClick').on('click', () => {
                jQuery("#progress-bar-striped-animation").toggleClass('progress-bar-animated')
               
            })
        }, 1000)
    },

     data(){
         return {
             codeTypes: codeTypes, 
             content: ProgressContent
         }
     }
 }


</script >



<style  lang="scss">
    .bd-example>.progress+.progress {
        margin-top: 1rem;
    }
    .bd-example>.nav+.nav, .bd-example>.navbar+.navbar, .bd-example>.progress+.btn, .bd-example>.progress+.progress 
    {
        margin-top: 1rem;
    }
</style>