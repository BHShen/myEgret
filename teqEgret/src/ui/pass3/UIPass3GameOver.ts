class UIPass3GameOver extends eui.Component{

    constructor(){
        super()
        this.skinName = "resource/skins/ui/pass2/pass2GameOverSkin.exml"
        this.once(egret.Event.ADDED_TO_STAGE,this.onCreate,this)
    }

    private static _ins:UIPass3GameOver
    public static get ins():UIPass3GameOver{
        if(this._ins == null){
            this._ins = new UIPass3GameOver()
        }
        return this._ins
    }

    private onCreate(): void {
        this.moneyTween.addEventListener('complete', this.onTweenGroupComplete, this);

    }

    public refresh(){
        this._money2.visible = true;
        this._money5.visible = true
        this._money1.visible = true;
        this._money4.visible = true
        this._money0.visible = true;
        this._money3.visible = true
        let nStar = 3
        if(gamedata.ins.interruptNum < 3){
            nStar = 3
        }else if(gamedata.ins.interruptNum < 7){
            this._money2.visible = false;
            this._money5.visible = false
        }else{
            this._money2.visible = false;
            this._money5.visible = false
            this._money1.visible = false;
            this._money4.visible = false
        }


        ToolSound.ins.stopEffect()
        egret.Tween.get(self).wait(500).call(()=>{
            egret.Tween.removeTweens(self)
            ToolSound.ins.playEffect("xingxinYX_m4a")
            this.moneyTween.play(0)
        })
        
    }

    public show(){
        MScene.ins.addpopScene(UIPass3GameOver.ins)
        this.refresh()
    }

    private onTweenGroupComplete(){
        let self = this
        ToolSound.ins.stopEffect()
        this.moneyTween.stop()
        // this.moneyTween.removeEventListener('complete', this.onTweenGroupComplete, this)
        let nStar = 3
        //引导的2次  + 上正确的次数
        if(gamedata.ins.interruptNum >= 5){
            nStar = 3
        }else if(gamedata.ins.interruptNum >= 4){
            nStar = 2
        }else{
            nStar = 1
        }
        gamedata.ins.cleanInterruptNum(nStar)
        
        //当前结束时所在的关卡 0:第一关 1:第二关 2:第三关
        gamedata.ins.nowPass = 3
        
        //结束
        egret.Tween.get(self).wait(3000).call(()=>{
            egret.Tween.removeTweens(self)
            UIGameOver1.ins.show()
        })

    }

    private clean(){
        
    }

    public close(){
        this.clean()
        // UIPass3GameOver._ins = null
    }

    private _money0:eui.Image
    private _money1:eui.Image
    private _money2:eui.Image

    private _money3:eui.Image
    private _money4:eui.Image
    private _money5:eui.Image

    private moneyTween:egret.tween.TweenGroup
}