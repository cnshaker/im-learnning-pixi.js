
// 创建pixi的stage
var stage = new PIXI.Stage(0x222222);
 
// 创建一个渲染
var renderer = PIXI.autoDetectRenderer(800, 600);
 
// 添加到页面
document.body.appendChild(renderer.view);
 
requestAnimFrame( animate );
// 创建添加一个素材
var texture = PIXI.Texture.fromImage("first.png");
// 使用素材创建一个动画元素
var bunny = new PIXI.Sprite(texture);
 
// 居中
bunny.anchor.x = .5;
bunny.anchor.y = .5;
 
// 移动到游戏屏幕中央
bunny.position.x = 400;
bunny.position.y = 300;
 
stage.addChild(bunny);
function animate() {
requestAnimFrame( animate );

//添加旋转效果
bunny.rotation += 0.1;

//添加缩放效果
if(bunny.scale.x>=1){
 scaleflag = 1;
}else if(bunny.scale.x<=0.5){
 scaleflag = 0;
}

scaleflag?bunny.scale.x -= 0.05: bunny.scale.x +=0.05;
scaleflag?bunny.scale.y -= 0.05: bunny.scale.y +=0.05;
 
renderer.render(stage);
}
