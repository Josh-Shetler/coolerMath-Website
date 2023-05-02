[{ "title": "Assigned Video 1", "description": "This is the first assigned video", "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }, { "title": "Assigned Video 2", "description": "This is the second assigned video", "videoUrl": "https://www.youtube.com/watch?v=6_b7RDuLwcI" }]

// Admin page

const form = document.getElementById('assign-video-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const titleInput = document.getElementById('video-title');
    const descInput = document.getElementById('video-description');
    const urlInput = document.getElementById('video-url');

    const newVideo = {
        title: titleInput.value,
        description: descInput.value,
        videoUrl: urlInput.value
    };

    // Add new video to assigned videos JSON file
    // Code to add the video data to the JSON file goes here

    // Clear the form inputs
    titleInput.value = '';
    descInput.value = '';
    urlInput.value = '';
});

// Home page

const assignedVideosContainer = document.getElementById('assigned-videos-container');

// Load the assigned videos data from the JSON file
fetch('assigned_videos.json')
    .then(response => response.json())
    .then(data => {
        // Create HTML elements for each assigned video and append to container
        data.forEach(video => {
            const videoElement = document.createElement('div');
            videoElement.innerHTML = `
        <h2>${video.title}</h2>
        <p>${video.description}</p>
        <iframe width="560" height="315" src="${video.videoUrl}" frameborder="0" allowfullscreen></iframe>
      `;
            assignedVideosContainer.appendChild(videoElement);
        });
    });
