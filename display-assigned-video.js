document.addEventListener('DOMContentLoaded', function () {
    const assignedVideo = localStorage.getItem('assignedVideo');

    if (assignedVideo) {
        const videoData = JSON.parse(assignedVideo);
        displayAssignedVideo(videoData);
    }
});

function displayAssignedVideo(videoData) {
    const videoContainer = document.createElement('div');
    const videoTitle = document.createElement('h3');
    const videoDescription = document.createElement('p');
    const videoFrame = document.createElement('iframe');

    videoTitle.textContent = videoData.title;
    videoDescription.textContent = videoData.description;
    videoFrame.src = videoData.url;
    videoFrame.width = 560;
    videoFrame.height = 315;
    videoFrame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    videoFrame.allowFullscreen = true;

    videoContainer.appendChild(videoTitle);
    videoContainer.appendChild(videoDescription);
    videoContainer.appendChild(videoFrame);

    document.body.appendChild(videoContainer);
}
