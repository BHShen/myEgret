class UIPass3look extends eui.Component{

    constructor(){
        super()
        this.skinName = "resource/skins/ui/pass3/pass3lookSkin.exml"
        this.once(egret.Event.ADDED_TO_STAGE,this.onCreate,this)
    }

    private onCreate(): void {
        
        this._act_qe.source = RES.getRes("act_pass3_qe0")
    }

    public playAct(){
        this.jumpAct()
    }

    private jumpAct(){
        let self = this
        egret.Tween.get(self._act_qe).wait(500).call(()=>{
            egret.Tween.removeTweens(self._act_qe)
            self._act_qe.source = RES.getRes("act_pass3_qe2")
            self.standAct()
        })
    }

    private standAct(){
        let self = this
        egret.Tween.get(self._act_qe).wait(330).call(()=>{
            egret.Tween.removeTweens(self._act_qe)
            self._act_qe.source = RES.getRes("act_pass3_qe1")
            self.jumpAct()
        })
    }

    public GetOutScene(){
        ToolSound.ins.stopEffect()
        let self = this
        egret.Tween.get(this).wait(2000).to({x:1334},1000).call(()=>{
            egret.Tween.removeTweens(this)
            self.beginGame()
            
        })
    }

    private beginGame(){
        let self = this
        let callfun = function(){
            UIPass3_0.ins.begin()
        }
        ToolSound.ins.playMusic("pass3Begin_mp3",1,callfun)

        egret.Tween.get(self).wait(4500).call(()=>{
            UIPass3_0.ins.TipsExampleF()
        }).wait(3000).call(()=>{
            UIPass3_0.ins.closeALL()
        }).wait(4500).call(()=>{
            UIPass3_0.ins.TipsExampleP()
        }).wait(3000).call(()=>{
            UIPass3_0.ins.closeALL()
            egret.Tween.removeTweens(self)
        })
        // egret.Tween.get(self).wait(7500).call(()=>{
        //     UIPass3_0.ins.closeALL()
        // })
        // egret.Tween.get(self).wait(12000).call(()=>{
        //     UIPass3_0.ins.TipsExampleP()
        // })
        // egret.Tween.get(self).wait(15000).call(()=>{
        //     UIPass3_0.ins.closeALL()
        //     egret.Tween.removeTweens(self)
        // })
        
    }


    private clean(){
        egret.Tween.removeTweens(this)
        egret.Tween.removeTweens(this._act_qe)
    }

    public close(){
        this.clean()
        
    }

    private _act_qe:eui.Image;
}