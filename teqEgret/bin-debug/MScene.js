/**
 * 主要的界面類
 *
 *
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MScene = (function () {
    function MScene() {
        /** 上一个bottom场景 */
        this._lastbottomScene = null;
        /** 上一个middle场景 */
        this._lastmiddleScene = null;
        /** 上一个window场景 */
        this._lastwindowScene = null;
        /** 上一个top场景 */
        this._lasttopScene = null;
        /** 上一个pop场景 */
        this._lastpopScene = null;
    }
    MScene.open = function (_main, width, height) {
        if (_main === void 0) { _main = null; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (MScene.ins == null) {
            MScene.ins = new MScene();
            MScene.ins.onCreate(_main, width, height);
        }
    };
    MScene.prototype.onCreate = function (_main, width, height) {
        var nMainGroup = new eui.Group();
        _main.addChild(nMainGroup);
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
    };
    /** 添加最底层场景 */
    MScene.prototype.addBottomScene = function (scene) {
        this.closeAllScene();
        this.addSceneToLayer(this._bottomLayer, scene, this._lastbottomScene);
        this._lastbottomScene = scene;
    };
    /** 添加中间层场景 */
    MScene.prototype.addMiddleScene = function (scene) {
        this.closeTopScene();
        this.closeWindowScene();
        this.closepopScene();
        this.addSceneToLayer(this._middleLayer, scene, this._lastmiddleScene);
        this._lastmiddleScene = scene;
    };
    /** 添加窗口层场景 */
    MScene.prototype.addWindowScene = function (scene) {
        this.addSceneToLayer(this._windowLayer, scene, this._lastwindowScene);
        this._lastwindowScene = scene;
    };
    /** 添加最上层场景 */
    MScene.prototype.addTopScene = function (scene) {
        this.addSceneToLayer(this._topLayer, scene, this._lasttopScene);
        this._lasttopScene = scene;
    };
    /** 添加提示层场景 */
    MScene.prototype.addpopScene = function (scene) {
        this.addSceneToLayer(this._popLayer, scene, this._lastpopScene);
        // this._lastpopScene = scene
    };
    /** 新增界面到最底层 */
    MScene.prototype.addSceneToBottom = function (scene) {
        this._bottomLayer.addChild(scene);
    };
    /** 新增界面到中间层 */
    MScene.prototype.addSceneToMiddle = function (scene) {
        this._middleLayer.addChild(scene);
    };
    /** 新增界面到窗口层 */
    MScene.prototype.addSceneToWindow = function (scene) {
        this._windowLayer.addChild(scene);
    };
    /** 新增界面到最上层 */
    MScene.prototype.addSceneToTop = function (scene) {
        this._topLayer.addChild(scene);
    };
    /** 新增界面到提示层 */
    MScene.prototype.addSceneToPop = function (scene) {
        this._popLayer.addChild(scene);
    };
    /** 添加对象到对应的场景 */
    MScene.prototype.addSceneToLayer = function (layer, scene, lastscene) {
        if (layer == null)
            return;
        if (lastscene != null) {
            lastscene.close && lastscene.close();
        }
        layer.addChild(scene);
    };
    /** 关闭所有层场景 */
    MScene.prototype.closeAllScene = function (callfun) {
        if (callfun === void 0) { callfun = null; }
        this.closeBottomScene();
        this.closeMiddleScene();
        this.closeWindowScene();
        this.closeTopScene();
        this.closepopScene();
        if (callfun != null) {
            callfun();
        }
    };
    /** 关闭最底层场景 */
    MScene.prototype.closeBottomScene = function (callfun) {
        if (callfun === void 0) { callfun = null; }
        this._bottomLayer.removeChildren();
        if (callfun != null) {
            callfun();
        }
    };
    /** 关闭中间层场景 */
    MScene.prototype.closeMiddleScene = function (callfun) {
        if (callfun === void 0) { callfun = null; }
        this._middleLayer.removeChildren();
        if (callfun != null) {
            callfun();
        }
    };
    /** 关闭中间层场景 */
    MScene.prototype.closeWindowScene = function (callfun) {
        if (callfun === void 0) { callfun = null; }
        this._windowLayer.removeChildren();
        if (callfun != null) {
            callfun();
        }
    };
    /** 关闭最上层场景 */
    MScene.prototype.closeTopScene = function (callfun) {
        if (callfun === void 0) { callfun = null; }
        this._topLayer.removeChildren();
        if (callfun != null) {
            callfun();
        }
    };
    /** 关闭提示层场景 */
    MScene.prototype.closepopScene = function (callfun) {
        if (callfun === void 0) { callfun = null; }
        this._popLayer.removeChildren();
        if (callfun != null) {
            callfun();
        }
    };
    MScene.ins = null;
    return MScene;
}());
__reflect(MScene.prototype, "MScene");
//# sourceMappingURL=MScene.js.map