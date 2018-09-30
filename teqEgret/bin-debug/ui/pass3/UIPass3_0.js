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
var UIPass3_0 = (function (_super) {
    __extends(UIPass3_0, _super);
    function UIPass3_0() {
        var _this = _super.call(this) || this;
        /** 是否能点击 */
        _this.clickBegin = false;
        /** 点击正确结束 */
        _this.clickTrueOver = false;
        /** 时间计数 */
        _this._timeNum = 0;
        /** 引导次数 */
        _this._pleaseNum = 0;
        _this.skinName = "resource/skins/ui/pass3/pass3_0Skin.exml";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onCreate, _this);
        return _this;
    }
    Object.defineProperty(UIPass3_0, "ins", {
        get: function () {
            if (this._ins == null) {
                this._ins = new UIPass3_0();
            }
            return this._ins;
        },
        enumerable: true,
        configurable: true
    });
    UIPass3_0.prototype.onBtnHome = function () {
        UIPlay.ins.show();
    };
    UIPass3_0.prototype.onCreate = function () {
        var self = this;
        this._btn_home.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnHome, this);
        this._timer = new egret.Timer(1000, 0);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this._btn_f.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnF, this);
        this._btn_p.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnP, this);
        this.createAct();
    };
    UIPass3_0.prototype.show = function () {
        MScene.ins.addBottomScene(UIPass3_0.ins);
        this.refresh();
    };
    UIPass3_0.prototype.refresh = function () {
        var self = this;
        this.clickBegin = false;
        self._passLook.x = 0;
        self._passLook.y = 0;
        self._group_note.visible = false;
        self._passLook.visible = true;
        self._passLook.playAct();
        self._passLook.GetOutScene();
        self.stopNdeActF();
        self.stopNdeActP();
    };
    UIPass3_0.prototype.timerFunc = function (event) {
        egret.log("timerFunc count" + event.target.currentCount);
        this._timeNum = this._timeNum + 1;
        // console.log("this._timeNum = " + this._timeNum)
        this.ChangeFP(this._timeNum);
    };
    UIPass3_0.prototype.ChangeFP = function (timeNum) {
        var nType = -1;
        if (this._timeNum == 0) {
            nType = -1;
            // this.readyF()
            // this.readyP()
        }
        else if (this._timeNum == 8 || this._timeNum == 17 || this._timeNum == 26) {
            this.readyF();
            this.readyP();
            if (this._pleaseNum < 2) {
                egret.Tween.get(this).wait(800).call(this.TipsF);
            }
        }
        else if (this._timeNum == 13 || this._timeNum == 22 || this._timeNum == 39) {
            this.readyF();
            this.readyP();
            if (this._pleaseNum < 2) {
                egret.Tween.get(this).wait(800).call(this.TipsP);
            }
        }
    };
    UIPass3_0.prototype.closeALL = function () {
        var self = this;
        self.closeTipsP();
        self.readyP();
        self.closeTipsF();
        self.readyF();
    };
    UIPass3_0.prototype.TipsExampleF = function () {
        var self = this;
        self.closeTipsP();
        self.TipsF();
        self.readyP();
        egret.Tween.get(self).wait(500).call(function () {
            egret.Tween.removeTweens(self);
            self.playF();
        });
    };
    UIPass3_0.prototype.TipsExampleP = function () {
        var self = this;
        self.closeTipsF();
        self.TipsP();
        self.readyF();
        egret.Tween.get(self).wait(500).call(function () {
            egret.Tween.removeTweens(self);
            self.playP();
        });
    };
    UIPass3_0.prototype.playNodActF = function () {
        var self = this;
        self._img_people_f.visible = false;
        self._nod_f.visible = true;
        egret.Tween.get(self._nod_f, { loop: true }).wait(500).call(function () {
            self._nod_f.source = RES.getRes("img_f_nod2");
        }).wait(500).call(function () {
            self._nod_f.source = RES.getRes("img_f_nod1");
        });
    };
    UIPass3_0.prototype.playNodActP = function () {
        var self = this;
        self._img_people_p.visible = false;
        self._nod_p.visible = true;
        egret.Tween.get(self._nod_f, { loop: true }).wait(500).call(function () {
            self._nod_p.source = RES.getRes("img_p_nod2");
        }).wait(500).call(function () {
            self._nod_p.source = RES.getRes("img_p_nod1");
        });
    };
    UIPass3_0.prototype.stopNdeActF = function () {
        this._img_people_f.visible = true;
        this._nod_f.visible = false;
        egret.Tween.removeTweens(this._nod_f);
    };
    UIPass3_0.prototype.stopNdeActP = function () {
        this._img_people_p.visible = true;
        this._nod_p.visible = false;
        egret.Tween.removeTweens(this._nod_p);
    };
    UIPass3_0.prototype.createAct = function () {
        if (this._mcF != null)
            return;
        var data = RES.getRes("act_json");
        var txtr = RES.getRes("act_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        this._mcF = new egret.MovieClip(mcFactory.generateMovieClipData("act"));
        this._mcP = new egret.MovieClip(mcFactory.generateMovieClipData("act"));
        this._groupPlayF.addChild(this._mcF);
        this._groupPlayP.addChild(this._mcP);
        this._groupPlayF.visible = false;
        this._groupPlayP.visible = false;
    };
    UIPass3_0.prototype.PlayActF = function () {
        this._img_people_f.visible = false;
        this._imgwt_f.source = RES.getRes("img_wtF1");
        this._groupPlayF.visible = true;
        this._mcF.gotoAndPlay("f", -1);
        this._notef.playAct();
    };
    UIPass3_0.prototype.PlayActP = function () {
        this._img_people_p.visible = false;
        this._imgwt_p.source = RES.getRes("img_wtP1");
        this._groupPlayP.visible = true;
        this._mcP.gotoAndPlay("p", -1);
        this._notep.playAct();
    };
    UIPass3_0.prototype.StopActF = function () {
        this._groupPlayF.visible = false;
        this._mcF.stop();
        this._notef.stopAct();
    };
    UIPass3_0.prototype.StopActP = function () {
        this._groupPlayP.visible = false;
        this._mcF.stop();
        this._notep.stopAct();
    };
    UIPass3_0.prototype.TipsF = function () {
        this._pleaseNum += 1;
        egret.Tween.removeTweens(this);
        this._img_hand.visible = true;
        this.fplayTween.play(0);
    };
    UIPass3_0.prototype.TipsP = function () {
        this._pleaseNum += 1;
        egret.Tween.removeTweens(this);
        this._img_hand.visible = true;
        this.pplayTween.play(0);
    };
    UIPass3_0.prototype.closeTipsF = function () {
        this._img_hand.visible = false;
        this.fplayTween.stop();
    };
    UIPass3_0.prototype.closeTipsP = function () {
        this._img_hand.visible = false;
        this.pplayTween.stop();
    };
    UIPass3_0.prototype.readyF = function () {
        egret.Tween.removeTweens(this._btn_f);
        this.StopActF();
        this.stopNdeActF();
        this._img_people_f.visible = true;
        this._img_people_f.source = RES.getRes("img_pass3_f_ready");
        this._imgwt_f.source = RES.getRes("img_wtF0");
        this._btn_f.source = RES.getRes("btn_pass3_f_up");
        this.clickTrueOver = false;
    };
    UIPass3_0.prototype.readyP = function () {
        egret.Tween.removeTweens(this._btn_p);
        this.StopActP();
        this.stopNdeActP();
        this._img_people_p.visible = true;
        this._img_people_p.source = RES.getRes("img_pass3_p_ready");
        this._imgwt_p.source = RES.getRes("img_wtP0");
        this._btn_p.source = RES.getRes("btn_pass3_p_up");
        this.clickTrueOver = false;
    };
    UIPass3_0.prototype.playF = function () {
        gamedata.ins.interruptNum = gamedata.ins.interruptNum + 1;
        // this._img_people_f.source = RES.getRes("img_pass3_f_play")
        this._btn_f.source = RES.getRes("btn_pass3_f_down");
        this.readyP();
        this.closeTipsF();
        this.PlayActF();
    };
    UIPass3_0.prototype.playP = function () {
        gamedata.ins.interruptNum = gamedata.ins.interruptNum + 1;
        // this._img_people_p.source = RES.getRes("img_pass3_p_play")
        this._btn_p.source = RES.getRes("btn_pass3_p_down");
        this.readyF();
        this.closeTipsP();
        this.PlayActP();
    };
    UIPass3_0.prototype.errF = function () {
        this._img_people_f.source = RES.getRes("img_pass3_f_err");
    };
    UIPass3_0.prototype.errP = function () {
        this._img_people_p.source = RES.getRes("img_pass3_p_err");
    };
    /** 判断音符 f:1 p:0 */
    UIPass3_0.prototype.checkFP = function (num) {
        /**
         * 0 - 7 准备
         * 8 - 12 f
         * 13 - 16 p
         * 17 - 21 f
         * 22 - 25 p
         * 26 - 38 f
         * 39 - end p
         */
        var nType = -1;
        if (this._timeNum >= 0 && this._timeNum < 8) {
            nType = -1;
        }
        else if ((this._timeNum >= 8 && this._timeNum < 12) || (this._timeNum >= 17 && this._timeNum < 22) || (this._timeNum >= 26 && this._timeNum < 38)) {
            nType = 1;
        }
        else if ((this._timeNum >= 13 && this._timeNum < 17) || (this._timeNum >= 22 && this._timeNum < 26) || (this._timeNum >= 39)) {
            nType = 0;
        }
        return nType == num;
    };
    UIPass3_0.prototype.begin = function () {
        var self = this;
        var callFun = function () {
            self.musicEnd();
        };
        this.clickBegin = true;
        this._pleaseNum = 0;
        // ToolSound.ins.stopMusic()
        egret.Tween.get(self).wait(500).call(function () {
            ToolSound.ins.playMusic("pass3Music_mp3", 1, callFun);
            self._group_note.visible = true;
            self.playNodActF();
            self.playNodActP();
            self._note.playAct();
            self._timer.start();
        });
    };
    UIPass3_0.prototype.musicEnd = function () {
        this._timeNum = 0;
        this.readyF();
        this.readyP();
        this._timer.stop();
        this._group_note.visible = false;
        this._note.stopAct();
        this.gameOver();
    };
    UIPass3_0.prototype.gameOver = function () {
        UIPass3GameOver.ins.show();
    };
    UIPass3_0.prototype.onBtnF = function () {
        var self = this;
        if (this.clickTrueOver == true || this.clickBegin == false)
            return;
        egret.Tween.removeTweens(this);
        var nRight = this.checkFP(1);
        if (nRight) {
            this.playF();
        }
        else {
            self._btn_f.source = RES.getRes("btn_err");
            egret.Tween.get(self._btn_f).wait(300).call(function () {
                egret.Tween.removeTweens(self._btn_f);
                self._btn_f.source = RES.getRes("btn_pass3_f_up");
            });
            this.errF();
        }
    };
    UIPass3_0.prototype.onBtnP = function () {
        var self = this;
        if (this.clickTrueOver == true || this.clickBegin == false)
            return;
        egret.Tween.removeTweens(this);
        var nRight = this.checkFP(0);
        if (nRight) {
            this.playP();
        }
        else {
            self._btn_p.source = RES.getRes("btn_err");
            egret.Tween.get(self._btn_p).wait(300).call(function () {
                egret.Tween.removeTweens(self._btn_p);
                self._btn_p.source = RES.getRes("btn_pass3_p_up");
            });
            this.errP();
        }
    };
    UIPass3_0.prototype.clean = function () {
        this._note.stopAct();
        this.clickTrueOver = false;
        this._timeNum = 0;
    };
    UIPass3_0.prototype.close = function () {
        this.clean();
        // UIPass3_0._ins = null
    };
    return UIPass3_0;
}(eui.Component));
__reflect(UIPass3_0.prototype, "UIPass3_0");
//# sourceMappingURL=UIPass3_0.js.map