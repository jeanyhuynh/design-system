const instance = {
    ID_1:
        `
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
`,
    //divider
    ID_2: `
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
    Tooltip on top
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
    Tooltip on right
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
    Tooltip on bottom
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
    Tooltip on left
</button>`,
    //divider
    ID_3: `
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
    Tooltip with HTML
</button>`,
    //divider
    ID_4: `
$('#example').tooltip(options)`,
    //divider
    ID_5: `
$('#example').tooltip({ boundary: 'window' })`,
    //divider
    ID_6: `
<!-- HTML to write -->
<a href="#" data-toggle="tooltip" title="Some tooltip text!">Hover over me</a>

<!-- Generated markup by the plugin -->
<div class="tooltip bs-tooltip-top" role="tooltip">
    <div class="arrow"></div>
    <div class="tooltip-inner">
        Some tooltip text!
    </div>
</div>`,
    //divider
    ID_7: `
<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Disabled tooltip">
    <button class="btn btn-primary" style="pointer-events: none;" type="button" disabled>Disabled button</button>
</span>`,
    //divider
    ID_8: `
$('#element').tooltip('show')`,
    //divider
    ID_9: `$('#element').tooltip('hide')`,
    //divider
    ID_10: `
$('#element').tooltip('toggle')`,
    //divider
    ID_11: `
$('#element').tooltip('dispose')`,
    //divider
    ID_12: `
$('#element').tooltip('enable')`,
    //divider
    ID_13: `
$('#element').tooltip('disable')`,
    //divider
    ID_14: `
$('#element').tooltip('toggleEnabled')`,
    //divider
    ID_15: `
$('#element').tooltip('update')`,
    //divider
    ID_16: `
$('#myTooltip').on('hidden.bs.tooltip', function () {
// do something...
})`

}
export default instance