class UIClosePass extends eui.Component{

    constructor(){
        super()
        this.skinName = "resource/skins/ui/closePassSkin.exml"
        this.once(egret.Event.ADDED_TO_STAGE,this.onCreate,this)
    }

    private static _ins:UIClosePass
    public static get ins():UIClosePass{
        if(this._ins == null){
            this._ins = new UIClosePass()
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
        // ToolSound.ins.stopMusic()
        
        if(gamedata.ins.interruptNum > 4 ){
            this._money2.visible = false;
            this._money5.visible = false
        }
        // ToolSound.ins.playMusic("xiaoZuoDUI_m4a")
        ToolSound.ins.playEffect("xingxinYX_m4a")
        this.moneyTween.play(0)
        
    }

    public show(){
        MScene.ins.addpopScene(UIClosePass.ins)
        this.refresh()
    }

    private onTweenGroupComplete(){
        let self = this
        ToolSound.ins.stopEffect()
        this.moneyTween.stop()
        // this.moneyTween.removeEventListener('complete', this.onTweenGroupComplete, this)
        let nStar = 3
        if(gamedata.ins.interruptNum > 4){
            nStar = nStar - 1
        }
        gamedata.ins.cleanInterruptNum(nStar)
        //当前结束时所在的关卡 0:第一关 1:第二关 2:第三关
        gamedata.ins.nowPass = 1
        egret.Tween.get(self).wait(3000).call(()=>{
            egret.Tween.removeTweens(self)
            UIPass2_0.ins.show()
        })
        
        // if(gamedata.ins.nowPass == 0){
            
        // }else{gamedata.ins.nowPass == 1}{
        //     gamedata.ins.nowPass = 2
        //     // UIPass2_0.ins.show()
        // }
    }

    private clean(){
        
    }

    public close(){
        this.clean()
    }

    private _money0:eui.Image
    private _money1:eui.Image
    private _money2:eui.Image

    private _money3:eui.Image
    private _money4:eui.Image
    private _money5:eui.Image

    private moneyTween:egret.tween.TweenGroup
}