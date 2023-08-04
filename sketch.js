function setup() {
  createCanvas(500,500);
}
let x = 45;
let y = 45;
var txs;
var txl;
var tys;
var tyl;
var ran;
function draw() {
  background(40,40,200);
  circle(x,y,45);
  if(x==500){
    txl=true;
    txs=false;
  }
  if(x==0){
    txs=true;
    txl=false;
  }
  if(y==500){
    tyl=true;
    tys=false;
  }
  if(y==0){
    tys=true;
    tyl=false;
  }
  if (txl==true){
    x=x-4;
  }else{
    x++;
  }
  if (tyl==true){
    y=y-2;
  }else{
    y++;
  }
  if (txs==true){
    x=x+4;
  }
  if (tys==true){
    y=y+3;
  }
}