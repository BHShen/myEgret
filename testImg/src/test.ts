class UITest extends eui.Component{

    constructor(){
        super();
        this.skinName = "resource/eui_skins/testSkin.exml"
        this.once(egret.Event.ADDED_TO_STAGE,this.onCreate,this);
    }

    private static _ins:UITest
    public static get ins(){
        if(this._ins == null){
            this._ins = new UITest()
        }
        return this._ins
    }

    private onCreate(){
        this._createImg100.addEventListener(egret.TouchEvent.TOUCH_TAP,this.create100,this)
        this._createImg500.addEventListener(egret.TouchEvent.TOUCH_TAP,this.create500,this)
        this._createImg1000.addEventListener(egret.TouchEvent.TOUCH_TAP,this.create1000,this)
        this._createImg5000.addEventListener(egret.TouchEvent.TOUCH_TAP,this.create5000,this)
        this._createImg10000.addEventListener(egret.TouchEvent.TOUCH_TAP,this.create10000,this)
    }

    private create100(){
        this.createImage(100)
    }

    private create500(){
        this.createImage(500)
    }

    private create1000(){
        this.createImage(1000)
    }

    private create5000(){
        this.createImage(5000)
    }

    private create10000(){
        this.createImage(10000)
    }
    private alllnum = 0
    private createImage(num){
        for(let key = 0; key < num ; key++ ){
            let nUIImg = new UIImg()
            nUIImg.y = (key % 1100)
            Main.sGroup.addChild(nUIImg)
        }
        this.alllnum = this.alllnum + num
        this._num.text = "当前数量:" + this.alllnum
    }

    private _createImg100:eui.Button
    private _createImg500:eui.Button
    private _createImg1000:eui.Button
    private _createImg5000:eui.Button
    private _createImg10000:eui.Button
    private _num:eui.Label

}