const adminStatus = document.getElementById('admin-status');
const signOutBtn = document.getElementById('sign-out-btn');

function checkAdminLoginStatus() {
    if (localStorage.getItem('adminLoggedIn') === 'true') {
        adminStatus.style.display = 'block';
    } else {
        adminStatus.style.display = 'none';

    }
}

function signOut() {
    localStorage.removeItem('adminLoggedIn');
    checkAdminLoginStatus();
    window.location.href = 'CoolMathGames.html';
}

function assignVideo() {
    const videoTitle = document.getElementById('video-title').value;
    const videoDescription = document.getElementById('video-description').value;
    const videoUrl = document.getElementById('video-url').value;

    let videoId = videoUrl.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
    }
    const embedUrl = 'https://www.youtube.com/embed/' + videoId;

    const videoData = {
        title: videoTitle,
        description: videoDescription,
        url: embedUrl,
    };

    localStorage.setItem('assignedVideo', JSON.stringify(videoData));
    alert('Video assigned successfully.');
    document.getElementById('assign-video-form').reset();
}


signOutBtn.addEventListener('click', signOut);
checkAdminLoginStatus();