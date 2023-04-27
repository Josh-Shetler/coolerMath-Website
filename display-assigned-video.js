document.addEventListener('DOMContentLoaded', function () {
    const assignedVideo = localStorage.getItem('assignedVideo');

    if (assignedVideo) {
        const videoData = JSON.parse(assignedVideo);
        displayAssignedVideo(videoData);
    }
});

function displayAssignedVideo(videoData) {
    const videoContainer = document.getElementById('assigned-video-container');

    const videoTitle = document.createElement('h3');
    videoTitle.textContent = videoData.title;

    const videoDescription = document.createElement('p');
    videoDescription.textContent = videoData.description;

    const videoFrame = document.createElement('iframe');
    videoFrame.src = videoData.url;
    videoFrame.width = 420;
    videoFrame.height = 315;
    videoFrame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    videoFrame.allowFullscreen = true;

    videoContainer.appendChild(videoTitle);
    videoContainer.appendChild(videoDescription);
    videoContainer.appendChild(videoFrame);
}
