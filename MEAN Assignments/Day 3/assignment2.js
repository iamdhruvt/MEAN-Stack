let callAjax = () => {
    console.log("CALLING AJAX HERE!!!");

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.onload = () => {
        console.log(xhr.responseText);
        const refjson = JSON.parse(xhr.responseText);
        handleDOMOperatoinUsingJSON(refjson);
    };
    xhr.send();
};
let handleDOMOperatoinUsingJSON = (refjson) => {

    for (let i = 0; i < refjson.length; i++) {
        let item = refjson[i];
        console.log(item);
        const parent = document.querySelector("#parent");
        const newElement = parent.children[0].cloneNode(true);
        newElement.innerHTML = item.FirstName + " " + item.LastName;
        parent.insertBefore(newElement, parent.firstChild);
    }
};


let callAjax4XML = () => {
    console.log("AJAX 4 XML RESPONSE");

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");
    xhr.setRequestHeader("accept", "application/xml");
    xhr.onload = () => {
        console.log(xhr.responseXML);
        handleDOMOperatoinUsingXML(xhr.responseXML);
    };
    xhr.send();
};

let handleDOMOperatoinUsingXML = (xmlDoc) => {
    console.log(xmlDoc);
    const authorList = xmlDoc.querySelectorAll("Author");
    for (let i = 0; i < authorList.length; i++) {
        const item = authorList[i];
        const firstName = item.children[0].innerHTML;
        const lastName = item.children[3].innerHTML;
        const parent = document.querySelector("#parent");
        const newElement = parent.children[0].cloneNode(true);
        newElement.innerHTML = firstName + " " + lastName;
        parent.insertBefore(newElement, parent.firstChild);
    }
};