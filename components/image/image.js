export const image = ({
  alt = "",
  customClass,
  event = "click",
  onClick = null,
  rounded = false,
  responsive = false,
  src = "",
  size = 40,
  stopPropagate,
}) => {
  const element = document.createElement("img");
  element.style.width = size + "px";
  element.style.height = size + "px";
  element.setAttribute("src", src);
  element.setAttribute("alt", alt);
  if (responsive) element.classList.add("responsive-image");
  if (rounded) element.classList.add("rounded-image");
  if (customClass) element.classList.add(customClass);

  onClick &&
    element.addEventListener(event, (event) => {
      if (stopPropagate) e.stopPropagation();
      onClick(event);
    });
  return element;
};
