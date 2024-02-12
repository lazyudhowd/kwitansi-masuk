function generateKwitansi(){
	let targetSvg = document.getElementById("targetSvg");
	let targetText = document.getElementById("targetText");

	let svgContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svgContainer.setAttribute("id", "svgKwitansi");
	svgContainer.setAttribute("width", ""+891);
	svgContainer.setAttribute("height", ""+628);

	let bgImage = fncSvgImageToContainer(allElem.svgBackgroundKwitansi);

	let svgCorrectionBox = fncSvgForeignBox({id:"mycc", style : {width:891, height:628}});

	let correctionTanggal = {
		id : "idCorrectionTanggal",
		style : {
			backgroundColor : "yellow",
			opacity : 1,
			position : "absolute",
			width : "300px",
			height : "200px",
			top : "10px",
			left : "25px"
		}
	}

	let svgCorrectionTanggal = fncSvgBoxToForeign(allElem.svgCorrectionTanggal);

	let svgCorrectionRegid = fncSvgBoxToForeign(allElem.svgCorrectionRegid);
	let svgCorrectionNpwp = fncSvgBoxToForeign(allElem.svgCorrectionNpwp);

	let svgCapLazismu = fncSvgImageToContainer(allElem.svgCapLazismu);

	let svgTandaTanganPenyetor = fncSvgImageToContainer(allElem.svgTandaTanganPenyetor);
	let svgTandaTanganPenerima = fncSvgImageToContainer(allElem.svgTandaTanganPenerima);

	svgContainer.appendChild(bgImage);

	svgContainer.appendChild(svgCapLazismu);

	svgContainer.appendChild(svgTandaTanganPenyetor);
	svgContainer.appendChild(svgTandaTanganPenerima);

	svgContainer.appendChild(svgCorrectionBox);

	svgCorrectionBox.appendChild(svgCorrectionTanggal);
	svgCorrectionBox.appendChild(svgCorrectionRegid);
	svgCorrectionBox.appendChild(svgCorrectionNpwp);

	targetSvg.appendChild(svgContainer);

	let nomorKwitansi = fncTextToDiv(allElem.kwTextNomor);
	let wilayahKwitansi = fncTextToDiv(allElem.kwTextWilayah);
	let tanggalKwitansi = fncTextToDiv(allElem.kwTextTanggal);
	let atasNamaKwitansi = fncTextToDiv(allElem.kwTextAtasNama);
	let alamatKwitansi = fncTextToDiv(allElem.kwTextAlamat);
	let telponKwitansi = fncTextToDiv(allElem.kwTextTelepon);
	let faxKwitansi = fncTextToDiv(allElem.kwTextHp);
	let regidKwitansi = fncTextToDiv(allElem.kwTextRegId);
	let npwpKwitansi = fncTextToDiv(allElem.kwTextNpwp);
	let jenisZakatKwitansi = fncTextToDiv(allElem.kwTextJenisZakat);
	let jenisProgramKwitansi = fncTextToDiv(allElem.kwTextJenisProgram);
	let jumlahZakatKwitansi = fncTextToDiv(allElem.kwTextJumlahZakat);
	let jumlahSedekahKwitansi = fncTextToDiv(allElem.kwTextJumlahSedekah);
	let jumlahLainnyaKwitansi = fncTextToDiv(allElem.kwTextJumlahLainnya);
	let jumlahTotalKwitansi = fncTextToDiv(allElem.kwTextJumlahTotal);
	let melaluiKwitansi = fncTextToDiv(allElem.kwTextMelalui);
	let terbilangKwitansi = fncTextToDiv(allElem.kwTextTerbilang);
	let penerimaKwitansi = fncTextToDiv(allElem.kwTextPenerima);
	let penyetorKwitansi = fncTextToDiv(allElem.kwTextPenyetor);

	targetText.appendChild(nomorKwitansi);
	targetText.appendChild(wilayahKwitansi);
	targetText.appendChild(tanggalKwitansi);
	targetText.appendChild(atasNamaKwitansi);
	targetText.appendChild(alamatKwitansi);
	targetText.appendChild(telponKwitansi);
	targetText.appendChild(faxKwitansi);
	targetText.appendChild(regidKwitansi);
	targetText.appendChild(npwpKwitansi);
	targetText.appendChild(jenisZakatKwitansi);
	targetText.appendChild(jenisProgramKwitansi);
	targetText.appendChild(jumlahZakatKwitansi);
	targetText.appendChild(jumlahSedekahKwitansi);
	targetText.appendChild(jumlahLainnyaKwitansi);
	targetText.appendChild(jumlahTotalKwitansi);
	targetText.appendChild(melaluiKwitansi);
	targetText.appendChild(terbilangKwitansi);
	targetText.appendChild(penerimaKwitansi);
	targetText.appendChild(penyetorKwitansi);
}

