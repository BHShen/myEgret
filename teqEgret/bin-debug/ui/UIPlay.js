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
var UIPlay = (function (_super) {
    __extends(UIPlay, _super);
    function UIPlay() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/ui/playSkin.exml";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onCreate, _this);
        return _this;
    }
    Object.defineProperty(UIPlay, "ins", {
        get: function () {
            if (this._ins == null) {
                this._ins = new UIPlay();
            }
            return this._ins;
        },
        enumerable: true,
        configurable: true
    });
    UIPlay.prototype.show = function () {
        MScene.ins.addBottomScene(UIPlay.ins);
        this.refresh();
    };
    UIPlay.prototype.onCreate = function () {
        this._group_play.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnPlay, this);
        this._btnTween.addEventListener('complete', this.onTweenGroupComplete, this);
        this.balloonTween.addEventListener('complete', this.onTweenGroupCompleteBalloon, this);
        RES.loadGroup("pass2");
        RES.loadGroup("pass3");
        RES.loadGroup("gameover");
    };
    UIPlay.prototype.refresh = function () {
        ToolSound.ins.stopEffect();
        ToolSound.ins.stopMusic();
        this._btnTween.play(0);
        this.balloonTween.play(0);
    };
    UIPlay.prototype.onTweenGroupComplete = function () {
        this._btnTween.play(0);
    };
    UIPlay.prototype.onTweenGroupCompleteBalloon = function () {
        this.balloonTween.play(0);
    };
    UIPlay.prototype.onBtnPlay = function () {
        // window["removeembed"]()
        ToolSound.ins.playMusic("miaoxieBG_m4a", 0);
        // 测试
        // UIPass2_0.ins.show()
        // UIPass1_0.ins.show()
        // UIPass1.ins.show()
        // UIPass1_2.ins.show()
        // UIPass2_1.ins.show()
        // UIPass2_1.ins.show()
        UIPass3_0.ins.show();
        // UIGameOver1.ins.show()
        // UIClosePass.ins.show()
        //正常开始
        // UIPass1_0.ins.show()
    };
    UIPlay.prototype.clean = function () {
        this._btnTween.stop();
        this.balloonTween.stop();
        // this._btnTween.removeEventListener('complete', this.onTweenGroupComplete, this)
    };
    UIPlay.prototype.close = function () {
        this.clean();
        // UIPlay._ins = null
    };
    return UIPlay;
}(eui.Component));
__reflect(UIPlay.prototype, "UIPlay");
//# sourceMappingURL=UIPlay.js.map