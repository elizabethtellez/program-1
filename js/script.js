const date = new Date();
const year = date.getFullYear();


document.querySelector("#year").textContent = year;
document.getElementById("updated").innerHTML = `Last Updated: ${document.lastModified}`;

const lastmod = document.querySelector("#lastmod");
lastmod.innerHTML = `<em> Last Modification: ${document.lastModified}</em`;