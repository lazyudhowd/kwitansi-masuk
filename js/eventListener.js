function pageEventListener(){

	document.getElementById("btnExport").addEventListener("click", printArea, false);

	document.getElementById("btnSetDefault").addEventListener("click", isiNilaiDefault, false);

	document.getElementById(allElem.kwTextRegId.id).addEventListener("input", showHideCorrectionRegid, false);

	document.getElementById(allElem.kwTextNpwp.id).addEventListener("input", showHideCorrectionNpwp, false);

	document.getElementById("btnShowModalMelalui").addEventListener("click", showMelaluiModal, false);

	document.getElementById("radioKas1").addEventListener("click", changeMelalui, false);
	document.getElementById("radioBank1").addEventListener("click", changeMelalui, false);
	document.getElementById("radioWesel1").addEventListener("click", changeMelalui, false);

	document.getElementById("btnShowTandaTangan").addEventListener("click", showModalTandaTangan, false);

	document.getElementById("selectForModalPenerima").addEventListener("click", changeTandaTanganPenerima, false);

	document.getElementById("selectForModalPenyetor").addEventListener("click", changeTandaTanganPenyetor, false);
}
