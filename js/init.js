(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
  
})(jQuery); // end of jQuery name space

function writeTable(){
  document.write('<table class="striped">');

  document.write('<th class="right-align">Line Number</th>');
  document.write('<th>Name</th>');
  document.write('<th>Status</th>');
  document.write('<th>Is Reviewed</th>');
  document.write('<th>Category</th>');
  document.write('<th class="right-align">Finantial Impact (m)</th>');
  document.write('<th class="right-align">Finantial Impact (m)</th>');
  document.write('<th class="right-align">Finantial Impact (m)</th>');

  for(let colNum = 1; colNum < 50; colNum++){
    document.write('<tr>');
    document.write('<td class="right-align">',colNum,'</td>');
    document.write('<td>Demand forecast for Smarties at the Windsor DC Jan 20-W2 deviates -22% from last year\'s sales.</td>');
    document.write('<td><span class="badge">Open</span></td>');
    document.write('<td><i class="green-text small material-icons">',Math.random()>0.5?'check_circle':'','</i></td>');
    document.write('<td>Revenue Gap 20%</td>');
    document.write('<td class="right-align">',(Math.random()*1000000).toFixed(2),'</td>');
    document.write('<td class="right-align">',(Math.random()*1000000).toFixed(2),'</td>');
    document.write('<td class="right-align">',(Math.random()*1000000).toFixed(2),'</td>');
    document.write('</tr>');
    }
  document.write("</table>");
}