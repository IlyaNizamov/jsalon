function resp1c() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost/salonserv/hs/eh/data", true);
    xhr.withCredentials = true;
    xhr.setRequestHeader("Authorization", 'Basic ' + btoa('admin:1'));
    xhr.onload = function () {
        if (xhr.status = 200) {
            document.getElementById("response1C").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}