var selectedFont = 14;

let randomString = [
  'Optimizing inventory levels through demand planning analysis',
  'Forecasting customer demand for better supply chain management',
  'Using predictive analytics to improve demand planning accuracy',
  'Collaborating with sales teams to enhance demand planning strategies',
  'Leveraging historical data for more effective demand planning',
  'Minimizing stockouts and overstocking with demand planning insights',
  'Streamlining production schedules with demand planning optimization',
  'Maximizing profitability through demand planning and inventory control',
]

// Getting the stylesheet
let stylesheet;
let tdthRules;
let tdRules;
let iRules;
let badgeRules;

(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('#cm-switch').on('click',changeDensity);

    $('.tooltipped').tooltip();

    if (page === 'Pivot') {
      var fontSelector = $('#fontSelector').formSelect();
      fontSelector.on('change', changeFont);

      $('#fontSelectorContainer').hide();

      let mySheets = document.styleSheets;
      stylesheet = document.styleSheets[4];
      console.log('stylesheet',stylesheet);

      // looping through all its rules and getting your rule
      /* for(let i = 0; i < stylesheet.cssRules.length; i++) {
        if(stylesheet.cssRules[i].selectorText === 'td, th') {
          tdthRules = stylesheet.cssRules[i];
        }
      }
      console.log('tdth styles:', tdthRules);
      // modifying the rule in the stylesheet
      //elementRules.style.setProperty('background', 'blue');
      */
    }
    
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
      rowHeight = 19;
      chipHeight = 16 
      chipLineHeight = 12;
      cellVPadding = 0;
      cellHPadding = 6;
      $('#fontSelectorContainer').show();
      $('div.switcher-wrapper').show();
      $('td').css({'font-size':selectedFont+'px'});
    } else {
      rowHeight = 28;
      chipHeight = 24 
      chipLineHeight = 20;
      cellVPadding = 0;
      cellHPadding = 8;
      $('#fontSelectorContainer').hide();
      $('div.switcher-wrapper').hide();
      $('td').css({'font-size':'14px'});
    }
    $('th,td').css({'height':rowHeight+'px', 'line-height':rowHeight+'px', 'padding':cellVPadding+'px '+cellHPadding+'px'});
    $('span.badge').css({'height':chipHeight+'px','line-height':chipLineHeight+'px'});
    console.log("Pivot page");
  }

  console.log(evt.target.checked); 
  
}

function changeFont(evt) {
  selectedFont = $(evt.target).find(':selected').val();
  console.log(selectedFont);
  $('td').css({'font-size':selectedFont+'px'});
}

function setFont(evt){
  selectedFont = evt.target.text;
  $('ul.font-switcher li a').removeClass("activated");
  $(evt.target).addClass("activated");
  $(this).blur();
  $('td').css({'font-size':selectedFont+'px'});
}

