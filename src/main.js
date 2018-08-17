// test socket io
import io from 'socket.io-client';
import 'phaser';

# https://github.com/nkholski/phaser3-es6-webpack/tree/master/src/scenes
import BootScene from './scenes/boot_scene';
import GameScene from './scenes/game_scene';
import TitleScene from './scenes/title_scene';

// For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
const config = {
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 400,
    height: 240,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: false
        }
    },
    scene: [
        BootScene,
        TitleScene,
        GameScene
    ]
};

const game = new Phaser.Game(config);
// let socket = io();


