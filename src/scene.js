
class Scene {

    init(sceneManager) {
        this._sceneManager = sceneManager;
    }

    clear() {
        var containerId = this._sceneManager.containerId;
        var node = document.getElementById(containerId);
        while (node.firstChild) {
            node.removeChild(node.firstChild());
        }
    }
}

exports.Scene = Scene;
