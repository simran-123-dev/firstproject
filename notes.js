function saveNote() {
  const noteInput = document.getElementById("noteInput");
  const noteText = noteInput.value.trim();
  if (noteText === "") return;

  const li = document.createElement("li");
  li.textContent = noteText;

  document.getElementById("notesList").appendChild(li);
  noteInput.value = "";
}
