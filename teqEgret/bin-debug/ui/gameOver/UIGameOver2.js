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
var UIGameOver2 = (function (_super) {
    __extends(UIGameOver2, _super);
    function UIGameOver2() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/ui/gameOver/gameOver2Skin.exml";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onCreate, _this);
        return _this;
    }
    Object.defineProperty(UIGameOver2, "ins", {
        get: function () {
            if (this._ins == null) {
                this._ins = new UIGameOver2();
            }
            return this._ins;
        },
        enumerable: true,
        configurable: true
    });
    UIGameOver2.prototype.onCreate = function () {
        this._rePlay.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnRePlay, this);
    };
    UIGameOver2.prototype.refresh = function () {
        ToolSound.ins.playMusic("bgM_mp3");
        this._num.text = "X" + gamedata.ins.starNum;
    };
    UIGameOver2.prototype.show = function () {
        MScene.ins.addpopScene(UIGameOver2.ins);
        this.refresh();
    };
    UIGameOver2.prototype.onBtnRePlay = function () {
        UIPlay.ins.show();
    };
    UIGameOver2.prototype.clean = function () {
    };
    UIGameOver2.prototype.close = function () {
        this.clean();
        // UIGameOver2._ins = null
    };
    return UIGameOver2;
}(eui.Component));
__reflect(UIGameOver2.prototype, "UIGameOver2");
//# sourceMappingURL=UIGameOver2.js.map