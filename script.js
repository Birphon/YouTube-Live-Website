// script.js
let videoId = "videoId"; // Default value - Thought this would fix the null src

function parseLink() {
	const inputElement = document.getElementById("youtubeLink");
	const inputValue = inputElement.value;

	const prefix = "https://www.youtube.com/watch?v=";
	if (inputValue.startsWith(prefix)) {
		videoId = inputValue.substring(prefix.length);
		console.log("Video ID:", videoId);

		// Update the video iframe src with the updated videoId
		const videoFrame = document.getElementById("videoFrame");
		videoFrame.src = `https://www.youtube.com/embed/${videoId}`;

		// Update the live chat iframe src with the updated videoId
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
