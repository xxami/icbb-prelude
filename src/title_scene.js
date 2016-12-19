
var scene = require('./scene.js');

class TitleScene extends scene.Scene {

    init(sceneManager) {
        this.sceneManager = sceneManager;
        console.log('TitleScene::init');
    }

    clear() {
        super.clear();
    }
}

exports.TitleScene = TitleScene;
