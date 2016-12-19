
class Scene {

    init(sceneManager) {
        this.sceneManager = sceneManager;
    }

    clear() {
        var containerId = this.sceneManager.containerId;
        var node = document.getElementById(containerId);
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
    }
}

exports.Scene = Scene;