function printArea(){
	let targetAreaSurvey = document.getElementById("target");

	document.getElementById("targetText").style.position = "relative";
	document.getElementById("targetText").style.top = "-1px";

	html2canvas(targetAreaSurvey).then(canvas => {
		canvas.toBlob(function(blob){
			window.saveAs(blob,"myimage.png");
			document.getElementById("targetText").style.position = "relative";
			document.getElementById("targetText").style.top = "0";
		});
	});
}

function isiNilaiDefault(){
	document.getElementById(allElem.kwTextNomor.id).innerText = "INV-008908";
	document.getElementById(allElem.kwTextWilayah.id).innerText = "KOTA SINGKAWANG";
	document.getElementById(allElem.kwTextTanggal.id).innerText = "18 / 05 / 2018";
	document.getElementById(allElem.kwTextAtasNama.id).innerText = "Atas Nama";
	document.getElementById(allElem.kwTextAlamat.id).innerText = "Alamat";
	document.getElementById(allElem.kwTextTelepon.id).innerText = "0000-0000-0000";
	document.getElementById(allElem.kwTextHp.id).innerText = "0000-0000-0000";
	document.getElementById(allElem.kwTextRegId.id).innerText = "0000-0000-0000-0000";
	document.getElementById(allElem.kwTextNpwp.id).innerText = "0000-0000-0000-0000";
	document.getElementById(allElem.kwTextJenisZakat.id).innerText = "Mal";
	document.getElementById(allElem.kwTextJenisProgram.id).innerText = "Program";
	document.getElementById(allElem.kwTextJumlahZakat.id).innerText = "1.000.000";
	document.getElementById(allElem.kwTextJumlahSedekah.id).innerText = "1.000.000";
	document.getElementById(allElem.kwTextJumlahLainnya.id).innerText = "1.000.000";
	document.getElementById(allElem.kwTextJumlahTotal.id).innerText = "1.000.000";
	document.getElementById(allElem.kwTextTerbilang.id).innerText = "Satu Juta Rupiah";
	document.getElementById(allElem.kwTextPenerima.id).innerText = "Penerima";
	document.getElementById(allElem.kwTextPenyetor.id).innerText = "Penyetor";

	showHideCorrectionNpwp();
	showHideCorrectionRegid();
}

function showHideCorrectionNpwp(){
	if(document.getElementById(allElem.kwTextNpwp.id).innerText){
		document.getElementById(allElem.svgCorrectionNpwp.id).style.opacity = 1;
	} else {
		document.getElementById(allElem.svgCorrectionNpwp.id).style.opacity = 0;
	}
}


function showHideCorrectionRegid(){
	if(document.getElementById(allElem.kwTextRegId.id).innerText){
		document.getElementById(allElem.svgCorrectionRegid.id).style.opacity = 1;
	} else {
		document.getElementById(allElem.svgCorrectionRegid.id).style.opacity = 0;
	}
}

