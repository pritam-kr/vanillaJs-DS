import { button } from "./components/button/button.js";
import { input } from "./components/input/input.js";
import { lable } from "./components/label/lable.js";
import { nav } from "./components/nav/nav.js";

const header = document.querySelector("#header");
const btnGroup = document.querySelector("#button-group");
const inputGroup = document.querySelector("#input-group");
const headingGroup = document.querySelector("#heading-group");

header.appendChild(
  nav({
    textContent:
      "VanillaJS frontend standardisation (simplification / reuse of the elements)",
    onClick: () => console.log("working"),
  })
);


// Codes for lables

headingGroup.appendChild(lable({ textContent: "Headings", heading: "h2" }));
headingGroup.appendChild(lable({ textContent: "I am heading H1", heading: "h1" }));
headingGroup.appendChild(lable({ textContent: "I am heading H2", heading: "h2" }));
headingGroup.appendChild(lable({ textContent: "I am heading H3", heading: "h3" }));
headingGroup.appendChild(lable({ textContent: "I am heading H4", heading: "h4" }));
headingGroup.appendChild(lable({ textContent: "I am heading H5", heading: "h5" }));
headingGroup.appendChild(lable({ textContent: "I am heading H6", heading: "h6" }));


// Codes for buttons
btnGroup.appendChild(lable({ textContent: "Buttons", heading: "h2" }));
btnGroup.appendChild(button({ textContent: "Default Button" }));
btnGroup.appendChild(
  button({ textContent: "Primary Button", btnType: "primary" })
);
btnGroup.appendChild(
  button({ textContent: "Secondary Button", btnType: "secondary" })
);
btnGroup.appendChild(
  button({
    textContent: "Disabled Button",
    disabled: true,
  })
);

// Codes for Input
inputGroup.appendChild(lable({ textContent: "Inputs", heading: "h2" }));
inputGroup.appendChild(
  input({
    inputType: "text",
    onChange: (value) => {
      console.log(value);
    },
  })
);
inputGroup.appendChild(
  input({
    inputType: "text",
    disabled: true,
    placeholder: "Disabled input field",
  })
);
