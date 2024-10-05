const form = document.getElementById("formForm");
const preview = document.getElementById("preview");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const field = formData.get("fieldType");
  const label = formData.get("fieldLabel");

  createElement(field, label);
  form.reset()
});

function createElement(f, l) {
  const label = document.createElement("label");
  label.setAttribute("for", l);
  label.innerText = l;

  const input = document.createElement("input");
  input.setAttribute("type", f);

  if (f !== "submit") {
    preview.appendChild(label);
  }

  preview.appendChild(input);
}

function PreviewForm() {
  const form = document.getElementById("preview").cloneNode(true);
  document.body.innerHTML = ``;
  document.body.appendChild(form);
  document.body.style.display = 'flex';
  document.body.style.justifyContent = "centre"

//   button to go back to edit screen;

const buttonReverse = document.createElement('button')
buttonReverse.addEventListener('click', ()=>{
    location.reload()
})
}
