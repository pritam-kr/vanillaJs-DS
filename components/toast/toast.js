// top - left
// top - right
// top - center

// bottom - left
// bottom - right
// bottom - center

export const toast = ({
  customClass,
  textContext = "I am toast.",
  toastType = "default",
}) => {
  const element = document.createElement("div");
  element.textContent = textContext
  element.classList.add("toast")
};
