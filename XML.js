/* 
 *跨浏览器处理XML
 */ 

// 解析XML
// 接受一个xml字符串
function parseXml(xml) {
	var xmldom = null;
	// 判断浏览器是否是IE，非IE执行下面
	if(typeof DOMParser != "undefined") {
		// 创建DOMParser实例对象并将xml转换为dom
		xmldom = (new DOMParser()).parseFromString(xml,"text/xml");
		// 看看dom中是否含有错误
		var errors = xmldom.getElementsByTagName("parsererror");
		if(errors.length) {
			throw new Error("XML parseing error:" +errors[0].textContent);
		}
		// 是IE执行下面
	}else if(typrof ActiveXObject != "undefined") {
		// 创建dom文档
		xmldom = creatsDocument();
		// 加载xml字符串
		xmldom.loadXML(xml);
		// 看看xml字符串时候含有错误
		if(xmldom.parseError != 0) {
			throw new Error("XML parsing error:" + xmldom.parseError.reason);
		}
	}else {
    	throw new Error("No XML parser available.");
	}
	return xmldom;
}

// 创建IE的activeXObjecet识别版本

function createDocument() {
	if (typeof arguments.callee.ActiveXObject != "string") {
		var versions = ["MSXML2.DOMDocument.6.0",
		                 "MSXML2.DOMDocument.3.0",
		                 "MSXML2.DOMDocument"],
		i,
		len;
    for (var i = 0;len = versions.length;i<len;i++) {
    	try {
    		new ActiveXObject(versions[i]);
    		arguments.callee.ActiveXObject = versions[i];
    		break;
    	}catch(e) {
          // 跳过
    	}
    }
    	return new ActiveXObject(arguments.callee.ActiveXString);
}


// 序列化xml
function serializeXml(xmldom) {
	if (typeof XMlSerializer != "undefined") {
		return (new XMLSreializer().serializerToString(xmldom));
	}else if(typeof xmldom.xml != "undefined") {
		return xmldom.xml;
	}else {
		throw new Error("Could not serializer XML DOM");
	}
}
























