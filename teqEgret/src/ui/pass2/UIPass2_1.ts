class UIPass2_1 extends eui.Component{
    /** f:1 p:0
     * 1.f    强音 
        2.p   弱音
        3.f-p    先强音再弱音
        4.p-f   先弱音再强音
        5.f-p-f  强-弱-强
        6.f-f-p 强强弱
        7.p-p-f弱弱强
     */
    /** 大的关卡 */
    private passNum:number = 1;
    /** 小的关卡 */
    private passPassNum:number = 0;
    private arrPass = {
        pass1:[1],//F
        pass2:[0],//P
        pass3:[1,0],//F-P
        pass4:[0,1],//P-F
        pass5:[1,0,1],//F-P-F
        pass6:[1,1,0],//F-F-P
        pass7:[0,0,1],//P-P-F
    }
    /** 是否开始游戏 */
    private gameBegin:boolean = false;
    /** 提示 */
    private hint:boolean = false;
    /** 动画F */
    private _mcF:egret.MovieClip
    /** 动画P */
    private _mcP:egret.MovieClip
    constructor(){
        super()
        this.skinName = "resource/skins/ui/pass2/pass2_1Skin.exml"
        this.once(egret.Event.ADDED_TO_STAGE,this.onCreate,this)
    }

    private static _ins:UIPass2_1
    public static get ins():UIPass2_1{
        if(this._ins == null){
            this._ins = new UIPass2_1()
        }
        return this._ins
    }

    private onBtnHome(){
        UIPlay.ins.show()
    }

    private onCreate(): void {
        let self = this
        self._img_f.addEventListener(egret.TouchEvent.TOUCH_TAP,self.onBtnF,self);
        self._img_p.addEventListener(egret.TouchEvent.TOUCH_TAP,self.onBtnP,self);
        self._group_btn_f.addEventListener(egret.TouchEvent.TOUCH_TAP,self.onBtnF,self);
        self._group_btn_p.addEventListener(egret.TouchEvent.TOUCH_TAP,self.onBtnP,self);
        self._btn_home.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnHome,this);
        self.createAct()
        
    }

    public show(){
        ToolSound.ins.stopMusic()
        MScene.ins.addBottomScene(UIPass2_1.ins)
        this.playBearAct()
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
        let self = this
        this._img_f.visible = false
        this._rightF.visible = true
        this._mcF.gotoAndPlay("f",-1)
        egret.Tween.get(this._rightF).wait(1000).call(()=>{
            self.StopActF()
        })
    }
    private PlayActP(){
        let self = this
        this._img_p.visible = false
        this._rightP.visible = true
        this._mcP.gotoAndPlay("p",-1)
        egret.Tween.get(this._rightP).wait(1000).call(()=>{
            self.StopActP()
        })
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

    /** 播放熊的动画  */
    private playBearAct(){
        let nNowPassPassNum = 0
        let self = this
        this.StopActF()
        this.StopActP()
        this._img_guang_f.visible = false
        this._img_guang_p.visible = false
        egret.Tween.removeTweens(self._right0)
        if(this.arrPass["pass" + this.passNum] == null){
            console.log("过关")
            UIPass2GameOver.ins.show()
            return
        }
        self.gameBegin = false
        let callFun3 = function(){
            if(self.arrPass["pass" + self.passNum][nNowPassPassNum] != null){
                callFun1()
                return
            }
            self._img_bear.source = RES.getRes("act_bear0")
            egret.Tween.removeTweens(self._img_bear)
            self.playBearActOver()
        }

        let callFun2 = function(){
            self._img_bear.source = RES.getRes("act_bear2")
            egret.Tween.removeTweens(self._img_bear)
            egret.Tween.get(self._img_bear).wait(330).call(callFun3)
            //播放音效
            // if(self.arrPass["pass" + self.passNum][self.passPassNum] == 1){
            if(self.arrPass["pass" + self.passNum][nNowPassPassNum] == 1){
                ToolSound.ins.playEffect("pass2GuQiang_mp3")
            }else{
                ToolSound.ins.playEffect("pass2Guruo_mp3")
            }
            nNowPassPassNum = nNowPassPassNum + 1
            
            
        }

        let callFun1 = function(){
            self._img_bear.source = RES.getRes("act_bear1")
            egret.Tween.removeTweens(self._img_bear)
            egret.Tween.get(self._img_bear).wait(330).call(callFun2)
        }
        egret.Tween.get(self._img_bear).wait(330).call(callFun1)
    }
    /** 熊的动画播放完毕  */
    private playBearActOver(){
        let self = this
        self.gameBegin = true
        if(self.hint){
            //提示
            let nPass = self.arrPass["pass" + self.passNum]
        
            if(nPass != null && nPass[self.passPassNum] != null ){
                let nPassPass = nPass[self.passPassNum] 
                if(nPassPass == 1){
                    //F 提示
                    this._img_guang_f.visible = true
                    self.actFTween.play(0)
                }else{
                    //P 提示
                    this._img_guang_p.visible = true
                    self.actPTween.play(0)
                }
            }
        }
        self.hint = true

        // this.clickReload()
    }
    //答对了 调用下一个关卡
    private clickNewPass(){
        let self = this
        let callfun = function(){
            egret.Tween.removeTweens(self._right0)
            self.rePlayBearAct()
        }
        // egret.Tween.removeTweens(self._right0)
        egret.Tween.get(self._right0).wait(1000).call(callfun)
    }
    //答错了 调用下一个关卡
    private clickReload(){
        let self = this
        let callfun = function(){
            egret.Tween.removeTweens(self._right0)
            self.rePlayBearAct()
        }
        egret.Tween.removeTweens(self._right0)
        egret.Tween.get(self._right0).wait(5000).call(callfun)
    }

    private rePlayBearAct(){
        this.passPassNum = 0
        gamedata.ins.interruptNum = gamedata.ins.interruptNum + 1
        this.playBearAct()
    }

    private onBtnF(){
        this._img_guang_f.visible = false
        this.actFTween.play(0)
        this.actFTween.stop()
        this.actFErrTween.play(0)
        this.actFErrTween.stop()
        if(this.gameBegin  == false) return
        let nPass = this.arrPass["pass" + this.passNum]
        
        if(nPass != null && nPass[this.passPassNum] != null ){
            let nPassPass = nPass[this.passPassNum] 
            if(nPassPass == 1){
                //正确
                if(nPass[this.passPassNum + 1] == null){
                    this.passBarrier(this.passNum)
                    this.passNum = this.passNum + 1
                    this.passPassNum = 0
                }else{
                    this.passPassNum = this.passPassNum + 1
                }

                // this.playBearAct()
                this.hint = false
                //播放音效
                ToolSound.ins.playEffect("pass2GuQiang_mp3",1)
                this.PlayActF()
                this.clickNewPass()
                console.log("right")
            }else{
                //错误
                //播放音效
                ToolSound.ins.playEffect("xuancuo_m4a",)
                this.actFErrTween.play(0)
                this.clickReload()
                console.log("error")
            }
        }

        // this.clickReload()
    }

    private onBtnP(){
        egret.Tween.removeTweens(self)
        this._img_guang_p.visible = false
        this.actPTween.play(0)
        this.actPTween.stop()
        this.actPErrTween.play(0)
        this.actPErrTween.stop()
        if(this.gameBegin == false) return
        let nPass = this.arrPass["pass" + this.passNum]
        
        if(nPass != null && nPass[this.passPassNum] != null ){
            let nPassPass = nPass[this.passPassNum] 
            if(nPassPass == 0){
                //正确
                if(nPass[this.passPassNum + 1] == null){
                    this.passBarrier(this.passNum)
                    this.passNum = this.passNum + 1
                    this.passPassNum = 0
                }else{
                    
                    this.passPassNum = this.passPassNum + 1
                }

                // this.playBearAct()
                this.hint = false
                
                //播放音效
                ToolSound.ins.playEffect("pass2Guruo_mp3",1)
                this.PlayActP()
                console.log("right")
                this.clickNewPass()
            }else{
                //错误
                //播放音效
                ToolSound.ins.playEffect("xuancuo_m4a",1)
                this.actPErrTween.play(0)
                console.log("error")
                this.clickReload()
            }
        }
        // this.clickReload()
    }
    /** 通过一个小关卡 */
    private passBarrier(PassNum){
        PassNum = PassNum - 1
        if(this["_right" + PassNum] == null) return;

        let nStr = "img_read1"
        if(PassNum == 1 || PassNum == 3 || PassNum == 6){
            nStr = "img_read2"
        }
        nStr = nStr + "_over"

        this["_right" + PassNum].source = RES.getRes(nStr)
    }
    private clean(){
        this._img_guang_f.visible = false
        this._img_guang_p.visible = false
        egret.Tween.removeTweens(this)
        this.actFTween.play(0)
        this.actPTween.play(0)
        this.actFErrTween.play(0)
        this.actPErrTween.play(0)
        this.actFTween.stop()
        this.actPTween.stop()
        this.actFErrTween.stop()
        this.actPErrTween.stop()

        for(let key = 0; key < 7; key++ ){
            let nStr = "img_read1"
            if(key == 1 || key == 3 || key == 6){
                nStr = "img_read2"
            }
            this["_right" + key].source = RES.getRes(nStr)
        }

        /** 大的关卡 */
        this.passNum = 1;
        /** 小的关卡 */
        this.passPassNum = 0;

        this._img_bear.source = RES.getRes("act_bear0")
    }

    public close(){
        this.clean()
        // UIPass2_1._ins = null
    }

    private _img_p:eui.Image
    private _img_f:eui.Image
    private _img_bear:eui.Image
    private _img_guang_f:eui.Image
    private _img_guang_p:eui.Image
    private _group_btn_f:eui.Group;    
    private _group_btn_p:eui.Group;
    private _rightF:eui.Group;    
    private _rightP:eui.Group;
    private _btn_home:eui.Image;

    private _right0:eui.Image
    private _right1:eui.Image
    private _right2:eui.Image
    private _right3:eui.Image
    private _right4:eui.Image
    private _right5:eui.Image
    private _right6:eui.Image

    private actFTween:egret.tween.TweenGroup;
    private actPTween:egret.tween.TweenGroup;
    private actFErrTween:egret.tween.TweenGroup;
    private actPErrTween:egret.tween.TweenGroup;
}