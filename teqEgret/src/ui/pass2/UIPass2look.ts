class UIPass2look extends eui.Component{

    constructor(){
        super()
        this.skinName = "resource/skins/ui/pass2/pass2lookSkin.exml"
        this.once(egret.Event.ADDED_TO_STAGE,this.onCreate,this)
    }

    private onCreate(): void {
        
    }

    public playAct(){
        this._act_qe.x = 552;
        this._act_qe.y = 165;
        this.jumpAct()
    }

    private jumpAct(){
        let self = this
        egret.Tween.get(self._act_qe).wait(330).call(()=>{
            egret.Tween.removeTweens(self._act_qe)
            self._act_qe.source = RES.getRes("act_qe1")
            self._act_qe.x = 552;
            self._act_qe.y = 135;
            self.standAct()
        })
    }

    private standAct(){
        let self = this
        egret.Tween.get(self._act_qe).wait(330).call(()=>{
            egret.Tween.removeTweens(self._act_qe)
            self._act_qe.source = RES.getRes("act_qe0")
            self._act_qe.x = 552;
            self._act_qe.y = 165;
            self.jumpAct()
        })
    }

    public GetOutScene(){
        ToolSound.ins.stopEffect()
        egret.Tween.get(this).wait(2000).to({x:1334},1000).call(()=>{
            egret.Tween.removeTweens(this)
            ToolSound.ins.stopMusic()
        })
    }

    private clean(){
        egret.Tween.removeTweens(this)
        egret.Tween.removeTweens(this._act_qe)
    }

    public close(){
        this.clean()
    }

    private _act_qe:eui.Image;
    private _group:eui.Group;
}