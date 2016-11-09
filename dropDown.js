/*
 * This is used for Bootstrap 4 Dropdown, updating the current selected one.
 *
 * There could a hidden input, and dropdown item could have a data-value attribute.
 * So after selecting, the input value could also be updated. 
 * 
 * Example:
    <div class="dropdown" >
        <input type="text" class="hidden-xs-up" id="lang" name="lang" value="<?= $data['lang']; ?>">
        <button class="btn btn-secondary dropdown-toggle" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <span href="#" class="flag-icon <?= $flag; ?>"></span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="locale-dropdown">
            <li class="dropdown-item" data-value="en"><span class="flag-icon flag-icon-gb"></span></li>
            <li class="dropdown-item" data-value="dk"><span class="flag-icon flag-icon-dk"></span></li>
        </ul>
    </div>
 *
 */


(function(){
jQuery.fn.dropDown = function(){
    var items = $(this).find('.dropdown-item');
    var button = $(this).find('.dropdown-toggle');
    var input = $(this).find('input');
    
    
    items.on('click', function(){
        button.empty().append($(this).html());
        input.val($(this).data('value'));
    });
}
})();
