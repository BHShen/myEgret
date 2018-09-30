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
var UIGameOver1 = (function (_super) {
    __extends(UIGameOver1, _super);
    function UIGameOver1() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/ui/gameOver/gameOver1Skin.exml";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onCreate, _this);
        return _this;
    }
    Object.defineProperty(UIGameOver1, "ins", {
        get: function () {
            if (this._ins == null) {
                this._ins = new UIGameOver1();
            }
            return this._ins;
        },
        enumerable: true,
        configurable: true
    });
    UIGameOver1.prototype.onCreate = function () {
        this.overTween.addEventListener('complete', this.onTweenGroupComplete, this);
    };
    UIGameOver1.prototype.onTweenGroupComplete = function () {
        UIGameOver2.ins.show();
    };
    UIGameOver1.prototype.ActplayBox = function () {
        var self = this;
        self._img_box.x = 1087.5;
        self._img_box.y = 0;
        var callfun = function () {
            self.ActplayBoxEnd();
        };
        egret.Tween.get(self._img_box).to({ x: 650, y: 510 }, 2000).call(callfun);
    };
    UIGameOver1.prototype.ActplayBoxEnd = function () {
        egret.Tween.removeTweens(this._img_box);
        this.showItem();
    };
    UIGameOver1.prototype.showItem = function () {
        this.showMoney();
    };
    UIGameOver1.prototype.showMoney = function () {
        var self = this;
        this._img_box.source = RES.getRes("img_pass2_box1");
        ToolSound.ins.playEffect("xingxinYX_m4a");
        var callfun = function () {
            self.showMoneyEnd();
        };
        self._money.visible = true;
        self._money.x = 676;
        self._money.y = 514.5;
        self._money.scaleX = 0.5;
        self._money.scaleY = 0.5;
        egret.Tween.get(self._money).to({ x: 480, y: 239, scaleX: 1, scaleY: 1 }, 1500).call(callfun);
    };
    UIGameOver1.prototype.showMoneyEnd = function () {
        egret.Tween.removeTweens(this._money);
        this._num.visible = true;
        this._num.text = "X" + gamedata.ins.starNum;
        this.showP();
    };
    UIGameOver1.prototype.showP = function () {
        var self = this;
        var callfun = function () {
            self.showPEnd();
        };
        self._img_p.visible = true;
        self._img_p.x = 691;
        self._img_p.y = 527;
        self._img_p.scaleX = 0.5;
        self._img_p.scaleY = 0.5;
        egret.Tween.get(self._img_p).to({ x: 667, y: 182.5, scaleX: 1, scaleY: 1 }, 1500).call(callfun);
    };
    UIGameOver1.prototype.showPEnd = function () {
        egret.Tween.removeTweens(this._img_p);
        this.showF();
    };
    UIGameOver1.prototype.showF = function () {
        var self = this;
        var callfun = function () {
            self.showFEnd();
        };
        self._img_f.visible = true;
        self._img_f.x = 691;
        self._img_f.y = 527;
        self._img_f.scaleX = 0.5;
        self._img_f.scaleY = 0.5;
        egret.Tween.get(self._img_f).to({ x: 931, y: 171.5, scaleX: 1, scaleY: 1 }, 1500).call(callfun);
    };
    UIGameOver1.prototype.showFEnd = function () {
        egret.Tween.removeTweens(this._img_f);
        this.ALLShowEnd();
    };
    UIGameOver1.prototype.ALLShowEnd = function () {
        this._img_box.visible = false;
        this.overTween.play(0);
    };
    UIGameOver1.prototype.refresh = function () {
        var self = this;
        this._img_box.source = RES.getRes("img_pass2_box");
        this._img_box.x = 1087.5;
        this._img_box.y = 0;
        this._num.visible = false;
        this._money.visible = false;
        this._img_f.visible = false;
        this._img_p.visible = false;
        this._img_box.visible = true;
        var callfun = function () {
            self.ActplayBox();
        };
        ToolSound.ins.playMusic("ALLGameOver_mp3", 1, callfun);
    };
    UIGameOver1.prototype.show = function () {
        MScene.ins.addpopScene(UIGameOver1.ins);
        this.refresh();
    };
    UIGameOver1.prototype.clean = function () {
    };
    UIGameOver1.prototype.close = function () {
        this.clean();
        // UIGameOver1._ins = null
    };
    return UIGameOver1;
}(eui.Component));
__reflect(UIGameOver1.prototype, "UIGameOver1");
//# sourceMappingURL=UIGameOver1.js.map