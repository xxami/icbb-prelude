
class SceneManager {

    constructor(containerId) {
        this._containerId = containerId;
        this._currentScene = null;
    }

    get containerId() {
        return this._containerId;
    }

    switchScene(scene) {
        if (this._currentScene != null) {
            this._currentScene.clear();
        }
        this._currentScene = scene;
        this._currentScene.init(this);
    }
}

exports.SceneManager = SceneManager;