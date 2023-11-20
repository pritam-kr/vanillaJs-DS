export const button = ({
  textContent = "Click me!",
  btnType = "",
  customClass = "",
  event = "click",
  onClick = null,
  stopPropagate = false,
  disabled = false,
}) => {
  const element = document.createElement("button");
  element.textContent = textContent;
  element.classList.add("button");
  if (btnType === "primary") element.classList.add("primary");
  if (btnType === "secondary") element.classList.add("secondary");
  if(disabled) element.classList.add("disabled")
  onClick &&
    element.addEventListener(event, (event) => {
      if (stopPropagate) e.stopPropagation();
      onClick(event);
    });

  disabled && element.setAttribute("disabled", disabled);

  return element;
};

// Optional props
// onClick - needs to be a function
// event -  string but it should be a valid event from javaScript
// customClass - additional class for styling, default is added, acc/ to their element name
// stopPropagate - Boolean Value

// Required props
// textContent
