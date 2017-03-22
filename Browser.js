/**
 * Created by w8717 on 03/22/0022.
 */
var client = function () {
  //呈现引擎
    var engine = {
        opera : false,
        webkit : false,
        gecko : false,
        khtml : false,
        ie : false
    };
    //浏览器
    var browser = {
        opera : false,
        chrome : false,
        firefox : false,
        safari :false,
        ie : false,
        konq: false,

        //具体版本号
        ver : null
    };
    //平台、设备和操作系统
    var sysytem = {
        win : false,
        mac : false,
        x11 : false,

        //移动设备
        iphone :false,
        ipod : false,
        ipad :false,
        ios : false,
        andriod : false,

        //游戏系统
        wii : false,
        playstation : false
    };
    //检测呈现引擎和浏览器
    var ua = navigator.userAgent;
    if (/AppleWebKit\/(\S+)/.test(ua)){
        engine.ver = RegExp["$1"];
        engine.webkit = parseFloat(engine.ver);
        //确定是chrome还是safari还是opera
        if (/Chrome\/(\S+)/.test(ua)){
            browser.ver = RegExp["$1"];
            browser.chrome = parseFloat(browser.ver);
        }else if (/OPR\/(\S+)/.test(ua)){
            browser.ver = RegExp["$1"];
            browser.opera = parseFloat(browser.ver);
        }else if(/Version\/(\S+)/.test(ua)){
            browser.ver = RegExp["$1"];
            browser.safari = parseFloat(browser.ver);
        //确定gecko内核
    }else if(/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){
        engine.ver = RegExp["$1"];
        engine.gecko = parseFloat(engine.ver);
        //确定firefox浏览器
        if (/Firefox\/(\S+)/.test(ua)){
            browser.ver = RegExp["$1"];
            browser.firefox = parseFloat(browser.ver);
        }
    }else if(/KHTML\/(\S+)/.test(ua)||/Konqueror\/([^;]+)/.test(ua)){
        engine.ver = browser.ver =  RegExp["$1"];
        engine.khtml = browser.konq = parseFloat(engine.ver);
    }else if (/MSIE([^;]+)/.test(ua)){
        engine.ver = browser.ver = RegExp["$1"];
        engine.ie = browser.ie = parseFloat(engine.ver);
    }

    //检测浏览器
        browser.ie = engine.ie;
    var p = navigator.platform;
    sysytem.win = p.indexOf("Win") == 0;
    sysytem.mac = p.indexOf("mac") == 0;
    sysytem.x11 = (p.indexOf("Linux") == 0) || (p == "X11");

    //检测windows操作系统
        if (sysytem.win){
            if (/Win(?:dows )?([^do{2}])\s?(\d+\.\d+)?/.test(ua)){
                if (RegExp["$2"] == "NT"){
                    switch (RegExp["$2"]){
                        case "5.0":
                            sysytem.win = "2000";
                            break;
                        case "5.1":
                            sysytem.win = "XP";
                            break;
                        case "6.0":
                            sysytem.win = "Vista";
                            break;
                        case "6.1":
                            sysytem.win = "7";
                            break;
                        default:
                            sysytem.win = "NT";
                            break;
                    }
                }else if (RegExp["$1"] == "9x"){
                    sysytem.win = "ME";
                }else {
                    sysytem.win = RegExp["$1"];
                }
            }
        }
        //检测移动设备
        sysytem.iphone = ua.indexOf("iphone") > -1;
        sysytem.ipod = ua.indexOf("ipod") > -1;
        sysytem.ipad = ua.indexOf("ipad") > -1;

        //iOS设备
        if (sysytem.mac && ua.indexOf("Mobile")>-1){
            if (/CPU(?:iPhone)?OS(\d+_\d)/.test(ua)){
                sysytem.ios = parseFloat(RegExp["$1"].replace("_","."));
            }else{
                sysytem.ios = 2;       //不能真正检测出来，所以只能猜测
            }
        }
        //检测android
        if(/Android(\d+\.\d+)/.test(ua)){
            sysytem.andriod = parseFloat(RegExp["$1"]);
        }
        //游戏系统
        sysytem.wii = ua.indexOf("wii")>-1;
        sysytem.playstation = /playstation/i.test(ua)

        //返回这些对象
        return{
            engine : engine,
            browser : browser,
            system : sysytem
        };
    }
}();








































































