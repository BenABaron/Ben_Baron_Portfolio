



const bounce = () => {
  console.log("bounce")

  const element = document.getElementById("tonyhawk")
  element.classList.add("animate__animated", "animate__fadeIn")
}

const unhide = () => {
  console.log("unhide")

  document.getElementById("hidden").style.visibility = "visible";
}

const hide = () => {
  console.log("hide")

  document.getElementById("scared").style.visibility = "hidden";
}

