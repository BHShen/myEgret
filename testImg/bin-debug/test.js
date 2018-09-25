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
var UITest = (function (_super) {
    __extends(UITest, _super);
    function UITest() {
        var _this = _super.call(this) || this;
        _this.alllnum = 0;
        _this.skinName = "resource/eui_skins/testSkin.exml";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onCreate, _this);
        return _this;
    }
    Object.defineProperty(UITest, "ins", {
        get: function () {
            if (this._ins == null) {
                this._ins = new UITest();
            }
            return this._ins;
        },
        enumerable: true,
        configurable: true
    });
    UITest.prototype.onCreate = function () {
        this._createImg100.addEventListener(egret.TouchEvent.TOUCH_TAP, this.create100, this);
        this._createImg500.addEventListener(egret.TouchEvent.TOUCH_TAP, this.create500, this);
        this._createImg1000.addEventListener(egret.TouchEvent.TOUCH_TAP, this.create1000, this);
        this._createImg5000.addEventListener(egret.TouchEvent.TOUCH_TAP, this.create5000, this);
        this._createImg10000.addEventListener(egret.TouchEvent.TOUCH_TAP, this.create10000, this);
    };
    UITest.prototype.create100 = function () {
        this.createImage(100);
    };
    UITest.prototype.create500 = function () {
        this.createImage(500);
    };
    UITest.prototype.create1000 = function () {
        this.createImage(1000);
    };
    UITest.prototype.create5000 = function () {
        this.createImage(5000);
    };
    UITest.prototype.create10000 = function () {
        this.createImage(10000);
    };
    UITest.prototype.createImage = function (num) {
        for (var key = 0; key < num; key++) {
            var nUIImg = new UIImg();
            nUIImg.y = (key % 1100);
            Main.sGroup.addChild(nUIImg);
        }
        this.alllnum = this.alllnum + num;
        this._num.text = "当前数量:" + this.alllnum;
    };
    return UITest;
}(eui.Component));
__reflect(UITest.prototype, "UITest");
//# sourceMappingURL=test.js.map