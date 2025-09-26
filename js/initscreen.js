(function($){
    $(function(){
        let rContainer = $('#resolutionContainer');
        let nContainer = $('#navigatorContainer');
      setInterval(updateResolution,1000, rContainer);
      getBrowserInfo(nContainer);
    }); // end of document ready
    
})(jQuery); // end of jQuery name space
  
function getBrowserInfo(container) {
    container.html(navigator.userAgent);
}

function updateResolution(container) {
    container.html(window.screen.width+"&times;"+window.screen.height+"<br />"+window.screen.availWidth+"&times;"+window.screen.availHeight);
}
