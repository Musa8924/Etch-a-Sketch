// script.js
const grid = document.getElementById('grid');
const newGridBtn = document.getElementById('new-grid');

function createGrid(columns = 16) {
  // update CSS variable for columns
  document.documentElement.style.setProperty('--cols', columns);

  // total squares
  const total = columns * columns;
  grid.innerHTML = '';

  for (let i = 0; i < total; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    // hover effect with mouseover
    cell.addEventListener('mouseenter', () => {
      cell.classList.add('hovered');
    });

    grid.appendChild(cell);
  }
}

// prompt user for new grid size
function newGrid() {
  let size = parseInt(prompt('Enter number of squares per side (max 100):'), 10);

  if (isNaN(size) || size < 1) {
    alert('Please enter a valid number.');
    return;
  }
  if (size > 100) {
    alert('Maximum grid size is 100.');
    size = 100;
  }

  createGrid(size);
}

// event listener for button
newGridBtn.addEventListener('click', newGrid);

// create default grid on load
createGrid(16);
