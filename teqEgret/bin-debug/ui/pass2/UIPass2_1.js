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
var UIPass2_1 = (function (_super) {
    __extends(UIPass2_1, _super);
    function UIPass2_1() {
        var _this = _super.call(this) || this;
        /** f:1 p:0
         * 1.f    强音
            2.p   弱音
            3.f-p    先强音再弱音
            4.p-f   先弱音再强音
            5.f-p-f  强-弱-强
            6.f-f-p 强强弱
            7.p-p-f弱弱强
         */
        /** 大的关卡 */
        _this.passNum = 1;
        /** 小的关卡 */
        _this.passPassNum = 0;
        _this.arrPass = {
            pass1: [1],
            pass2: [0],
            pass3: [1, 0],
            pass4: [0, 1],
            pass5: [1, 0, 1],
            pass6: [1, 1, 0],
            pass7: [0, 0, 1],
        };
        /** 是否开始游戏 */
        _this.gameBegin = false;
        /** 提示 */
        _this.hint = false;
        _this.skinName = "resource/skins/ui/pass2/pass2_1Skin.exml";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onCreate, _this);
        return _this;
    }
    Object.defineProperty(UIPass2_1, "ins", {
        get: function () {
            if (this._ins == null) {
                this._ins = new UIPass2_1();
            }
            return this._ins;
        },
        enumerable: true,
        configurable: true
    });
    UIPass2_1.prototype.onBtnHome = function () {
        UIPlay.ins.show();
    };
    UIPass2_1.prototype.onCreate = function () {
        var self = this;
        self._img_f.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onBtnF, self);
        self._img_p.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onBtnP, self);
        self._group_btn_f.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onBtnF, self);
        self._group_btn_p.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onBtnP, self);
        self._btn_home.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnHome, this);
        self.createAct();
    };
    UIPass2_1.prototype.show = function () {
        ToolSound.ins.stopMusic();
        MScene.ins.addBottomScene(UIPass2_1.ins);
        this.playBearAct();
    };
    UIPass2_1.prototype.createAct = function () {
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
    UIPass2_1.prototype.PlayActF = function () {
        var self = this;
        this._img_f.visible = false;
        this._rightF.visible = true;
        this._mcF.gotoAndPlay("f", -1);
        egret.Tween.get(this._rightF).wait(1000).call(function () {
            self.StopActF();
        });
    };
    UIPass2_1.prototype.PlayActP = function () {
        var self = this;
        this._img_p.visible = false;
        this._rightP.visible = true;
        this._mcP.gotoAndPlay("p", -1);
        egret.Tween.get(this._rightP).wait(1000).call(function () {
            self.StopActP();
        });
    };
    UIPass2_1.prototype.StopActF = function () {
        this._img_f.visible = true;
        this._rightF.visible = false;
        this._mcF.stop();
    };
    UIPass2_1.prototype.StopActP = function () {
        this._img_p.visible = true;
        this._rightP.visible = false;
        this._mcF.stop();
    };
    /** 播放熊的动画  */
    UIPass2_1.prototype.playBearAct = function () {
        var nNowPassPassNum = 0;
        var self = this;
        this.StopActF();
        this.StopActP();
        this._img_guang_f.visible = false;
        this._img_guang_p.visible = false;
        egret.Tween.removeTweens(self._right0);
        if (this.arrPass["pass" + this.passNum] == null) {
            console.log("过关");
            UIPass2GameOver.ins.show();
            return;
        }
        self.gameBegin = false;
        var callFun3 = function () {
            if (self.arrPass["pass" + self.passNum][nNowPassPassNum] != null) {
                callFun1();
                return;
            }
            self._img_bear.source = RES.getRes("act_bear0");
            egret.Tween.removeTweens(self._img_bear);
            self.playBearActOver();
        };
        var callFun2 = function () {
            self._img_bear.source = RES.getRes("act_bear2");
            egret.Tween.removeTweens(self._img_bear);
            egret.Tween.get(self._img_bear).wait(330).call(callFun3);
            //播放音效
            // if(self.arrPass["pass" + self.passNum][self.passPassNum] == 1){
            if (self.arrPass["pass" + self.passNum][nNowPassPassNum] == 1) {
                ToolSound.ins.playEffect("pass2GuQiang_mp3");
            }
            else {
                ToolSound.ins.playEffect("pass2Guruo_mp3");
            }
            nNowPassPassNum = nNowPassPassNum + 1;
        };
        var callFun1 = function () {
            self._img_bear.source = RES.getRes("act_bear1");
            egret.Tween.removeTweens(self._img_bear);
            egret.Tween.get(self._img_bear).wait(330).call(callFun2);
        };
        egret.Tween.get(self._img_bear).wait(330).call(callFun1);
    };
    /** 熊的动画播放完毕  */
    UIPass2_1.prototype.playBearActOver = function () {
        var self = this;
        self.gameBegin = true;
        if (self.hint) {
            //提示
            var nPass = self.arrPass["pass" + self.passNum];
            if (nPass != null && nPass[self.passPassNum] != null) {
                var nPassPass = nPass[self.passPassNum];
                if (nPassPass == 1) {
                    //F 提示
                    this._img_guang_f.visible = true;
                    self.actFTween.play(0);
                }
                else {
                    //P 提示
                    this._img_guang_p.visible = true;
                    self.actPTween.play(0);
                }
            }
        }
        self.hint = true;
        // this.clickReload()
    };
    //答对了 调用下一个关卡
    UIPass2_1.prototype.clickNewPass = function () {
        var self = this;
        var callfun = function () {
            egret.Tween.removeTweens(self._right0);
            self.rePlayBearAct();
        };
        // egret.Tween.removeTweens(self._right0)
        egret.Tween.get(self._right0).wait(1000).call(callfun);
    };
    //答错了 调用下一个关卡
    UIPass2_1.prototype.clickReload = function () {
        var self = this;
        var callfun = function () {
            egret.Tween.removeTweens(self._right0);
            self.rePlayBearAct();
        };
        egret.Tween.removeTweens(self._right0);
        egret.Tween.get(self._right0).wait(5000).call(callfun);
    };
    UIPass2_1.prototype.rePlayBearAct = function () {
        this.passPassNum = 0;
        gamedata.ins.interruptNum = gamedata.ins.interruptNum + 1;
        this.playBearAct();
    };
    UIPass2_1.prototype.onBtnF = function () {
        this._img_guang_f.visible = false;
        this.actFTween.play(0);
        this.actFTween.stop();
        this.actFErrTween.play(0);
        this.actFErrTween.stop();
        if (this.gameBegin == false)
            return;
        var nPass = this.arrPass["pass" + this.passNum];
        if (nPass != null && nPass[this.passPassNum] != null) {
            var nPassPass = nPass[this.passPassNum];
            if (nPassPass == 1) {
                //正确
                if (nPass[this.passPassNum + 1] == null) {
                    this.passBarrier(this.passNum);
                    this.passNum = this.passNum + 1;
                    this.passPassNum = 0;
                }
                else {
                    this.passPassNum = this.passPassNum + 1;
                }
                // this.playBearAct()
                this.hint = false;
                //播放音效
                ToolSound.ins.playEffect("pass2GuQiang_mp3", 1);
                this.PlayActF();
                this.clickNewPass();
                console.log("right");
            }
            else {
                //错误
                //播放音效
                ToolSound.ins.playEffect("xuancuo_m4a");
                this.actFErrTween.play(0);
                this.clickReload();
                console.log("error");
            }
        }
        // this.clickReload()
    };
    UIPass2_1.prototype.onBtnP = function () {
        egret.Tween.removeTweens(self);
        this._img_guang_p.visible = false;
        this.actPTween.play(0);
        this.actPTween.stop();
        this.actPErrTween.play(0);
        this.actPErrTween.stop();
        if (this.gameBegin == false)
            return;
        var nPass = this.arrPass["pass" + this.passNum];
        if (nPass != null && nPass[this.passPassNum] != null) {
            var nPassPass = nPass[this.passPassNum];
            if (nPassPass == 0) {
                //正确
                if (nPass[this.passPassNum + 1] == null) {
                    this.passBarrier(this.passNum);
                    this.passNum = this.passNum + 1;
                    this.passPassNum = 0;
                }
                else {
                    this.passPassNum = this.passPassNum + 1;
                }
                // this.playBearAct()
                this.hint = false;
                //播放音效
                ToolSound.ins.playEffect("pass2Guruo_mp3", 1);
                this.PlayActP();
                console.log("right");
                this.clickNewPass();
            }
            else {
                //错误
                //播放音效
                ToolSound.ins.playEffect("xuancuo_m4a", 1);
                this.actPErrTween.play(0);
                console.log("error");
                this.clickReload();
            }
        }
        // this.clickReload()
    };
    /** 通过一个小关卡 */
    UIPass2_1.prototype.passBarrier = function (PassNum) {
        PassNum = PassNum - 1;
        if (this["_right" + PassNum] == null)
            return;
        var nStr = "img_read1";
        if (PassNum == 1 || PassNum == 3 || PassNum == 6) {
            nStr = "img_read2";
        }
        nStr = nStr + "_over";
        this["_right" + PassNum].source = RES.getRes(nStr);
    };
    UIPass2_1.prototype.clean = function () {
        this._img_guang_f.visible = false;
        this._img_guang_p.visible = false;
        egret.Tween.removeTweens(this);
        this.actFTween.play(0);
        this.actPTween.play(0);
        this.actFErrTween.play(0);
        this.actPErrTween.play(0);
        this.actFTween.stop();
        this.actPTween.stop();
        this.actFErrTween.stop();
        this.actPErrTween.stop();
        for (var key = 0; key < 7; key++) {
            var nStr = "img_read1";
            if (key == 1 || key == 3 || key == 6) {
                nStr = "img_read2";
            }
            this["_right" + key].source = RES.getRes(nStr);
        }
        /** 大的关卡 */
        this.passNum = 1;
        /** 小的关卡 */
        this.passPassNum = 0;
        this._img_bear.source = RES.getRes("act_bear0");
    };
    UIPass2_1.prototype.close = function () {
        this.clean();
        // UIPass2_1._ins = null
    };
    return UIPass2_1;
}(eui.Component));
__reflect(UIPass2_1.prototype, "UIPass2_1");
//# sourceMappingURL=UIPass2_1.js.map