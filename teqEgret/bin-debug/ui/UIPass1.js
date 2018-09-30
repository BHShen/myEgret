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
var UIPass1 = (function (_super) {
    __extends(UIPass1, _super);
    function UIPass1() {
        var _this = _super.call(this) || this;
        /** 步骤 */
        _this.stepNum = 0;
        _this.pass1 = 0;
        /** 记录点击位置的差值 */
        _this.offX = 0;
        _this.offY = 0;
        _this.skinName = "resource/skins/ui/pass1Skin.exml";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onCreate, _this);
        return _this;
    }
    Object.defineProperty(UIPass1, "ins", {
        get: function () {
            if (this._ins == null) {
                this._ins = new UIPass1();
            }
            return this._ins;
        },
        enumerable: true,
        configurable: true
    });
    UIPass1.prototype.onBtnHome = function () {
        UIPlay.ins.show();
    };
    UIPass1.prototype.onCreate = function () {
        this._btn_penguin.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.HandBegin, this, true);
        this._btn_penguin.addEventListener(egret.TouchEvent.TOUCH_END, this.HandEnd, this, true);
        this._btn_penguin.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.HandMove, this, true);
        // this._group_btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.lossEventTOUCH_BEGIN,this);
        this._group_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.HandEnd, this);
        this._group_btn.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.HandMove, this);
        this.zzzTween.addEventListener('complete', this.onTweenGroupComplete, this);
        this._btn_home.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnHome, this);
    };
    UIPass1.prototype.show = function () {
        MScene.ins.addBottomScene(UIPass1.ins);
        this.refresh();
    };
    UIPass1.prototype.refresh = function () {
        var _this = this;
        this._btn_penguin.x = 1008;
        this._btn_penguin.y = 204;
        egret.Tween.get(this).wait(500).call(function () {
            egret.Tween.removeTweens(_this);
            ToolSound.ins.playMusic("miaoxieBG_m4a", 0);
        });
        ToolSound.ins.playEffect("pass1F_mp3", 0);
        this.hideZImg(true);
        this.zzzTween.play(0);
        this.setArrowPoing();
        this._img_bear.scaleX = 1;
    };
    UIPass1.prototype.onTweenGroupComplete = function () {
        this.zzzTween.play(0);
    };
    UIPass1.prototype.draw = function (x, y, mx, my, flag) {
        if (flag === void 0) { flag = false; }
        var nLine = 52;
        if (flag)
            nLine = 50;
        var shape = new egret.Shape();
        shape.graphics.lineStyle(nLine, 0xFFE650);
        // shape.graphics.beginFill(0xFFE650);
        shape.graphics.moveTo(x, y);
        if (flag) {
            var arcX = 1500, arcY = 800;
            var diffX = x - arcX, diffY = y - arcY, radius = Math.abs(Math.sqrt(diffX * diffX + diffY * diffY)), startAngle = Math.atan2(diffY, diffX), endAngle = Math.atan2(my - arcY, mx - arcX);
            //(962,200)
            shape.graphics.drawArc(arcX, arcY, radius, startAngle, endAngle);
        }
        else {
            shape.graphics.lineTo(mx, my);
        }
        shape.graphics.endFill();
        this._group_draw.addChild(shape);
        return;
    };
    UIPass1.prototype.HandBegin = function (e) {
        this._UIArrow.visible = false;
        this._UIArrow.stopAct();
        this.offX = Math.abs(e.stageX - this._btn_penguin.x);
        this.offY = Math.abs(e.stageY - this._btn_penguin.y);
    };
    UIPass1.prototype.HandEnd = function (e) {
        var self = this;
        this.offX = 0;
        this.offY = 0;
        if (this._btn_penguin.y > 590) {
            this.draw(this._btn_penguin.x, 610, this._btn_penguin.x, this._btn_penguin.y);
            this._btn_penguin.x = 869;
            this._btn_penguin.y = 330;
            this.pass1 = 1;
        }
        if (this.pass1 == 1 && this._btn_penguin.x >= 975) {
            //过关
            this.hideZImg(false);
            this.zzzTween.stop();
            this.draw(1005, this._btn_penguin.y, this._btn_penguin.x, this._btn_penguin.y);
            this._btn_penguin.x = 1005;
            egret.Tween.get(self).wait(1500).call(function () {
                egret.Tween.removeTweens(self);
                self._img_bear.scaleX = -1;
                self._img_bear.source = RES.getRes("img_bear_1");
                self.PassOver();
            });
            // ToolSound.ins.playEffect("xiaoZuoDUI_m4a",1)
            return;
        }
        this.setArrowPoing();
    };
    UIPass1.prototype.setArrowPoing = function () {
        this._UIArrow.visible = true;
        this._UIArrow.playAct();
        if (this.pass1 == 1) {
            this._UIArrow.skewX = 180;
            this._UIArrow.skewY = 180;
            this._UIArrow.x = this._btn_penguin.x + 84;
            this._UIArrow.y = this._btn_penguin.y + 7;
            return;
        }
        if (this.stepNum == 0) {
            this._UIArrow.skewX = 0;
            this._UIArrow.skewY = 0;
            this._UIArrow.x = this._btn_penguin.x - 86;
            this._UIArrow.y = this._btn_penguin.y - 22;
        }
        else if (this.stepNum == 1) {
            this._UIArrow.skewX = -45;
            this._UIArrow.skewY = -45;
            this._UIArrow.x = this._btn_penguin.x - 86;
            this._UIArrow.y = this._btn_penguin.y + 47;
        }
        else {
            this._UIArrow.skewX = -90;
            this._UIArrow.skewY = -90;
            this._UIArrow.x = this._btn_penguin.x - 10;
            this._UIArrow.y = this._btn_penguin.y + 57;
        }
    };
    UIPass1.prototype.PassOver = function () {
        egret.Tween.get(self).wait(4000).call(function () {
            egret.Tween.removeTweens(self);
            UIPass1_2.ins.show();
        });
    };
    UIPass1.prototype.HandMove = function (e) {
        if (this.pass1 == 0) {
            this.drawFirst(e);
        }
        else {
            this.drawSecond(e);
        }
    };
    UIPass1.prototype.drawSecond = function (e) {
        var nOldX = this._btn_penguin.x;
        var nOldY = this._btn_penguin.y;
        var nNewX = e.stageX + this.offX;
        var nNewY = e.stageY + this.offY;
        if (nNewX > 869 && nNewX < 1005) {
            if (nNewX <= nOldX)
                return;
            this._btn_penguin.x = nNewX;
            this.draw(this._btn_penguin.x, this._btn_penguin.y, nOldX, nOldY);
        }
        return;
    };
    // (1008,204) (962,200) (926,238) (923,615)
    UIPass1.prototype.drawFirst = function (e) {
        var nOldX = this._btn_penguin.x;
        var nOldY = this._btn_penguin.y;
        var nNewX = e.stageX + this.offX;
        var nNewY = e.stageY + this.offY;
        var flag = false;
        if (this.stepNum <= 2 && nNewY < 610) {
            this.stepNum = 2;
            //直线到结尾
            if (nNewY > this._btn_penguin.y && nNewY < 610) {
                this._btn_penguin.y = nNewY;
            }
            console.log("stepNum2");
            nNewX = 923;
        }
        else if (this.stepNum <= 1 && (nNewX > 923 && nNewX <= 962)) {
            this.stepNum = 1;
            nNewY = nOldY - (nNewX - nOldX) * 0.3;
            if (nNewY > this._btn_penguin.y) {
                this._btn_penguin.y = nNewY;
            }
            console.log("stepNum1");
        }
        else if (this.stepNum <= 0 && (nNewX > 962 && nNewX <= 1008)) {
            //直线到点1
            if (nNewX > nOldX) {
                nNewX = nOldX;
            }
            else {
                nNewY = nOldY - (nNewX - nOldX) * 0.087;
                if (nNewY < this._btn_penguin.y) {
                    this._btn_penguin.y = nNewY;
                }
            }
            console.log("stepNum0");
        }
        else {
            console.log("return this.stepNum = " + this.stepNum + " nNewX = " + nNewX + " nNewY = " + nNewY);
            return;
        }
        this._btn_penguin.x = nNewX;
        // this._btn_penguin.y = e.stageY + this.offY
        this.draw(this._btn_penguin.x, this._btn_penguin.y, nOldX, nOldY, flag);
        return;
    };
    UIPass1.prototype.hideZImg = function (falg) {
        if (falg === void 0) { falg = false; }
        if (falg == true) {
            this._group_z.x = 331;
        }
        else {
            this._group_z.x = -331;
        }
    };
    UIPass1.prototype.clean = function () {
        this.hideZImg();
        this.zzzTween.stop();
        ToolSound.ins.stopEffect();
        this.pass1 = 0;
        this.offX = 0;
        this.offY = 0;
        this._img_bear.source = RES.getRes("img_bear_2");
        this._group_draw.removeChildren();
    };
    UIPass1.prototype.close = function () {
        this.clean();
    };
    return UIPass1;
}(eui.Component));
__reflect(UIPass1.prototype, "UIPass1");
//# sourceMappingURL=UIPass1.js.map