/*
  This plugin needs Bootstrap 4 and Font Awesome to work.
*/



(function(){
    $.fn.spinner = function(message){
        var defaultMessage = 'Loading...'
        message = message !== undefined ? message : defaultMessage;
        if($('#spinner').length === 0) {
           var modalHTML = '<div class="modal fade" id="spinner">'
            + '<div class="modal-dialog" role="document" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">'
            +   '<div class="modal-content">'
            +      '<div class="modal-body text-xs-center">'
            +        '<div id="spinner-message" style="min-width:200px">' + message + '</div>'
            +        '<i class="fa fa-spinner fa-pulse fa-2x" aria-hidden="true"></i>'
            +     '</div>'
            +    '</div>'
            +  '</div>'
            + '</div>';

            $('body').append(modalHTML); 
            $('#spinner').modal({
                keyboard: false,
                backdrop: 'static'
            });
        } else {
            if(message !== defaultMessage){
                $('#spinner-message').html(message);   
            }
            $('#spinner').modal('toggle');   
        }
    }
}())