function drawMediumTable(){
  document.write('<table class="striped fixed">');
  document.write('<thead>');

  document.write('<th class="rnumber right-align">No</th>');
  document.write('<th>String</th>');
  document.write('<th class="status">Status</th>');
  document.write('<th class="date">Date</th>');
  document.write('<th class="date">Date</th>');
  document.write('<th class="date">Date</th>');
  document.write('<th class="date">Date</th>');
  document.write('<th class="boolean center-align">Bool</th>');
  document.write('<th class="boolean center-align">Bool</th>');
  document.write('<th>String</th>');
  document.write('<th class="cnumber right-align">Number</th>');
  document.write('<th class="cnumber right-align">Number</th>');
  document.write('<th class="cnumber right-align">Number</th>');
  document.write('<th class="cnumber right-align">Number</th>');
  document.write('<th class="cnumber right-align">Number</th>');
  document.write('<th class="cnumber right-align">Number</th>');
  document.write('<th class="cnumber right-align">Number</th>');

  document.write('</thead>');
  document.write('<tbody>');

  for(let colNum = 1; colNum < 50; colNum++){
    let selectedString1 = randomString[Math.round(Math.random()*7)];
    let selectedString2 = randomString[Math.round(Math.random()*7)];
    document.write('<tr>');
    document.write('<td class="rnumber right-align">',colNum,'</td>');
    document.write('<td class="cstring"><span  class="tooltipped" data-tooltip="',selectedString1,'">',selectedString1,'</span></td>');
    document.write('<td class="status"><span class="badge">Open</span></td>');
    document.write('<td class="date">01/02/2024</td>');
    document.write('<td class="date">01/02/2024</td>');
    document.write('<td class="date">01/02/2024</td>');
    document.write('<td class="date">01/02/2024</td>');
    document.write('<td class="boolean center-align"><i class="green-text small material-icons">',Math.random()>0.5?'check_circle':'','</i></td>');
    document.write('<td class="boolean center-align"><i class="green-text small material-icons">',Math.random()>0.5?'check_circle':'','</i></td>');
    document.write('<td class="cstring"><span  class="tooltipped" data-tooltip="',selectedString2,'">',selectedString2,'</span></td>');
    document.write('<td class="cnumber right-align">',(Math.random()*1000000).toFixed(2),'</td>');
    document.write('<td class="cnumber right-align">',(Math.random()*1000000).toFixed(2),'</td>');
    document.write('<td class="cnumber right-align">',(Math.random()*1000000).toFixed(2),'</td>');
    document.write('<td class="cnumber right-align">',(Math.random()*1000000).toFixed(2),'</td>');
    document.write('<td class="cnumber right-align">',(Math.random()*1000000).toFixed(2),'</td>');
    document.write('<td class="cnumber right-align">',(Math.random()*1000000).toFixed(2),'</td>');
    document.write('<td class="cnumber right-align">',(Math.random()*1000000).toFixed(2),'</td>');
    document.write('</tr>');
  }
  document.write('</tbody>');
  
  document.write("</table>");
}

function drawSmallTable(){
  document.write('<table class="striped fixed">');
  document.write('<thead>');

  document.write('<th class="rnumber right-align">No</th>');
  document.write('<th>String</th>');
  document.write('<th class="status">Status</th>');
  document.write('<th class="date">Date</th>');
  document.write('<th class="date">Date</th>');
  document.write('<th class="date">Date</th>');
  document.write('<th class="date">Date</th>');
  document.write('<th class="boolean center-align">Bool</th>');
  document.write('<th class="boolean center-align">Bool</th>');
  document.write('<th>String</th>');
  document.write('<th class="cnumber right-align">Number</th>');
  document.write('<th class="cnumber right-align">Number</th>');
  document.write('<th class="cnumber right-align">Number</th>');
  document.write('<th class="cnumber right-align">Number</th>');
  document.write('<th class="cnumber right-align">Number</th>');
  document.write('<th class="cnumber right-align">Number</th>');
  document.write('<th class="cnumber right-align">Number</th>');

  document.write('</thead>');
  document.write('<tbody>');

  for(let colNum = 1; colNum < 50; colNum++){
    let selectedString1 = randomString[Math.round(Math.random()*7)];
    let selectedString2 = randomString[Math.round(Math.random()*7)];
    document.write('<tr>');
    document.write('<td class="rnumber right-align">',colNum,'</td>');
    document.write('<td class="cstring"><span  class="tooltipped" data-tooltip="',selectedString1,'">',selectedString1,'</span></td>');
    document.write('<td class="status"><span class="badge">Open</span></td>');
    document.write('<td class="date">01/02/2024</td>');
    document.write('<td class="date">01/02/2024</td>');
    document.write('<td class="date">01/02/2024</td>');
    document.write('<td class="date">01/02/2024</td>');
    document.write('<td class="boolean center-align"><i class="green-text small material-icons">',Math.random()>0.5?'check_circle':'','</i></td>');
    document.write('<td class="boolean center-align"><i class="green-text small material-icons">',Math.random()>0.5?'check_circle':'','</i></td>');
    document.write('<td class="cstring"><span  class="tooltipped" data-tooltip="',selectedString2,'">',selectedString2,'</span></td>');
    document.write('<td class="cnumber right-align">',(Math.random()*1000000).toFixed(2),'</td>');
    document.write('<td class="cnumber right-align">',(Math.random()*1000000).toFixed(2),'</td>');
    document.write('<td class="cnumber right-align">',(Math.random()*1000000).toFixed(2),'</td>');
    document.write('<td class="cnumber right-align">',(Math.random()*1000000).toFixed(2),'</td>');
    document.write('<td class="cnumber right-align">',(Math.random()*1000000).toFixed(2),'</td>');
    document.write('<td class="cnumber right-align">',(Math.random()*1000000).toFixed(2),'</td>');
    document.write('<td class="cnumber right-align">',(Math.random()*1000000).toFixed(2),'</td>');
    document.write('</tr>');
  }
  document.write('</tbody>');
  
  document.write("</table>");

}

