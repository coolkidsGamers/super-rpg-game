namespace SpriteKind {
    export const jdj = SpriteKind.create()
}
let mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`backround1`)
controller.moveSprite(mySprite, 100, 100)
forever(function () {
    music.playMelody("C5 B G C5 F B A C5 ", 500)
})
