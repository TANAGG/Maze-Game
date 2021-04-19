var boy,door,door1,door2,door3,door4,door5;
var maze1,maze2,maze3,maze4,maze5,maze6,maze7,maze8,maze9,maze10,maze11,maze12,maze13;
var water,invi1,invi2,boat,cro1,cro2,flag1,flag2,flag3,flag4;
var partition1,partition2,partition4,partition5;
var star1,star2,star3,star4,star5;
var starImage,clrStar,bullet,boat1,croImage,redFlag;
var flag = 0
var count = 0
var edge,robotImage;
var lockimage,unlockimage,lock1,lock2,lock3,lock4,lock5,lock6,tressureImage,tressure;

function preload(){
  lockImage = loadImage("lockImage.png")
  unlockimage = loadImage("unlockImage.png")
  tressureImage = loadImage("tressureimage.png")
  robotImage = loadImage("robot2.png")
  starImage = loadImage("star.png")
  clrStar = loadImage("clrstar.png")
  bullet = loadImage("bullet.png")
  boat1 = loadImage("boat.png")
  croImage = loadImage("ele.png")
  redFlag = loadImage("redFlag.png")
}

function setup() {
  createCanvas(500,600);
  edges = createEdgeSprites();
  
  partition1 = createSprite(60,390,780,10)
  partition1.shapeColor = "red";
  partition2 = createSprite(560,200,1000,10)
  partition2.shapeColor = "red"
  partition4 = createSprite(370,90,280,10)
  partition4.shapeColor = 'red'
  partition5 = createSprite(235,65,10,50)
  partition5.shapeColor = "red"
  maze1 = createSprite(55,540,10,110)
  maze1.shapeColor = "blue"
  maze2 = createSprite(30,405,70,10)
  maze2.shapeColor = "blue"
  maze3 = createSprite(200,485,160,10)
  maze3.shapeColor = "blue"
  maze4 = createSprite(110,530,10,150)
  maze4.shapeColor = "blue"
  maze5 = createSprite(170,420,10,40)
  maze5.shapeColor = "blue"
  maze6 = createSprite(260,455,10,40)
  maze6.shapeColor = "blue"
  maze7 = createSprite(280,510,10,60)
  maze7.shapeColor = "blue"
  maze8 = createSprite(410,530,180,10)
  maze8.shapeColor = "blue"
  maze9 = createSprite(410,430,10,70)
  maze9.shapeColor = "blue"
  maze10 = createSprite(350,215,10,30)
  maze10.velocityY = 5;
  maze10.addImage("blt",bullet)
  maze10.scale = 0.08
  maze11 = createSprite(250,215,10,30)
  maze11.velocityY = 4;
  maze11.addImage("blt",bullet)
  maze11.scale = 0.08
  maze12 = createSprite(150,215,10,30)
  maze12.velocityY = 6;
  maze12.addImage("blt",bullet)
  maze12.scale = 0.08
  star1 = createSprite(80,570,10,10)
  star1.shapeColor = "blue"
  star1.addImage("str",starImage)
  star1.scale = 0.04
  star2 = createSprite(470,580,10,10)
  star2.shapeColor = "blue"
  star2.addImage("str",starImage)
  star2.scale = 0.04
  star3 = createSprite(150,520,10,10)
  star3.shapeColor = "blue"
  star3.addImage("str",starImage)
  star3.scale = 0.04
  star4 = createSprite(480,390,50,10)
  star4.shapeColor = "white"
  star5 = createSprite(480,410,10,10)
  star5.shapeColor = "blue"
  star5.addImage("dh",clrStar)
  star5.scale = 0.1;
  door = createSprite(480,370,50,10)
  door.shapeColor = "white"
  door.visible = false;
  door5 = createSprite(30,180,55,10)
  door5.shapeColor = "white"
  door5.visible = false;
  door1 = createSprite(30,200,55,10);
  door1.shapeColor = "white"
  door2 = createSprite(235,10,10,60)
  door2.shapeColor = "white"
  door3 = createSprite(390,40,10,80)
  door3.shapeColor = "white"
  door4 = createSprite(245,45,10,90)
  door4.visible = false
  water = createSprite(370,145,280,100)
  water.shapeColor = "blue"
  invi1 = createSprite(230,140,10,90)
  invi1.visible = false;
  invi2 = createSprite(230,140,10,110)
  invi2.visible = false;
  boat = createSprite(120,60,20,40)
  boat.shapeColor = "brown"
  boat.addImage("bt",boat1)
  boat.scale = 0.08;
  cro1 = createSprite(480,130,30,10)
  cro1.shapeColor = "green"
  cro1.velocityX = -3
  cro1.addImage("p",croImage)
  cro1.scale = 0.06;
  cro2 = createSprite(480,170,30,10)
  cro2.shapeColor = "green"
  cro2.velocityX = -4
  cro2.addImage("p",croImage)
  cro2.scale = 0.06;
  flag1 = createSprite(390,165,10,30)
  flag1.shapeColor = "red"
  flag1.addImage("r",redFlag)
  flag1.scale = 0.07
  flag2 = createSprite(460,145,10,30)
  flag2.shapeColor = "red"
  flag2.addImage("r",redFlag)
  flag2.scale = 0.07
  flag3 = createSprite(320,135,10,30)
  flag3.shapeColor = "red"
  flag3.addImage("r",redFlag)
  flag3.scale = 0.07
  lock1 = createSprite(270,10,10,10)
  lock1.addImage("img",lockImage)
  lock1.scale = 0.1;
  lock2 = createSprite(320,70,10,10)
  lock2.addImage("img",lockImage)
  lock2.scale = 0.1;
  lock3 = createSprite(370,10,10,10)
  lock3.addImage("img",lockImage)
  lock3.scale = 0.1;
  lock4 = createSprite(270,10,10,10)
  lock4.addImage("img",unlockimage)
  lock4.scale = 0.1;
  lock4.visible = false;
  lock5 = createSprite(320,70,10,10)
  lock5.addImage("img",unlockimage)
  lock5.scale = 0.1;
  lock5.visible = false;
  lock6 = createSprite(370,10,10,10)
  lock6.addImage("img",unlockimage)
  lock6.scale = 0.1;
  lock6.visible = false;
  tressure = createSprite(450,40,20,20)
  tressure.addImage("img1",tressureImage)
  tressure.scale = 0.2
  boy = createSprite(20, 560, 10, 200);
  boy.shapeColor = "white"
  boy.addImage("rbt",robotImage)
boy.scale = 0.08;
boy.debug = false;
boy.setCollider("rectangle",30,30,100,400)
}

