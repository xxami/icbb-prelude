
var scene = require('./scene.js');
var keys = require('./keys.js');
var vnScene = require('./vn_scene.js');

class TitleScene extends scene.Scene {

    init(sceneManager) {
        this.sceneManager = sceneManager;
        this.container = document.getElementById(sceneManager.containerId);
        console.log('TitleScene::init');
        this.playTitleBgm();
        this.displayTitleGraphics();
        this.sceneManager.captureKeyPress([keys.returnKey],
            this.startGame);
    }

    playTitleBgm() {
        soundManager.play('res/title_bgm', {loops: 3});
    }

    displayTitleGraphics() {
        this.container.style.backgroundImage = 'url(res/title_bg.png)';
    }

    startGame() {
        this.clear();
        var scene = new vnScene.VisualNovelScene();
        this.sceneManager.switchScene(scene);
    }

    clear() {
        this.container.style.backgroundImage = '';
        soundManager.stop('res/title_bgm');
        super.clear();
    }
}

exports.TitleScene = TitleScene;
