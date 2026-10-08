// ---------- 1. Select elements ----------
const form = document.querySelector("#note-form");
const input = document.querySelector("#note-input");
const categorySelect = document.querySelector("#note-category");
const list = document.querySelector("#notes-list");

// ---------- 2. Data ----------
let notes = [];

// ---------- 3. Render ----------
function render() {
  list.replaceChildren();

  notes.forEach((note) => {
    const li = document.createElement("li");
    li.classList.add("note", `category-${note.category}`);

    const body = document.createElement("div");

    const text = document.createElement("p");
    text.classList.add("note-text");
    text.textContent = note.text;

    const meta = document.createElement("div");
    meta.classList.add("note-meta");

    const label = document.createElement("span");
    label.classList.add("category-label");
    label.textContent =
      note.category.charAt(0).toUpperCase() + note.category.slice(1);

    const date = document.createElement("span");
    date.textContent = note.createdAt;

    meta.appendChild(label);
    meta.appendChild(date);
    body.appendChild(text);
    body.appendChild(meta);

    const del = document.createElement("button");
    del.type = "button";
    del.textContent = "Delete";
    del.classList.add("delete-btn");

    li.appendChild(body);
    li.appendChild(del);
    list.appendChild(li);
  });
}

// ---------- 4. Add ----------
function addNote(text, category) {
  notes.push({
    id: Date.now(),
    text: text,
    category: category,
    createdAt: new Date().toLocaleString(),
  });
  render();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (text === "") return;
  addNote(text, categorySelect.value);
  input.value = "";
  input.focus();
});

render();