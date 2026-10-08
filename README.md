# QuickNotes

QuickNotes is a small note-taking web app built with HTML, CSS and vanilla JavaScript. You can write short notes, file them under Personal, Work or Study, search through them and delete the ones you no longer need. Notes are saved in your browser, so they are still there after a refresh.

## Features

- Add notes of up to 200 characters
- Choose a category: Personal, Work or Study
- Each category has its own coloured card border
- Validation for empty notes and notes over 200 characters
- Delete individual notes
- Live search that ignores upper and lower case
- Note count that handles zero, one and many notes
- Notes saved with localStorage
- Responsive layout for screens 600px wide or narrower

## How to run locally

1. Clone the repository: `git clone https://github.com/karondonethan/quicknotes-app.git`
2. Open the `quicknotes-app` folder.
3. Open `index.html` in your browser (or use the Live Server extension in VS Code).

No installation or build step is needed.

## What I learned

- How to build the page from JavaScript data by using `createElement` and `textContent`, so user text is never inserted as HTML.
- How to keep an array of objects in sync with the screen by calling one `render()` function after every change.
- How to save and load data with `localStorage`, `JSON.stringify` and `JSON.parse`.
- How to use Flexbox for the form and a `@media (max-width: 600px)` rule to stack it on small screens.
- How to write small, clear Git commits for each step of a project.