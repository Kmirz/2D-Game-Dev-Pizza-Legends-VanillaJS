class Overworld {
  constructor({ element }) {
    this.element = element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  init() {

    const backgroundImage = new Image();
    backgroundImage.onload = () => {
      this.ctx.drawImage(backgroundImage, 0, 0);
    };
    backgroundImage.src = "/assets/Room1Lower.png";

    const shadow = new Image()
    shadow.onload = () => {

    }

    shadow.src = "/"

    const heroImage = new Image();
    const heroImageSize = 32;
    const x = 1 * 16 - 3;
    const y = 4 * 16 - 18;

    heroImage.onload = () => {
      this.ctx.drawImage(heroImage, 0, 0, heroImageSize, heroImageSize, x, y, heroImageSize, heroImageSize);
    };

    heroImage.src = "./assets/Gloom.png";
  }
}
