(() => {
	
	if (window.photoPeriod) getJSON();
	
	function getJSON(){
		let url = './' + window.photoPeriod + '.json';
		fetch(url).then(res => res.json()).then(json => createPhotoPage(json));
	}
	function createPhotoPage(json){
		if (json.type === 'index') {
			let html = '';
			json.blocks.forEach(blockName => {
				html += `<h2>${blockName}</h2>\n`;
				html += `<a href="${blockName}.html" class="photo-line">\n`;
				json[blockName].forEach(img => {
					let space = img.indexOf(' ');
					let src = space > -1 ? img.substr(0, space) : img;
					let alt = space > -1 ? img.substr(space + 1) : img;
					html += `<img src="/th/${src}" alt="${alt}" title="${alt}">\n`;
				});
				html += '</a>\n';
			});
			document.querySelector('.index-blocks').innerHTML = html;
		}
	}
	
})();