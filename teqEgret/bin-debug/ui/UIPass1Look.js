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
var UIPass1Look = (function (_super) {
    __extends(UIPass1Look, _super);
    function UIPass1Look() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/ui/pass1lookSkin.exml";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onCreate, _this);
        return _this;
    }
    UIPass1Look.prototype.onCreate = function () {
    };
    UIPass1Look.prototype.GetOutScene = function () {
        var _this = this;
        ToolSound.ins.stopEffect();
        egret.Tween.get(this).wait(2000).to({ x: -1334 }, 1000).call(function () {
            egret.Tween.removeTweens(_this);
        });
    };
    UIPass1Look.prototype.clean = function () {
    };
    UIPass1Look.prototype.close = function () {
        this.clean();
    };
    return UIPass1Look;
}(eui.Component));
__reflect(UIPass1Look.prototype, "UIPass1Look");
//# sourceMappingURL=UIPass1Look.js.map