/// <reference lib="dom"/>
import { User, sum } from "./sum.ts";

const user: User = {
    full_name: "a",
    age: 90
}


const message = await fetch("/welcome-message");
const element = document.querySelector("body");
if (element !== null) {
  element.innerHTML =
    `<h1>${await message.text()}</h1>` + `<p>${user.age * 2}</p>`;
}