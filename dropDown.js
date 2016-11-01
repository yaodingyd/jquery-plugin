/*
 * This is used for Bootstrap 4 Dropdown, updating the current selected one.
 *
 * There could a hidden input, and dropdown item could have a data-value attribute.
 * So after selecting, the input value could also be updated. 
 *
 */



jQuery.fn.dropDown = function(){
    var items = $(this).find('.dropdown-item');
    var button = $(this).find('.dropdown-toggle');
    var input = $(this).find('input');
    
    
    items.on('click', function(){
        button.empty().append($(this).html());
        input.val($(this).data('value'));
    });
}
