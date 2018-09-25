class UIImg extends eui.Component{

    constructor(){
        super();
        this.skinName = "resource/eui_skins/imgSkin.exml"
        this.once(egret.Event.ADDED_TO_STAGE,this.onCreate,this);
    }

    private onCreate(){
        var timer: egret.Timer = new egret.Timer(1000, 0);

        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);

        timer.start();
    }

     private timerFunc(event:egret.TimerEvent) {
        if(this.x >= 750){
            this.x = 0
        }
        this.x += 1
    }


}