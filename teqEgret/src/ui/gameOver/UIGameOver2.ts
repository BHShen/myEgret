class UIGameOver2 extends eui.Component{

    constructor(){
        super()
        this.skinName = "resource/skins/ui/gameOver/gameOver2Skin.exml"
        this.once(egret.Event.ADDED_TO_STAGE,this.onCreate,this)
    }

    private static _ins:UIGameOver2
    public static get ins():UIGameOver2{
        if(this._ins == null){
            this._ins = new UIGameOver2()
        }
        return this._ins
    }

    private onCreate(): void {
        
        this._rePlay.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnRePlay,this)
    }

    
    public refresh(){
        ToolSound.ins.playMusic("bgM_mp3")
        this._num.text = "X" + gamedata.ins.starNum
    }

    public show(){
        MScene.ins.addpopScene(UIGameOver2.ins)
        this.refresh()
    }

    private onBtnRePlay(){
        UIPlay.ins.show()
    }

    private clean(){
        
    }

    public close(){
        this.clean()
        // UIGameOver2._ins = null
    }

    private _img_box:eui.Image
    private _num:eui.Label
    private _money:eui.Image
    private _img_f:eui.Image
    private _img_p:eui.Image
    private _rePlay:eui.Image

}