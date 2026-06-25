// (C) Wolfgang Huber 2010-2011

// Script parameters - these are set up by R in the function 'writeReport' when copying the 
//   template for this script from arrayQualityMetrics/inst/scripts into the report.

var highlightInitial = ["false","false","false","false","false","false","false","false","false","true","false","false","false","false","false","false","false","false","false"];
var arrayMetadata    = [{"array":"1","sampleNames":"Of.098","id":"Of_098","genotype":"green","treatment":"DC","fate":"Diseased","date":"5/19/24","lesion":"22","days":"22","status":"1","A3___A3":"0.09866035","A13___A13":"0.00949227","C42.2_C1.C1b___C42.2_C1":"0","D1.D4.D4c.D1c.D2___D1":"0.89184738","G3l___G3l":"0"},{"array":"2","sampleNames":"Of.104","id":"Of_104","genotype":"green","treatment":"DC","fate":"Diseased","date":"5/19/24","lesion":"21","days":"21","status":"1","A3___A3":"0","A13___A13":"0","C42.2_C1.C1b___C42.2_C1":"0","D1.D4.D4c.D1c.D2___D1":"1","G3l___G3l":"0"},{"array":"3","sampleNames":"Of.112","id":"Of_112","genotype":"green","treatment":"HW","fate":"Healthy","date":"5/27/24","days":"32","status":"0","A3___A3":"0","A13___A13":"0","C42.2_C1.C1b___C42.2_C1":"0","D1.D4.D4c.D1c.D2___D1":"1","G3l___G3l":"0"},{"array":"4","sampleNames":"Of.114","id":"Of_114","genotype":"green","treatment":"DW1","fate":"Diseased","date":"5/27/24","lesion":"32","days":"32","status":"1","A3___A3":"0","A13___A13":"0","C42.2_C1.C1b___C42.2_C1":"0","D1.D4.D4c.D1c.D2___D1":"1","G3l___G3l":"0"},{"array":"5","sampleNames":"Of.126","id":"Of_126","genotype":"green","treatment":"HW","fate":"Healthy","date":"5/30/24","days":"35","status":"0","A3___A3":"0","A13___A13":"0","C42.2_C1.C1b___C42.2_C1":"0.10338802","D1.D4.D4c.D1c.D2___D1":"0.89661198","G3l___G3l":"0"},{"array":"6","sampleNames":"Of.130","id":"Of_130","genotype":"green","treatment":"DC","fate":"Diseased","date":"5/30/24","lesion":"35","days":"35","status":"1","A3___A3":"0.03908807","A13___A13":"0","C42.2_C1.C1b___C42.2_C1":"0","D1.D4.D4c.D1c.D2___D1":"0.96091193","G3l___G3l":"0"},{"array":"7","sampleNames":"Of.142","id":"Of_142","genotype":"green","treatment":"HW","fate":"Healthy","date":"6/5/24","days":"41","status":"0","A3___A3":"0","A13___A13":"0","C42.2_C1.C1b___C42.2_C1":"0","D1.D4.D4c.D1c.D2___D1":"1","G3l___G3l":"0"},{"array":"8","sampleNames":"Of.150","id":"Of_150","genotype":"green","treatment":"HW","fate":"Healthy","date":"6/5/24","days":"41","status":"0","A3___A3":"0","A13___A13":"0","C42.2_C1.C1b___C42.2_C1":"0","D1.D4.D4c.D1c.D2___D1":"1","G3l___G3l":"0"},{"array":"9","sampleNames":"Of.152","id":"Of_152","genotype":"green","treatment":"DC","fate":"NAI","date":"6/5/24","days":"41","status":"0","A3___A3":"0.07023676","A13___A13":"0","C42.2_C1.C1b___C42.2_C1":"0","D1.D4.D4c.D1c.D2___D1":"0.92976324","G3l___G3l":"0"},{"array":"10","sampleNames":"Of.154","id":"Of_154","genotype":"green","treatment":"DC","fate":"NAI","date":"6/5/24","days":"41","status":"0","A3___A3":"0","A13___A13":"0","C42.2_C1.C1b___C42.2_C1":"0","D1.D4.D4c.D1c.D2___D1":"1","G3l___G3l":"0"},{"array":"11","sampleNames":"Of.158","id":"Of_158","genotype":"green","treatment":"DC","fate":"Diseased","date":"6/5/24","lesion":"41","days":"41","status":"1","A3___A3":"0","A13___A13":"0","C42.2_C1.C1b___C42.2_C1":"0","D1.D4.D4c.D1c.D2___D1":"0.99908713","G3l___G3l":"0.000913"},{"array":"12","sampleNames":"Of.162","id":"Of_162","genotype":"green","treatment":"DW2","fate":"NAI","date":"6/5/24","days":"41","status":"0","A3___A3":"0","A13___A13":"0","C42.2_C1.C1b___C42.2_C1":"0","D1.D4.D4c.D1c.D2___D1":"1","G3l___G3l":"0"},{"array":"13","sampleNames":"Of.170","id":"Of_170","genotype":"green","treatment":"DW1","fate":"NAI","date":"6/5/24","days":"41","status":"0","A3___A3":"0","A13___A13":"0","C42.2_C1.C1b___C42.2_C1":"0","D1.D4.D4c.D1c.D2___D1":"1","G3l___G3l":"0"},{"array":"14","sampleNames":"Of.180","id":"Of_180","genotype":"green","treatment":"DW1","fate":"NAI","date":"6/5/24","days":"41","status":"0","A3___A3":"0","A13___A13":"0","C42.2_C1.C1b___C42.2_C1":"0","D1.D4.D4c.D1c.D2___D1":"1","G3l___G3l":"0"},{"array":"15","sampleNames":"Of.200","id":"Of_200","genotype":"green","treatment":"DW2","fate":"NAI","date":"6/5/24","days":"41","status":"0","A3___A3":"0","A13___A13":"0","C42.2_C1.C1b___C42.2_C1":"0","D1.D4.D4c.D1c.D2___D1":"1","G3l___G3l":"0"},{"array":"16","sampleNames":"Of.202","id":"Of_202","genotype":"green","treatment":"DW2","fate":"NAI","date":"6/5/24","days":"41","status":"0","A3___A3":"0","A13___A13":"0","C42.2_C1.C1b___C42.2_C1":"0","D1.D4.D4c.D1c.D2___D1":"1","G3l___G3l":"0"},{"array":"17","sampleNames":"Of.216","id":"Of_216","genotype":"green","treatment":"DW1","fate":"Diseased","date":"6/5/24","lesion":"35","days":"35","status":"1","A3___A3":"0","A13___A13":"0","C42.2_C1.C1b___C42.2_C1":"0","D1.D4.D4c.D1c.D2___D1":"1","G3l___G3l":"0"},{"array":"18","sampleNames":"Of.224","id":"Of_224","genotype":"green","treatment":"DW2","fate":"NAI","date":"6/5/24","days":"41","status":"0","A3___A3":"0","A13___A13":"0","C42.2_C1.C1b___C42.2_C1":"0","D1.D4.D4c.D1c.D2___D1":"1","G3l___G3l":"0"},{"array":"19","sampleNames":"Of.266","id":"Of_266","genotype":"F2","treatment":"DC","fate":"Diseased","date":"6/21/24","lesion":"8","days":"8","status":"1","A3___A3":"0","A13___A13":"0","C42.2_C1.C1b___C42.2_C1":"0","D1.D4.D4c.D1c.D2___D1":"1","G3l___G3l":"0"}];
var svgObjectNames   = ["pca","dens"];

