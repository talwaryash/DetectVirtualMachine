var canvas = document.createElement('canvas');
var gl = canvas.getContext('webgl');

var debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
var vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
var renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

console.log(vendor);
console.log(renderer);
if (renderer.indexOf("VMware") != -1) { 
	alert ('VirtualBox Detected!!')
}
if (renderer.indexOf ("VirtualBox") != -1){ 
	alert ('VirtualBox Detected!')
} 
if (renderer.indexOf ("VBox") != -1){ 
	alert ('VirtualBox Detected!')
} 
if (renderer.indexOf ("Google") != -1){ 
	alert ('VirtualBox Detected! Do not use Google swiftshader')
} 
if (renderer.indexOf ("Microsoft Basic") != -1){ 
	alert ('VirtualBox Detected! You are using Microsoft Basic Display Adapter')
} 
if (renderer.indexOf ("VM") != -1){ 
	alert ('VirtualBox Detected!')
} 
if (renderer.indexOf ("Intel") != -1){
	alert ('You are using Intel Display Adapter, No VM detected!')
} 
if (renderer.indexOf ("NVIDIA") != -1){
	alert ('You are using NVIDIA Display Adapter, No VM detected!')
} 
if (renderer.indexOf ("AMD") != -1){
	alert ('You are using AMD Display Adapter, No VM detected!')
} 
if (renderer.indexOf ("Mali") != -1){
	alert ('You are using Android Device, No VM detected!')
} 
if (renderer.indexOf ("Adreno") != -1){
	alert ('You are using Android Device, No VM detected!')
} 
if (renderer.indexOf ("Apple") != -1){
	alert ('You are using Apple Device, No VM detected!')
} 

