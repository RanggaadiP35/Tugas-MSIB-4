function cekLogin() {
    //tangkap request form
    let form = window.document.getElementById("formulir");
    let uname = form.username.value;
    let pwd = form.password.value;
    if (uname == "mimin" && pwd == "mimin123") {
        alert("Selamat Datang " + uname + ", Anda administrator");
    } else if (uname == "budi" && pwd == "budi123") {
        alert("Selamat Datang " + uname + ", Anda operator");
    } else {
        alert("Maaf Anda Gagal Login");
    }
}

function kosongin() {
    //tangkap request form
    let form = window.document.getElementById("formulir");
    form.username.value = "";
}

function kosongin2() {
    //tangkap request form
    let form = window.document.getElementById("formulir");
    form.password.value = "";
}