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
var UIPass2look = (function (_super) {
    __extends(UIPass2look, _super);
    function UIPass2look() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/ui/pass2/pass2lookSkin.exml";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onCreate, _this);
        return _this;
    }
    UIPass2look.prototype.onCreate = function () {
    };
    UIPass2look.prototype.playAct = function () {
        this._act_qe.x = 552;
        this._act_qe.y = 165;
        this.jumpAct();
    };
    UIPass2look.prototype.jumpAct = function () {
        var self = this;
        egret.Tween.get(self._act_qe).wait(330).call(function () {
            egret.Tween.removeTweens(self._act_qe);
            self._act_qe.source = RES.getRes("act_qe1");
            self._act_qe.x = 552;
            self._act_qe.y = 135;
            self.standAct();
        });
    };
    UIPass2look.prototype.standAct = function () {
        var self = this;
        egret.Tween.get(self._act_qe).wait(330).call(function () {
            egret.Tween.removeTweens(self._act_qe);
            self._act_qe.source = RES.getRes("act_qe0");
            self._act_qe.x = 552;
            self._act_qe.y = 165;
            self.jumpAct();
        });
    };
    UIPass2look.prototype.GetOutScene = function () {
        var _this = this;
        ToolSound.ins.stopEffect();
        egret.Tween.get(this).wait(2000).to({ x: 1334 }, 1000).call(function () {
            egret.Tween.removeTweens(_this);
            ToolSound.ins.stopMusic();
        });
    };
    UIPass2look.prototype.clean = function () {
        egret.Tween.removeTweens(this);
        egret.Tween.removeTweens(this._act_qe);
    };
    UIPass2look.prototype.close = function () {
        this.clean();
    };
    return UIPass2look;
}(eui.Component));
__reflect(UIPass2look.prototype, "UIPass2look");
//# sourceMappingURL=UIPass2look.js.map