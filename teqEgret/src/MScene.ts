/**
 * 主要的界面類
 * 
 * 
 */

class MScene{
    
    public static ins:MScene = null;
    
    public static open(_main:Main = null,width = 0,height = 0){
        if(MScene.ins == null){
            MScene.ins = new MScene();
            MScene.ins.onCreate(_main,width,height)
        }
        
    }

    private onCreate(_main:Main,width,height){
        let nMainGroup = new eui.Group()
        _main.addChild(nMainGroup)
        nMainGroup.addChild(this._bottomLayer = new eui.Group());
        nMainGroup.addChild(this._middleLayer = new eui.Group());
        nMainGroup.addChild(this._windowLayer = new eui.Group());
        nMainGroup.addChild(this._topLayer = new eui.Group());
        nMainGroup.addChild(this._popLayer = new eui.Group());

        this._bottomLayer.width = width;
        this._bottomLayer.height = height;
        this._middleLayer.width = width;
        this._middleLayer.height = height;
        this._windowLayer.width = width;
        this._windowLayer.height = height;
        this._topLayer.width = width;
        this._topLayer.height = height;
        this._popLayer.width = width;
        this._popLayer.height = height;
        //场景点击关闭
        this._bottomLayer.touchEnabled = false;
        this._middleLayer.touchEnabled = false;
        this._windowLayer.touchEnabled = false;
        this._topLayer.touchEnabled = false;
        this._popLayer.touchEnabled = false;
    }

    /** 添加最底层场景 */
    public addBottomScene(scene){
        this.closeAllScene()
        this.addSceneToLayer(this._bottomLayer,scene,this._lastbottomScene);
        this._lastbottomScene = scene
    }
    /** 添加中间层场景 */
    public addMiddleScene(scene){
        this.closeTopScene()
        this.closeWindowScene()
        this.closepopScene()
        this.addSceneToLayer(this._middleLayer,scene,this._lastmiddleScene)
        this._lastmiddleScene = scene
    }
    /** 添加窗口层场景 */
    public addWindowScene(scene){
        this.addSceneToLayer(this._windowLayer,scene,this._lastwindowScene)
        this._lastwindowScene = scene
    }
    /** 添加最上层场景 */
    public addTopScene(scene){
        this.addSceneToLayer(this._topLayer,scene,this._lasttopScene)
        this._lasttopScene = scene

    }

    /** 添加提示层场景 */
    public addpopScene(scene){
        this.addSceneToLayer(this._popLayer,scene,this._lastpopScene)
        // this._lastpopScene = scene
    }

    /** 新增界面到最底层 */
    public addSceneToBottom(scene){
        this._bottomLayer.addChild(scene);
    }
    /** 新增界面到中间层 */
    public addSceneToMiddle(scene){
        this._middleLayer.addChild(scene);
    }
    /** 新增界面到窗口层 */
    public addSceneToWindow(scene){
        this._windowLayer.addChild(scene);
    }
    /** 新增界面到最上层 */
    public addSceneToTop(scene){
        this._topLayer.addChild(scene);
    }
    /** 新增界面到提示层 */
    public addSceneToPop(scene){
        this._popLayer.addChild(scene);
    }
    

    /** 添加对象到对应的场景 */
    private addSceneToLayer(layer,scene,lastscene){
        if(layer == null) return;
        if(lastscene != null){
            lastscene.close && lastscene.close();
        }
        layer.addChild(scene);
    }

    

    /** 关闭所有层场景 */
    public closeAllScene( callfun:Function = null){
        this.closeBottomScene()
        this.closeMiddleScene()
        this.closeWindowScene()
        this.closeTopScene()
        this.closepopScene()
        if(callfun != null){
            callfun();
        }
    }
    /** 关闭最底层场景 */
    public closeBottomScene(callfun:Function = null){

        this._bottomLayer.removeChildren()
        if(callfun != null){
            callfun();
        }

    }
    /** 关闭中间层场景 */
    public closeMiddleScene(callfun:Function = null){

        this._middleLayer.removeChildren()
        if(callfun != null){
            callfun();
        }
    }
    /** 关闭中间层场景 */
    public closeWindowScene(callfun:Function = null){

        this._windowLayer.removeChildren()
        if(callfun != null){
            callfun();
        }
    }
    /** 关闭最上层场景 */
    public closeTopScene(callfun:Function = null){

        this._topLayer.removeChildren()
        if(callfun != null){
            callfun();
        }
    }
    /** 关闭提示层场景 */
    public closepopScene(callfun:Function = null){

        this._popLayer.removeChildren()
        if(callfun != null){
            callfun();
        }
    }

    //基础界面
    private _mg:eui.Group;
    /** 最下方场景 */
    private _bottomLayer:eui.Group;
    /** 中间场景 */
    private _middleLayer:eui.Group;
    /** 窗口场景 */
    private _windowLayer:eui.Group;
    /** 上方场景 */
    private _topLayer:eui.Group;
    /** 提示弹窗 */
    public _popLayer:eui.Group;
    /** 上一个bottom场景 */
    private _lastbottomScene:any = null;
    /** 上一个middle场景 */
    private _lastmiddleScene:any = null;
    /** 上一个window场景 */
    private _lastwindowScene:any = null;
    /** 上一个top场景 */
    private _lasttopScene:any = null;
    /** 上一个pop场景 */
    private _lastpopScene:any = null;
}

