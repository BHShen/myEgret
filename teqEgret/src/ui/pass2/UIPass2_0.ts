class UIPass2_0 extends eui.Component{
    private passNum = 0
    private gameBegin:boolean = false;

    /** 动画F */
    private _mcF:egret.MovieClip
    /** 动画P */
    private _mcP:egret.MovieClip

    constructor(){
        super()
        this.skinName = "resource/skins/ui/pass2/pass2_0Skin.exml"
        this.once(egret.Event.ADDED_TO_STAGE,this.onCreate,this)
    }

    private static _ins:UIPass2_0
    public static get ins():UIPass2_0{
        if(this._ins == null){
            this._ins = new UIPass2_0()
        }
        return this._ins
    }

    private onCreate(): void {
        let self = this
        self.createAct()

        self.actFTween.addEventListener('complete', this.onTweenGroupComplete_F, this);
        self.actPTween.addEventListener('complete', this.onTweenGroupComplete_P, this);

        self._img_f.addEventListener(egret.TouchEvent.TOUCH_TAP,self.onBtnF,self);
        self._img_p.addEventListener(egret.TouchEvent.TOUCH_TAP,self.onBtnP,self);
        
    }

    public show(){
        MScene.ins.addBottomScene(UIPass2_0.ins)
        this.refresh()
    }

    public refresh(){
        let self = this
        this.StopActF()
        this.StopActP()
        self._img_guang_f.visible = false
        self._img_guang_p.visible = false
        self.gameBegin = false
        self._passLook.x = 0
        self._passLook.y = 0
        self._passLook.visible = true
        self._passLook.playAct()
        self._passLook.GetOutScene()
        self._img_bear.source = RES.getRes("act_bear0")
        ToolSound.ins.stopEffect()
        egret.Tween.get(self).wait(2000).call(()=>{
            egret.Tween.removeTweens(self)
            self.playBearAct()
        })
    }
    /** 播放熊的动画  */
    /** soundSelect 0 表示弱 1 表示强 */
    private playBearAct(soundSelect:number = 1){
        let self = this
        this.StopActF()
        this.StopActP()
        let callFun3 = function(){
            self._img_bear.source = RES.getRes("act_bear0")
            egret.Tween.removeTweens(self._img_bear)
            self.playBearActOver(soundSelect)
        }

        let callFun2 = function(){
            self._img_bear.source = RES.getRes("act_bear2")
            egret.Tween.removeTweens(self._img_bear)
            egret.Tween.get(self._img_bear).wait(330).call(callFun3)
            //播放音效
            if(soundSelect == 1){
                ToolSound.ins.playEffect("pass2GuQiang_mp3")
            }else{
                ToolSound.ins.playEffect("pass2Guruo_mp3")
            }
            
        }

        let callFun1 = function(){
            self._img_bear.source = RES.getRes("act_bear1")
            egret.Tween.removeTweens(self._img_bear)
            egret.Tween.get(self._img_bear).wait(330).call(callFun2)
        }
        egret.Tween.get(self._img_bear).wait(330).call(callFun1)
    }
    /** 熊的动画播放完毕  */
    private playBearActOver(soundSelect:number = 1){
        this.gameBegin = true
        if(soundSelect == 1){
            this._img_guang_f.visible = true
            this.actFTween.play(0)
        }else{
            this._img_guang_p.visible = true
            this.actPTween.play(0)
        }
        
    }

    private createAct(){
        if(this._mcF != null) return
        var data = RES.getRes("actPass2_json");
        var txtr = RES.getRes("actPass2_png");
        var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
        this._mcF = new egret.MovieClip( mcFactory.generateMovieClipData( "act" ) );
        this._mcP = new egret.MovieClip( mcFactory.generateMovieClipData( "act" ) );
        this._rightF.addChild(this._mcF)
        this._rightP.addChild(this._mcP)
        this._rightF.visible = false
        this._rightP.visible = false
    }

    private PlayActF(){
        this._img_f.visible = false
        this._rightF.visible = true
        this._mcF.gotoAndPlay("f",-1)

    }
    private PlayActP(){
        this._img_p.visible = false
        this._rightP.visible = true
        this._mcP.gotoAndPlay("p",-1)
        
    }

    private StopActF(){
        this._img_f.visible = true
        this._rightF.visible = false
        this._mcF.stop()
    }

    private StopActP(){
        this._img_p.visible = true
        this._rightP.visible = false
        this._mcF.stop()
    }

    private onTweenGroupComplete_F(){
        this.actFTween.play(0)
    }
    private onTweenGroupComplete_P(){
        this.actPTween.play(0)
    }

    private onBtnF(){
        let self = this
        if(this.gameBegin  == false) return
        if(this.passNum == 0){
            //正确
            this.gameBegin = false
            this._img_guang_f.visible = false
            this.passNum = 1
            this.errFTween.play(0)
            this.errFTween.stop()

            this.actFTween.play(0)
            this.PlayActF()
            ToolSound.ins.playEffect("pass2GuQiang_mp3")
            egret.Tween.get(self).wait(1000).call(()=>{
                egret.Tween.removeTweens(self)
                self.playBearAct(0)
            })
        }else if(this.passNum == 1){
            //错误
            this.errFTween.play(0)
            ToolSound.ins.playEffect("xuancuo_m4a")
        }
        
        
    }

    private onBtnP(){
        let self = this
        if(this.gameBegin == false) return
        if(this.passNum == 0){
            //错误
            this.errPTween.play(0)
            ToolSound.ins.playEffect("xuancuo_m4a")
        }else if(this.passNum == 1){
            //正确
            //播放音效
            this.gameBegin = false
            this._img_guang_p.visible = false
            ToolSound.ins.playEffect("pass2Guruo_mp3")
            this.PlayActP()
            this.errPTween.play(0)
            this.errPTween.stop()
            this.actPTween.play(0)
            egret.Tween.get(self).wait(2000).call(()=>{
                egret.Tween.removeTweens(self)
                UIPass2_1.ins.show()
            })
            
        }
    }

    
    private clean(){
        this._img_guang_f.visible = false
        this._img_guang_p.visible = false
        this.actFTween.play(0)
        this.actFTween.stop()
        this.actPTween.play(0)
        this.actPTween.stop()

        this.errFTween.play(0)
        this.errFTween.stop()
        this.errPTween.play(0)
        this.errPTween.stop()
        // this.actFTween.removeEventListener('complete', this.onTweenGroupComplete_F, this)
        egret.Tween.removeTweens(this)
        egret.Tween.removeTweens(this._img_bear)
        
    }

    public close(){
        this.clean()
        // UIPass2_0._ins = null
    }

    private _img_guang_f:eui.Image
    private _img_guang_p:eui.Image
    private _img_p:eui.Image
    private _img_f:eui.Image
    private _img_bear:eui.Image
    private _passLook:UIPass2look;
    private _rightF:eui.Group;    
    private _rightP:eui.Group;

    private actFTween:egret.tween.TweenGroup;
    private actPTween:egret.tween.TweenGroup;
    private errFTween:egret.tween.TweenGroup;
    private errPTween:egret.tween.TweenGroup;
}

