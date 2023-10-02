function print() {
    document.getElementById('display').innerHTML = `
    ${document.getElementById("input").value}
    ${document.getElementById("name").value}
    ${document.getElementById("age").value}
    ${document.getElementById("gender").value}
    `;
}