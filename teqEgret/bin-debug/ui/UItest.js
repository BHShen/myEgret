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
var UItest = (function (_super) {
    __extends(UItest, _super);
    function UItest() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/ui/testSkin.exml";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onCreate, _this);
        return _this;
    }
    Object.defineProperty(UItest, "ins", {
        get: function () {
            if (this._ins == null) {
                this._ins = new UItest();
            }
            return this._ins;
        },
        enumerable: true,
        configurable: true
    });
    UItest.prototype.onCreate = function () {
    };
    UItest.prototype.show = function () {
        MScene.ins.addBottomScene(UItest.ins);
    };
    UItest.prototype.clean = function () {
    };
    UItest.prototype.close = function () {
        this.clean();
    };
    return UItest;
}(eui.Component));
__reflect(UItest.prototype, "UItest");
//# sourceMappingURL=UItest.js.map