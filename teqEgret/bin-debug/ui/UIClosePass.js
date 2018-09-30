var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var UIClosePass = (function (_super) {
    __extends(UIClosePass, _super);
    function UIClosePass() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/ui/closePassSkin.exml";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onCreate, _this);
        return _this;
    }
    Object.defineProperty(UIClosePass, "ins", {
        get: function () {
            if (this._ins == null) {
                this._ins = new UIClosePass();
            }
            return this._ins;
        },
        enumerable: true,
        configurable: true
    });
    UIClosePass.prototype.onCreate = function () {
        this.moneyTween.addEventListener('complete', this.onTweenGroupComplete, this);
    };
    UIClosePass.prototype.refresh = function () {
        this._money2.visible = true;
        this._money5.visible = true;
        this._money1.visible = true;
        this._money4.visible = true;
        this._money0.visible = true;
        this._money3.visible = true;
        // ToolSound.ins.stopMusic()
        if (gamedata.ins.interruptNum > 4) {
            this._money2.visible = false;
            this._money5.visible = false;
        }
        // ToolSound.ins.playMusic("xiaoZuoDUI_m4a")
        ToolSound.ins.playEffect("xingxinYX_m4a");
        this.moneyTween.play(0);
    };
    UIClosePass.prototype.show = function () {
        MScene.ins.addpopScene(UIClosePass.ins);
        this.refresh();
    };
    UIClosePass.prototype.onTweenGroupComplete = function () {
        var self = this;
        ToolSound.ins.stopEffect();
        this.moneyTween.stop();
        // this.moneyTween.removeEventListener('complete', this.onTweenGroupComplete, this)
        var nStar = 3;
        if (gamedata.ins.interruptNum > 4) {
            nStar = nStar - 1;
        }
        gamedata.ins.cleanInterruptNum(nStar);
        //当前结束时所在的关卡 0:第一关 1:第二关 2:第三关
        gamedata.ins.nowPass = 1;
        egret.Tween.get(self).wait(3000).call(function () {
            egret.Tween.removeTweens(self);
            UIPass2_0.ins.show();
        });
        // if(gamedata.ins.nowPass == 0){
        // }else{gamedata.ins.nowPass == 1}{
        //     gamedata.ins.nowPass = 2
        //     // UIPass2_0.ins.show()
        // }
    };
    UIClosePass.prototype.clean = function () {
    };
    UIClosePass.prototype.close = function () {
        this.clean();
    };
    return UIClosePass;
}(eui.Component));
__reflect(UIClosePass.prototype, "UIClosePass");
//# sourceMappingURL=UIClosePass.js.map