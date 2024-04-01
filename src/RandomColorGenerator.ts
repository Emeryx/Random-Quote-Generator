
const colors:string[] = [
  "#cc004d",
  "#00cc4d",
  "#4d00cc",
  "#cc4d00",
  "#00cccc",
  "#cc00cc",
  "#cc3366",
  "#4dcc00",
  "#3366cc",
  "#cc3366",
  "#33cc99",
  "#9933cc",
  "#cc9933",
  "#99cc33",
  "#cc3366",
  "#cc9933",
  "#3399cc",
  "#cc3366",
  "#99cc33",
  "#4dcc00",
  "#33cc99",
  "#cc9966",
  "#66cc99",
  "#6699cc",
  "#99cc66",
  "#99cc66",
  "#9966cc",
  "#cc6699"
]

function randomColor() : string {
    const randomIndex : number = Math.floor(Math.random()*colors.length);
    return colors[randomIndex];
}

export default randomColor;