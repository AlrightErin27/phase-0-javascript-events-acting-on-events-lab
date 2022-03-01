document.addEventListener("DOMContentLoaded", () => {
  const dodger = document.getElementById("dodger");
  dodger.style.backgroundColor = "#FF5733";
  // dodger.style.bottom = "0px";
  // dodger.style.left = "0px";

  // document.addEventListener("keydown", function (e) {
  //   console.log(e);
  // });

  // document.addEventListener("keydown", function (e) {
  //   if (e.key === "ArrowLeft") {

  //     const leftNum = dodger.style.left.replace("px", "");
  //     const left = parseInt(leftNum, 10);

  //     dodger.style.left = `${left - 10}px`;
  //     console.log(dodger.style.left);
  //   }
  // });

  function moveDodgerLeft() {
    const leftNum = dodger.style.left.replace("px", "");
    const left = parseInt(leftNum, 10);

    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
  }
  function moveDodgerRight() {
    const rightNum = dodger.style.left.replace("px", "");
    const left = parseInt(rightNum, 10);

    if (left < 360) {
      dodger.style.left = `${left + 10}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

  // FORM LAB STARTING HERE---->
  document.querySelector("form").addEventListener("submit", (e) => {
    //b/c of how forms were originally built- they automatically refresh the page when
    //the event happens(submit button is pressed). Below is code that prevents this:
    e.preventDefault();
    console.log(e.target.value);
    // handleToDO(e.target.new_todo.value);
  });
});
