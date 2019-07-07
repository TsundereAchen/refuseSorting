class Find extends eui.Component{


		edText: eui.EditableText;
		findBtn: eui.Button;

		public constructor() {
			super();
            this.skinName="resource/eui_skins/model/FindSkin.exml";
            this.findBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.get,this)
		}

        get() {
             this.$GET("http://120.79.15.183:8080/myssmp/Rubbish/SelectRubbish?rubbish_name=纸巾"); 
             egret.getOption()
        }

        public $GET(name:string) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = location.search.substr(1).match(reg);
            if (r != null) return decodeURI(decodeURIComponent(decodeURI(r[2]))); return null;
        }
}