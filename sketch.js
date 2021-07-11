var ball;
var db,p;

function setup(){
    //Creating database
    //.on : read/listen any change in database value
    //.set : to set value in db
    //.ref: refer the loc of database
    db=firebase.database()
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballpos=db.ref('ball/position')
    ballpos.on("value",readposition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
    writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
       writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    db.ref('ball/position').set({
        'x':p.x+x,
        'y':p.y+y
    })
}
function readposition(data)
{
    p=data.val();
    ball.x=p.x;
    ball.y=p.y;
}
