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
var UIPass3GameOver = (function (_super) {
    __extends(UIPass3GameOver, _super);
    function UIPass3GameOver() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/ui/pass2/pass2GameOverSkin.exml";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onCreate, _this);
        return _this;
    }
    Object.defineProperty(UIPass3GameOver, "ins", {
        get: function () {
            if (this._ins == null) {
                this._ins = new UIPass3GameOver();
            }
            return this._ins;
        },
        enumerable: true,
        configurable: true
    });
    UIPass3GameOver.prototype.onCreate = function () {
        this.moneyTween.addEventListener('complete', this.onTweenGroupComplete, this);
    };
    UIPass3GameOver.prototype.refresh = function () {
        this._money2.visible = true;
        this._money5.visible = true;
        this._money1.visible = true;
        this._money4.visible = true;
        this._money0.visible = true;
        this._money3.visible = true;
        var nStar = 3;
        if (gamedata.ins.interruptNum < 3) {
            nStar = 3;
        }
        else if (gamedata.ins.interruptNum < 7) {
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
    UIPass3GameOver.prototype.show = function () {
        MScene.ins.addpopScene(UIPass3GameOver.ins);
        this.refresh();
    };
    UIPass3GameOver.prototype.onTweenGroupComplete = function () {
        var self = this;
        ToolSound.ins.stopEffect();
        this.moneyTween.stop();
        // this.moneyTween.removeEventListener('complete', this.onTweenGroupComplete, this)
        var nStar = 3;
        //引导的2次  + 上正确的次数
        if (gamedata.ins.interruptNum >= 5) {
            nStar = 3;
        }
        else if (gamedata.ins.interruptNum >= 4) {
            nStar = 2;
        }
        else {
            nStar = 1;
        }
        gamedata.ins.cleanInterruptNum(nStar);
        //当前结束时所在的关卡 0:第一关 1:第二关 2:第三关
        gamedata.ins.nowPass = 3;
        //结束
        egret.Tween.get(self).wait(3000).call(function () {
            egret.Tween.removeTweens(self);
            UIGameOver1.ins.show();
        });
    };
    UIPass3GameOver.prototype.clean = function () {
    };
    UIPass3GameOver.prototype.close = function () {
        this.clean();
        // UIPass3GameOver._ins = null
    };
    return UIPass3GameOver;
}(eui.Component));
__reflect(UIPass3GameOver.prototype, "UIPass3GameOver");
//# sourceMappingURL=UIPass3GameOver.js.map