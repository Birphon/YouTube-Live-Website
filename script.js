// script.js
function parseLink() {
	const inputElement = document.getElementById("youtubeLink");
	const inputValue = inputElement.value;

	const prefix = "https://www.youtube.com/watch?v=";
	if (inputValue.startsWith(prefix)) {
		const videoId = inputValue.substring(prefix.length);
		console.log("Video ID:", videoId);

		// Update the video iframe src with the video ID
		const videoFrame = document.getElementById("videoFrame");
		videoFrame.src = `https://www.youtube.com/embed/${videoId}`;

		// Update the live chat iframe src with the video ID
		const liveChatFrame = document.getElementById("liveChatFrame");
		liveChatFrame.src = `https://www.youtube.com/live_chat?is_popout=1&v=${videoId}`;
	} else {
		alert(
			'Invalid YouTube link. It should start with "https://www.youtube.com/watch?v="'
		);
	}
}

const watchButton = document.getElementById("watchButton");
watchButton.addEventListener("click", parseLink);
