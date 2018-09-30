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
var UIPass3look = (function (_super) {
    __extends(UIPass3look, _super);
    function UIPass3look() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/ui/pass3/pass3lookSkin.exml";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onCreate, _this);
        return _this;
    }
    UIPass3look.prototype.onCreate = function () {
        this._act_qe.source = RES.getRes("act_pass3_qe0");
    };
    UIPass3look.prototype.playAct = function () {
        this.jumpAct();
    };
    UIPass3look.prototype.jumpAct = function () {
        var self = this;
        egret.Tween.get(self._act_qe).wait(500).call(function () {
            egret.Tween.removeTweens(self._act_qe);
            self._act_qe.source = RES.getRes("act_pass3_qe2");
            self.standAct();
        });
    };
    UIPass3look.prototype.standAct = function () {
        var self = this;
        egret.Tween.get(self._act_qe).wait(330).call(function () {
            egret.Tween.removeTweens(self._act_qe);
            self._act_qe.source = RES.getRes("act_pass3_qe1");
            self.jumpAct();
        });
    };
    UIPass3look.prototype.GetOutScene = function () {
        var _this = this;
        ToolSound.ins.stopEffect();
        var self = this;
        egret.Tween.get(this).wait(2000).to({ x: 1334 }, 1000).call(function () {
            egret.Tween.removeTweens(_this);
            self.beginGame();
        });
    };
    UIPass3look.prototype.beginGame = function () {
        var self = this;
        var callfun = function () {
            UIPass3_0.ins.begin();
        };
        ToolSound.ins.playMusic("pass3Begin_mp3", 1, callfun);
        egret.Tween.get(self).wait(4500).call(function () {
            UIPass3_0.ins.TipsExampleF();
        }).wait(3000).call(function () {
            UIPass3_0.ins.closeALL();
        }).wait(4500).call(function () {
            UIPass3_0.ins.TipsExampleP();
        }).wait(3000).call(function () {
            UIPass3_0.ins.closeALL();
            egret.Tween.removeTweens(self);
        });
        // egret.Tween.get(self).wait(7500).call(()=>{
        //     UIPass3_0.ins.closeALL()
        // })
        // egret.Tween.get(self).wait(12000).call(()=>{
        //     UIPass3_0.ins.TipsExampleP()
        // })
        // egret.Tween.get(self).wait(15000).call(()=>{
        //     UIPass3_0.ins.closeALL()
        //     egret.Tween.removeTweens(self)
        // })
    };
    UIPass3look.prototype.clean = function () {
        egret.Tween.removeTweens(this);
        egret.Tween.removeTweens(this._act_qe);
    };
    UIPass3look.prototype.close = function () {
        this.clean();
    };
    return UIPass3look;
}(eui.Component));
__reflect(UIPass3look.prototype, "UIPass3look");
//# sourceMappingURL=UIPass3look.js.map