class UIArrow extends eui.Component{

    constructor(){
        super()
        this.skinName = "resource/skins/ui/arrowsSKin.exml"
        this.once(egret.Event.ADDED_TO_STAGE,this.onCreate,this)
    }



    private onCreate(): void {
        this.arrowTween.addEventListener('complete', this.onTweenGroupComplete, this);

        
    }

    private refresh(){
        this.arrowTween.play(0)
    }

    public playAct(){
        this.arrowTween.play(0)
    }
    public stopAct(){
        this.arrowTween.stop()
    }

    private onTweenGroupComplete(){
        this.arrowTween.play(0)
    }


  

    private clean(){
        this.arrowTween.stop()
        // this._btnTween.removeEventListener('complete', this.onTweenGroupComplete, this)
    }

    public close(){
        this.clean()
        // UIPlay._ins = null
    }

    private arrowTween:egret.tween.TweenGroup;
}