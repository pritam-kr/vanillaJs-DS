export const lable = ({
  textContent = "Title",
  heading = "h1",
  customClass,
  event = "click",
  onClick = null,
  stopPropagate = false,
}) => {
  const element = document.createElement(heading);
  element.textContent = textContent;
  element.classList.add("label");
  if (customClass) element.classList.add = customClass;
  onClick &&
    element.addEventListener(event, (event) => {
      if (stopPropagate) e.stopPropagation();
      onClick(event);
    });
  return element;
};

// Optional props
// onClick - needs to be a function
// event -  string but it should be a valid event from javaScript
// customClass - additional class for styling, default is added, acc/ to their element name
// stopPropagate - Boolean Value

// Required props
// textContent
// heading
