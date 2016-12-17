
var scene = require('./scene.js');

class PreloaderScene extends scene.Scene {

    init(sceneManager) {
        this._sceneManager = sceneManager;
        console.log('PreloaderScene::init')
    }

    clear() {
        super.clear();
    }

}

exports.PreloaderScene = PreloaderScene;
