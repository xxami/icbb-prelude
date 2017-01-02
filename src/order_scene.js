
var scene = require('./scene.js');
var keys = require('./keys.js');

class OrderScene extends scene.Scene {

    init(sceneManager) {
        this.sceneManager = sceneManager;
        this.container = document.getElementById(sceneManager.containerId);
        console.log('OrderScene::init');
    }

    clear() {
        super.clear();
    }
}

exports.OrderScene = OrderScene;
