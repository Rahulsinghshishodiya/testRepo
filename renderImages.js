const imgs = ["images/p1.jpg", "images/p2.jpg", "images/p3.jpg"];

const container = document.getElementById("containerwwwwwwwwww");

function renderImages() {
  console.log("OKKKKKKKKKKKKKKKK");
  let getImgs = "";
  for (let i = 0; i < imgs.length; i++) {
    getImgs = `<img scr="${imgs[i]}">`;
  }
  container.innerHTML = getImgs;
}

renderImages();
