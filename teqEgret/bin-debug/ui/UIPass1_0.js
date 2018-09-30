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
var UIPass1_0 = (function (_super) {
    __extends(UIPass1_0, _super);
    function UIPass1_0() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/ui/pass1_0Skin.exml";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onCreate, _this);
        return _this;
    }
    Object.defineProperty(UIPass1_0, "ins", {
        get: function () {
            if (this._ins == null) {
                this._ins = new UIPass1_0();
            }
            return this._ins;
        },
        enumerable: true,
        configurable: true
    });
    UIPass1_0.prototype.onCreate = function () {
        this.eyeTween.addEventListener('complete', this.onTweenGroupComplete, this);
        this.createAct();
    };
    UIPass1_0.prototype.show = function () {
        var self = this;
        MScene.ins.addBottomScene(UIPass1_0.ins);
        this._passlook.x = 0;
        this._passlook.y = 0;
        this._passlook.visible = true;
        this._passlook.GetOutScene();
        egret.Tween.get(self).wait(4000).call(function () {
            egret.Tween.removeTweens(self);
            self.playBeginSound();
        });
    };
    UIPass1_0.prototype.createAct = function () {
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
    UIPass1_0.prototype.PlayActF = function () {
        var self = this;
        this._group_f.visible = false;
        this._rightF.visible = true;
        this._mcF.gotoAndPlay("f", -1);
        egret.Tween.get(this._rightF).wait(1000).call(function () {
            self.StopActF();
        });
    };
    UIPass1_0.prototype.PlayActP = function () {
        var self = this;
        this._group_p.visible = false;
        this._rightP.visible = true;
        this._mcP.gotoAndPlay("p", -1);
        egret.Tween.get(this._rightP).wait(1000).call(function () {
            self.StopActP();
        });
    };
    UIPass1_0.prototype.StopActF = function () {
        this._group_f.visible = true;
        this._rightF.visible = false;
        this._mcF.stop();
    };
    UIPass1_0.prototype.StopActP = function () {
        this._group_p.visible = true;
        this._rightP.visible = false;
        this._mcF.stop();
    };
    UIPass1_0.prototype.onTweenGroupComplete = function () {
        this.eyeTween.play(0);
    };
    UIPass1_0.prototype.playBeginSound = function () {
        var self = this;
        var callfun = function () {
            self.eyeTween.stop();
            // ToolSound.ins.stopMusic()
            UIPass1.ins.show();
        };
        ToolSound.ins.playMusic("pass1Begin_mp3", 1, callfun);
        this.eyeTween.play(0);
        egret.Tween.get(this).wait(3500).call(function () {
            self.PlayActF();
        }).wait(1000).call(function () {
            self.StopActF();
        }).wait(1500).call(function () {
            self.PlayActP();
        }).wait(1000).call(function () {
            self.StopActP();
        });
    };
    UIPass1_0.prototype.clean = function () {
        egret.Tween.removeTweens(this);
    };
    UIPass1_0.prototype.close = function () {
        this.clean();
    };
    return UIPass1_0;
}(eui.Component));
__reflect(UIPass1_0.prototype, "UIPass1_0");
//# sourceMappingURL=UIPass1_0.js.map