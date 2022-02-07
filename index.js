const dodger = document.getElementById(`dodger`);

function moveDodgerLeft() {
  const leftNum = dodger.style.left.replace(`px`, ``);
  const left = parseInt(leftNum, 10);
  if (left > 0) dodger.style.left = `${left - 1}px`;
}

function moveDodgerRight() {
  const leftNum = dodger.style.left.replace(`px`, ``);
  const left = parseInt(leftNum, 10);
  if (left < 360) dodger.style.left = `${left + 1}px`;
}

document.addEventListener(`keydown`, function (event) {
  if (event.key === `ArrowLeft`) moveDodgerLeft() && console.log(`Moved Left`);
  if (event.key === `ArrowRight`)
    moveDodgerRight() && console.log(`Moved Right`);
});
