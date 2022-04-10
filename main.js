function preload() {

}

function setup() {
  canvas = createCanvas(640, 500);
  canvas.position(200, 150);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  image(video, 130, 100, 370, 290);

  fill(255, 50, 50);
  stroke(255, 0, 0);
  circle(50, 50, 70);

  circle(50, 430, 70);

  circle(590, 50, 70);

  circle(590, 430, 70);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(90, 40, 460, 20);

  rect(90, 420, 460, 20);

  rect(40, 90, 20, 300);

  rect(580, 90, 20, 300);
}

function take_snapshot(){    
  save('student_name.png');
}