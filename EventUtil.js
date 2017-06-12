/**
 * Created by w8717 on 06/11/0011.
 */
    var EventUtil = {
  //  添加事件
      addHandler: function(element,type,handler) {
          if (element.addEventListener) {
              element.addEventListener(type,handler,false);
          }else if (element.attachEvent) {
              element.attachEvent("on"+type,handler);
          }else {
              element["on"+type] = handler;
          }
      },
    // 移除事件
      removeHandler: function(element,type,handler) {
          if(element.removeEventListener) {
              element.removeEventListener(type,handler,false);
          }else if(element.detachEvent) {
              element.detachEvent("on"+type,handler);
          }else {
              element["on"+type] = handler;
          }
      },
    //获取事件对象
      getEvent: function(event) {
          return event?event: window.event;
      },
    //    获取事件目标
      getTarget: function(event) {
          return event.target || event.srcElement;
      },
    //    取消事件
      preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }else {
            event.returnValue = false;
        }
      },
    //    阻止事件
      stopPropagation: function(event) {
        if(event.stopPropagation) {
            event.stopPropagation();
        }else {
            event.cancelBubble = true;
        }
      },
    // 光标事件
      getRelatedTarget: function(event) {
        if(event.relatedTarget) {
            return event.relatedTarget;
        }else if(event.toElement) {
            return event.toElement;
        }else if(event.fromElement) {
            return event.fromElement;
        }else {
            return null;
        }
      },
       // 滚轮事件
      getWheelDelta: function(event) {
        if(event.wheelDelta) {
            return (client.engine.opera && client.engine.opera <9.5?-event.wheelDelta:event.wheelDelta);
        }else {
            return -event.detail * 40;
        }
      },
        // 按钮事件
      getButton: function(event) {
        if(document.implementation.hasFeature("MouseEvent","2.0")) {
            return event.button;
        }else {
            switch(event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
      },
       //键盘事件
      getCharCode:function(event) {
        if(typeof event.charCode == "number") {
            return event.charCode;
        }else {
            return event.keyCode;
        }
      }
    };


































