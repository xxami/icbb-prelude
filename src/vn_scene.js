
var scene = require('./scene.js');

class VisualNovelScene extends scene.Scene {

    init(sceneManager) {
        this.sceneManager = sceneManager;
        this.containerId = this.sceneManager.containerId;
        console.log('VisualNovelScene::init');
    }


    clear() {
        super.clear();
    }
}

exports.VisualNovelScene = VisualNovelScene;
