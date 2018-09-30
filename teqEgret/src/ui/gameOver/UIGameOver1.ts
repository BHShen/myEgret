class UIGameOver1 extends eui.Component{

    constructor(){
        super()
        this.skinName = "resource/skins/ui/gameOver/gameOver1Skin.exml"
        this.once(egret.Event.ADDED_TO_STAGE,this.onCreate,this)
    }

    private static _ins:UIGameOver1
    public static get ins():UIGameOver1{
        if(this._ins == null){
            this._ins = new UIGameOver1()
        }
        return this._ins
    }

    private onCreate(): void {
        this.overTween.addEventListener('complete', this.onTweenGroupComplete, this);
    }


    private onTweenGroupComplete(){
        UIGameOver2.ins.show()
    }

    private ActplayBox(){
        let self = this
        self._img_box.x = 1087.5
        self._img_box.y = 0
        let callfun = function(){
            self.ActplayBoxEnd()        
        }
        egret.Tween.get(self._img_box).to({x:650,y:510},2000).call(callfun)
    }

    private ActplayBoxEnd(){
        egret.Tween.removeTweens(this._img_box)
        this.showItem()
    }

    private showItem(){
        this.showMoney()
    }

    private showMoney(){
        let self = this
        this._img_box.source = RES.getRes("img_pass2_box1")
        ToolSound.ins.playEffect("xingxinYX_m4a")
        let callfun = function(){
            self.showMoneyEnd()        
        }

        self._money.visible = true
        self._money.x = 676
        self._money.y = 514.5
        self._money.scaleX = 0.5
        self._money.scaleY = 0.5
        egret.Tween.get(self._money).to({x:480,y:239,scaleX:1,scaleY:1},1500).call(callfun)
    }

    private showMoneyEnd(){
        egret.Tween.removeTweens(this._money)
        this._num.visible = true
        this._num.text = "X" + gamedata.ins.starNum
        this.showP()
    }

    private showP(){
        let self = this
        let callfun = function(){
            self.showPEnd()        
        }
        self._img_p.visible = true
        self._img_p.x = 691
        self._img_p.y = 527
        self._img_p.scaleX = 0.5
        self._img_p.scaleY = 0.5
        egret.Tween.get(self._img_p).to({x:667,y:182.5,scaleX:1,scaleY:1},1500).call(callfun)

    }

    private showPEnd(){
        egret.Tween.removeTweens(this._img_p)
        this.showF()
    }

    private showF(){
        let self = this
        let callfun = function(){
            self.showFEnd()        
        }
        self._img_f.visible = true
        self._img_f.x = 691
        self._img_f.y = 527
        self._img_f.scaleX = 0.5
        self._img_f.scaleY = 0.5
        egret.Tween.get(self._img_f).to({x:931,y:171.5,scaleX:1,scaleY:1},1500).call(callfun)

    }

    private showFEnd(){
        egret.Tween.removeTweens(this._img_f)
        this.ALLShowEnd()
    }

    private ALLShowEnd(){
        this._img_box.visible = false
        this.overTween.play(0)
        
    }
    public refresh(){
        let self = this
        this._img_box.source = RES.getRes("img_pass2_box")
        this._img_box.x = 1087.5
        this._img_box.y = 0
        this._num.visible = false
        this._money.visible = false
        this._img_f.visible = false
        this._img_p.visible = false
        this._img_box.visible = true

        let callfun = function(){
            self.ActplayBox()
        }
        ToolSound.ins.playMusic("ALLGameOver_mp3",1,callfun)
        
    }

    public show(){
        MScene.ins.addpopScene(UIGameOver1.ins)
        this.refresh()
    }


    private clean(){
        
    }

    public close(){
        this.clean()
        // UIGameOver1._ins = null
    }


    private _img_box:eui.Image
    private _num:eui.Label
    private _money:eui.Image
    private _img_f:eui.Image
    private _img_p:eui.Image

    private overTween:egret.tween.TweenGroup;
}