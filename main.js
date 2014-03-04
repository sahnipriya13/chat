var http=require('http'),fs=require('fs');
var mysql      = require('mysql');
var app=http.createServer(function(request,response)
{
fs.readFile("client1.html",'utf-8',function(error,data){
response.writeHead(200,{'content-type':'text/html'});
response.write(data);
response.end();
});
}).listen(80);

var io=require('socket.io').listen(app);
io.sockets.on('connection',function(socket){
socket.on('message_to_server',function(data){
var trans = JSON.parse(data);
var m = trans['e'];
var n = trans['f'];
var o = trans['g'];
var p = trans['h'];
var q=trans['i'];
console.log(m);
				var a = m;
				var b=n;
				var s=o;
				var c =q;
				var d = p;
				console.log(a);
				var obj = {e:a,f:b,g:c,h:d,i:s};
           var jsonData = JSON.stringify(obj);
io.sockets.emit('message_to_client',jsonData);
});
});