// KF Panda Search

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value.toLowerCase();

  // If Statement - Test the Input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    document.getElementById("char-name").innerHTML = "Po";
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am the Dragon Warrior!";
    document.getElementById("char-img").src = "img/po.png";
  } else if (name === "tigress") {
    document.getElementById("char-name").innerHTML = "Tigress";
    document.getElementById("char-quote").innerHTML = "That was hardcore!";
    document.getElementById("char-img").src = "img/tigress.png";
  } else if (name === "mantis") {
    document.getElementById("char-name").innerHTML = "Mantis";
    document.getElementById("char-quote").innerHTML = "Fear the Bug!";
    document.getElementById("char-img").src = "img/mantis.png";
  } else if (name === "monkey") {
    document.getElementById("char-name").innerHTML = "Monkey";
    document.getElementById("char-quote").innerHTML =
      "For once I'm not the 800 pound gorilla in the room.";
    document.getElementById("char-img").src = "img/monkey.png";
  } else if (name === "viper") {
    document.getElementById("char-name").innerHTML = "Viper";
    document.getElementById("char-quote").innerHTML =
      "I dont need to bit to fight!";
    document.getElementById("char-img").src = "img/viper.png";
  } else if (name === "crane") {
    document.getElementById("char-name").innerHTML = "Crane";
    document.getElementById("char-quote").innerHTML = "Wings of Justice";
    document.getElementById("char-img").src = "img/crane.png";
  } else if (name === "boss wolf") {
    document.getElementById("char-name").innerHTML = "Boss-Wolf";
    document.getElementById("char-quote").innerHTML =
      "If you mess with the wolf, you get the fangs.";
    document.getElementById("char-img").src = "img/boss-wolf.png";
  } else if (name === "croc") {
    document.getElementById("char-name").innerHTML = "Croc";
    document.getElementById("char-quote").innerHTML = "Vengeance is served!";
    document.getElementById("char-img").src = "img/croc.png";
  } else if (name === "kai") {
    document.getElementById("char-name").innerHTML = "Kai";
    document.getElementById("char-quote").innerHTML =
      "The master of pain. Beast of vengeance!";
    document.getElementById("char-img").src = "img/kai.png";
  } else if (name === "mr ping") {
    document.getElementById("char-name").innerHTML = "Mr-Ping";
    document.getElementById("char-quote").innerHTML =
      "We are noodle folk. Broth runs through our veins!";
    document.getElementById("char-img").src = "img/mr-ping.png";
  } else if (name === "master oogway" || name === "oogway") {
    document.getElementById("char-name").innerHTML = "Master Oogway";
    document.getElementById("char-quote").innerHTML = "There are no accidents";
    document.getElementById("char-img").src = "img/oogway.png";
  } else if (name === "shen" || name === "lord shen") {
    document.getElementById("char-name").innerHTML = "Shen";
    document.getElementById("char-quote").innerHTML =
      "Nothing stands in my way!";
    document.getElementById("char-img").src = "img/shen.png";
  } else if (name === "shifu" || name === "master shifu") {
    document.getElementById("char-name").innerHTML = "Shifu";
    document.getElementById("char-quote").innerHTML =
      "If you only do what you can do, you will never be more than you are now.";
    document.getElementById("char-img").src = "img/shifu.png";
  } else if (name === "soothsayer") {
    document.getElementById("char-name").innerHTML = "Soothsayer";
    document.getElementById("char-quote").innerHTML =
      "Even with his poor eyesight he can see the truth. Why is it you cannot?";
    document.getElementById("char-img").src = "img/soothsayer.png";
  } else if (
    name === "storming ox" ||
    name === "ox" ||
    name === "master storming ox"
  ) {
    document.getElementById("char-name").innerHTML = "Storming Ox";
    document.getElementById("char-quote").innerHTML = "You insolent fool!";
    document.getElementById("char-img").src = "img/storming-ox.png";
  } else if (name === "tai lung") {
    document.getElementById("char-name").innerHTML = "Tai Lung";
    document.getElementById("char-quote").innerHTML =
      "You cant defeat me. You...you're just a big fat panda!";
    document.getElementById("char-img").src = "img/tai-lung.png";
  } else {
    document.getElementById("char-name").innerHTML = "?????";
    document.getElementById("char-quote").innerHTML = "_____________";
    document.getElementById("char-img").src = "img/question-mark.png";
  }
}

// Theme button
document.getElementById("theme-btn").addEventListener("click", changeTheme);

function changeTheme() {
  let theme = document.getElementById("theme-in").value.toLowerCase();
  let red = Math.random() * 255 + 1;
  let green = Math.random() * 255 + 1;
  let blue = Math.random() * 255 + 1;
  red = red.toFixed(0);
  green = green.toFixed(0);
  blue = blue.toFixed(0);
  let redtext = Math.random() * 255 + 1;
  let greentext = Math.random() * 255 + 1;
  let bluetext = Math.random() * 255 + 1;
  redtext = redtext.toFixed(0);
  greentext = greentext.toFixed(0);
  bluetext = bluetext.toFixed(0);

  if (theme === "black" || theme === "dark") {
    document.getElementById("body").style.color = "white";
    document.getElementById("div").style.background = "rgba(0, 0, 0, 0.7)";
    document.getElementById("body").style.background = "rgba(0, 0, 0, 0.7)";
    document.getElementById("div").style.color = "white";
  } else if (theme === "white" || theme === "light") {
    document.getElementById("body").style.color = "black";
    document.getElementById("div").style.background =
      "rgba(255, 255, 255, 0.7)";
    document.getElementById("body").style.background =
      "rgba(255, 255, 255, 0.7)";
    document.getElementById("div").style.color = "black";
  } else if (theme === "random") {
    document.getElementById(
      "body"
    ).style.color = `rgb(${redtext},${greentext},${bluetext})`;
    document.getElementById(
      "div"
    ).style.background = `rgb(${red},${green},${blue})`;
    document.getElementById(
      "body"
    ).style.background = `rgb(${red},${green},${blue})`;
    document.getElementById(
      "div"
    ).style.color = `rgb(${redtext},${greentext},${bluetext})`;
  }
}