var cssText = ["stroke-width:1; stroke-opacity:0.4",
               "stroke-width:3; stroke-opacity:1" ];

// Global variables - these are set up below by 'reportinit'
var tables;             // array of all the associated ('tooltips') tables on the page
var checkboxes;         // the checkboxes
var ssrules;


function reportinit() 
{
 
    var a, i, status;

    /*--------find checkboxes and set them to start values------*/
    checkboxes = document.getElementsByName("ReportObjectCheckBoxes");
    if(checkboxes.length != highlightInitial.length)
	throw new Error("checkboxes.length=" + checkboxes.length + "  !=  "
                        + " highlightInitial.length="+ highlightInitial.length);
    
    /*--------find associated tables and cache their locations------*/
    tables = new Array(svgObjectNames.length);
    for(i=0; i<tables.length; i++) 
    {
        tables[i] = safeGetElementById("Tab:"+svgObjectNames[i]);
    }

    /*------- style sheet rules ---------*/
    var ss = document.styleSheets[0];
    ssrules = ss.cssRules ? ss.cssRules : ss.rules; 

    /*------- checkboxes[a] is (expected to be) of class HTMLInputElement ---*/
    for(a=0; a<checkboxes.length; a++)
    {
	checkboxes[a].checked = highlightInitial[a];
        status = checkboxes[a].checked; 
        setReportObj(a+1, status, false);
    }

}


