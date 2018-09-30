class UIPass1Look extends eui.Component{

    constructor(){
        super()
        this.skinName = "resource/skins/ui/pass1lookSkin.exml"
        this.once(egret.Event.ADDED_TO_STAGE,this.onCreate,this)
    }

    private onCreate(): void {

    }

    public GetOutScene(){
        ToolSound.ins.stopEffect()
        egret.Tween.get(this).wait(2000).to({x:-1334},1000).call(()=>{
            egret.Tween.removeTweens(this)
        })
    }

    private clean(){
    }

    public close(){
        this.clean()
    }

    private _group:eui.Group;
}