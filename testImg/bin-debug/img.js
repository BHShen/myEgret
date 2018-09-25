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
var UIImg = (function (_super) {
    __extends(UIImg, _super);
    function UIImg() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/imgSkin.exml";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onCreate, _this);
        return _this;
    }
    UIImg.prototype.onCreate = function () {
        var timer = new egret.Timer(1000, 0);
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        timer.start();
    };
    UIImg.prototype.timerFunc = function (event) {
        if (this.x >= 750) {
            this.x = 0;
        }
        this.x += 1;
    };
    return UIImg;
}(eui.Component));
__reflect(UIImg.prototype, "UIImg");
//# sourceMappingURL=img.js.map