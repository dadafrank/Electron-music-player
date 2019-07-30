const { ipcRenderer } = require('electron')
// const { $ } = require{'./helper'}

document.getElementById('add-music-button').addEventListener('click', () => {
	ipcRenderer.send('add-music-window')
})