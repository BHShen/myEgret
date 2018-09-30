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
var UIPass2_0 = (function (_super) {
    __extends(UIPass2_0, _super);
    function UIPass2_0() {
        var _this = _super.call(this) || this;
        _this.passNum = 0;
        _this.gameBegin = false;
        _this.skinName = "resource/skins/ui/pass2/pass2_0Skin.exml";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onCreate, _this);
        return _this;
    }
    Object.defineProperty(UIPass2_0, "ins", {
        get: function () {
            if (this._ins == null) {
                this._ins = new UIPass2_0();
            }
            return this._ins;
        },
        enumerable: true,
        configurable: true
    });
    UIPass2_0.prototype.onCreate = function () {
        var self = this;
        self.createAct();
        self.actFTween.addEventListener('complete', this.onTweenGroupComplete_F, this);
        self.actPTween.addEventListener('complete', this.onTweenGroupComplete_P, this);
        self._img_f.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onBtnF, self);
        self._img_p.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onBtnP, self);
    };
    UIPass2_0.prototype.show = function () {
        MScene.ins.addBottomScene(UIPass2_0.ins);
        this.refresh();
    };
    UIPass2_0.prototype.refresh = function () {
        var self = this;
        this.StopActF();
        this.StopActP();
        self._img_guang_f.visible = false;
        self._img_guang_p.visible = false;
        self.gameBegin = false;
        self._passLook.x = 0;
        self._passLook.y = 0;
        self._passLook.visible = true;
        self._passLook.playAct();
        self._passLook.GetOutScene();
        self._img_bear.source = RES.getRes("act_bear0");
        ToolSound.ins.stopEffect();
        egret.Tween.get(self).wait(2000).call(function () {
            egret.Tween.removeTweens(self);
            self.playBearAct();
        });
    };
    /** 播放熊的动画  */
    /** soundSelect 0 表示弱 1 表示强 */
    UIPass2_0.prototype.playBearAct = function (soundSelect) {
        if (soundSelect === void 0) { soundSelect = 1; }
        var self = this;
        this.StopActF();
        this.StopActP();
        var callFun3 = function () {
            self._img_bear.source = RES.getRes("act_bear0");
            egret.Tween.removeTweens(self._img_bear);
            self.playBearActOver(soundSelect);
        };
        var callFun2 = function () {
            self._img_bear.source = RES.getRes("act_bear2");
            egret.Tween.removeTweens(self._img_bear);
            egret.Tween.get(self._img_bear).wait(330).call(callFun3);
            //播放音效
            if (soundSelect == 1) {
                ToolSound.ins.playEffect("pass2GuQiang_mp3");
            }
            else {
                ToolSound.ins.playEffect("pass2Guruo_mp3");
            }
        };
        var callFun1 = function () {
            self._img_bear.source = RES.getRes("act_bear1");
            egret.Tween.removeTweens(self._img_bear);
            egret.Tween.get(self._img_bear).wait(330).call(callFun2);
        };
        egret.Tween.get(self._img_bear).wait(330).call(callFun1);
    };
    /** 熊的动画播放完毕  */
    UIPass2_0.prototype.playBearActOver = function (soundSelect) {
        if (soundSelect === void 0) { soundSelect = 1; }
        this.gameBegin = true;
        if (soundSelect == 1) {
            this._img_guang_f.visible = true;
            this.actFTween.play(0);
        }
        else {
            this._img_guang_p.visible = true;
            this.actPTween.play(0);
        }
    };
    UIPass2_0.prototype.createAct = function () {
        if (this._mcF != null)
            return;
        var data = RES.getRes("actPass2_json");
        var txtr = RES.getRes("actPass2_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        this._mcF = new egret.MovieClip(mcFactory.generateMovieClipData("act"));
        this._mcP = new egret.MovieClip(mcFactory.generateMovieClipData("act"));
        this._rightF.addChild(this._mcF);
        this._rightP.addChild(this._mcP);
        this._rightF.visible = false;
        this._rightP.visible = false;
    };
    UIPass2_0.prototype.PlayActF = function () {
        this._img_f.visible = false;
        this._rightF.visible = true;
        this._mcF.gotoAndPlay("f", -1);
    };
    UIPass2_0.prototype.PlayActP = function () {
        this._img_p.visible = false;
        this._rightP.visible = true;
        this._mcP.gotoAndPlay("p", -1);
    };
    UIPass2_0.prototype.StopActF = function () {
        this._img_f.visible = true;
        this._rightF.visible = false;
        this._mcF.stop();
    };
    UIPass2_0.prototype.StopActP = function () {
        this._img_p.visible = true;
        this._rightP.visible = false;
        this._mcF.stop();
    };
    UIPass2_0.prototype.onTweenGroupComplete_F = function () {
        this.actFTween.play(0);
    };
    UIPass2_0.prototype.onTweenGroupComplete_P = function () {
        this.actPTween.play(0);
    };
    UIPass2_0.prototype.onBtnF = function () {
        var self = this;
        if (this.gameBegin == false)
            return;
        if (this.passNum == 0) {
            //正确
            this.gameBegin = false;
            this._img_guang_f.visible = false;
            this.passNum = 1;
            this.errFTween.play(0);
            this.errFTween.stop();
            this.actFTween.play(0);
            this.PlayActF();
            ToolSound.ins.playEffect("pass2GuQiang_mp3");
            egret.Tween.get(self).wait(1000).call(function () {
                egret.Tween.removeTweens(self);
                self.playBearAct(0);
            });
        }
        else if (this.passNum == 1) {
            //错误
            this.errFTween.play(0);
            ToolSound.ins.playEffect("xuancuo_m4a");
        }
    };
    UIPass2_0.prototype.onBtnP = function () {
        var self = this;
        if (this.gameBegin == false)
            return;
        if (this.passNum == 0) {
            //错误
            this.errPTween.play(0);
            ToolSound.ins.playEffect("xuancuo_m4a");
        }
        else if (this.passNum == 1) {
            //正确
            //播放音效
            this.gameBegin = false;
            this._img_guang_p.visible = false;
            ToolSound.ins.playEffect("pass2Guruo_mp3");
            this.PlayActP();
            this.errPTween.play(0);
            this.errPTween.stop();
            this.actPTween.play(0);
            egret.Tween.get(self).wait(2000).call(function () {
                egret.Tween.removeTweens(self);
                UIPass2_1.ins.show();
            });
        }
    };
    UIPass2_0.prototype.clean = function () {
        this._img_guang_f.visible = false;
        this._img_guang_p.visible = false;
        this.actFTween.play(0);
        this.actFTween.stop();
        this.actPTween.play(0);
        this.actPTween.stop();
        this.errFTween.play(0);
        this.errFTween.stop();
        this.errPTween.play(0);
        this.errPTween.stop();
        // this.actFTween.removeEventListener('complete', this.onTweenGroupComplete_F, this)
        egret.Tween.removeTweens(this);
        egret.Tween.removeTweens(this._img_bear);
    };
    UIPass2_0.prototype.close = function () {
        this.clean();
        // UIPass2_0._ins = null
    };
    return UIPass2_0;
}(eui.Component));
__reflect(UIPass2_0.prototype, "UIPass2_0");
//# sourceMappingURL=UIPass2_0.js.map