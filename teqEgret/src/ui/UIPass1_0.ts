class UIPass1_0 extends eui.Component{
    /** 动画F */
    private _mcF:egret.MovieClip
    /** 动画P */
    private _mcP:egret.MovieClip
    constructor(){
        super()
        this.skinName = "resource/skins/ui/pass1_0Skin.exml"
        this.once(egret.Event.ADDED_TO_STAGE,this.onCreate,this)
    }

    private static _ins:UIPass1_0
    public static get ins():UIPass1_0{
        if(this._ins == null){
            this._ins = new UIPass1_0()
        }
        return this._ins
    }

    private onCreate(): void {
        this.eyeTween.addEventListener('complete', this.onTweenGroupComplete, this);
        this.createAct()
    }

    public show(){
        let self = this
        MScene.ins.addBottomScene(UIPass1_0.ins)
        
        this._passlook.x = 0
        this._passlook.y = 0
        this._passlook.visible = true
        this._passlook.GetOutScene()
        
        egret.Tween.get(self).wait(4000).call(()=>{
            egret.Tween.removeTweens(self)
            self.playBeginSound()
            
        })
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
        this._group_f.visible = false
        this._rightF.visible = true
        this._mcF.gotoAndPlay("f",-1)
        egret.Tween.get(this._rightF).wait(1000).call(()=>{
            self.StopActF()
        })
    }
    private PlayActP(){
        let self = this
        this._group_p.visible = false
        this._rightP.visible = true
        this._mcP.gotoAndPlay("p",-1)
        egret.Tween.get(this._rightP).wait(1000).call(()=>{
            self.StopActP()
        })
    }

    private StopActF(){
        this._group_f.visible = true
        this._rightF.visible = false
        this._mcF.stop()
    }

    private StopActP(){
        this._group_p.visible = true
        this._rightP.visible = false
        this._mcF.stop()
    }

    private onTweenGroupComplete(){
        this.eyeTween.play(0)
    }

    private playBeginSound(){
        let self = this
        let callfun = function(){
            self.eyeTween.stop()
            // ToolSound.ins.stopMusic()
            UIPass1.ins.show()
        }
        ToolSound.ins.playMusic("pass1Begin_mp3",1,callfun)
        this.eyeTween.play(0)

        egret.Tween.get(this).wait(3500).call(()=>{
            self.PlayActF()
        }).wait(1000).call(()=>{
            self.StopActF()
        }).wait(1500).call(()=>{
            self.PlayActP()
        }).wait(1000).call(()=>{
            self.StopActP()
        })
    }

   
    private clean(){
        egret.Tween.removeTweens(this)
    }

    public close(){
        this.clean()

    }

    private eyeTween:egret.tween.TweenGroup
    private _img_eye:eui.Image
    private _img_eye1:eui.Image
    private _img_f:eui.Image
    private _img_p:eui.Image
    private _group_f:eui.Group
    private _group_p:eui.Group
    private _rightF:eui.Group
    private _rightP:eui.Group
    private _passlook:UIPass1Look
}