function draw() {
  background("black");  
  drawSprites();
  text(mouseX +" " +mouseY,100,100)

 boy.bounceOff(edges[0]);
  boy.bounceOff(edges[1]);
  boy.bounceOff(edges[2]);
  boy.bounceOff(edges[3]);
boy.bounceOff(star4)
boy.bounceOff(partition1)
boy.bounceOff(partition2)
maze10.bounceOff(partition1)
maze10.bounceOff(partition2)
maze11.bounceOff(partition1)
maze11.bounceOff(partition2)
maze12.bounceOff(partition1)
maze12.bounceOff(partition2)
boy.bounceOff(invi1)
cro1.bounceOff(invi2)
cro2.bounceOff(invi2)
cro1.bounceOff(edges[0])
cro1.bounceOff(edges[1]);
cro1.bounceOff(edges[2]);
cro1.bounceOff(edges[3]);
cro2.bounceOff(edges[0])
cro2.bounceOff(edges[1]);
cro2.bounceOff(edges[2]);
cro2.bounceOff(edges[3]);
boy.bounceOff(door2)
boy.bounceOff(partition4)
boy.bounceOff(partition5)
boy.bounceOff(door3)
boy.bounceOff(door4)

  if(keyDown(UP_ARROW)){
    boy.y-=3
 }

 if(keyDown(DOWN_ARROW)){
  boy.y+=3
}

  if(keyDown(RIGHT_ARROW)){
     boy.x+=3
  }

  if(keyDown(LEFT_ARROW)){
    boy.x-=3
 }
if(boy.isTouching(star1)){
  star1.destroy();
flag = flag + 1;
}

if(boy.isTouching(star2)){
  star2.destroy();
flag = flag + 1;
}

if(boy.isTouching(star3)){
  star3.destroy();
flag = flag + 1;
}



if(flag === 3 && boy.isTouching(star5)){
star5.destroy();
star4.destroy();
flag = flag + 1 
}
else{
  boy.bounceOff(star4);
}


 if(boy.isTouching(maze1) || boy.isTouching(maze2) || boy.isTouching(maze3) || boy.isTouching(maze4) || boy.isTouching(maze5) || boy.isTouching(maze6) || boy.isTouching(maze7) || boy.isTouching(maze8) || boy.isTouching(maze9)){
boy.x = 20;
boy.y = 560
 }
if(boy.isTouching(maze10)|| boy.isTouching(maze11)|| boy.isTouching(maze12)){
boy.x = 450
boy.y = 290
}

if(boy.isTouching(door1)){
door1.destroy();
}



    
      
if(boy.isTouching(cro1) || boy.isTouching(cro2)){
boy.x = 130
boy.y = 130
}

if(boy.isTouching(boat)){
  boat.destroy()
  invi1.destroy()
  }
  
  if(boy.isTouching(flag1)){
  flag1.destroy();
  count = count + 1
  }
  
  if(boy.isTouching(flag2)){
    flag2.destroy();
    count = count + 1
    }
  
    if(boy.isTouching(flag3)){
      flag3.destroy();
      count = count + 1
      }

      if(count === 3){
      
        door2.destroy();
        
        }
        else{
          boy.bounceOff(door2);
        }

        if(keyCode === 32){
          lock1.destroy()
          lock2.destroy()
          lock3.destroy()
          lock4.visible = true;
          lock5.visible = true;
          lock6.visible = true;
          door3.destroy()
          door4.destroy()
        }

        if(boy.isTouching(tressure)){
          fill("red")
           textSize(30)
           text("Hurray! You Won the Game",110,280)
        }

        if(boy.isTouching(door)){
          door.x = 480
          door.y = 390
          door.visible = true;
          boy.bounceOff(door)
        }

        if(boy.isTouching(door5)){
            door5.x = 30
            door5.y = 200
            door5.visible = true;
            boy.bounceOff(door5)
        }

}

//https://tanagg.github.io/Maze-Runner/