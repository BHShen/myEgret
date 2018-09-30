window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/loadingSkin.exml'] = window.loadingSkin = (function (_super) {
	__extends(loadingSkin, _super);
	function loadingSkin() {
		_super.call(this);
		this.skinParts = ["_topTween","_img_top","_img_bottom"];
		
		this.height = 750;
		this.width = 1334;
		this._topTween_i();
		this.elementsContent = [this._Rect1_i(),this._img_top_i(),this._img_bottom_i()];
		
		eui.Binding.$bindProperties(this, ["_img_top"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, ["_img_bottom"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [1200],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [408],[],this._Object4,"y");
	}
	var _proto = loadingSkin.prototype;

	_proto._topTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this._topTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To2_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._img_top_i = function () {
		var t = new eui.Image();
		this._img_top = t;
		t.anchorOffsetX = 164;
		t.anchorOffsetY = 164;
		t.source = "teq_json.img_icon";
		t.x = 660;
		t.y = 233;
		return t;
	};
	_proto._img_bottom_i = function () {
		var t = new eui.Image();
		this._img_bottom = t;
		t.source = "teq_json.img_title";
		t.x = 431;
		t.y = 408;
		return t;
	};
	return loadingSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/arrowsSKin.exml'] = window.arrowsSKin = (function (_super) {
	__extends(arrowsSKin, _super);
	function arrowsSKin() {
		_super.call(this);
		this.skinParts = ["arrowTween","_img_arrows1","_img_arrows0"];
		
		this.height = 16;
		this.width = 50;
		this.arrowTween_i();
		this.elementsContent = [this._img_arrows1_i(),this._img_arrows0_i()];
		
		eui.Binding.$bindProperties(this, ["_img_arrows0"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, ["_img_arrows1"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
	}
	var _proto = arrowsSKin.prototype;

	_proto.arrowTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.arrowTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._Wait1_i(),this._Set2_i(),this._Wait2_i(),this._Set3_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set4_i(),this._Wait3_i(),this._Set5_i(),this._Wait4_i(),this._Set6_i(),this._Wait5_i(),this._Set7_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._Wait5_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._img_arrows1_i = function () {
		var t = new eui.Image();
		this._img_arrows1 = t;
		t.scaleX = 0.1;
		t.scaleY = 0.1;
		t.source = "img_arrows_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_arrows0_i = function () {
		var t = new eui.Image();
		this._img_arrows0 = t;
		t.scaleX = 0.1;
		t.scaleY = 0.1;
		t.source = "img_arrows_png";
		t.x = 30.2;
		t.y = 0;
		return t;
	};
	return arrowsSKin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/bottomSkin.exml'] = window.bottomSkin = (function (_super) {
	__extends(bottomSkin, _super);
	function bottomSkin() {
		_super.call(this);
		this.skinParts = ["_money0","_money1","_money2"];
		
		this.height = 220;
		this.width = 498;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = bottomSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._money0_i(),this._money1_i(),this._money2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money_bg";
		t.x = 88;
		t.y = 81.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_penguin_1";
		t.x = -17;
		t.y = 1;
		return t;
	};
	_proto._money0_i = function () {
		var t = new eui.Image();
		this._money0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money";
		t.x = 173;
		t.y = 97;
		return t;
	};
	_proto._money1_i = function () {
		var t = new eui.Image();
		this._money1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money";
		t.x = 281;
		t.y = 97;
		return t;
	};
	_proto._money2_i = function () {
		var t = new eui.Image();
		this._money2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money";
		t.x = 389;
		t.y = 97;
		return t;
	};
	return bottomSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/closePassSkin.exml'] = window.closePassSkin = (function (_super) {
	__extends(closePassSkin, _super);
	function closePassSkin() {
		_super.call(this);
		this.skinParts = ["moneyTween","_money0","_money1","_money2","_money3","_money4","_money5"];
		
		this.height = 750;
		this.width = 1334;
		this.moneyTween_i();
		this.elementsContent = [this._Group2_i()];
		
		eui.Binding.$bindProperties(this, ["_money3"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [780],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [350.5],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [1025],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [75],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, ["_money4"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, [837],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [332],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"scaleY");
		eui.Binding.$bindProperties(this, [1025],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [75],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, ["_money5"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object5,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object5,"scaleY");
		eui.Binding.$bindProperties(this, [837],[],this._Object5,"x");
		eui.Binding.$bindProperties(this, [332],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"scaleY");
		eui.Binding.$bindProperties(this, [1025],[],this._Object6,"x");
		eui.Binding.$bindProperties(this, [75],[],this._Object6,"y");
	}
	var _proto = closePassSkin.prototype;

	_proto.moneyTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.moneyTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Wait1_i(),this._Set2_i(),this._To3_i(),this._To4_i()];
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 500;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Wait2_i(),this._Set3_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1000;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "teq_json.box_open";
		t.x = 967;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._money0_i(),this._money1_i(),this._money2_i(),this._money3_i(),this._money4_i(),this._money5_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money_bg";
		t.x = 450;
		t.y = 610.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_penguin_1";
		t.x = 345;
		t.y = 530;
		return t;
	};
	_proto._money0_i = function () {
		var t = new eui.Image();
		this._money0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money";
		t.x = 535;
		t.y = 626;
		return t;
	};
	_proto._money1_i = function () {
		var t = new eui.Image();
		this._money1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money";
		t.x = 643;
		t.y = 626;
		return t;
	};
	_proto._money2_i = function () {
		var t = new eui.Image();
		this._money2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money";
		t.x = 751;
		t.y = 626;
		return t;
	};
	_proto._money3_i = function () {
		var t = new eui.Image();
		this._money3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money";
		t.x = 535;
		t.y = 626;
		return t;
	};
	_proto._money4_i = function () {
		var t = new eui.Image();
		this._money4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money";
		t.x = 643;
		t.y = 626;
		return t;
	};
	_proto._money5_i = function () {
		var t = new eui.Image();
		this._money5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money";
		t.x = 751;
		t.y = 626;
		return t;
	};
	return closePassSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/gameOver/gameOver1Skin.exml'] = window.gameOver1Skin = (function (_super) {
	__extends(gameOver1Skin, _super);
	function gameOver1Skin() {
		_super.call(this);
		this.skinParts = ["overTween","_img_box","image","_money","_img_f","_img_p","_num"];
		
		this.height = 750;
		this.width = 1334;
		this.overTween_i();
		this.elementsContent = [this._Image1_i(),this._img_box_i(),this.image_i(),this._money_i(),this._img_f_i(),this._img_p_i(),this._num_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [-369],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, ["_money"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [297],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [338],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, ["_num"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [340],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [474],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, ["_img_p"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [561],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [285.5],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, ["_img_f"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [877],[],this._Object5,"x");
		eui.Binding.$bindProperties(this, [264.5],[],this._Object5,"y");
	}
	var _proto = gameOver1Skin.prototype;

	_proto.overTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.overTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i(),this._TweenItem5_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._To1_i()];
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Wait1_i(),this._To2_i()];
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 350;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Wait2_i(),this._To3_i()];
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 350;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Wait3_i(),this._To4_i()];
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 350;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Wait4_i(),this._To5_i()];
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 350;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_gamebg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_box_i = function () {
		var t = new eui.Image();
		this._img_box = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "teqPass2_json.img_pass2_box1";
		t.x = 1087.5;
		t.y = 0;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.source = "gameover_json.img_people_gril";
		t.x = 62;
		t.y = 89.5;
		return t;
	};
	_proto._money_i = function () {
		var t = new eui.Image();
		this._money = t;
		t.source = "gameover_json.money_guang";
		t.x = 480;
		t.y = 239;
		return t;
	};
	_proto._img_f_i = function () {
		var t = new eui.Image();
		this._img_f = t;
		t.source = "gameover_json.img_peopleF";
		t.x = 931;
		t.y = 171.5;
		return t;
	};
	_proto._img_p_i = function () {
		var t = new eui.Image();
		this._img_p = t;
		t.source = "gameover_json.img_peopleP";
		t.x = 667;
		t.y = 182.5;
		return t;
	};
	_proto._num_i = function () {
		var t = new eui.Label();
		this._num = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "X0";
		t.x = 523;
		t.y = 375;
		return t;
	};
	return gameOver1Skin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/gameOver/gameOver2Skin.exml'] = window.gameOver2Skin = (function (_super) {
	__extends(gameOver2Skin, _super);
	function gameOver2Skin() {
		_super.call(this);
		this.skinParts = ["_money","_img_f","_img_p","_num","_rePlay"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this._money_i(),this._img_f_i(),this._img_p_i(),this._num_i(),this._Image2_i(),this._Image3_i(),this._rePlay_i()];
	}
	var _proto = gameOver2Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_gamebg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.4;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._money_i = function () {
		var t = new eui.Image();
		this._money = t;
		t.source = "gameover_json.money_guang";
		t.x = 297;
		t.y = 338;
		return t;
	};
	_proto._img_f_i = function () {
		var t = new eui.Image();
		this._img_f = t;
		t.source = "gameover_json.img_peopleF";
		t.x = 877;
		t.y = 264.5;
		return t;
	};
	_proto._img_p_i = function () {
		var t = new eui.Image();
		this._img_p = t;
		t.source = "gameover_json.img_peopleP";
		t.x = 561;
		t.y = 285.5;
		return t;
	};
	_proto._num_i = function () {
		var t = new eui.Label();
		this._num = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -302;
		t.size = 40;
		t.text = "X0";
		t.y = 474;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "teq_json.title_loading";
		t.x = 324.6;
		t.y = 21.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "gameover_json.btn_jxsk";
		t.x = 307;
		t.y = 589;
		return t;
	};
	_proto._rePlay_i = function () {
		var t = new eui.Image();
		this._rePlay = t;
		t.source = "btn_zwyc2_png";
		t.x = 732;
		t.y = 589;
		return t;
	};
	return gameOver2Skin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/pass1lookSkin.exml'] = window.pass1lookSkin = (function (_super) {
	__extends(pass1lookSkin, _super);
	function pass1lookSkin() {
		_super.call(this);
		this.skinParts = ["_group"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._group_i()];
	}
	var _proto = pass1lookSkin.prototype;

	_proto._group_i = function () {
		var t = new eui.Group();
		this._group = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_todo_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.word_u";
		t.x = 561;
		t.y = 265.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_do";
		t.x = 544;
		t.y = 246;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_hand";
		t.x = 580;
		t.y = 280;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "pass1_font_png";
		t.x = 510;
		t.y = 640;
		return t;
	};
	return pass1lookSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/pass1_0Skin.exml'] = window.pass1_0Skin = (function (_super) {
	__extends(pass1_0Skin, _super);
	function pass1_0Skin() {
		_super.call(this);
		this.skinParts = ["eyeTween","_img_f","_img_eye1","_group_f","_img_p","_img_eye","_group_p","_rightP","_rightF","_passlook"];
		
		this.height = 750;
		this.width = 1334;
		this.eyeTween_i();
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this._group_f_i(),this._group_p_i(),this._rightP_i(),this._rightF_i(),this._passlook_i()];
		
		eui.Binding.$bindProperties(this, ["_img_eye"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, ["_img_eye1"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"alpha");
	}
	var _proto = pass1_0Skin.prototype;

	_proto.eyeTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.eyeTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._Wait1_i(),this._Set2_i(),this._Wait2_i(),this._Set3_i(),this._Wait3_i(),this._Set4_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 2000;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 500;
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Wait4_i(),this._Set5_i(),this._Wait5_i(),this._Set6_i(),this._Wait6_i(),this._Set7_i(),this._Wait7_i(),this._Set8_i()];
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 500;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._Wait5_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 2000;
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Wait6_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._Wait7_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 500;
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_gamebg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "teq_json.img_bear_1";
		t.x = 384;
		t.y = 303;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 42;
		t.text = "强音符号";
		t.x = 545;
		t.y = 671;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 42;
		t.text = "弱音符号";
		t.x = 935;
		t.y = 671;
		return t;
	};
	_proto._group_f_i = function () {
		var t = new eui.Group();
		this._group_f = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._img_f_i(),this._img_eye1_i()];
		return t;
	};
	_proto._img_f_i = function () {
		var t = new eui.Image();
		this._img_f = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.word_f2_2";
		t.x = 503;
		t.y = 268;
		return t;
	};
	_proto._img_eye1_i = function () {
		var t = new eui.Image();
		this._img_eye1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_eye";
		t.x = 595;
		t.y = 337;
		return t;
	};
	_proto._group_p_i = function () {
		var t = new eui.Group();
		this._group_p = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._img_p_i(),this._img_eye_i()];
		return t;
	};
	_proto._img_p_i = function () {
		var t = new eui.Image();
		this._img_p = t;
		t.anchorOffsetX = 140.5;
		t.anchorOffsetY = 374;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teqPass2_json.img_pass2_word_p";
		t.x = 1028.5;
		t.y = 652;
		return t;
	};
	_proto._img_eye_i = function () {
		var t = new eui.Image();
		this._img_eye = t;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "teq_json.img_eye";
		t.x = 981;
		t.y = 296;
		return t;
	};
	_proto._rightP_i = function () {
		var t = new eui.Group();
		this._rightP = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 445;
		t.width = 297;
		t.x = 817.5;
		t.y = 200;
		return t;
	};
	_proto._rightF_i = function () {
		var t = new eui.Group();
		this._rightF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 445;
		t.width = 297;
		t.x = 421.5;
		t.y = 215;
		return t;
	};
	_proto._passlook_i = function () {
		var t = new UIPass1Look();
		this._passlook = t;
		t.skinName = "pass1lookSkin";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return pass1_0Skin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/pass1_2Skin.exml'] = window.pass1_2Skin = (function (_super) {
	__extends(pass1_2Skin, _super);
	function pass1_2Skin() {
		_super.call(this);
		this.skinParts = ["zzzTween","_img_bear","_group_draw","_img_z1","_img_z2","_img_z3","_group_z","_group_btn","_btn_penguin","_UIArrow","_btn_home"];
		
		this.height = 750;
		this.width = 1334;
		this.zzzTween_i();
		this.elementsContent = [this._Image1_i(),this._img_bear_i(),this._Image2_i(),this._group_draw_i(),this._group_z_i(),this._Image3_i(),this._group_btn_i(),this._btn_penguin_i(),this._UIArrow_i(),this._btn_home_i()];
		
		eui.Binding.$bindProperties(this, ["_img_z3"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, ["_img_z2"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, ["_img_z1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"alpha");
	}
	var _proto = pass1_2Skin.prototype;

	_proto.zzzTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.zzzTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._Wait1_i(),this._Set3_i(),this._To2_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 500;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set4_i(),this._Wait2_i(),this._Set5_i(),this._To3_i(),this._Wait3_i(),this._Set6_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1000;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_gamebg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_bear_i = function () {
		var t = new eui.Image();
		this._img_bear = t;
		t.bottom = 183;
		t.horizontalCenter = -298.5;
		t.source = "teq_json.img_bear_2";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "teq_json.word_p";
		t.x = 818;
		t.y = 207;
		return t;
	};
	_proto._group_draw_i = function () {
		var t = new eui.Group();
		this._group_draw = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._group_z_i = function () {
		var t = new eui.Group();
		this._group_z = t;
		t.height = 200;
		t.width = 200;
		t.x = 331;
		t.y = 180;
		t.elementsContent = [this._img_z1_i(),this._img_z2_i(),this._img_z3_i()];
		return t;
	};
	_proto._img_z1_i = function () {
		var t = new eui.Image();
		this._img_z1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_z1";
		t.x = 119;
		t.y = 25;
		return t;
	};
	_proto._img_z2_i = function () {
		var t = new eui.Image();
		this._img_z2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_z2";
		t.x = 80;
		t.y = 98;
		return t;
	};
	_proto._img_z3_i = function () {
		var t = new eui.Image();
		this._img_z3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_z3";
		t.x = 37.5;
		t.y = 159;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "teq_json.mask_p";
		t.x = 784.5;
		t.y = 175;
		return t;
	};
	_proto._group_btn_i = function () {
		var t = new eui.Group();
		this._group_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._btn_penguin_i = function () {
		var t = new eui.Image();
		this._btn_penguin = t;
		t.anchorOffsetX = 35.5;
		t.anchorOffsetY = 75;
		t.source = "teq_json.img_penguin_3";
		t.x = 952.5;
		t.y = 282;
		return t;
	};
	_proto._UIArrow_i = function () {
		var t = new UIArrow();
		this._UIArrow = t;
		t.skewX = 225;
		t.skewY = 225;
		t.skinName = "arrowsSKin";
		t.x = 1016;
		t.y = 351;
		return t;
	};
	_proto._btn_home_i = function () {
		var t = new eui.Image();
		this._btn_home = t;
		t.source = "btn_home_png";
		t.x = 48;
		t.y = 29;
		return t;
	};
	return pass1_2Skin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/pass1Skin.exml'] = window.pass1Skin = (function (_super) {
	__extends(pass1Skin, _super);
	function pass1Skin() {
		_super.call(this);
		this.skinParts = ["zzzTween","_img_bear","_group_draw","_img_z1","_img_z2","_img_z3","_group_z","_group_btn","_btn_penguin","_UIArrow","_group_move","_btn_home"];
		
		this.height = 750;
		this.width = 1334;
		this.zzzTween_i();
		this.elementsContent = [this._Image1_i(),this._img_bear_i(),this._Image2_i(),this._group_draw_i(),this._Image3_i(),this._group_z_i(),this._group_btn_i(),this._btn_penguin_i(),this._UIArrow_i(),this._group_move_i(),this._btn_home_i()];
		
		eui.Binding.$bindProperties(this, ["_img_z3"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, ["_img_z2"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, ["_img_z1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"alpha");
	}
	var _proto = pass1Skin.prototype;

	_proto.zzzTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.zzzTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._Wait1_i(),this._Set3_i(),this._To2_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 500;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set4_i(),this._Wait2_i(),this._Set5_i(),this._To3_i(),this._Wait3_i(),this._Set6_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1000;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_gamebg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_bear_i = function () {
		var t = new eui.Image();
		this._img_bear = t;
		t.bottom = 183;
		t.horizontalCenter = -298.5;
		t.source = "teq_json.img_bear_2";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "teq_json.word_f";
		t.x = 856;
		t.y = 178;
		return t;
	};
	_proto._group_draw_i = function () {
		var t = new eui.Group();
		this._group_draw = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "teq_json.mask_f";
		t.x = 830;
		t.y = 157;
		return t;
	};
	_proto._group_z_i = function () {
		var t = new eui.Group();
		this._group_z = t;
		t.height = 200;
		t.width = 200;
		t.x = 331;
		t.y = 180;
		t.elementsContent = [this._img_z1_i(),this._img_z2_i(),this._img_z3_i()];
		return t;
	};
	_proto._img_z1_i = function () {
		var t = new eui.Image();
		this._img_z1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_z1";
		t.x = 119;
		t.y = 25;
		return t;
	};
	_proto._img_z2_i = function () {
		var t = new eui.Image();
		this._img_z2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_z2";
		t.x = 80;
		t.y = 98;
		return t;
	};
	_proto._img_z3_i = function () {
		var t = new eui.Image();
		this._img_z3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_z3";
		t.x = 37.5;
		t.y = 159;
		return t;
	};
	_proto._group_btn_i = function () {
		var t = new eui.Group();
		this._group_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._btn_penguin_i = function () {
		var t = new eui.Image();
		this._btn_penguin = t;
		t.anchorOffsetX = 35.5;
		t.anchorOffsetY = 75;
		t.source = "teq_json.img_penguin_3";
		t.x = 926;
		t.y = 612;
		return t;
	};
	_proto._UIArrow_i = function () {
		var t = new UIArrow();
		this._UIArrow = t;
		t.skewX = 180;
		t.skewY = 180;
		t.skinName = "arrowsSKin";
		t.x = 1031.5;
		t.y = 622;
		return t;
	};
	_proto._group_move_i = function () {
		var t = new eui.Group();
		this._group_move = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto._btn_home_i = function () {
		var t = new eui.Image();
		this._btn_home = t;
		t.source = "btn_home_png";
		t.x = 48;
		t.y = 29;
		return t;
	};
	return pass1Skin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/pass2/pass2lookSkin.exml'] = window.pass2lookSkin = (function (_super) {
	__extends(pass2lookSkin, _super);
	function pass2lookSkin() {
		_super.call(this);
		this.skinParts = ["_act_qe"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = pass2lookSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._act_qe_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_todo_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._act_qe_i = function () {
		var t = new eui.Image();
		this._act_qe = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "teqPass2_json.act_qe0";
		t.x = 552;
		t.y = 165;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pass2_font_png";
		t.x = 510;
		t.y = 640;
		return t;
	};
	return pass2lookSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/pass2/pass2_0Skin.exml'] = window.pass2_0Skin = (function (_super) {
	__extends(pass2_0Skin, _super);
	function pass2_0Skin() {
		_super.call(this);
		this.skinParts = ["actFTween","actPTween","errFTween","errPTween","_img_guang_f","_img_guang_p","_img_p","_img_f","_rightP","_rightF","_img_bear","_passLook"];
		
		this.height = 750;
		this.width = 1334;
		this.actFTween_i();
		this.actPTween_i();
		this.errFTween_i();
		this.errPTween_i();
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._img_guang_f_i(),this._img_guang_p_i(),this._img_p_i(),this._img_f_i(),this._rightP_i(),this._rightF_i(),this._img_bear_i(),this._passLook_i()];
		
		eui.Binding.$bindProperties(this, ["_img_guang_f"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, ["_img_guang_p"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, ["_img_f"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [-10],[],this._Object7,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"rotation");
		eui.Binding.$bindProperties(this, [10],[],this._Object9,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"rotation");
		eui.Binding.$bindProperties(this, ["_img_p"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [-10],[],this._Object11,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"rotation");
		eui.Binding.$bindProperties(this, [10],[],this._Object13,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object14,"rotation");
	}
	var _proto = pass2_0Skin.prototype;

	_proto.actFTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.actFTween = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto.actPTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.actPTween = t;
		t.items = [this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To3_i(),this._To4_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto.errFTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.errFTween = t;
		t.items = [this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set3_i(),this._To5_i(),this._To6_i(),this._To7_i(),this._To8_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto.errPTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.errPTween = t;
		t.items = [this._TweenItem4_i()];
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set4_i(),this._To9_i(),this._To10_i(),this._To11_i(),this._To12_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_gamebg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "teqPass2_json.img_shadow3";
		t.x = 525;
		t.y = 492;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "teqPass2_json.img_shadow3";
		t.x = 87;
		t.y = 492;
		return t;
	};
	_proto._img_guang_f_i = function () {
		var t = new eui.Image();
		this._img_guang_f = t;
		t.source = "teqPass2_json.img_pass2_guang_f";
		t.x = 541;
		t.y = 144;
		return t;
	};
	_proto._img_guang_p_i = function () {
		var t = new eui.Image();
		this._img_guang_p = t;
		t.source = "teqPass2_json.img_pass2_guang_p";
		t.x = 158;
		t.y = 172;
		return t;
	};
	_proto._img_p_i = function () {
		var t = new eui.Image();
		this._img_p = t;
		t.anchorOffsetX = 140.5;
		t.anchorOffsetY = 374;
		t.source = "teqPass2_json.img_pass2_word_p";
		t.x = 275.5;
		t.y = 562;
		return t;
	};
	_proto._img_f_i = function () {
		var t = new eui.Image();
		this._img_f = t;
		t.anchorOffsetX = 118.5;
		t.anchorOffsetY = 388;
		t.source = "teqPass2_json.img_pass2_word_f";
		t.x = 660.5;
		t.y = 561;
		return t;
	};
	_proto._rightP_i = function () {
		var t = new eui.Group();
		this._rightP = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 445;
		t.width = 297;
		t.x = 47.5;
		t.y = 131;
		return t;
	};
	_proto._rightF_i = function () {
		var t = new eui.Group();
		this._rightF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 445;
		t.width = 297;
		t.x = 446.5;
		t.y = 130;
		return t;
	};
	_proto._img_bear_i = function () {
		var t = new eui.Image();
		this._img_bear = t;
		t.source = "teqPass2_json.act_bear0";
		t.x = 871;
		t.y = 135;
		return t;
	};
	_proto._passLook_i = function () {
		var t = new UIPass2look();
		this._passLook = t;
		t.skinName = "pass2lookSkin";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return pass2_0Skin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/pass2/pass2_1Skin.exml'] = window.pass2_1Skin = (function (_super) {
	__extends(pass2_1Skin, _super);
	function pass2_1Skin() {
		_super.call(this);
		this.skinParts = ["actFTween","actPTween","actPErrTween","actFErrTween","_img_guang_f","_img_guang_p","_img_p","_img_f","_img_bear","_rightF","_rightP","_group_btn_p","_group_btn_f","_right0","_right2","_right4","_right5","_right1","_right3","_right6","_btn_home"];
		
		this.height = 750;
		this.width = 1334;
		this.actFTween_i();
		this.actPTween_i();
		this.actPErrTween_i();
		this.actFErrTween_i();
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._img_guang_f_i(),this._img_guang_p_i(),this._img_p_i(),this._img_f_i(),this._img_bear_i(),this._rightF_i(),this._rightP_i(),this._group_btn_p_i(),this._group_btn_f_i(),this._Rect1_i(),this._right0_i(),this._right2_i(),this._right4_i(),this._right5_i(),this._right1_i(),this._right3_i(),this._right6_i(),this._btn_home_i()];
		
		eui.Binding.$bindProperties(this, ["_img_guang_f"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, ["_img_guang_p"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object16,"alpha");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object17,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object18,"alpha");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object19,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object20,"alpha");
		eui.Binding.$bindProperties(this, ["_img_p"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [-10],[],this._Object21,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object22,"rotation");
		eui.Binding.$bindProperties(this, [10],[],this._Object23,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object24,"rotation");
		eui.Binding.$bindProperties(this, ["_img_f"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [-10],[],this._Object25,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object26,"rotation");
		eui.Binding.$bindProperties(this, [10],[],this._Object27,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object28,"rotation");
	}
	var _proto = pass2_1Skin.prototype;

	_proto.actFTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.actFTween = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i(),this._To4_i(),this._To5_i(),this._To6_i(),this._To7_i(),this._To8_i(),this._To9_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto.actPTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.actPTween = t;
		t.items = [this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To10_i(),this._To11_i(),this._To12_i(),this._To13_i(),this._To14_i(),this._To15_i(),this._To16_i(),this._To17_i(),this._To18_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._To14_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._To15_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto._To16_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto._To17_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object19_i();
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		this._Object19 = t;
		return t;
	};
	_proto._To18_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object20_i();
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		this._Object20 = t;
		return t;
	};
	_proto.actPErrTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.actPErrTween = t;
		t.items = [this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set3_i(),this._To19_i(),this._To20_i(),this._To21_i(),this._To22_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To19_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object21_i();
		return t;
	};
	_proto._Object21_i = function () {
		var t = {};
		this._Object21 = t;
		return t;
	};
	_proto._To20_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object22_i();
		return t;
	};
	_proto._Object22_i = function () {
		var t = {};
		this._Object22 = t;
		return t;
	};
	_proto._To21_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object23_i();
		return t;
	};
	_proto._Object23_i = function () {
		var t = {};
		this._Object23 = t;
		return t;
	};
	_proto._To22_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object24_i();
		return t;
	};
	_proto._Object24_i = function () {
		var t = {};
		this._Object24 = t;
		return t;
	};
	_proto.actFErrTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.actFErrTween = t;
		t.items = [this._TweenItem4_i()];
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set4_i(),this._To23_i(),this._To24_i(),this._To25_i(),this._To26_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To23_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object25_i();
		return t;
	};
	_proto._Object25_i = function () {
		var t = {};
		this._Object25 = t;
		return t;
	};
	_proto._To24_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object26_i();
		return t;
	};
	_proto._Object26_i = function () {
		var t = {};
		this._Object26 = t;
		return t;
	};
	_proto._To25_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object27_i();
		return t;
	};
	_proto._Object27_i = function () {
		var t = {};
		this._Object27 = t;
		return t;
	};
	_proto._To26_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object28_i();
		return t;
	};
	_proto._Object28_i = function () {
		var t = {};
		this._Object28 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_gamebg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "teqPass2_json.img_shadow3";
		t.x = 527;
		t.y = 492;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "teqPass2_json.img_shadow3";
		t.x = 87;
		t.y = 492;
		return t;
	};
	_proto._img_guang_f_i = function () {
		var t = new eui.Image();
		this._img_guang_f = t;
		t.source = "teqPass2_json.img_pass2_guang_f";
		t.x = 544;
		t.y = 144;
		return t;
	};
	_proto._img_guang_p_i = function () {
		var t = new eui.Image();
		this._img_guang_p = t;
		t.source = "teqPass2_json.img_pass2_guang_p";
		t.x = 160;
		t.y = 173;
		return t;
	};
	_proto._img_p_i = function () {
		var t = new eui.Image();
		this._img_p = t;
		t.anchorOffsetX = 140.5;
		t.anchorOffsetY = 374;
		t.source = "teqPass2_json.img_pass2_word_p";
		t.x = 275.5;
		t.y = 562;
		return t;
	};
	_proto._img_f_i = function () {
		var t = new eui.Image();
		this._img_f = t;
		t.anchorOffsetX = 118.5;
		t.anchorOffsetY = 388;
		t.source = "teqPass2_json.img_pass2_word_f";
		t.x = 660.5;
		t.y = 561;
		return t;
	};
	_proto._img_bear_i = function () {
		var t = new eui.Image();
		this._img_bear = t;
		t.source = "teqPass2_json.act_bear0";
		t.x = 871;
		t.y = 135;
		return t;
	};
	_proto._rightF_i = function () {
		var t = new eui.Group();
		this._rightF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 445;
		t.width = 297;
		t.x = 446.5;
		t.y = 130;
		return t;
	};
	_proto._rightP_i = function () {
		var t = new eui.Group();
		this._rightP = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 445;
		t.width = 297;
		t.x = 47.5;
		t.y = 131;
		return t;
	};
	_proto._group_btn_p_i = function () {
		var t = new eui.Group();
		this._group_btn_p = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 428;
		t.width = 287;
		t.x = 117;
		t.y = 141;
		return t;
	};
	_proto._group_btn_f_i = function () {
		var t = new eui.Group();
		this._group_btn_f = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 428;
		t.width = 287;
		t.x = 515;
		t.y = 141;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.44;
		t.ellipseWidth = 50;
		t.fillColor = 0x669933;
		t.height = 86;
		t.width = 650;
		t.x = 340.5;
		t.y = 636;
		return t;
	};
	_proto._right0_i = function () {
		var t = new eui.Image();
		this._right0 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "teqPass2_json.img_read2";
		t.x = 431;
		t.y = 662;
		return t;
	};
	_proto._right2_i = function () {
		var t = new eui.Image();
		this._right2 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "teqPass2_json.img_read2";
		t.x = 578;
		t.y = 662;
		return t;
	};
	_proto._right4_i = function () {
		var t = new eui.Image();
		this._right4 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "teqPass2_json.img_read2";
		t.x = 721;
		t.y = 662;
		return t;
	};
	_proto._right5_i = function () {
		var t = new eui.Image();
		this._right5 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "teqPass2_json.img_read2";
		t.x = 796;
		t.y = 662;
		return t;
	};
	_proto._right1_i = function () {
		var t = new eui.Image();
		this._right1 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "teqPass2_json.img_read1";
		t.x = 499;
		t.y = 657;
		return t;
	};
	_proto._right3_i = function () {
		var t = new eui.Image();
		this._right3 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "teqPass2_json.img_read1";
		t.x = 646;
		t.y = 657;
		return t;
	};
	_proto._right6_i = function () {
		var t = new eui.Image();
		this._right6 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "teqPass2_json.img_read1";
		t.x = 868;
		t.y = 657;
		return t;
	};
	_proto._btn_home_i = function () {
		var t = new eui.Image();
		this._btn_home = t;
		t.source = "btn_home_png";
		t.x = 48;
		t.y = 29;
		return t;
	};
	return pass2_1Skin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/pass2/pass2_2Skin.exml'] = window.pass2_2Skin = (function (_super) {
	__extends(pass2_2Skin, _super);
	function pass2_2Skin() {
		_super.call(this);
		this.skinParts = ["_img_p","_img_f","_right0","_right2","_right4","_right5","_right1","_right3","_right6","_btn_home"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._img_p_i(),this._img_f_i(),this._Image2_i(),this._Rect1_i(),this._right0_i(),this._right2_i(),this._right4_i(),this._right5_i(),this._right1_i(),this._right3_i(),this._right6_i(),this._btn_home_i()];
	}
	var _proto = pass2_2Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_gamebg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_p_i = function () {
		var t = new eui.Image();
		this._img_p = t;
		t.source = "teqPass2_json.img_pass2_word_p";
		t.x = 135;
		t.y = 188;
		return t;
	};
	_proto._img_f_i = function () {
		var t = new eui.Image();
		this._img_f = t;
		t.source = "teqPass2_json.img_pass2_word_f";
		t.x = 524;
		t.y = 173;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "teqPass2_json.act_bear0";
		t.x = 871;
		t.y = 135;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.44;
		t.ellipseWidth = 50;
		t.fillColor = 0x669933;
		t.height = 86;
		t.width = 650;
		t.x = 340.5;
		t.y = 636;
		return t;
	};
	_proto._right0_i = function () {
		var t = new eui.Image();
		this._right0 = t;
		t.source = "teqPass2_json.img_read2";
		t.x = 431;
		t.y = 662;
		return t;
	};
	_proto._right2_i = function () {
		var t = new eui.Image();
		this._right2 = t;
		t.source = "teqPass2_json.img_read2";
		t.x = 578;
		t.y = 662;
		return t;
	};
	_proto._right4_i = function () {
		var t = new eui.Image();
		this._right4 = t;
		t.source = "teqPass2_json.img_read2";
		t.x = 721;
		t.y = 662;
		return t;
	};
	_proto._right5_i = function () {
		var t = new eui.Image();
		this._right5 = t;
		t.source = "teqPass2_json.img_read2";
		t.x = 796.55;
		t.y = 662;
		return t;
	};
	_proto._right1_i = function () {
		var t = new eui.Image();
		this._right1 = t;
		t.source = "teqPass2_json.img_read1";
		t.x = 499;
		t.y = 657;
		return t;
	};
	_proto._right3_i = function () {
		var t = new eui.Image();
		this._right3 = t;
		t.source = "teqPass2_json.img_read1";
		t.x = 646.5;
		t.y = 657;
		return t;
	};
	_proto._right6_i = function () {
		var t = new eui.Image();
		this._right6 = t;
		t.source = "teqPass2_json.img_read1";
		t.x = 868;
		t.y = 657;
		return t;
	};
	_proto._btn_home_i = function () {
		var t = new eui.Image();
		this._btn_home = t;
		t.source = "btn_home_png";
		t.x = 48;
		t.y = 29;
		return t;
	};
	return pass2_2Skin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/pass2/pass2GameOverSkin.exml'] = window.pass2GameOverSkin = (function (_super) {
	__extends(pass2GameOverSkin, _super);
	function pass2GameOverSkin() {
		_super.call(this);
		this.skinParts = ["moneyTween","_money0","_money1","_money2","_money3","_money4","_money5","_img_box"];
		
		this.height = 750;
		this.width = 1334;
		this.moneyTween_i();
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["_money3"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [780],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [350.5],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [1025],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [75],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, ["_money4"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, [837],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [332],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"scaleY");
		eui.Binding.$bindProperties(this, [1025],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [75],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, ["_money5"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object5,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object5,"scaleY");
		eui.Binding.$bindProperties(this, [837],[],this._Object5,"x");
		eui.Binding.$bindProperties(this, [332],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"scaleY");
		eui.Binding.$bindProperties(this, [1025],[],this._Object6,"x");
		eui.Binding.$bindProperties(this, [75],[],this._Object6,"y");
	}
	var _proto = pass2GameOverSkin.prototype;

	_proto.moneyTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.moneyTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Wait1_i(),this._Set2_i(),this._To3_i(),this._To4_i()];
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 500;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Wait2_i(),this._Set3_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1000;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._money0_i(),this._money1_i(),this._money2_i(),this._money3_i(),this._money4_i(),this._money5_i(),this._img_box_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money_bg";
		t.x = 450;
		t.y = 610.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_penguin_1";
		t.x = 345;
		t.y = 530;
		return t;
	};
	_proto._money0_i = function () {
		var t = new eui.Image();
		this._money0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money";
		t.x = 535;
		t.y = 626;
		return t;
	};
	_proto._money1_i = function () {
		var t = new eui.Image();
		this._money1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money";
		t.x = 643;
		t.y = 626;
		return t;
	};
	_proto._money2_i = function () {
		var t = new eui.Image();
		this._money2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money";
		t.x = 751;
		t.y = 626;
		return t;
	};
	_proto._money3_i = function () {
		var t = new eui.Image();
		this._money3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money";
		t.x = 535;
		t.y = 626;
		return t;
	};
	_proto._money4_i = function () {
		var t = new eui.Image();
		this._money4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money";
		t.x = 643;
		t.y = 626;
		return t;
	};
	_proto._money5_i = function () {
		var t = new eui.Image();
		this._money5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money";
		t.x = 751;
		t.y = 626;
		return t;
	};
	_proto._img_box_i = function () {
		var t = new eui.Image();
		this._img_box = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teqPass2_json.img_pass2_box";
		t.x = 963;
		t.y = 0;
		return t;
	};
	return pass2GameOverSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/pass3/noteSkin.exml'] = window.noteSkin = (function (_super) {
	__extends(noteSkin, _super);
	function noteSkin() {
		_super.call(this);
		this.skinParts = ["noteTween","img_note0","img_note2","_group_note0","img_note1","img_note3","_group_note1","group"];
		
		this.height = 310;
		this.width = 319.5;
		this.noteTween_i();
		this.elementsContent = [this.group_i()];
		
		eui.Binding.$bindProperties(this, ["img_note0"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, ["img_note1"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, ["img_note2"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, ["img_note3"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"alpha");
	}
	var _proto = noteSkin.prototype;

	_proto.noteTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.noteTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._Wait1_i(),this._Set2_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 500;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set3_i(),this._Wait2_i(),this._Set4_i(),this._Wait3_i(),this._Set5_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 500;
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 500;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set6_i(),this._Wait4_i(),this._Set7_i(),this._Wait5_i(),this._Set8_i()];
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1000;
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Wait5_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 500;
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set9_i(),this._Wait6_i(),this._Set10_i(),this._Wait7_i(),this._Set11_i()];
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._Wait6_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1500;
		return t;
	};
	_proto._Set10_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._Wait7_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 500;
		return t;
	};
	_proto._Set11_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._group_note0_i(),this._group_note1_i()];
		return t;
	};
	_proto._group_note0_i = function () {
		var t = new eui.Group();
		this._group_note0 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img_note0_i(),this.img_note2_i()];
		return t;
	};
	_proto.img_note0_i = function () {
		var t = new eui.Image();
		this.img_note0 = t;
		t.horizontalCenter = 53.75;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "note_json.note0";
		t.verticalCenter = 93;
		return t;
	};
	_proto.img_note2_i = function () {
		var t = new eui.Image();
		this.img_note2 = t;
		t.horizontalCenter = 53.75;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "note_json.note6";
		t.verticalCenter = -31;
		return t;
	};
	_proto._group_note1_i = function () {
		var t = new eui.Group();
		this._group_note1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img_note1_i(),this.img_note3_i()];
		return t;
	};
	_proto.img_note1_i = function () {
		var t = new eui.Image();
		this.img_note1 = t;
		t.horizontalCenter = -53.25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "note_json.note2";
		t.verticalCenter = 31;
		return t;
	};
	_proto.img_note3_i = function () {
		var t = new eui.Image();
		this.img_note3 = t;
		t.horizontalCenter = -53.25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "note_json.note5";
		t.verticalCenter = -93;
		return t;
	};
	return noteSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/pass3/pass3lookSkin.exml'] = window.pass3lookSkin = (function (_super) {
	__extends(pass3lookSkin, _super);
	function pass3lookSkin() {
		_super.call(this);
		this.skinParts = ["_act_qe"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = pass3lookSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._act_qe_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_pass3_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._act_qe_i = function () {
		var t = new eui.Image();
		this._act_qe = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teqpass3_json.act_pass3_qe0";
		t.x = 537.5;
		t.y = 196;
		return t;
	};
	return pass3lookSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/pass3/pass3_0Skin.exml'] = window.pass3_0Skin = (function (_super) {
	__extends(pass3_0Skin, _super);
	function pass3_0Skin() {
		_super.call(this);
		this.skinParts = ["fplayTween","pplayTween","_imgwt_p","_imgwt_f","_img_qe","_img_people_f","_img_people_p","_notep","_groupPlayP","_notef","_groupPlayF","_note","_group_note","_nod_f","_nod_p","_btn_f","_btn_p","_img_hand","_passLook","_btn_home"];
		
		this.height = 750;
		this.width = 1334;
		this.fplayTween_i();
		this.pplayTween_i();
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["_img_hand"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1135.5],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [652],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [1120.5],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [625],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, [1135.5],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [652],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object4,"scaleX");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object4,"scaleY");
		eui.Binding.$bindProperties(this, [1120.5],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [625],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object5,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object5,"scaleY");
		eui.Binding.$bindProperties(this, [1135.5],[],this._Object5,"x");
		eui.Binding.$bindProperties(this, [652],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object6,"scaleX");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object6,"scaleY");
		eui.Binding.$bindProperties(this, [1120.5],[],this._Object6,"x");
		eui.Binding.$bindProperties(this, [625],[],this._Object6,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object7,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object7,"scaleY");
		eui.Binding.$bindProperties(this, [1135.5],[],this._Object7,"x");
		eui.Binding.$bindProperties(this, [652],[],this._Object7,"y");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object8,"scaleX");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object8,"scaleY");
		eui.Binding.$bindProperties(this, [1120.5],[],this._Object8,"x");
		eui.Binding.$bindProperties(this, [625],[],this._Object8,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"scaleY");
		eui.Binding.$bindProperties(this, [1135.5],[],this._Object9,"x");
		eui.Binding.$bindProperties(this, [652],[],this._Object9,"y");
		eui.Binding.$bindProperties(this, ["_img_hand"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object10,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object10,"scaleY");
		eui.Binding.$bindProperties(this, [203.5],[],this._Object10,"x");
		eui.Binding.$bindProperties(this, [652],[],this._Object10,"y");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object11,"scaleX");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object11,"scaleY");
		eui.Binding.$bindProperties(this, [188.5],[],this._Object11,"x");
		eui.Binding.$bindProperties(this, [625],[],this._Object11,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object12,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object12,"scaleY");
		eui.Binding.$bindProperties(this, [203.5],[],this._Object12,"x");
		eui.Binding.$bindProperties(this, [652],[],this._Object12,"y");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object13,"scaleX");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object13,"scaleY");
		eui.Binding.$bindProperties(this, [188.5],[],this._Object13,"x");
		eui.Binding.$bindProperties(this, [625],[],this._Object13,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object14,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object14,"scaleY");
		eui.Binding.$bindProperties(this, [203.5],[],this._Object14,"x");
		eui.Binding.$bindProperties(this, [652],[],this._Object14,"y");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object15,"scaleX");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object15,"scaleY");
		eui.Binding.$bindProperties(this, [188.5],[],this._Object15,"x");
		eui.Binding.$bindProperties(this, [625],[],this._Object15,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object16,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object16,"scaleY");
		eui.Binding.$bindProperties(this, [203.5],[],this._Object16,"x");
		eui.Binding.$bindProperties(this, [652],[],this._Object16,"y");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object17,"scaleX");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object17,"scaleY");
		eui.Binding.$bindProperties(this, [188.5],[],this._Object17,"x");
		eui.Binding.$bindProperties(this, [625],[],this._Object17,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object18,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object18,"scaleY");
		eui.Binding.$bindProperties(this, [203.5],[],this._Object18,"x");
		eui.Binding.$bindProperties(this, [652],[],this._Object18,"y");
	}
	var _proto = pass3_0Skin.prototype;

	_proto.fplayTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.fplayTween = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i(),this._To4_i(),this._To5_i(),this._To6_i(),this._To7_i(),this._To8_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto.pplayTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.pplayTween = t;
		t.items = [this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To9_i(),this._To10_i(),this._To11_i(),this._To12_i(),this._To13_i(),this._To14_i(),this._To15_i(),this._To16_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._To14_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._To15_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto._To16_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._imgwt_p_i(),this._imgwt_f_i(),this._img_qe_i(),this._img_people_f_i(),this._img_people_p_i(),this._groupPlayP_i(),this._groupPlayF_i(),this._group_note_i(),this._nod_f_i(),this._nod_p_i(),this._btn_f_i(),this._btn_p_i(),this._img_hand_i(),this._passLook_i(),this._btn_home_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "img_pass3_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._imgwt_p_i = function () {
		var t = new eui.Image();
		this._imgwt_p = t;
		t.bottom = 106;
		t.source = "teqpass3_json.img_wtP0";
		t.x = 310;
		return t;
	};
	_proto._imgwt_f_i = function () {
		var t = new eui.Image();
		this._imgwt_f = t;
		t.bottom = 105;
		t.source = "teqpass3_json.img_wtF0";
		t.x = 845;
		return t;
	};
	_proto._img_qe_i = function () {
		var t = new eui.Image();
		this._img_qe = t;
		t.source = "teqpass3_json.img_pass3_qe_bg";
		t.x = 521;
		t.y = 242;
		return t;
	};
	_proto._img_people_f_i = function () {
		var t = new eui.Image();
		this._img_people_f = t;
		t.source = "teqpass3_json.img_pass3_f_ready";
		t.x = 877;
		t.y = 359;
		return t;
	};
	_proto._img_people_p_i = function () {
		var t = new eui.Image();
		this._img_people_p = t;
		t.source = "teqpass3_json.img_pass3_p_ready";
		t.x = 337;
		t.y = 363;
		return t;
	};
	_proto._groupPlayP_i = function () {
		var t = new eui.Group();
		this._groupPlayP = t;
		t.anchorOffsetY = 0;
		t.height = 258;
		t.width = 200;
		t.x = 291;
		t.y = 321;
		t.elementsContent = [this._notep_i()];
		return t;
	};
	_proto._notep_i = function () {
		var t = new UINote();
		this._notep = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "noteSkin";
		t.x = -41;
		t.y = -12;
		return t;
	};
	_proto._groupPlayF_i = function () {
		var t = new eui.Group();
		this._groupPlayF = t;
		t.anchorOffsetY = 0;
		t.height = 251;
		t.width = 139;
		t.x = 786;
		t.y = 335;
		t.elementsContent = [this._notef_i()];
		return t;
	};
	_proto._notef_i = function () {
		var t = new UINote();
		this._notef = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "noteSkin";
		t.x = -33;
		t.y = -16;
		return t;
	};
	_proto._group_note_i = function () {
		var t = new eui.Group();
		this._group_note = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._note_i()];
		return t;
	};
	_proto._note_i = function () {
		var t = new UINote();
		this._note = t;
		t.skinName = "noteSkin";
		t.x = 392;
		t.y = 103;
		return t;
	};
	_proto._nod_f_i = function () {
		var t = new eui.Image();
		this._nod_f = t;
		t.bottom = 9;
		t.horizontalCenter = 270;
		t.scaleY = 1;
		t.source = "teqpass3_json.img_f_nod1";
		return t;
	};
	_proto._nod_p_i = function () {
		var t = new eui.Image();
		this._nod_p = t;
		t.horizontalCenter = -263;
		t.source = "teqpass3_json.img_p_nod1";
		t.verticalCenter = 137;
		return t;
	};
	_proto._btn_f_i = function () {
		var t = new eui.Image();
		this._btn_f = t;
		t.height = 176;
		t.horizontalCenter = 468.5;
		t.source = "teqpass3_json.btn_pass3_f_up";
		t.verticalCenter = 260;
		t.width = 175;
		return t;
	};
	_proto._btn_p_i = function () {
		var t = new eui.Image();
		this._btn_p = t;
		t.height = 176;
		t.horizontalCenter = -467.5;
		t.source = "teqpass3_json.btn_pass3_p_up";
		t.verticalCenter = 260;
		t.width = 175;
		return t;
	};
	_proto._img_hand_i = function () {
		var t = new eui.Image();
		this._img_hand = t;
		t.source = "teqpass3_json.img_pass3_hand";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 1179.5;
		t.y = 430.5;
		return t;
	};
	_proto._passLook_i = function () {
		var t = new UIPass3look();
		this._passLook = t;
		t.skinName = "pass3lookSkin";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._btn_home_i = function () {
		var t = new eui.Image();
		this._btn_home = t;
		t.source = "btn_home_png";
		t.x = 48;
		t.y = 29;
		return t;
	};
	return pass3_0Skin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/pass3/pass3GameOverSkin.exml'] = window.pass3GameOverSkin = (function (_super) {
	__extends(pass3GameOverSkin, _super);
	function pass3GameOverSkin() {
		_super.call(this);
		this.skinParts = ["moneyTween","_money0","_money1","_money2","_money3","_money4","_money5","_img_box"];
		
		this.height = 750;
		this.width = 1334;
		this.moneyTween_i();
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["_money3"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [780],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [350.5],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [1025],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [75],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, ["_money4"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, [837],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [332],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"scaleY");
		eui.Binding.$bindProperties(this, [1025],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [75],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, ["_money5"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object5,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object5,"scaleY");
		eui.Binding.$bindProperties(this, [837],[],this._Object5,"x");
		eui.Binding.$bindProperties(this, [332],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"scaleY");
		eui.Binding.$bindProperties(this, [1025],[],this._Object6,"x");
		eui.Binding.$bindProperties(this, [75],[],this._Object6,"y");
	}
	var _proto = pass3GameOverSkin.prototype;

	_proto.moneyTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.moneyTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Wait1_i(),this._Set2_i(),this._To3_i(),this._To4_i()];
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 500;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Wait2_i(),this._Set3_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1000;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._money0_i(),this._money1_i(),this._money2_i(),this._money3_i(),this._money4_i(),this._money5_i(),this._img_box_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money_bg";
		t.x = 450;
		t.y = 610.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_penguin_1";
		t.x = 345;
		t.y = 530;
		return t;
	};
	_proto._money0_i = function () {
		var t = new eui.Image();
		this._money0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money";
		t.x = 535;
		t.y = 626;
		return t;
	};
	_proto._money1_i = function () {
		var t = new eui.Image();
		this._money1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money";
		t.x = 643;
		t.y = 626;
		return t;
	};
	_proto._money2_i = function () {
		var t = new eui.Image();
		this._money2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money";
		t.x = 751;
		t.y = 626;
		return t;
	};
	_proto._money3_i = function () {
		var t = new eui.Image();
		this._money3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money";
		t.x = 535;
		t.y = 626;
		return t;
	};
	_proto._money4_i = function () {
		var t = new eui.Image();
		this._money4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money";
		t.x = 643;
		t.y = 626;
		return t;
	};
	_proto._money5_i = function () {
		var t = new eui.Image();
		this._money5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teq_json.img_money";
		t.x = 751;
		t.y = 626;
		return t;
	};
	_proto._img_box_i = function () {
		var t = new eui.Image();
		this._img_box = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "teqPass2_json.img_pass2_box";
		t.x = 963;
		t.y = 0;
		return t;
	};
	return pass3GameOverSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/playSkin.exml'] = window.playSkin = (function (_super) {
	__extends(playSkin, _super);
	function playSkin() {
		_super.call(this);
		this.skinParts = ["_btnTween","balloonTween","_img_title","_img_balloon1","_img_balloon2","_img_balloon3","_btn_play","_group_play"];
		
		this.height = 750;
		this.width = 1334;
		this._btnTween_i();
		this.balloonTween_i();
		this.elementsContent = [this._Image1_i(),this._img_title_i(),this._img_balloon1_i(),this._img_balloon2_i(),this._img_balloon3_i(),this._btn_play_i(),this._group_play_i()];
		
		eui.Binding.$bindProperties(this, ["_btn_play"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [0.8],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"scaleY");
		eui.Binding.$bindProperties(this, ["_img_balloon1"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [-3],[],this._Object5,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"rotation");
		eui.Binding.$bindProperties(this, [3],[],this._Object7,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"rotation");
		eui.Binding.$bindProperties(this, ["_img_balloon2"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [-3],[],this._Object9,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"rotation");
		eui.Binding.$bindProperties(this, [3],[],this._Object11,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"rotation");
		eui.Binding.$bindProperties(this, ["_img_balloon3"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [-3],[],this._Object13,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object14,"rotation");
		eui.Binding.$bindProperties(this, [3],[],this._Object15,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object16,"rotation");
	}
	var _proto = playSkin.prototype;

	_proto._btnTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this._btnTween = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 1500;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto.balloonTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.balloonTween = t;
		t.items = [this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To4_i(),this._To5_i(),this._To6_i(),this._To7_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set3_i(),this._To8_i(),this._To9_i(),this._To10_i(),this._To11_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set4_i(),this._To12_i(),this._To13_i(),this._To14_i(),this._To15_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._To14_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._To15_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_loadingbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._img_title_i = function () {
		var t = new eui.Image();
		this._img_title = t;
		t.anchorOffsetX = 428;
		t.anchorOffsetY = 165;
		t.source = "teq_json.title_loading";
		t.x = 684;
		t.y = 338;
		return t;
	};
	_proto._img_balloon1_i = function () {
		var t = new eui.Image();
		this._img_balloon1 = t;
		t.anchorOffsetX = 108.5;
		t.anchorOffsetY = 287;
		t.source = "teq_json.img_balloon_1";
		t.x = 190.5;
		t.y = 750;
		return t;
	};
	_proto._img_balloon2_i = function () {
		var t = new eui.Image();
		this._img_balloon2 = t;
		t.anchorOffsetX = 31.5;
		t.anchorOffsetY = 93;
		t.source = "teq_json.img_balloon_3";
		t.x = 404.5;
		t.y = 136;
		return t;
	};
	_proto._img_balloon3_i = function () {
		var t = new eui.Image();
		this._img_balloon3 = t;
		t.anchorOffsetX = 201.5;
		t.anchorOffsetY = 403;
		t.source = "teq_json.img_balloon_2";
		t.x = 1108.5;
		t.y = 403;
		return t;
	};
	_proto._btn_play_i = function () {
		var t = new eui.Image();
		this._btn_play = t;
		t.anchorOffsetX = 99;
		t.anchorOffsetY = 89.5;
		t.source = "teq_json.btn_play";
		t.x = 658;
		t.y = 591.5;
		return t;
	};
	_proto._group_play_i = function () {
		var t = new eui.Group();
		this._group_play = t;
		t.height = 200;
		t.width = 200;
		t.x = 562;
		t.y = 496;
		return t;
	};
	return playSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ui/testSkin.exml'] = window.testSkin = (function (_super) {
	__extends(testSkin, _super);
	function testSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = testSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_jpg";
		t.top = 0;
		return t;
	};
	return testSkin;
})(eui.Skin);