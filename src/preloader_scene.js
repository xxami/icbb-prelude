
var scene = require('./scene.js');
var resources = require('./resources.js');

class PreloaderScene extends scene.Scene {

    init(sceneManager) {
        this._sceneManager = sceneManager;
        console.log('PreloaderScene::init')

        this.loader = new PxLoader();
        this.resources = 0;
        this.resourcesLoaded = 0;
        this.attachProgressListener();

        soundManager.onready(function() {
            this.resources += this.addPreloaderImages();
            this.resources += this.addPreloaderSounds();
            this.loader.start();
        }.bind(this));
    }

    addPreloaderImages() {
        let images = resources.images.list;
        let format = resources.images.format;
        images.forEach((imgName) => {
            this.loader.addImage(imgName + format);
        });

        return images.length;
    }

    addPreloaderSounds() {
        let sounds = resources.sounds.list;
        let format = resources.sounds.format;
        let formatFallback = resources.sounds.formatFallback;
        sounds.forEach((soundName) => {
            if (soundManager.canPlayURL(soundName + format)) {
                this.loader.addSound(
                    soundName, soundName + format);
            }
            else if (soundManager.canPlayURL(
                soundName + formatFallback)) {
                this.loader.addSound(soundName, soundName + formatFallback);
            }
            else {
                throw new Error(
                    `Unable to play sound: ${soundName}.${format}`);
            }
        });

        return sounds.length;
    }

    attachProgressListener() {
        var progressBar = document.getElementById('progress');
        this.loader.addProgressListener(function(e) {
            if (e.loaded === true) {
                this.resourcesLoaded += 1;
                progressBar.value = Math.floor(
                    this.resourcesLoaded / this.resources) * 100
                console.log(this.resourcesLoaded + ' / ' + this.resources);
            }
            
            if (this.resources == this.resourcesLoaded) {
                console.log('all resources loaded!');
            }
        }.bind(this));
    }

    clear() {
        super.clear();
    }

}

exports.PreloaderScene = PreloaderScene;
