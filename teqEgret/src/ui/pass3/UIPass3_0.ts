class UIPass3_0 extends eui.Component{
    /** 是否能点击 */
    private clickBegin = false
    /** 点击正确结束 */
    private clickTrueOver = false
    /** 时间 */
    private _timer:egret.Timer;
    /** 时间计数 */
    private _timeNum = 0;
    /** 动画F */
    private _mcF:egret.MovieClip
    /** 动画P */
    private _mcP:egret.MovieClip
    /** 引导次数 */
    private _pleaseNum = 0;
    constructor(){
        super()
        this.skinName = "resource/skins/ui/pass3/pass3_0Skin.exml"
        this.once(egret.Event.ADDED_TO_STAGE,this.onCreate,this)
    }

    private static _ins:UIPass3_0
    public static get ins():UIPass3_0{
        if(this._ins == null){
            this._ins = new UIPass3_0()
        }
        return this._ins
    }
    
    private onBtnHome(){
        UIPlay.ins.show()
    }

    private onCreate(): void {
        let self = this
        
        this._btn_home.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnHome,this);
        this._timer = new egret.Timer(1000,0);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);

        this._btn_f.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnF,this)
        this._btn_p.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnP,this)
        this.createAct()
    }

    public show(){
        MScene.ins.addBottomScene(UIPass3_0.ins)
        this.refresh()
    }

    public refresh(){
        let self = this
        this.clickBegin = false
        self._passLook.x = 0
        self._passLook.y = 0
        self._group_note.visible = false
        self._passLook.visible = true
        self._passLook.playAct()
        self._passLook.GetOutScene()
        self.stopNdeActF()
        self.stopNdeActP()
        
    }

    private timerFunc(event:egret.TimerEvent) {
        egret.log("timerFunc count" + (<egret.Timer>event.target).currentCount);
        this._timeNum = this._timeNum + 1
        // console.log("this._timeNum = " + this._timeNum)
        this.ChangeFP(this._timeNum)
    }

    private ChangeFP(timeNum){
        let nType = -1
        if(this._timeNum == 0 ){
            nType = -1
            // this.readyF()
            // this.readyP()
        }else if(this._timeNum == 8 || this._timeNum == 17 ||this._timeNum == 26){
            this.readyF()
            this.readyP()
            if(this._pleaseNum < 2){
                egret.Tween.get(this).wait(800).call(this.TipsF)
            }
        }else if(this._timeNum == 13 || this._timeNum == 22 || this._timeNum == 39){
            this.readyF()
            this.readyP()
            if(this._pleaseNum < 2){
                egret.Tween.get(this).wait(800).call(this.TipsP)
            }
        }

        
    }

    public closeALL(){
        let self = this
        self.closeTipsP()
        self.readyP()
        self.closeTipsF()
        self.readyF()
    }

    public TipsExampleF(){
        let self = this
        self.closeTipsP()
        self.TipsF()
        self.readyP()
        egret.Tween.get(self).wait(500).call(()=>{
            egret.Tween.removeTweens(self)
            self.playF()
        })
    }

    public TipsExampleP(){
        let self = this
        self.closeTipsF()
        self.TipsP()
        self.readyF()
        egret.Tween.get(self).wait(500).call(()=>{
            egret.Tween.removeTweens(self)
            self.playP()
        })
    }

    private playNodActF(){
        let self = this
        self._img_people_f.visible = false
        self._nod_f.visible = true
        egret.Tween.get(self._nod_f,{loop:true}).wait(500).call(()=>{
            self._nod_f.source = RES.getRes("img_f_nod2")
        }).wait(500).call(()=>{
            self._nod_f.source = RES.getRes("img_f_nod1")
        })
    }

    private playNodActP(){
        let self = this
        self._img_people_p.visible = false
        self._nod_p.visible = true
        egret.Tween.get(self._nod_f,{loop:true}).wait(500).call(()=>{
            self._nod_p.source = RES.getRes("img_p_nod2")
        }).wait(500).call(()=>{
            self._nod_p.source = RES.getRes("img_p_nod1")
        })
    }

    private stopNdeActF(){
        this._img_people_f.visible = true
        this._nod_f.visible = false
        egret.Tween.removeTweens(this._nod_f)
    }

    private stopNdeActP(){
        this._img_people_p.visible = true
        this._nod_p.visible = false
        egret.Tween.removeTweens(this._nod_p)
    }

    private createAct(){
        if(this._mcF != null) return
        var data = RES.getRes("act_json");
        var txtr = RES.getRes("act_png");
        var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
        this._mcF = new egret.MovieClip( mcFactory.generateMovieClipData( "act" ) );
        this._mcP = new egret.MovieClip( mcFactory.generateMovieClipData( "act" ) );
        this._groupPlayF.addChild(this._mcF)
        this._groupPlayP.addChild(this._mcP)
        
        this._groupPlayF.visible = false
        this._groupPlayP.visible = false
    }

    private PlayActF(){
        this._img_people_f.visible = false
        this._imgwt_f.source = RES.getRes("img_wtF1")
        this._groupPlayF.visible = true
        this._mcF.gotoAndPlay("f",-1)
        this._notef.playAct()

    }
    private PlayActP(){
        this._img_people_p.visible = false
        this._imgwt_p.source = RES.getRes("img_wtP1")
        this._groupPlayP.visible = true
        this._mcP.gotoAndPlay("p",-1)
        this._notep.playAct()
        
    }

    private StopActF(){
        this._groupPlayF.visible = false
        this._mcF.stop()
        this._notef.stopAct()
    }

    private StopActP(){
        this._groupPlayP.visible = false
        this._mcF.stop()
        this._notep.stopAct()
    }

    private TipsF(){
        this._pleaseNum += 1
        egret.Tween.removeTweens(this)
        this._img_hand.visible = true
        this.fplayTween.play(0)
    }

    private TipsP(){
        this._pleaseNum += 1
        egret.Tween.removeTweens(this)
        this._img_hand.visible = true
        this.pplayTween.play(0)
    }

    private closeTipsF(){
        this._img_hand.visible = false
        this.fplayTween.stop()
    }

    private closeTipsP(){
        this._img_hand.visible = false
        this.pplayTween.stop()
    }

    private readyF(){
        egret.Tween.removeTweens(this._btn_f)
        this.StopActF()
        this.stopNdeActF()
        this._img_people_f.visible = true
        this._img_people_f.source = RES.getRes("img_pass3_f_ready")
        this._imgwt_f.source = RES.getRes("img_wtF0")
        this._btn_f.source = RES.getRes("btn_pass3_f_up")
        this.clickTrueOver = false
    }

    private readyP(){
        egret.Tween.removeTweens(this._btn_p)
        this.StopActP()
        this.stopNdeActP()
        this._img_people_p.visible = true
        this._img_people_p.source = RES.getRes("img_pass3_p_ready")
        this._imgwt_p.source = RES.getRes("img_wtP0")
        this._btn_p.source = RES.getRes("btn_pass3_p_up")
        this.clickTrueOver = false
    }

    private playF(){
        gamedata.ins.interruptNum = gamedata.ins.interruptNum + 1
        // this._img_people_f.source = RES.getRes("img_pass3_f_play")
        this._btn_f.source = RES.getRes("btn_pass3_f_down")
        this.readyP()
        this.closeTipsF()
        this.PlayActF()
        
    }



    private playP(){
        gamedata.ins.interruptNum = gamedata.ins.interruptNum + 1
        // this._img_people_p.source = RES.getRes("img_pass3_p_play")
        this._btn_p.source = RES.getRes("btn_pass3_p_down")
        this.readyF()
        this.closeTipsP()
        this.PlayActP()
    }

    private errF(){
        
        this._img_people_f.source = RES.getRes("img_pass3_f_err")
    }

    private errP(){
        
        this._img_people_p.source = RES.getRes("img_pass3_p_err")
    }

    /** 判断音符 f:1 p:0 */
    private checkFP(num){
        /**
         * 0 - 7 准备
         * 8 - 12 f
         * 13 - 16 p
         * 17 - 21 f
         * 22 - 25 p
         * 26 - 38 f
         * 39 - end p
         */
        let nType = -1
        if(this._timeNum >= 0 && this._timeNum < 8 ){
            nType = -1
        }else if((this._timeNum >= 8 && this._timeNum < 12 ) || (this._timeNum >= 17 && this._timeNum < 22 ) || (this._timeNum >= 26 && this._timeNum < 38 )){
            nType = 1
        }else if((this._timeNum >= 13 && this._timeNum < 17 ) || (this._timeNum >= 22 && this._timeNum < 26 ) || (this._timeNum >= 39)){
            nType = 0
        }
        return nType == num
    }
    
    public begin(){
        let self = this
        let callFun = function(){
            self.musicEnd()
        }
        this.clickBegin = true
        this._pleaseNum = 0
        // ToolSound.ins.stopMusic()
        egret.Tween.get(self).wait(500).call(()=>{
            ToolSound.ins.playMusic("pass3Music_mp3",1,callFun)
            self._group_note.visible = true
            self.playNodActF()
            self.playNodActP()
            self._note.playAct()
            self._timer.start()
        })
        
    }

    public musicEnd(){
        this._timeNum = 0
        this.readyF()
        this.readyP()
        this._timer.stop()
        this._group_note.visible = false
        this._note.stopAct()
        this.gameOver()
    }

    private gameOver(){
        
        UIPass3GameOver.ins.show()
    }
    

    private onBtnF(){
        let self = this
        if(this.clickTrueOver == true || this.clickBegin == false) return
        egret.Tween.removeTweens(this)
        let nRight = this.checkFP(1)
        if(nRight){
            this.playF()
            
        }else{
            self._btn_f.source = RES.getRes("btn_err")
            egret.Tween.get(self._btn_f).wait(300).call(()=>{
                egret.Tween.removeTweens(self._btn_f)
                self._btn_f.source = RES.getRes("btn_pass3_f_up")
            })
            this.errF()
        }
    }

    private onBtnP(){
        let self = this
        if(this.clickTrueOver == true || this.clickBegin == false) return
        egret.Tween.removeTweens(this)
        let nRight = this.checkFP(0)
        if(nRight){
            this.playP()
            
        }else{
             
            self._btn_p.source = RES.getRes("btn_err")
            egret.Tween.get(self._btn_p).wait(300).call(()=>{
                egret.Tween.removeTweens(self._btn_p)
                self._btn_p.source = RES.getRes("btn_pass3_p_up")
            })
            this.errP()
        }
    }

    private clean(){
        this._note.stopAct()
        this.clickTrueOver = false
        this._timeNum = 0
    }

    public close(){
        this.clean()
        // UIPass3_0._ins = null
    }


    private _imgwt_f:eui.Image;
    private _imgwt_p:eui.Image;
    private _btn_f:eui.Image;
    private _btn_p:eui.Image;
    private _img_people_f:eui.Image;
    private _img_people_p:eui.Image;
    private _nod_f:eui.Image;
    private _nod_p:eui.Image;
    private _img_hand:eui.Image;
    private _img_qe:eui.Image;
    private _groupPlayF:eui.Group;
    private _groupPlayP:eui.Group;
    private _passLook:UIPass3look;
    private _btn_home:eui.Image;
    
    private _group_note:eui.Group;
    private _note:UINote
    private _notep:UINote
    private _notef:UINote
    private fplayTween:egret.tween.TweenGroup;
    private pplayTween:egret.tween.TweenGroup;

}

