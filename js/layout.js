if ($("#pia_container").length > 0) {
	console.log("Pia exists. Now removing.");
	$("#pia_container_status").remove();
	$("#pia_container").animate({right:"30px"},200).animate({right:"-300px"},200, function() {
		$("#pia_container").remove();
	});
}
else {
	console.log("Pia doesn't exist. Now creating.")
	var stylesheet = document.createElement('link');
	stylesheet.rel = 'stylesheet';
	stylesheet.href = chrome.extension.getURL('../css/microphone.css');
	document.head.appendChild(stylesheet);

	var div = document.createElement('div');
	var pia_container_status = document.createElement('div');
	var microphone_div = document.createElement('div');
	var text_div = document.createElement('div');
	var result_div = document.createElement('div');
	var info_div = document.createElement('div');
	var sound_container = document.createElement('span');

	div.id = 'pia_container';
	pia_container_status.id = 'pia_container_status';
	document.body.appendChild(div);
	document.body.appendChild(pia_container_status);

	text_div.id = 'pia_text_div';
	microphone_div.id = 'pia_microphone';
	result_div.id = 'pia_result';
	info_div.id = 'pia_info';
	sound_container.id = 'sound_container';

	div.appendChild(microphone_div);
	div.appendChild(text_div);
	div.appendChild(sound_container);
	text_div.appendChild(result_div);
	text_div.appendChild(info_div);

	$("#pia_container").animate({right:"-300px"},0).animate({right:"30px"},200).animate({right:"15px"},200);
}