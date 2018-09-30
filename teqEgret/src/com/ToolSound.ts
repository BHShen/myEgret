/**
 * Create SHB
 * Timer 2017-09-15
 * 音乐播放
 */

class ToolSound {
    public static musicVolume:number = 0.5;
    public static effectVolume:number = 0.5;
    /** 音乐开关 */
    private _musicOpen:boolean = false;
    /** 上一个播放的音乐名字 */
    private _lastMusicName:string = "";
    /** 当前播放的音乐名字 */
    private _nowMusicName:string = "";
    /** 播放音乐的节点 */
    private _musicChannel:egret.SoundChannel = null;
    /** 音乐播放完的回调 */
    private _musicCallBackFun:Function = null;

    /** 音效开关 */
    private _effectOpen:boolean = false;
    /** 上一个播放的音效名字 */
    private _lastEffectName:string = "";
    /** 当前播放的音效名字 */
    private _nowEffectName:string = "";
    /** 播放音效的节点 */
    private _effectChannel:egret.SoundChannel = null;
    /** 音效播放完的回调 */
    private _effectCallBackFun:Function = null;

    private static _ins:ToolSound = null;
    public static get ins():ToolSound{
        if(ToolSound._ins == null){
            ToolSound._ins = new ToolSound();
        }

        return ToolSound._ins;
    }

    /** 播放音乐 */
    public playMusic(res: string = null,loop: number = 0,callback: Function = null){
        this._lastMusicName = this._nowMusicName
        this._nowMusicName = res
        this._musicCallBackFun = callback;
        //是否关闭音乐
        if(this._musicOpen) {
                return;
        }

        this.stopMusic()

        //播放声音
        var music: egret.Sound = RES.getRes(this._nowMusicName);
        
        if(music){
            music.type = egret.Sound.MUSIC
            this._musicChannel = music.play(0,loop);
            this._musicChannel.volume = ToolSound.musicVolume;
            this._musicChannel.addEventListener(egret.Event.SOUND_COMPLETE,this.onMusicComplete,this);
        }
        
    }

    /** 声音播放结束 **/
    private onMusicComplete(e: egret.Event): void {
        if(this._musicCallBackFun != null){
            this._musicCallBackFun();
        }
        //停止声音
        this.stopMusic();
    }

    /** 停止音乐 */
    public stopMusic(){
        //判断停止声音
        if(this._musicChannel) {
            this._musicChannel.stop();
            this._musicChannel.removeEventListener(egret.Event.SOUND_COMPLETE,this.onMusicComplete,this);
            this._musicChannel = null;
        }
    }

    public getMusicOpen():boolean{
        return this._musicOpen
    }

    public musicSwitch(){
        //数据赋值
        this._musicOpen = !this._musicOpen;
        
        ///判断停止或播放声音
        if(this._nowMusicName) {
            if(this._musicOpen) {
                this.stopMusic()
            } else {
                this.playMusic();
            }
        }
    }
    /** 设置音乐开关 */
    public setMusicOpen(open:boolean = true){
        this._musicOpen = open;
    }



    /** 播放音效 */
    public playEffect(res: string = null,loop: number = 1,callback: Function = null){
        this._lastEffectName = this._nowEffectName
        this._nowEffectName = res
        this._effectCallBackFun = callback;
        //是否关闭音乐
        if(this._effectOpen) {
                return;
        }

        //停止播放声效
        this.stopEffect();
        
        //播放生效
        var effect: egret.Sound = RES.getRes(this._nowEffectName);
        
        if(effect){
            effect.type = egret.Sound.EFFECT
            this._effectChannel = effect.play(0,loop);
            this._effectChannel.volume = ToolSound.effectVolume;
            this._effectChannel.addEventListener(egret.Event.SOUND_COMPLETE,this.oneffectComplete,this);
        }

    }
    
    //声效播放结束
    private oneffectComplete(e: egret.Event): void {
        //停止播放声效
        this.stopEffect();
    }

    /** 停止音效 */
    public stopEffect(){
        //停止播放声效
        if(this._effectChannel) {
            this._effectChannel.stop();
            this._effectChannel.removeEventListener(egret.Event.SOUND_COMPLETE,this.oneffectComplete,this);
            this._effectChannel = null;
        }
    }

    /** 设置音效开关 */
    public setEffectOpen(open:boolean = true){
        this._effectOpen = open;
    }

    public effectSwitch(){
        this._effectOpen = !this._effectOpen;

    }

    public getEffectOpen():boolean{
        return this._effectOpen
    }

        
    //开关音乐音效
    public switchAll() {
        this.effectSwitch();
        this.musicSwitch();
    }
}