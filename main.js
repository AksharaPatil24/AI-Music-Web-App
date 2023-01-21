song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
leftWrist = 0;
rightWrist = 0;
scoreLeftWrist = 0;
status1 = "";
function preload() {
    song1 = loadSound("Enemy(PaglaSongs).mp3");
    song2 = loadSound("Manike Mage Hithe - Yohani.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");
    song1.isPlaying();

    if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX,leftWristY,20);
        song2.stop();

        if(status1 = stop)
        {
            song1.play();
            document.getElementById("status").innerHTML = "Enemy Song is Playing";
        }
    }
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);
    }
}
