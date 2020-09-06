let callAjax = function () {
    let xhr = new XMLHttpRequest();

    xhr.onload = () => {
        const refJson = JSON.parse(xhr.responseText);

        domLogic(refJson);
    };

    xhr.open("GET", "https://reqres.in/api/users?page=2");
    xhr.send();
};


let domLogic = function (refJson) {
    console.log(refJson);

    let parent = document.querySelector("#parent");

    for (let i = 0; i < refJson.data.length; i++) {
        const item = refJson.data[i];

        let newElement = parent.children[0].cloneNode(true);
        newElement.innerHTML = item.first_name + " " + item.last_name;
        parent.insertBefore(newElement, parent.firstChild);
    }
};