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
var Find = (function (_super) {
    __extends(Find, _super);
    function Find() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/model/FindSkin.exml";
        return _this;
    }
    return Find;
}(eui.Component));
__reflect(Find.prototype, "Find");
//# sourceMappingURL=Find.js.map