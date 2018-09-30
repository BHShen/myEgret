class UIPass1_2 extends eui.Component{
    private pass1:number = 0;
    /** 记录点击位置的差值 */
    private offX = 0;
    private offY = 0;
    private playNum = 0;
    constructor(){
        super()
        this.skinName = "resource/skins/ui/pass1_2Skin.exml"
        this.once(egret.Event.ADDED_TO_STAGE,this.onCreate,this)
    }

    private static _ins:UIPass1_2
    public static get ins():UIPass1_2{
        if(this._ins == null){
            this._ins = new UIPass1_2()
        }
        return this._ins
    }

    public show(){
        MScene.ins.addBottomScene(UIPass1_2.ins)
        this.refresh()
    }

    private onBtnHome(){
        UIPlay.ins.show()
    }

    private onCreate(): void {
        this._btn_penguin.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.HandBegin,this);
        this._btn_penguin.addEventListener(egret.TouchEvent.TOUCH_END,this.HandEnd,this);
        this._btn_penguin.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.HandMove,this);

        this._group_btn.addEventListener(egret.TouchEvent.TOUCH_END,this.HandEnd,this);
        this._group_btn.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.HandMove,this);

        this._btn_home.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnHome,this);
        this.zzzTween.addEventListener('complete', this.onTweenGroupComplete, this);

    }

    public refresh(){
        this._btn_penguin.x = 841;
        this._btn_penguin.y = 226;
        this._img_bear.scaleX = 1
        ToolSound.ins.playEffect("pass1P_mp3",0)
        this.hideZImg(true)
        this.zzzTween.play(0)
        this.setArrowPoing()
    }

    private onTweenGroupComplete(){
        this.zzzTween.play(0)
    }

    private draw(x,y,mx,my,flag = false,sarcX = 0,sarcY = 0,back = false){
        let nLine = 53
        // if(flag) nLine = 50
        var shape:egret.Shape = new egret.Shape();
        shape.graphics.lineStyle(nLine,0xFFE650);
        // shape.graphics.beginFill(0xFFE650);
        shape.graphics.moveTo(x,y)
        if(flag){
            let arcX = sarcX, arcY = sarcY

            let diffX = x - arcX,
            diffY = y - arcY,
            radius = Math.abs(Math.sqrt(diffX*diffX + diffY*diffY)),
            startAngle = Math.atan2(my - arcY, mx - arcX),
            endAngle   = Math.atan2(diffY, diffX)
            //(962,200)
            shape.graphics.drawArc(arcX,arcY,radius,startAngle,endAngle,back)
        }else{
            shape.graphics.lineTo(mx,my)
        }
        
        shape.graphics.endFill();
        this._group_draw.addChild(shape);

        
    }

    

    private HandBegin(e:egret.TouchEvent){
        this._UIArrow.visible = false
        this._UIArrow.stopAct()
        this.offX = Math.abs(e.stageX - this._btn_penguin.x) 
        this.offY = Math.abs(e.stageY - this._btn_penguin.y) 
    }

    private PassOver(){
        let self = this
        egret.Tween.get(self).wait(4000).call(()=>{
            egret.Tween.removeTweens(self)
            UIClosePass.ins.show()
        })
    }

    private HandEnd(e:egret.TouchEvent){
        let self = this
        this.offX = 0
        this.offY = 0
        if(this.pass1 == 1 && this._btn_penguin.x <= 855 && this._btn_penguin.y >= 350){
            //过关
            this.draw(838,this._btn_penguin.y,this._btn_penguin.x,this._btn_penguin.y)
            this.hideZImg(false)
            this.zzzTween.stop()
            // ToolSound.ins.playEffect("xiaoZuoDUI_m4a")
            
            egret.Tween.get(self).wait(1500).call(()=>{
                egret.Tween.removeTweens(self)
                this._img_bear.scaleX = -1
                self._img_bear.source = RES.getRes("img_bear_1")
                this.PassOver()
            })
           
            return
        }
        if(this._btn_penguin.y > 510){

            this.draw(this._btn_penguin.x,525,this._btn_penguin.x,this._btn_penguin.y)
            this._btn_penguin.x = 841;
            this._btn_penguin.y = 226;
            this.pass1 = 1
        }
        gamedata.ins.interruptNum = gamedata.ins.interruptNum + 1
        this.setArrowPoing()
    }

    
    
    private HandMove(e:egret.TouchEvent){
        if(this.pass1 == 0){
            this.drawFirst(e)
        }else{
            this.drawSecond(e)
        }
            // this.drawSecond(e)
            
        
    }

    private setArrowPoing(){
        this._UIArrow.visible = true
        this._UIArrow.playAct()
        if(this.pass1 == 0){
            this._UIArrow.skewX = -90
            this._UIArrow.skewY = -90
            this._UIArrow.x = this._btn_penguin.x - 16
            this._UIArrow.y = this._btn_penguin.y + 57
            return
        }
        if(this.playNum == 0){
            this._UIArrow.skewX = 180
            this._UIArrow.skewY = 180
            this._UIArrow.x = this._btn_penguin.x + 84
            this._UIArrow.y = this._btn_penguin.y + 7

            
        }else if(this.playNum == 1){
            this._UIArrow.skewX = 225
            this._UIArrow.skewY = 225
            this._UIArrow.x = this._btn_penguin.x + 43.5
            this._UIArrow.y = this._btn_penguin.y + 49
        }else if(this.playNum == 2){
            this._UIArrow.skewX = -90
            this._UIArrow.skewY = -90
            this._UIArrow.x = this._btn_penguin.x - 10
            this._UIArrow.y = this._btn_penguin.y + 57
        }else if(this.playNum == 3){
            this._UIArrow.skewX = 0
            this._UIArrow.skewY = 0
            this._UIArrow.x = this._btn_penguin.x - 86
            this._UIArrow.y = this._btn_penguin.y - 22
        }else{
            this._UIArrow.skewX = 0
            this._UIArrow.skewY = 0
            this._UIArrow.x = this._btn_penguin.x - 86
            this._UIArrow.y = this._btn_penguin.y - 22
        }
        
    }
    
    //(841,226) (907,228) (957,270) (935,327) (915,340)(838,357)
    private drawSecond(e:egret.TouchEvent){
        let nOldX = this._btn_penguin.x
        let nOldY = this._btn_penguin.y
        let nNewX = e.stageX + this.offX 
        let nNewY = e.stageY + this.offY 
        let arcX = 830 , arcY = 352
        let flag = false
        let back = false 
        //y==y0+sqrt(r*r-(x-x0)*(x-x0))或y==y0-sqrt(r*r-(x-x0)*(x-x0))
        if(this.playNum <= 0 && (nNewX > 841 && nNewX < 907)){
            this.playNum = 0
            // 到点1 
            if(nNewX < nOldX){
                return
            }
            
            nNewY = nOldY + (nNewX - nOldX) * 0.03
            if(nNewY > this._btn_penguin.y){
                this._btn_penguin.y = nNewY
            }

            // this._label.text = "first nNewX = " + nNewX + "nNewY = " + nNewY;;
            console.log("first")
        }else if(this.playNum <= 1 && (nNewX > 907 && nNewX <= 957)){
            this.playNum = 1
            // 点2 
            if(nNewX < nOldX){
                return
            }
            
            nNewY = nOldY + (nNewX - nOldX) * 0.933
            if(nNewY > this._btn_penguin.y){
                this._btn_penguin.y = nNewY
            }
            // this._label.text = "second nNewX = " + nNewX + "nNewY = " + nNewY;;
            console.log("second")
        }else if(this.playNum >= 1 && this.playNum <= 2 && (nNewY >= 270 && nNewY < 327) ){
            this.playNum = 2
            // 点3
            if(nNewY < nOldY){
                return
            }
            this._btn_penguin.y = nNewY
            nNewX = nOldX - (nNewY - nOldY) * 0.146
            if(nNewX < nOldX) return
            // back = true
            // this._label.text = "three nNewX = " + nNewX + "nNewY = " + nNewY;;
            console.log("three")
        }else if(this.playNum >= 2 && this.playNum <= 3 && (nNewX > 915)){
            this.playNum = 3
            // 点4
            if(nNewX > nOldX){
                return
            }
            
            nNewY = nOldY + (nOldX - nNewX) * 0.55
            if(nNewY > this._btn_penguin.y){
                this._btn_penguin.y = nNewY
            }
            // this._label.text = "fore nNewX = " + nNewX + "nNewY = " + nNewY;;
            console.log("fore")
        }else if(this.playNum >= 3 && this.playNum <= 4 && (nNewX > 838)){
            this.playNum = 4
             // 点5
            if(nNewX > nOldX){
                return
            }
            
            nNewY = nOldY + (nOldX - nNewX) * 0.5
            if(nNewY > this._btn_penguin.y){
                this._btn_penguin.y = nNewY
            }
            // this._label.text = "five nNewX = " + nNewX + "nNewY = " + nNewY;
            console.log("five")

        }else{
            // this._label.text = "return nNewX = " + nNewX + "nNewY = " + nNewY;
            console.log("return this.playNum = " + this.playNum + " nNewX = " + nNewX + " nNewY = " + nNewY)
            return
        }
        if(nNewX > 957) nNewX = 957
        if(nNewX < 838) nNewX = 838
        this._btn_penguin.x = nNewX

        // this._btn_penguin.y = e.stageY + this.offY

        this.draw(this._btn_penguin.x,this._btn_penguin.y,nOldX,nOldY)
        this.offX = Math.abs(e.stageX - this._btn_penguin.x) 
        this.offY = Math.abs(e.stageY - this._btn_penguin.y)
    }


    // (841,226) 
    private drawFirst(e:egret.TouchEvent){
        let nOldX = this._btn_penguin.x
        let nOldY = this._btn_penguin.y
        let nNewX = e.stageX + this.offX 
        let nNewY = e.stageY + this.offY 
        if(nNewY >= 226 && nNewY < 525){
            this._btn_penguin.y = nNewY
            this.draw(this._btn_penguin.x,this._btn_penguin.y,nOldX,nOldY)
        }
        
    }

    private hideZImg(falg:boolean = false){
        if(falg == true){
            this._group_z.x = 331
        }else{
            this._group_z.x = -331
        }
        
    }

    private clean(){
        this.zzzTween.stop()
        ToolSound.ins.stopEffect()
        this.pass1 = 0
        this.offX = 0
        this.offY = 0
    }

    public close(){
        this.clean()
       
    }

    private _UIArrow:UIArrow;
    private zzzTween:egret.tween.TweenGroup;
    // private _label:eui.Label;
    private _group_z:eui.Group;
    private _img_bear:eui.Image;
    private _btn_penguin:eui.Image
    private _group_draw:eui.Group;
    private _group_btn:eui.Group;
    private _btn_home:eui.Image;
}