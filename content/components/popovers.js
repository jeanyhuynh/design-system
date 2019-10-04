const instance = {}

instance.popvers_Id_1 =
    `
$(function () {
    $('[data-toggle="popover"]').popover()
})
`

instance.popvers_Id_2 =
    `
$(function () {
    $('.example-popover').popover({
      container: 'body'
    })
})`

instance.popvers_Id_3 =
    `
<div class="bd-example">
    <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title=""  data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="Popover title">Click to toggle popover</button>
</div>
`
instance.popvers_Id_4 =
    `
<div class="bd-example popover-demo">
  <div class="bd-example-popovers">
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">
      Popover on top
    </button>
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">
      Popover on right
    </button>
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">
      Popover on bottom
    </button>
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">
      Popover on left
    </button>
  </div>
</div>
`
instance.popvers_Id_5 =
    `
<div class="bd-example">
    <a tabindex="0" class="btn btn-lg btn-danger" id="popover-dismiss" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="Dismissible popover">Dismissible popover</a>
</div>
`
instance.popvers_Id_6 =
    `
$('.popover-dismiss').popover({
    trigger: 'focus'
})
`

instance.popvers_Id_7 =
    `
<div class="bd-example">
    <span class="d-inline-block" data-toggle="popover" data-content="Disabled popover" data-original-title="" title="">
        <button class="btn btn-primary" style="pointer-events: none;" type="button" disabled="">Disabled button</button>
    </span>
</div>
`
instance.popvers_Id_8 =
    `
$('#example').popover(options)
`
instance.popvers_Id_9 =
    `
$('#element').popover('show')
`
instance.popvers_Id_10 =
    `
$('#element').popover('hide')
`

instance.popvers_Id_11 =
    `
$('#element').popover('toggle')
`
instance.popvers_Id_12 =
    `
$('#element').popover('dispose')
`
instance.popvers_Id_13 =
    `
$('#element').popover('enable')
`
instance.popvers_Id_14 =
    `
$('#element').popover('disable')
`
instance.popvers_Id_15 =
    `
$('#element').popover('toggleEnabled')
`
instance.popvers_Id_16 =
    `
$('#element').popover('update')
`
instance.popvers_Id_17 =
    `
$('#myPopover').on('hidden.bs.popover', function () {
    // do something...
})
`


export default instance