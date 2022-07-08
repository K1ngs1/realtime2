function setup(){
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(500, 550);
  canvas.position(560, 150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses)
}

function gotPoses(results){
  if(results.length > 0){
    console.log(results);
  }
}

function modelLoaded(){
  console.log('posenet is initiallized')
}

function draw(){
  background("lightblue");
}