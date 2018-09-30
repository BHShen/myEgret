var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var gamedata = (function () {
    function gamedata() {
        /** 失败次数 */
        this.interruptNum = 0;
        /** 当前关卡 */
        this.nowPass = 0;
        /** 总共收集到的星星 */
        this.starNum = 0;
    }
    Object.defineProperty(gamedata, "ins", {
        get: function () {
            if (this._ins == null) {
                this._ins = new gamedata();
            }
            return this._ins;
        },
        enumerable: true,
        configurable: true
    });
    /** 清空失败次数 */
    gamedata.prototype.cleanInterruptNum = function (nStar) {
        this.starNum = this.starNum + nStar;
        this.interruptNum = 0;
    };
    gamedata.prototype.cleanAll = function () {
    };
    return gamedata;
}());
__reflect(gamedata.prototype, "gamedata");
//# sourceMappingURL=gamedata.js.map