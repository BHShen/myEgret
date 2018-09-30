class gamedata{
    private static _ins:gamedata
    public static get ins():gamedata{
        if(this._ins == null){
            this._ins = new gamedata()
        }
        return this._ins
    }
    /** 失败次数 */
    public interruptNum:number = 0;
    /** 当前关卡 */
    public nowPass:number = 0;
    /** 总共收集到的星星 */
    public starNum:number = 0;
    /** 清空失败次数 */
    public cleanInterruptNum(nStar){
        this.starNum = this.starNum + nStar
        this.interruptNum = 0
    }

    public cleanAll(){
        
    }
}