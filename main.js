canvas = new fabric.Canvas("my_canvas")
playerx = 10
playery = 10
block_width = 30
block_height = 30
player_object = ""
block_object = ""
function player_update(){
    fabric.Image.fromURL("player.png", function(img){
        player_object = img
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(150)
        player_object.set({
            top:playery, left:playerx
        });
        canvas.add(player_object)
    });
}
function block_update(new_image){
    fabric.Image.fromURL(new_image, function(img){
        block_object = img
        block_object.scaleToWidth(block_width)
        block_object.scaleToHeight(block_height)
        block_object.set({
            top:playery, left:playerx
        });
        canvas.add(block_object)
    });
}
player_update()
block_update("wall.jpg")