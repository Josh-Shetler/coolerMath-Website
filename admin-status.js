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
    const videoEmbedCode = document.getElementById('video-embed-code').value;

    // Extract the src attribute value from the embed code
    const srcMatch = videoEmbedCode.match(/src="([^"]+)"/);
    if (!srcMatch || !srcMatch[1]) {
        alert('Invalid embed code. Please check and try again.');
        return;
    }
    const embedUrl = srcMatch[1];

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