(function($){
    $(function(){
        let rContainer = $('#resolutionContainer')
      setInterval(updateResolution,1000, rContainer);
    }); // end of document ready
    
})(jQuery); // end of jQuery name space
  
function updateResolution(container) {
    console.log('a');
    container.html(window.screen.width+"&times;"+window.screen.height+"<br />"+window.screen.availWidth+"&times;"+window.screen.availHeight);
}