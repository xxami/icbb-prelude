
var scene = require('./scene.js');
var scenario = require('./vn_scenario.js');
var keys = require('./keys.js');
var orderScene = require('./order_scene.js');

class VisualNovelScene extends scene.Scene {

    init(sceneManager) {
        this.sceneManager = sceneManager;
        this.container = document.getElementById(this.sceneManager.containerId);
        console.log('VisualNovelScene::init');
        this.textBox = this.injectTextbox();
        this.frameCount = 0;
        this.frame = 0;
        this.frameTexts = [];
        this.setInitialTextState();
        this.sceneManager.captureKeyPress([keys.returnKey],
            this.progressNovel);
    }

    progressNovel() {
        this.sayText();
    }

    setInitialTextState() {
        this.frameCount = scenario.frames.length;
        this.renderFrame();
    }

    renderFrame() {
        this.textBox.innerHTML = '';
        let frame = scenario.frames[this.frame];
        this.frameTexts = frame.say;
        if ('bkg' in frame) {
            console.log('VisualNovelScene::DrawBkg -> ', frame.bkg);
        }
        if ('sprites' in frame) {
            console.log('VisualNovelScene::DrawSprites -> ', frame.sprites);
        }
        this.sayText();
    }

    sayText() {
        if (this.frameTexts.length == 0) {
            if (this.frame == (this.frameCount - 1)) {
                this.clear();
                let nextScene = new orderScene.OrderScene();
                this.sceneManager.switchScene(nextScene);
            }
            else {
                this.frame += 1;
                this.renderFrame();
            }
        }
        else {
            let text = this.frameTexts.shift() + ' ';
            this.textBox.innerHTML += text;
        }
    }

    injectTextbox() {
        let html = '<div id="container"><div id="textbox"></div></div>';
        this.container.innerHTML = html;
        return document.getElementById('textbox');
    }

    clear() {
        super.clear();
    }
}

exports.VisualNovelScene = VisualNovelScene;
