
var scene = require('./scene.js');
var scenario = require('./vn_scenario.js');
var keys = require('./keys.js');

class VisualNovelScene extends scene.Scene {

    init(sceneManager) {
        this.sceneManager = sceneManager;
        this.container = document.getElementById(this.sceneManager.containerId);
        let html = '<div id="container">'+
        '<div id="textbox">text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here</div>'+
        '</div>';
        this.container.innerHTML = html;
        console.log('VisualNovelScene::init');
    }


    clear() {
        super.clear();
    }
}

exports.VisualNovelScene = VisualNovelScene;
