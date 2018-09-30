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
var UIPass2GameOver = (function (_super) {
    __extends(UIPass2GameOver, _super);
    function UIPass2GameOver() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/ui/pass2/pass2GameOverSkin.exml";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onCreate, _this);
        return _this;
    }
    Object.defineProperty(UIPass2GameOver, "ins", {
        get: function () {
            if (this._ins == null) {
                this._ins = new UIPass2GameOver();
            }
            return this._ins;
        },
        enumerable: true,
        configurable: true
    });
    UIPass2GameOver.prototype.onCreate = function () {
        this.moneyTween.addEventListener('complete', this.onTweenGroupComplete, this);
    };
    UIPass2GameOver.prototype.refresh = function () {
        if (gamedata.ins.interruptNum < 3) {
        }
        else if (gamedata.ins.interruptNum < 6) {
            this._money2.visible = false;
            this._money5.visible = false;
        }
        else {
            this._money2.visible = false;
            this._money5.visible = false;
            this._money1.visible = false;
            this._money4.visible = false;
        }
        // ToolSound.ins.playMusic("xiaoZuoDUI_m4a")
        ToolSound.ins.playEffect("xingxinYX_m4a");
        this.moneyTween.play(0);
    };
    UIPass2GameOver.prototype.show = function () {
        MScene.ins.addpopScene(UIPass2GameOver.ins);
        this.refresh();
    };
    UIPass2GameOver.prototype.onTweenGroupComplete = function () {
        var self = this;
        ToolSound.ins.stopEffect();
        this.moneyTween.stop();
        // this.moneyTween.removeEventListener('complete', this.onTweenGroupComplete, this)
        var nStar = 3;
        if (gamedata.ins.interruptNum < 3) {
            nStar = 3;
        }
        else if (gamedata.ins.interruptNum < 6) {
            nStar = 2;
        }
        else {
            nStar = 1;
        }
        gamedata.ins.cleanInterruptNum(nStar);
        //当前结束时所在的关卡 0:第一关 1:第二关 2:第三关
        gamedata.ins.nowPass = 2;
        //第三关
        egret.Tween.get(self).wait(3000).call(function () {
            egret.Tween.removeTweens(self);
            UIPass3_0.ins.show();
        });
        // if(gamedata.ins.nowPass == 0){
        //     gamedata.ins.nowPass = 1
        //     UIPass2_0.ins.show()
        // }else{gamedata.ins.nowPass == 1}{
        //     gamedata.ins.nowPass = 2
        //     // UIPass2_0.ins.show()
        // }
    };
    UIPass2GameOver.prototype.clean = function () {
    };
    UIPass2GameOver.prototype.close = function () {
        this.clean();
        // UIPass2GameOver._ins = null
    };
    return UIPass2GameOver;
}(eui.Component));
__reflect(UIPass2GameOver.prototype, "UIPass2GameOver");
//# sourceMappingURL=UIPass2GameOver.js.map