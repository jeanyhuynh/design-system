<ClientOnly>

# Jumbotron

**Lightweight, flexible component for showcasing hero unit style content.**

A lightweight, flexible component that can optionally extend the entire viewport to showcase key marketing messages on your site.

<element-slot :elementCode="content.data_1" />

<source-code :codeType="codeTypes.HTML" :content="content.data_1" />

To make the jumbotron full width, and without rounded corners, add the `.jumbotron-fluid` modifier class and add a `.container` or `.container-fluid` within.

<element-slot :elementCode="content.data_2" />

<source-code :codeType="codeTypes.HTML" :content="content.data_2" />

</ClientOnly>

<script>
  import * as codeTypes from '@/utils/codeTypes'
  import dataContent from '@/content/components/jumbotron'

  export default {
    data() {
      return {
        codeTypes: codeTypes,
        content: dataContent          
      }
    }
  }
</script>