function drawSmallTableOld(){
  document.write('<table class="striped">');

  document.write('<th class="right-align">No</th>');
  document.write('<th>Name</th>');
  document.write('<th>Status</th>');
  document.write('<th class="center-aligned">Is Reviewed</th>');
  document.write('<th>Category</th>');
  document.write('<th class="right-align">Financial Impact (m)</th>');
  document.write('<th class="right-align">Financial Impact (m)</th>');
  document.write('<th class="right-align">Financial Impact (m)</th>');

  for(let colNum = 1; colNum < 50; colNum++){
    document.write('<tr>');
    document.write('<td class="right-align">',colNum,'</td>');
    document.write('<td>Demand forecast for Smarties at the Windsor DC Jan 20-W2 deviates -22% from last year\'s sales.</td>');
    document.write('<td><span class="badge">Open</span></td>');
    document.write('<td class="center-aligned"><i class="green-text xsmall material-icons">', Math.random()>0.5 ? 'check_circle' : '', '</i></td>');
    document.write('<td>Revenue Gap 20%</td>');
    document.write('<td class="right-align">',(Math.random()*1000000).toFixed(2),'</td>');
    document.write('<td class="right-align">',(Math.random()*1000000).toFixed(2),'</td>');
    document.write('<td class="right-align">',(Math.random()*1000000).toFixed(2),'</td>');
    document.write('</tr>');
    }
  document.write("</table>");
}

function drawPivotTable(){
  document.write('<table class="striped">');

  document.write('<th>Item</th>');
  document.write('<th>Location</th>');
  document.write('<th>Customer</th>');
  document.write('<th>Measures</th>');
  document.write('<th>#</th>');
  for ( let w=1; w <= 35; w++ ) {
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
          for ( let w=1; w <= 35; w++){
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

  var sState1 = '';
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
  console.log('sState2:' + sState2); 

  document.write('<ul class="right"> <!-- hide-on-med-and-down -->\
  <li class="' + sState1 + '"><a href="index.html">Default: Table</a></li>\
  <li class="' + sState2 + '"><a href="small.html">Small: Table</a></li>\
  <li class="' + sState3 + '"><a href="pivot.html">X-Small: Pivot</a></li>\
</ul>\
');
}

function drawFontSwitcher(iActiveState) {
  var sState1, sState2, sState3, sState4 = '';
  
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
    case 4:
      sState4 = "active";
      break;
  }
  console.log('FontButActiveState:' + iActiveState); 
  
  document.write('<div class="right switcher-wrapper">Font-size:&nbsp;<ul class="right font-switcher"> <!-- hide-on-med-and-down -->\
  <li class="right ' + sState1 + '"><a class="btn-flat btn-small" href="#">10</a></li>\
  <li class="right ' + sState2 + '"><a class="btn-flat btn-small" href="#">11</a></li>\
  <li class="right ' + sState3 + '"><a class="btn-flat btn-small" href="#">12</a></li>\
  <li class="right ' + sState4 + '"><a class="btn-flat btn-small" href="#">14</a></li>\
  </ul></div>\
');
$('ul.font-switcher a').filter(function(index) { return $(this).text() == selectedFont; }).addClass("activated");
$('ul.font-switcher li a').on('click', setFont);
$('div.switcher-wrapper').hide();

}