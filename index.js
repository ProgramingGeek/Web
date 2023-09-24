const noteInput = document.getElementById('noteInput');
const addNoteButton = document.getElementById('addNote');
const notesContainer = document.getElementById('notesContainer');

addNoteButton.addEventListener('click', () => {
    const noteText = noteInput.value.trim();
    if (noteText !== '') {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `
            <p>${noteText}</p>
            <button class="delete-button">Delete</button>
        `;
        notesContainer.appendChild(noteElement);
        noteInput.value = '';

        const deleteButton = noteElement.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            notesContainer.removeChild(noteElement);
        });
    }
});
