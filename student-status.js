const adminStatus = document.getElementById('admin-status');

function checkAdminLoginStatus() {
    if (localStorage.getItem('adminLoggedIn') === 'true') {
        adminStatus.style.display = 'block';
    } else {
        adminStatus.style.display = 'none';
    }
}

function displayAssignedVideo() {
    const assignedVideo = JSON.parse(localStorage.getItem('assignedVideo'));

    if (assignedVideo) {
        const videoContainer = document.getElementById('assigned-video-container');
        videoContainer.innerHTML = `
            <h3>${assignedVideo.title}</h3>
            <p>${assignedVideo.description}</p>
            <iframe width="560" height="315" src="${assignedVideo.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
    }
}

displayAssignedVideo();
checkAdminLoginStatus();
