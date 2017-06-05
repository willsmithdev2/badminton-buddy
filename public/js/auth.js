
window.onSignIn =  (googleUser) => {
    const id_token = googleUser.getAuthResponse().id_token;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/sign-in');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.cookie = 'idtoken='+id_token;
            location.href = '/home';
        }
    };
    xhr.send('idtoken=' + id_token);
};
