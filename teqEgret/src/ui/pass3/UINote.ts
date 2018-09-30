class UINote extends eui.Component{

    constructor(){
        super()
        this.skinName = "resource/skins/ui/pass3/noteSkin.exml"
        this.once(egret.Event.ADDED_TO_STAGE,this.onCreate,this)
    }

    private onCreate(): void {
        this.noteTween.addEventListener('complete', this.onTweenGroupComplete, this);
    }

    public playAct(){
        this.noteTween.play(0)
    }

    public stopAct(){
        this.noteTween.stop()
    }

    private onTweenGroupComplete(){
        this.noteTween.play(0)
    }

    private clean(){

    }

    public close(){
        this.clean()
        
    }

    private noteTween:egret.tween.TweenGroup;
}