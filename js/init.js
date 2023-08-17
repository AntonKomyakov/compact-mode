(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('#cm-switch').on('click',changeDensity);

  }); // end of document ready
  
})(jQuery); // end of jQuery name space

function changeDensity(evt) {
  let rowHeight = 0;
  let chipHeight = 0;
  let chipLineHeight = 0;
  let cellVPadding = 0;
  let iFontSize = 0;
  let cellHPadding = 0;
  
  if (page === "Default") {
    if(evt.target.checked){
      rowHeight = 32;
      chipHeight = 24 
      chipLineHeight = 22;
      cellVPadding = 4;
      cellHPadding = 12;
    } else {
      rowHeight = 48;
      chipHeight = 24 
      chipLineHeight = 22;
      cellVPadding = 2;
      cellHPadding = 12;
    }
    $('th,td').css({'height':rowHeight+'px', 'padding':cellVPadding+'px '+cellHPadding+'px'});
    $('span.badge').css({'height':chipHeight+'px','line-height':chipLineHeight+'px'});
    
    console.log('Default page');
  } else if (page==="Small") {
    if(evt.target.checked){
      rowHeight = 28;
      chipHeight = 20 
      chipLineHeight = 20;
      cellVPadding = 2;
      iFontSize = 1.5;
      cellHPadding = 12;
    } else {
      rowHeight = 36;
      chipHeight = 24 
      chipLineHeight = 22;
      cellVPadding = 2;
      cellHPadding = 12;
      iFontSize = 1.7;
    }
    $('i').css({'font-size':iFontSize+'rem'});
    $('th,td').css({'height':rowHeight+'px', 'padding':cellVPadding+'px '+cellHPadding+'px'});
    $('span.badge').css({'height':chipHeight+'px','line-height':chipLineHeight+'px'});
    console.log("Small page");
  } else if (page === "Pivot") {
    if(evt.target.checked){
      rowHeight = 20;
      chipHeight = 16 
      chipLineHeight = 12;
      cellVPadding = 0;
      cellHPadding = 4;
    } else {
      rowHeight = 28;
      chipHeight = 24 
      chipLineHeight = 20;
      cellVPadding = 0;
      cellHPadding = 8;
    }
    $('th,td').css({'height':rowHeight+'px', 'line-height':rowHeight+'px', 'padding':cellVPadding+'px '+cellHPadding+'px'});
    $('span.badge').css({'height':chipHeight+'px','line-height':chipLineHeight+'px'});
    console.log("Pivot page");
  }

  console.log(evt.target.checked); 
  
}

function writeMediumTable(){
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
function writeSmallTable(){
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
    document.write('<td><i class="green-text xsmall material-icons">',Math.random()>0.5?'check_circle':'','</i></td>');
    document.write('<td>Revenue Gap 20%</td>');
    document.write('<td class="right-align">',(Math.random()*1000000).toFixed(2),'</td>');
    document.write('<td class="right-align">',(Math.random()*1000000).toFixed(2),'</td>');
    document.write('<td class="right-align">',(Math.random()*1000000).toFixed(2),'</td>');
    document.write('</tr>');
    }
  document.write("</table>");
}
function writePivotTable(){
  document.write('<table class="striped">');

  document.write('<th>Item</th>');
  document.write('<th>Location</th>');
  document.write('<th>Customer</th>');
  document.write('<th>Measures</th>');
  document.write('<th>#</th>');
  for ( let w=1; w <= 25; w++ ) {
    document.write('<th class="right-align">WK ',w,'</th>');
  }

  for(let p = 1; p <= 2; p++){
    document.write('<tr>');
    document.write('<td rowspan="40" class="valign-top">Product ',p,'</td>');
    for(let l = 1; l <= 2; l++){
      document.write('<td rowspan="20" class="valign-top">Location ',l,'</td>');
      for( let c = 1; c <= 2; c++) {
        document.write('<td rowspan="10" class="valign-top">Customer ',c,'</td>');
        for ( let m=1; m <= 10; m++) {
          document.write('<td>Measure ',m,'</td>');
          document.write('<td>',(p-1)*40+(l-1)*20+(c-1)*10+m,'</td>');
          for ( let w=1; w <= 25; w++){
            if (m=== 10){
              document.write('<td><i class="green-text tiny material-icons">',Math.random()>0.5?'check_circle':'','</i></td>');
            } else {
              document.write('<td class="right-align">',(Math.random()*1000000).toFixed(2),'</td>');
            }
          }
          document.write('</tr>');
        }
        document.write('</tr>');
      }
      document.write('</tr>');
    }
    document.write('</tr>');
    }
  document.write("</table>");
}

function drawMobileNav() {
  document.write('<ul class="sidenav" id="mobile-demo">\
    <li><a href="index.html">Default</a></li>\
    <li><a href="small.html">Small</a></li>\
    <li><a href="pivot.html">Pivot</a></li>\
  </ul>\
  ');      
}

function drawNav(iActiveState) {

  var sState1 ='';
  var sState2 = '';
  var sState3 = '';

  switch (iActiveState) {
    case 1:
      sState1 = "active";
      break;
    case 2:
      sState2 = "active";
      break;
    case 3:
      sState3 = "active";
      break;
  }
  console.log('iActiveState:' + iActiveState); 
  console.log('sState2:' + sState3); 

  document.write('<ul class="right"> <!-- hide-on-med-and-down -->\
  <li class="' + sState1 + '"><a href="index.html">Default: Table</a></li>\
  <li class="' + sState2 + '"><a href="small.html">Small: Table</a></li>\
  <li class="' + sState3 + '"><a href="pivot.html">X-Small: Pivot</a></li>\
  <li></div>\
</ul>\
');
}