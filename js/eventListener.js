function pageEventListener(){

	document.getElementById("btnExport").addEventListener("click", printArea, false);

	document.getElementById("btnSetDefault").addEventListener("click", isiNilaiDefault, false);

	document.getElementById(allElem.kwTextRegId.id).addEventListener("input", showHideCorrectionRegid, false);

	document.getElementById(allElem.kwTextNpwp.id).addEventListener("input", showHideCorrectionNpwp, false);
}