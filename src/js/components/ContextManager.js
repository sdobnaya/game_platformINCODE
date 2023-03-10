export default class ContextManager {
    constructor() {
        this.gameContext = null;
        this.managerContext = null;

        this.activeContext = null;

        this.setupContexts();
    }

    setupContexts() {
        this.gameNode = document.getElementById('gameplay');

        if (this.gameNode.getContext('2d')) {
            this.gameContext = this.gameNode.getContext('2d');
            this.gameNode.width = 1920;
            this.gameNode.height = 1080;
            this.gameNode.setAttribute('style', 'z-index:0; position:absolute;');
            this.gameContext.fillStyle = "blue";
            this.gameContext.fillRect(0, 0, this.gameNode.width, this.gameNode.height);
            
            this.managerNode = document.getElementById('management');
            this.managerContext = this.managerNode.getContext('2d');
            this.managerNode.width = 1920;
            this.managerNode.height = 1080;
            this.managerNode.setAttribute('style', 'z-index:0; position:absolute;');
            this.managerContext.fillStyle = "yellow";
            this.managerContext.fillRect(0, 0, this.managerNode.width, this.managerNode.height);

            this.activeContext = this.managerContext;
        } else {
            alert('Ваш браузер полный отстой! Установите другой или попробуйте обновить этот :(');
        }
    }

    getGameContext() {
        return this.gameContext;
    }

    getManagerContext() {
        return this.managerContext;
    }

    getActiveContext() {
        return this.activeContext;
    }

    showGameContext() {
        this.gameNode.setAttribute('style', 'z-index:1; position:absolute;');
        this.managerNode.setAttribute('style', 'z-index:0; position:absolute;');

        this.activeContext = this.gameContext;
    }

    showManagerContext() {
        this.gameNode.setAttribute('style', 'z-index:0; position:absolute;');
        this.managerNode.setAttribute('style', 'z-index:1; position:absolute;');

        this.activeContext = this.managerContext;
    }
}


