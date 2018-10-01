class UIPlay extends eui.Component{

    constructor(){
        super()
        this.skinName = "resource/skins/ui/playSkin.exml"
        this.once(egret.Event.ADDED_TO_STAGE,this.onCreate,this)
    }

    private static _ins:UIPlay
    public static get ins():UIPlay{
        if(this._ins == null){
            this._ins = new UIPlay()
        }
        return this._ins
    }

    public show(){
        MScene.ins.addBottomScene(UIPlay.ins)
        this.refresh()
    }

    private onCreate(): void {
        this._group_play.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnPlay,this);
        this._btnTween.addEventListener('complete', this.onTweenGroupComplete, this);
        this.balloonTween.addEventListener('complete', this.onTweenGroupCompleteBalloon, this);
        

        RES.loadGroup("pass2");
        RES.loadGroup("pass3");
        RES.loadGroup("gameover");
        
    }

    private refresh(){
        ToolSound.ins.stopEffect()
        ToolSound.ins.stopMusic()
        this._btnTween.play(0)
        this.balloonTween.play(0)
    }

    private onTweenGroupComplete(){
        this._btnTween.play(0)
    }

    private onTweenGroupCompleteBalloon(){
        this.balloonTween.play(0)
    }

    private onBtnPlay(){
        // window["removeembed"]()
        ToolSound.ins.playMusic("miaoxieBG_m4a",0)
        // 测试
        // UIPass1_0.ins.show()
        // UIPass1.ins.show()
        // UIPass1_2.ins.show()
        // UIClosePass.ins.show()

        // UIPass2_0.ins.show()
        UIPass2_1.ins.show()
        
        // UIPass3_0.ins.show()

        // UIGameOver1.ins.show()
        
        //正常开始
        // UIPass1_0.ins.show()
    }

    private clean(){
        this._btnTween.stop()
        this.balloonTween.stop()
        // this._btnTween.removeEventListener('complete', this.onTweenGroupComplete, this)
    }

    public close(){
        this.clean()
        // UIPlay._ins = null
    }

    private _btnTween:egret.tween.TweenGroup;
    private balloonTween:egret.tween.TweenGroup;
    private _btn_play:eui.Image;
    private _group_play:eui.Image;
}