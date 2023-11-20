export const input = ({
  inputType = "text",
  placeholder = "Enter your text here",
  customClass,
  disabled = false,
  onChange = null,
  value = "",
}) => {
  const element = document.createElement("input");
  element.value == value;
  element.classList.add("input");
  if (disabled) {
    element.setAttribute("disabled", disabled);
    element.classList.add("disabled-input");
  }

  element.setAttribute("placeholder", placeholder);
  onChange &
    element.addEventListener("input", (event) => onChange(event.target.value));

  return element;
};
