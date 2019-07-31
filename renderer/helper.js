exports.$ = (id) => {
	return document.getElementById(id)
}

exports.convertDuration = (time) => {
	// 计算分钟 单位返回01，多位返回001
	const minutes = "0" + Math.floor(time / 60)
	// 计算秒数
	const seconds = "0" + Math.floor(time - minutes * 60)
	return minutes.substr(-2) + ":" + seconds.substr(-2)
}