/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-08-19 17:49:55
 * @version $Id$
 */
var newzCtrl=angular.module("newzCtrl",[]);
newzCtrl.controller("globalCtrl",["$scope","$location","Http","View",function($scope,$location,Http,View){
    $scope.width=View.width;
    $scope.height=View.height;
    $scope.bl=View.bl;
    // $scope.img=totalhard[10];
	
}]);


newzCtrl.controller("WhtCtrl",function($scope,$location,View){
	// alert("kk");
    $scope.width=View.width;
    $scope.radio2=View.radio;
// 	var width=View.width,
// 	    radio2=View.radio,
// 	    wan=document.getElementById("wan");

// 	    // alert(wan);


// 	    (function () {
//     var DragDrop, Kaleidoscope, c, dragger, gui, i, image, kaleidoscope, len, onChange, onMouseMoved, options, ref, tr, tx, ty, update, bind = function (fn, me) {
//             return function () {
//                 return fn.apply(me, arguments);
//             };
//         };
//     Kaleidoscope = function () {
//         Kaleidoscope.prototype.HALF_PI = Math.PI / 2;
//         Kaleidoscope.prototype.TWO_PI = Math.PI * 2;
//         function Kaleidoscope(options1) {
//             var key, ref, ref1, val;
//             this.options = options1 != null ? options1 : {};
//             this.defaults = {
//                 offsetRotation: 0,
//                 offsetScale: 1,
//                 offsetX: 0,
//                 offsetY: 0,
//                 radius: radio2,
//                 slices: 12,
//                 zoom: 1
//             };
//             ref = this.defaults;
//             for (key in ref) {
//                 if (window.CP.shouldStopExecution(1)) {
//                     break;
//                 }
//                 val = ref[key];
//                 this[key] = val;
//             }
//             window.CP.exitedLoop(1);
//             ref1 = this.options;
//             for (key in ref1) {
//                 if (window.CP.shouldStopExecution(2)) {
//                     break;
//                 }
//                 val = ref1[key];
//                 this[key] = val;
//             }
//             window.CP.exitedLoop(2);
//             if (this.domElement == null) {
//                 this.domElement = document.createElement('canvas');
//             }
//             if (this.context == null) {
//                 this.context = this.domElement.getContext('2d');
//             }
//             if (this.image == null) {
//                 this.image = document.createElement('img');
//             }
//         }
//         Kaleidoscope.prototype.draw = function () {
//             var cx, i, index, ref, results, scale, step;
//             this.domElement.width = this.domElement.height = this.radius * 2;
//             this.context.fillStyle = this.context.createPattern(this.image, 'repeat');
//             scale = this.zoom * (this.radius / Math.min(this.image.width, this.image.height));
//             step = this.TWO_PI / this.slices;
//             cx = this.image.width / 2;
//             results = [];
//             for (index = i = 0, ref = this.slices; 0 <= ref ? i <= ref : i >= ref; index = 0 <= ref ? ++i : --i) {
//                 if (window.CP.shouldStopExecution(3)) {
//                     break;
//                 }
//                 this.context.save();
//                 this.context.translate(this.radius, this.radius);
//                 this.context.rotate(index * step);
//                 this.context.beginPath();
//                 this.context.moveTo(-0.5, -0.5);
//                 this.context.arc(0, 0, this.radius, step * -0.51, step * 0.51);
//                 this.context.lineTo(0.5, 0.5);
//                 this.context.closePath();
//                 this.context.rotate(this.HALF_PI);
//                 this.context.scale(scale, scale);
//                 this.context.scale([
//                     -1,
//                     1
//                 ][index % 2], 1);
//                 this.context.translate(this.offsetX - cx, this.offsetY);
//                 this.context.rotate(this.offsetRotation);
//                 this.context.scale(this.offsetScale, this.offsetScale);
//                 this.context.fill();
//                 results.push(this.context.restore());
//             }
//             window.CP.exitedLoop(3);
//             return results;
//         };
//         return Kaleidoscope;
//     }();
//     // DragDrop = function () {
//     //     function DragDrop(callback, context, filter) {
//     //         var disable;
//     //         this.callback = callback;
//     //         this.context = context != null ? context : document;
//     //         this.filter = filter != null ? filter : /^image/i;
//     //         this.onDrop = bind(this.onDrop, this);
//     //         disable = function (event) {
//     //             event.stopPropagation();
//     //             return event.preventDefault();
//     //         };
//     //         this.context.addEventListener('dragleave', disable);
//     //         this.context.addEventListener('dragenter', disable);
//     //         this.context.addEventListener('dragover', disable);
//     //         this.context.addEventListener('drop', this.onDrop, false);
//     //     }
//     //     DragDrop.prototype.onDrop = function (event) {
//     //         var file, reader;
//     //         event.stopPropagation();
//     //         event.preventDefault();
//     //         file = event.dataTransfer.files[0];
//     //         if (this.filter.test(file.type)) {
//     //             reader = new FileReader();
//     //             reader.onload = function (_this) {
//     //                 return function (event) {
//     //                     return typeof _this.callback === 'function' ? _this.callback(event.target.result) : void 0;
//     //                 };
//     //             }(this);
//     //             return reader.readAsDataURL(file);
//     //         }
//     //     };
//     //     return DragDrop;
//     // }();
//     image = new Image();
//     image.onload = function (_this) {
//         return function () {
//             return kaleidoscope.draw();
//         };
//     }(this);
//     image.src = 'file/skycouch.png';
//     kaleidoscope = new Kaleidoscope({
//         image: image,
//         slices: 20
//     });
//     kaleidoscope.domElement.style.position = 'absolute';
//     kaleidoscope.domElement.style.marginLeft = -kaleidoscope.radius + 'px';
//     kaleidoscope.domElement.style.marginTop = -kaleidoscope.radius + 'px';
//     kaleidoscope.domElement.style.left = '50%';
//     kaleidoscope.domElement.style.top = '50%';
//     kaleidoscope.domElement.style.zIndex = 100;
//     // alert("kk");


//     wan.appendChild(kaleidoscope.domElement);
//     // dragger = new DragDrop(function (data) {
//     //     return kaleidoscope.image.src = data;
//     // });
//     tx = kaleidoscope.offsetX;
//     ty = kaleidoscope.offsetY;
//     tr = kaleidoscope.offsetRotation;
//     // onMouseMoved = function (_this) {
//     //     return function (event) {
//     //         var cx, cy, dx, dy, hx, hy;
//     //         cx = window.innerWidth / 2;
//     //         cy = window.innerHeight / 2;
//     //         dx = event.pageX / window.innerWidth;
//     //         dy = event.pageY / window.innerHeight;
//     //         hx = dx - 0.5;
//     //         hy = dy - 0.5;
//     //         tx = hx * kaleidoscope.radius * -2;
//     //         ty = hy * kaleidoscope.radius * 2;
//     //         return tr = Math.atan2(hy, hx);
//     //     };
//     // }(this);
//     var speedX=0,
//         speedY=0,
//         interval=8,
//         tz=true,
//         num_arr=[];

//     var inArr=function(arr,num){
//         for(var i=0;i<arr.length;i++){
//             if(parseInt(arr[i])==num){
//                 // num=Math.ceil(Math.random()*20);
//                 return true;
//             }
//         }
//         return false;
//     }


//     var getRandom=function(){
//         var num=Math.floor(Math.random()*2);
//         alert(num);
//         if(!sessionStorage["num"]){
//             // alert("no session");
//             num_arr.push(num);
//             sessionStorage.num=JSON.stringify(num_arr);
//             return num;
//         }
//         else{
//             num_arr=JSON.parse(sessionStorage["num"]);
//             var length=num_arr.length;
//             // alert(length);

//             if(length<2){
//                 var result=inArr(num_arr,num);
//                 if(result){
//                     // alert("ll");
//                     getRandom();
//                 }
//                 else{
//                     num_arr.push(num);
//                     sessionStorage.num=JSON.stringify(num_arr);
//                     // alert(sessionStorage.num);
//                     return num;
//                 }
//             }
//             else{
//                 sessionStorage.num="";
//                 num_arr=[];
//                 num_arr.push(num);
//                 sessionStorage.num=JSON.stringify(num_arr);
//                 return num;
//             }
//         }
//     }

//     var set=function(){
//         tz=false;
//         var num=getRandom();
//         var timer=setTimeout(function(){
//             // alert(sessionStorage.num);
//             // alert(num);
//             var url=$location.absUrl();
//             var endurl="page/"+num;
//             url=url.replace("wht",endurl);
//             window.location.href=url;
//             // tz=true;
//         },3000);
//     }
//     onMation = function (_this) {
//         return function (event) {
//             var cx, cy, dx, dy, hx, hy;
//             cx = window.innerWidth / 2;
//             cy = window.innerHeight / 2;
//             var acc=event.accelerationIncludingGravity;
//             var aX=acc.x;
//             var aY=acc.y;
//             var distanceX=speedX*interval+(aX*Math.pow(interval,2))/2;
//             var distanceY=speedY*interval+(aY*Math.pow(interval,2))/2;
//             dx = distanceX / window.innerWidth;
//             dy = distanceY / window.innerHeight;
//             hx = dx - 0.5;
//             hy = dy - 0.5;
//             tx = hx * kaleidoscope.radius * -2;
//             ty = hy * kaleidoscope.radius * 2;
//             speedX=aX*interval;
//             speedY=aY*interval;
//             if(Math.abs(aX)>3&&tz){
//                 set();
//             }
//             return tr = Math.atan2(hy, hx);
//         };
//     }(this);
//     // window.addEventListener('mousemove', onMouseMoved, false);
//     window.addEventListener("devicemotion",onMation,false);
//     options = {
//         interactive: true,
//         ease: 0.1
//     };
//     (update = function (_this) {
//         return function () {
//             var delta, theta;
//             if (options.interactive) {
//                 delta = tr - kaleidoscope.offsetRotation;
//                 theta = Math.atan2(Math.sin(delta), Math.cos(delta));
//                 kaleidoscope.offsetX += (tx - kaleidoscope.offsetX) * options.ease;
//                 kaleidoscope.offsetY += (ty - kaleidoscope.offsetY) * options.ease;
//                 kaleidoscope.offsetRotation += (theta - kaleidoscope.offsetRotation) * options.ease;
//                 kaleidoscope.draw();
//             }
//             return setTimeout(update, 1000 / 60);
//         };
//     }(this))();
//     // window.CP.exitedLoop(4);
// }.call(this));

});

newzCtrl.controller('DetailCtrl',["$scope","$routeParams","View",function($scope,$routeParams,View){
    console.log(totalhard);
    console.log(totald);
	var width=View.width;

    var pagedata=totald[$routeParams.pageId];
    $scope.pageId=$routeParams.pageId+1;
    $scope.data=pagedata;
    $scope.width=width;

}]);



































