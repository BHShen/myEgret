class UItest extends eui.Component{

    constructor(){
        super()
        this.skinName = "resource/skins/ui/testSkin.exml"
        this.once(egret.Event.ADDED_TO_STAGE,this.onCreate,this)
    }

    private static _ins:UItest
    public static get ins():UItest{
        if(this._ins == null){
            this._ins = new UItest()
        }
        return this._ins
    }

    private onCreate(): void {
        
    }

    public show(){
        MScene.ins.addBottomScene(UItest.ins)
    }

    private clean(){
        
    }

    public close(){
        this.clean()
    }

}