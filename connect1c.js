function setupFrom1C() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost/salonserv/hs/eh/city", true);
    xhr.withCredentials = true;
    xhr.setRequestHeader("Authorization", 'Basic ' + btoa('admin:1'));
    xhr.onload = function () {
        if (xhr.status = 200) {
            document.getElementById("SelectTown").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

function reloadYaMap() {

    let sel = document.getElementById("SelectTown");
    let val = sel.options[sel.selectedIndex].value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost/salonserv/hs/eh/city?city=" + val, true);
    xhr.withCredentials = true;
    xhr.setRequestHeader("Authorization", 'Basic ' + btoa('admin:1'));
    xhr.onload = function () {
        if (xhr.status = 200) {
            cityData = JSON.parse(xhr.responseText);
            myMap.setCenter([cityData.N, cityData.E],cityData.M);
        }
    };
    xhr.send();
}