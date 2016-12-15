
class Scene {

    constructor(containerId) {
        this._containerId = containerId;
    }

    clear() {
        var node = document.getElementById(this._containerId);
        while (node.firstChild) {
            node.removeChild(node.firstChild());
        }
    }
}

exports.Scene = Scene;
