/**
 * Create SHB
 * Timer 2017-09-15
 * 音乐播放
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ToolSound = (function () {
    function ToolSound() {
        /** 音乐开关 */
        this._musicOpen = false;
        /** 上一个播放的音乐名字 */
        this._lastMusicName = "";
        /** 当前播放的音乐名字 */
        this._nowMusicName = "";
        /** 播放音乐的节点 */
        this._musicChannel = null;
        /** 音乐播放完的回调 */
        this._musicCallBackFun = null;
        /** 音效开关 */
        this._effectOpen = false;
        /** 上一个播放的音效名字 */
        this._lastEffectName = "";
        /** 当前播放的音效名字 */
        this._nowEffectName = "";
        /** 播放音效的节点 */
        this._effectChannel = null;
        /** 音效播放完的回调 */
        this._effectCallBackFun = null;
    }
    Object.defineProperty(ToolSound, "ins", {
        get: function () {
            if (ToolSound._ins == null) {
                ToolSound._ins = new ToolSound();
            }
            return ToolSound._ins;
        },
        enumerable: true,
        configurable: true
    });
    /** 播放音乐 */
    ToolSound.prototype.playMusic = function (res, loop, callback) {
        if (res === void 0) { res = null; }
        if (loop === void 0) { loop = 0; }
        if (callback === void 0) { callback = null; }
        this._lastMusicName = this._nowMusicName;
        this._nowMusicName = res;
        this._musicCallBackFun = callback;
        //是否关闭音乐
        if (this._musicOpen) {
            return;
        }
        this.stopMusic();
        //播放声音
        var music = RES.getRes(this._nowMusicName);
        if (music) {
            music.type = egret.Sound.MUSIC;
            this._musicChannel = music.play(0, loop);
            this._musicChannel.volume = ToolSound.musicVolume;
            this._musicChannel.addEventListener(egret.Event.SOUND_COMPLETE, this.onMusicComplete, this);
        }
    };
    /** 声音播放结束 **/
    ToolSound.prototype.onMusicComplete = function (e) {
        if (this._musicCallBackFun != null) {
            this._musicCallBackFun();
        }
        //停止声音
        this.stopMusic();
    };
    /** 停止音乐 */
    ToolSound.prototype.stopMusic = function () {
        //判断停止声音
        if (this._musicChannel) {
            this._musicChannel.stop();
            this._musicChannel.removeEventListener(egret.Event.SOUND_COMPLETE, this.onMusicComplete, this);
            this._musicChannel = null;
        }
    };
    ToolSound.prototype.getMusicOpen = function () {
        return this._musicOpen;
    };
    ToolSound.prototype.musicSwitch = function () {
        //数据赋值
        this._musicOpen = !this._musicOpen;
        ///判断停止或播放声音
        if (this._nowMusicName) {
            if (this._musicOpen) {
                this.stopMusic();
            }
            else {
                this.playMusic();
            }
        }
    };
    /** 设置音乐开关 */
    ToolSound.prototype.setMusicOpen = function (open) {
        if (open === void 0) { open = true; }
        this._musicOpen = open;
    };
    /** 播放音效 */
    ToolSound.prototype.playEffect = function (res, loop, callback) {
        if (res === void 0) { res = null; }
        if (loop === void 0) { loop = 1; }
        if (callback === void 0) { callback = null; }
        this._lastEffectName = this._nowEffectName;
        this._nowEffectName = res;
        this._effectCallBackFun = callback;
        //是否关闭音乐
        if (this._effectOpen) {
            return;
        }
        //停止播放声效
        this.stopEffect();
        //播放生效
        var effect = RES.getRes(this._nowEffectName);
        if (effect) {
            effect.type = egret.Sound.EFFECT;
            this._effectChannel = effect.play(0, loop);
            this._effectChannel.volume = ToolSound.effectVolume;
            this._effectChannel.addEventListener(egret.Event.SOUND_COMPLETE, this.oneffectComplete, this);
        }
    };
    //声效播放结束
    ToolSound.prototype.oneffectComplete = function (e) {
        //停止播放声效
        this.stopEffect();
    };
    /** 停止音效 */
    ToolSound.prototype.stopEffect = function () {
        //停止播放声效
        if (this._effectChannel) {
            this._effectChannel.stop();
            this._effectChannel.removeEventListener(egret.Event.SOUND_COMPLETE, this.oneffectComplete, this);
            this._effectChannel = null;
        }
    };
    /** 设置音效开关 */
    ToolSound.prototype.setEffectOpen = function (open) {
        if (open === void 0) { open = true; }
        this._effectOpen = open;
    };
    ToolSound.prototype.effectSwitch = function () {
        this._effectOpen = !this._effectOpen;
    };
    ToolSound.prototype.getEffectOpen = function () {
        return this._effectOpen;
    };
    //开关音乐音效
    ToolSound.prototype.switchAll = function () {
        this.effectSwitch();
        this.musicSwitch();
    };
    ToolSound.musicVolume = 0.5;
    ToolSound.effectVolume = 0.5;
    ToolSound._ins = null;
    return ToolSound;
}());
__reflect(ToolSound.prototype, "ToolSound");
//# sourceMappingURL=ToolSound.js.map