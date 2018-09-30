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
var UINote = (function (_super) {
    __extends(UINote, _super);
    function UINote() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/ui/pass3/noteSkin.exml";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onCreate, _this);
        return _this;
    }
    UINote.prototype.onCreate = function () {
        this.noteTween.addEventListener('complete', this.onTweenGroupComplete, this);
    };
    UINote.prototype.playAct = function () {
        this.noteTween.play(0);
    };
    UINote.prototype.stopAct = function () {
        this.noteTween.stop();
    };
    UINote.prototype.onTweenGroupComplete = function () {
        this.noteTween.play(0);
    };
    UINote.prototype.clean = function () {
    };
    UINote.prototype.close = function () {
        this.clean();
    };
    return UINote;
}(eui.Component));
__reflect(UINote.prototype, "UINote");
//# sourceMappingURL=UINote.js.map