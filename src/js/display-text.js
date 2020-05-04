export default function saySomething(text) {
  const element = document.createElement("h3");
  element.textContent = text;
  document.body.appendChild(element);
}