function updateKwitansi(){
	// file:///D:/YUDHO/D0008_Project/D006/index.html?nomorKwitansi=MameTrueColor&color=blue&newuser&size=m
	// file:///D:/YUDHO/D0008_Project/D006/index.html/?nomorKwitansi=&color=blue&newuser&size=m
	// https://example.com/?product=shiRRt&color=blue&newuser&size=m

	// test string :
	// file:///D:/YUDHO/D0008_Project/D006/index.html?nomorkw=INV-0000299&tglkw=15-02-2019&atasnama=Yudho%20Wicaksono%20Dwi%20Raharjo&alamat=Jl%20Gunung%20Ceremai%20No%2043A&telp=0812-4705-5812&fax=0568-633205&regid=5120-5689-4470-1235&npwp=8739-1205-0068-8795&jeniszakat=mal&jenislainnya=45&jmlzakat=900000&jmlsedekah=90000&jmllainnya=1000000&total=1990000&melalui=bank&terbilang=Satu%20Juga%20Sembilan%20Ratus%20Sembilan%20Puluh%20Ribu%20Rupiah&penerima=Sandy%20Yudha&penyetor=Yudho

	const queryString = window.location.search;
	// console.log(queryString);

	const urlParams = new URLSearchParams(queryString);

	document.getElementById(allElem.kwTextNomor.id).innerText = "";
	document.getElementById(allElem.kwTextWilayah.id).innerText = "";
	document.getElementById(allElem.kwTextTanggal.id).innerText = "";
	document.getElementById(allElem.kwTextAtasNama.id).innerText = "";
	document.getElementById(allElem.kwTextAlamat.id).innerText = "";
	document.getElementById(allElem.kwTextTelepon.id).innerText = "";
	document.getElementById(allElem.kwTextHp.id).innerText = "";
	document.getElementById(allElem.kwTextRegId.id).innerText = "";
	document.getElementById(allElem.kwTextNpwp.id).innerText = "";
	document.getElementById(allElem.kwTextJenisZakat.id).innerText = "";
	document.getElementById(allElem.kwTextJenisProgram.id).innerText = "";
	document.getElementById(allElem.kwTextJumlahZakat.id).innerText = "";
	document.getElementById(allElem.kwTextJumlahSedekah.id).innerText = "";
	document.getElementById(allElem.kwTextJumlahLainnya.id).innerText = "";
	document.getElementById(allElem.kwTextJumlahTotal.id).innerText = "";
	document.getElementById(allElem.kwTextTerbilang.id).innerText = "";
	document.getElementById(allElem.kwTextPenerima.id).innerText = "";
	document.getElementById(allElem.kwTextPenyetor.id).innerText = "";

	if(urlParams.get('nomorkw')){
		document.getElementById(allElem.kwTextNomor.id).innerText = urlParams.get('nomorkw');
	}

	if(urlParams.get('wilayahkw')){
		document.getElementById(allElem.kwTextWilayah.id).innerText = urlParams.get('wilayahkw');
	}

	// untuk tanggal, kita ubah dari yang - menjadi /
	if(urlParams.get('tglkw')){
		let valueTanggal = urlParams.get('tglkw').replaceAll("-","/");
		
		document.getElementById(allElem.kwTextTanggal.id).innerText = valueTanggal;
	}

	if(urlParams.get('atasnama')){
		document.getElementById(allElem.kwTextAtasNama.id).innerText = urlParams.get('atasnama');
	}

	if(urlParams.get('alamat')){
		document.getElementById(allElem.kwTextAlamat.id).innerText = urlParams.get('alamat');
	}

	if(urlParams.get('telp')){
		document.getElementById(allElem.kwTextTelepon.id).innerText = urlParams.get('telp');
	}

	if(urlParams.get('hp')){
		document.getElementById(allElem.kwTextHp.id).innerText = urlParams.get('hp');
	}

	if(urlParams.get('regid')){
		document.getElementById(allElem.kwTextRegId.id).innerText = urlParams.get('regid');
	}

	if(urlParams.get('npwp')){
		document.getElementById(allElem.kwTextNpwp.id).innerText = urlParams.get('npwp');
	}

	if(urlParams.get('jeniszakat')){
		document.getElementById(allElem.kwTextJenisZakat.id).innerText = urlParams.get('jeniszakat');
	}

	if(urlParams.get('jenislainnya')){
		document.getElementById(allElem.kwTextJenisProgram.id).innerText = urlParams.get('jenislainnya');
	}

	// untul jumlah zakat, sedekah, lainnya dan total, akan kita atur penulisannya
	// sehingga tampilannya sesuai dengan format Indoensia
	if(urlParams.get('jmlzakat')){
		document.getElementById(allElem.kwTextJumlahZakat.id).innerText = parseInt(urlParams.get('jmlzakat')).toLocaleString("id-ID");
	}

	if(urlParams.get('jmlsedekah')){
		document.getElementById(allElem.kwTextJumlahSedekah.id).innerText = parseInt(urlParams.get('jmlsedekah')).toLocaleString("id-ID");
	}

	if(urlParams.get('jmllainnya')){
		document.getElementById(allElem.kwTextJumlahLainnya.id).innerText = parseInt(urlParams.get('jmllainnya')).toLocaleString("id-ID");
	}

	if(urlParams.get('total')){
		document.getElementById(allElem.kwTextJumlahTotal.id).innerText = parseInt(urlParams.get('total')).toLocaleString("id-ID");
	}

	if(urlParams.get('terbilang')){
		document.getElementById(allElem.kwTextTerbilang.id).innerText = urlParams.get('terbilang');
	}

	if(urlParams.get('penerima')){
		document.getElementById(allElem.kwTextPenerima.id).innerText = urlParams.get('penerima');
	}

	if(urlParams.get('penyetor')){
		document.getElementById(allElem.kwTextPenyetor.id).innerText = urlParams.get('penyetor');
	}

	if(urlParams.get('melalui')){
		let melalui = urlParams.get('melalui');
		
		if(melalui == "bank"){
			document.getElementById(allElem.kwTextMelalui.id).style.top = -314;
		} else if(melalui == "wesel"){
			document.getElementById(allElem.kwTextMelalui.id).style.top = -298;
		}
	}

	showHideCorrectionNpwp();
	showHideCorrectionRegid();
}

