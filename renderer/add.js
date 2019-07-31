const { ipcRenderer } = require('electron')
const path = require('path')
// const { $ } = require{'./helper'}

let musicFlilesPath = []
document.getElementById('select-music').addEventListener('click', () => {
	ipcRenderer.send('open-music-file')
})
document.getElementById('add-music').addEventListener('click', () => {
	ipcRenderer.send('add-tracks', musicFlilesPath)
})

const renderListHTML = (pathes) => {
	const musicList = document.getElementById('musicList')
	const musicItemsHTML = pathes.reduce((html, music) => {
		html += `<li class="list-group-item">${path.basename(music)}</li>`
		return html
	}, '')
	// const result = pathes.forEach((item, index) => {
	// 	const html += '<li class="list-group-item">${path.basename(item)}</li>'
	// 	return html
	// })
	musicList.innerHTML = `<ul class="list-group">${musicItemsHTML}</ul>`
}
ipcRenderer.on('selected-file', (event, path) => {
	if(Array.isArray(path)) {
		renderListHTML(path)
		musicFlilesPath = path
	}
})