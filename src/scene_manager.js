
class SceneManager {

    constructor(containerId) {
        this._containerId = containerId;
        this._currentScene = null;
        this._keyPressListeners = {};
        this.addKeyPressEventListener();
    }

    get containerId() {
        return this._containerId;
    }

    addKeyPressEventListener() {
        document.addEventListener('keyup', function(event) {
            if (event.keyCode in this._keyPressListeners) {
                this._keyPressListeners[event.keyCode].apply(
                    this._currentScene, event);
            }
        }.bind(this));
    }

    captureKeyPress(keyList, callback) {
        keyList.forEach(function(key) {
            this._keyPressListeners[key] = callback;
        }.bind(this));
    }

    switchScene(scene) {
        if (this._currentScene != null) {
            this._keyPressListeners = {};
            this._currentScene.clear();
        }
        this._currentScene = scene;
        this._currentScene.init(this);
    }
}

exports.SceneManager = SceneManager;