function safeGetElementById(id)
{
    res = document.getElementById(id);
    if(res == null)
        throw new Error("Id '"+ id + "' not found.");
    return(res)
}

/*------------------------------------------------------------
   Highlighting of Report Objects 
 ---------------------------------------------------------------*/
function setReportObj(reportObjId, status, doTable)
{
    var i, j, plotObjIds, selector;

    if(doTable) {
	for(i=0; i<svgObjectNames.length; i++) {
	    showTipTable(i, reportObjId);
	} 
    }

    /* This works in Chrome 10, ssrules will be null; we use getElementsByClassName and loop over them */
    if(ssrules == null) {
	elements = document.getElementsByClassName("aqm" + reportObjId); 
	for(i=0; i<elements.length; i++) {
	    elements[i].style.cssText = cssText[0+status];
	}
    } else {
    /* This works in Firefox 4 */
    for(i=0; i<ssrules.length; i++) {
        if (ssrules[i].selectorText == (".aqm" + reportObjId)) {
		ssrules[i].style.cssText = cssText[0+status];
		break;
	    }
	}
    }

}

/*------------------------------------------------------------
   Display of the Metadata Table
  ------------------------------------------------------------*/
function showTipTable(tableIndex, reportObjId)
{
    var rows = tables[tableIndex].rows;
    var a = reportObjId - 1;

    if(rows.length != arrayMetadata[a].length)
	throw new Error("rows.length=" + rows.length+"  !=  arrayMetadata[array].length=" + arrayMetadata[a].length);

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = arrayMetadata[a][i];
}

function hideTipTable(tableIndex)
{
    var rows = tables[tableIndex].rows;

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = "";
}


/*------------------------------------------------------------
  From module 'name' (e.g. 'density'), find numeric index in the 
  'svgObjectNames' array.
  ------------------------------------------------------------*/
function getIndexFromName(name) 
{
    var i;
    for(i=0; i<svgObjectNames.length; i++)
        if(svgObjectNames[i] == name)
	    return i;

    throw new Error("Did not find '" + name + "'.");
}


/*------------------------------------------------------------
  SVG plot object callbacks
  ------------------------------------------------------------*/
function plotObjRespond(what, reportObjId, name)
{

    var a, i, status;

    switch(what) {
    case "show":
	i = getIndexFromName(name);
	showTipTable(i, reportObjId);
	break;
    case "hide":
	i = getIndexFromName(name);
	hideTipTable(i);
	break;
    case "click":
        a = reportObjId - 1;
	status = !checkboxes[a].checked;
	checkboxes[a].checked = status;
	setReportObj(reportObjId, status, true);
	break;
    default:
	throw new Error("Invalid 'what': "+what)
    }
}

/*------------------------------------------------------------
  checkboxes 'onchange' event
------------------------------------------------------------*/
function checkboxEvent(reportObjId)
{
    var a = reportObjId - 1;
    var status = checkboxes[a].checked;
    setReportObj(reportObjId, status, true);
}


/*------------------------------------------------------------
  toggle visibility
------------------------------------------------------------*/
function toggle(id){
  var head = safeGetElementById(id + "-h");
  var body = safeGetElementById(id + "-b");
  var hdtxt = head.innerHTML;
  var dsp;
  switch(body.style.display){
    case 'none':
      dsp = 'block';
      hdtxt = '-' + hdtxt.substr(1);
      break;
    case 'block':
      dsp = 'none';
      hdtxt = '+' + hdtxt.substr(1);
      break;
  }  
  body.style.display = dsp;
  head.innerHTML = hdtxt;
}
