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
}

signOutBtn.addEventListener('click', signOut);
checkAdminLoginStatus();
