function cekLogin() {
    //tangkap request form
    let form = window.document.getElementById("formulir");
    let name = form.username.value;
    let pwd = form.password.value;
    if (name == "mimin" && pwd == "mimin123") {
        alert("Selamat Datang " + name + ", Anda administrator");
    } else if (name == "budi" && pwd == "budi123") {
        alert("Selamat Datang " + name + ", Anda operator");
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