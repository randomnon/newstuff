// This file is injected as a content script

import "./content.css";

console.log("Hello from content script!")

const header = document.createElement("h1");
header.innerHTML = "Good Morning, Simba!";

const body = document.getElementsByTagName("body");
const snowflakesContainer = document.createElement("div");
snowflakesContainer.className = "snowflakes";
snowflakesContainer.setAttribute ("aria-hidden", "true");

const snowflake = document.createElement("div");
snowflake.className = "snowflake";
snowflake.innerHTML = "❆";

for (let i = 0; i < 12; i++){
    snowflakesContainer.appendChild(snowflake.cloneNode(true));

}
body[0]?.prepend(snowflakesContainer);