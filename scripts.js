(() => {
	
	if (window.photoPeriod) getJSON();
	
	function getJSON(){
		let url = './' + window.photoPeriod + '.json';
		fetch(url).then(res => res.json()).then(json => createPhotoPage(json));
	}
	function createPhotoPage(json){
		console.log(json);
	}
	
})();