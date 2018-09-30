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
var UIArrow = (function (_super) {
    __extends(UIArrow, _super);
    function UIArrow() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/ui/arrowsSKin.exml";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onCreate, _this);
        return _this;
    }
    UIArrow.prototype.onCreate = function () {
        this.arrowTween.addEventListener('complete', this.onTweenGroupComplete, this);
    };
    UIArrow.prototype.refresh = function () {
        this.arrowTween.play(0);
    };
    UIArrow.prototype.playAct = function () {
        this.arrowTween.play(0);
    };
    UIArrow.prototype.stopAct = function () {
        this.arrowTween.stop();
    };
    UIArrow.prototype.onTweenGroupComplete = function () {
        this.arrowTween.play(0);
    };
    UIArrow.prototype.clean = function () {
        this.arrowTween.stop();
        // this._btnTween.removeEventListener('complete', this.onTweenGroupComplete, this)
    };
    UIArrow.prototype.close = function () {
        this.clean();
        // UIPlay._ins = null
    };
    return UIArrow;
}(eui.Component));
__reflect(UIArrow.prototype, "UIArrow");
//# sourceMappingURL=UIArrow.js.map