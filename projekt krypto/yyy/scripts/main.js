


Crafty.init(document.getElementById("gamediv"));

Crafty.sprite(80, "img/sprites/kapusta.png",{
    kapusta:[0,0]
})

Crafty.scene("main", function(){
    Crafty.background("black");
    Crafty.e("2D, Canvas, Fourway, kapusta")
    .attr({x:360, y:210, w:100, h:100})
    .fourway(150)
});

Crafty.enterScene("main");
    

