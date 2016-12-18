
var sceneManager = require('./scene_manager.js');
var preloaderScene = require('./preloader_scene.js');

var manager = new sceneManager.SceneManager('game');
var scene = new preloaderScene.PreloaderScene();
manager.switchScene(scene);
