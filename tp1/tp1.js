//AGUSTIN FORTE - LEGAJO: 120310/0 - LINK DEL VIDEO:https://youtu.be/3pMnmndWjLo - LINK DEL VIDEO ANTERIOR: https://www.youtube.com/watch?v=R_4wLevc-5s

let imagen;
let rectAncho = 133; 
let rectAlto = 133; 
let filas = 3; 
let columnas = 3; 
let rectColor1, rectColor2;
let circleColor1, circleColor2;

function preload() {
  imagen = loadImage("data/OPART.jpg");
}

function setup() {
  createCanvas(800, 400);
  image(imagen, 0, 0);
  noStroke();
  
  // Inicializa los colores
  rectColor1 = color(40, 42, 179);
  rectColor2 = color(6, 13, 29);
  circleColor1 = color(6, 13, 29);
  circleColor2 = color(40, 42, 179);
}

function draw() {
  background(1);
  image(imagen, 0, 0);
  
  // Dibuja las filas de rectángulos y círculos
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      let posX = 400 + j * rectAncho;
      let posY = i * rectAlto;
      
      let rectColor = obtenerColorRectangulo(i, j);
      let circleColor = obtenerColorCirculo(i, j);
      
      // Calcula el tamaño de los círculos basado en la posición del mouse
      let distanciaMouse = dist(mouseX, mouseY, posX + rectAncho / 2, posY + rectAlto / 2);
      
      // Limita el tamaño mínimo cuando el mouse está lejos
      if (distanciaMouse > 400) {
        distanciaMouse = 400; // Limita la distancia a 400 para evitar que el tamaño siga reduciéndose
      }
      
      let tamanoCirculo = map(distanciaMouse, 0, 400, 20 , 133); // Mapea la distancia del mouse a un tamaño de círculo
      
      rectangulo(posX, posY, rectAncho, rectAlto, rectColor, circleColor, tamanoCirculo);
    }
  }
}

function rectangulo(x, y, w, h, rectColor, circleColor, tamanoCirculo) {
  // Dibuja el rectángulo
  fill(rectColor);
  rect(x, y, w, h);
  
  // Dibuja el círculo con el tamaño ajustado
  fill(circleColor);
  ellipse(x + w / 2, y + h / 2, tamanoCirculo, tamanoCirculo);
}

function obtenerColorRectangulo(fila, columna) { //Función con retorno - Asigna el color de los rectángulos 
  // Define los colores de los rectángulos según su posición
  if (fila === 0 || fila === 2) {
    if (columna === 0 || columna === 2) {
      return rectColor1;
    } else if (columna === 1) {
      return rectColor2;
    }
  } else if (fila === 1) {
    // Colores invertidos (FILA DEL MEDIO)
    if (columna === 0 || columna === 2) {
      return rectColor2;
    } else if (columna === 1) {
      return rectColor1;
    }
  }
  
  return rectColor1; // Valor por defecto
}

function obtenerColorCirculo(fila, columna) { //Función con retorno - Asigna el color de los círculos
  // Define los colores de los círculos según su posición
  if (fila === 0 || fila === 2) {
    if (columna === 0 || columna === 2) {
      return circleColor1;
    } else if (columna === 1) {
      return circleColor2;
    }
  } else if (fila === 1) {
    // Colores invertidos (FILA DEL MEDIO)
    if (columna === 0 || columna === 2) {
      return circleColor2;
    } else if (columna === 1) {
      return circleColor1;
    }
  }
  
  return circleColor1; // Valor por defecto
}

function mousePressed() {
  // Genera colores aleatorios para los rectángulos y los círculos
  rectColor1 = color(random(255), random(255), random(255));
  rectColor2 = color(random(255), random(255), random(255));
  circleColor1 = color(random(255), random(255), random(255));
  circleColor2 = color(random(255), random(255), random(255));
}

function keyPressed() {
  // Vuelve a los colores originales
  rectColor1 = color(40, 42, 179);
  rectColor2 = color(6, 13, 29);
  circleColor1 = color(6, 13, 29);
  circleColor2 = color(40, 42, 179);
}
