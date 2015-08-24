/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-08-19 17:13:33
 * @version $Id$
 */
var totalhard=1,
    totald=2;
var app=angular.module("myApp",["ngRoute","newzCtrl","newzService","newzAni"]);

app.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/",{
		templateUrl:"template/load.html",
		controller:"globalCtrl"
	}).
	when("/wht",{
		templateUrl:"template/wht.html",
		controller:"WhtCtrl"
	}).
	when("/page/:pageId",{
		templateUrl:"template/detail.html",
		controller:"DetailCtrl"
	}).
	otherwise({
		redirectTo:"/"
	})
}]);
app.directive("pic",function(){
	return {
		restrict:"A",
		link:function(scope,ele,attr){
			console.log(scope);

			// $(scope.data.back).attr("bg",true);

			$(".backinner").append(scope.data.back);
			$(".c_backp").append(scope.data.wa);

			$(".wa").css({
				left:(scope.width-$(".wa").width())/2
			});

			var sWidth=scope.width;
			var ewidth=$("#bbk").width();
			console.log(ewidth);
			if(ewidth<sWidth){
				$("#bbk").removeClass("cback").addClass("cback2");
			}
			else{
				// alert("kk");
				$("#bbk").css({left:(sWidth-ewidth)/2+"px"});
			}

			setTimeout(function(){
				var sPosY,
			    min=$("#txt").height(),
			    max=$("#txt2").height(),
			    top=$(".xly").position().top;

			    console.log(min);
			    console.log(max);

			ele[0].addEventListener("touchstart",function(e){
				if(e.touches.length==1){
					sPosY=e.touches[0].pageY;
					$("#txt").removeClass("rtext").addClass("autotext");
					// e.preventDefault();
				}
			},false);

			ele[0].addEventListener("touchmove",function(e){
				if(e.touches.length==1){
					e.preventDefault();

					// $("#txt").removeClass("rtext").addClass("autotext");
					var ePosY=e.touches[0].pageY;
					var disY=ePosY-sPosY;
					sPosY=ePosY;
					// e.preventDefault();
					// var eleh=ele[0].offsetTop+disY;
					// console.log(eleh)
					var txth=$("#txt").height()+disY;
					var hyh=$(".xly").position().top+disY;

					if(txth>min&&txth<max){
						$("#txt").css("height",txth+"px");
						$(".xly").css("top",hyh+"px");
					}
				}
			})

			ele[0].addEventListener("touchend",function(){
				// alert("ja");
			var txth=$("#txt").height();
				if(txth-min>(max-min)/2){
					var endt=top+(max-min);
					$("#txt").animate({height:max+"px"},100).removeClass("rtext").addClass("autotext");
					$(".xly").animate({top:endt+"px"},100);
					$("#dup").attr("src","file/up.png");
				}
				else{
					$("#txt").animate({height:min+"px"},100).removeClass("autotext").addClass("rtext");
					$(".xly").animate({top:top+"px"},100);
					$("#dup").attr("src","file/down.png");
				}
			},false)
			},200);

			

			// $(scope.data.title).css({
			// 	left:($(ele).width()-$(scope.data.title).width())/2
			// });
		}
	}
});

app.directive("plane",function(){
	return {
		restrict:"A",
		link:function(scope,ele,attr){
			// console.log(scope);
			var width=scope.width,
				height=scope.height,
				bl=scope.bl;

			var stage=new Kinetic.Stage({
				container:"containr",
				width:width,
				height:height-5
			});

			var layer=new Kinetic.Layer();
			var img=new Image();

			img.onload=function(){
				// console.log(img.offsetHeight);
				var circle=new Kinetic.Circle({
					x:width/2,
					y:height/2,
					radius:width*0.15,
					// stroke:"#000",
					// opacity:0,
					fillPatternImage:img,
					fillPatternScale:{
						x:bl,
						y:bl
					},
					fillPatternRepeat:"no-repeat",
					fillPatternOffset:{
						x:13,
						y:-46.5
					}
				});

				function hide(){
					var opa=circle.opacity()-0.1;
					circle.opacity(opa);

					// console.log(circle.opacity());
					layer.add(circle);
					stage.add(layer);

					if(circle.opacity()>0){
						var hidetidme=requestAnimationFrame(hide);
					}
					else{
						cancelAnimationFrame(hidetidme);
						start=70;
						circle.rotation(70);
						show();
					}

				}


				function show(){
					var opa=circle.opacity()+0.1;
					circle.opacity(opa);

					layer.add(circle);
					stage.add(layer);

					if(circle.opacity()<1){
						var showtime=requestAnimationFrame(show);
					}
					else{
						cancelAnimationFrame(showtime);
						fly();
					}
				}

				var start=70;
				// circle.opacity(0);
				function fly(){
					start=start-1.5;
					circle.rotation(start);
					layer.add(circle);
					stage.add(layer);
					if(start>-70){
						var flytime=requestAnimationFrame(fly);
					}else{
						cancelAnimationFrame(flytime);
						hide();

						// start=60;
						// requestAnimationFrame(fly);
					}
				}

				requestAnimationFrame(fly);
				// layer.add(circle);
				// stage.add(layer);
			}


			var bcircle=new Kinetic.Arc({
				x:width/2,
				y:height/2,
				innerRadius:width*0.11,
				outerRadius:width*0.12,
				// radius:width*0.15,
				rotation:10,
				angle:160,
				fill:"#fff"
			});

			var bcircle2=new Kinetic.Arc({
				x:width/2,
				y:height/2.015,
				innerRadius:width*0.10,
				outerRadius:width*0.12,
				angle:160,
				rotation:10,
				fill:"#8f257a"
			});

			var arc1=new Kinetic.Arc({
					x:width/2,
					y:height/2,
					innerRadius:width*0.192,
					outerRadius:width/5,
					fill:"#8f257a",
					angle:180
			});

			var arc2=new Kinetic.Arc({
				x:width/2,
				y:height/2,
				innerRadius:width*0.192,
				outerRadius:width/5,
				fill:"#fff",
				angle:360
			});


			layer.add(bcircle);
			layer.add(bcircle2);
			// layer.add(arc2);
			// layer.add(arc1);
			// stage.add(layer);
			img.src="file/plane3.png";
		}
	}
			
});

app.directive("jz",function(){
	return {
		restrict:"A",
		link:function(scope,ele,attr){

			ele[0].onload=function(){
				var height=scope.height;
				console.log(height);
				console.log(ele[0].offsetHeight);
				var top=(height-ele[0].offsetHeight)/2;
				$(ele[0]).css("top",top+"px");
			}
		}
	}
})



app.directive("wht",function(){
	return {
		restrict:"A",
		link:function(scope,ele,attr){
			var width=scope.width,
			    radio2=scope.radio2,
			    wan=ele[0];

			(function () {
		    var DragDrop, Kaleidoscope, c, dragger, gui, i, image, kaleidoscope, len, onChange, onMouseMoved, options, ref, tr, tx, ty, update, bind = function (fn, me) {
		            return function () {
		                return fn.apply(me, arguments);
		            };
		        };
		    Kaleidoscope = function () {
		        Kaleidoscope.prototype.HALF_PI = Math.PI / 2;
		        Kaleidoscope.prototype.TWO_PI = Math.PI * 2;
		        function Kaleidoscope(options1) {
		            var key, ref, ref1, val;
		            this.options = options1 != null ? options1 : {};
		            this.defaults = {
		                offsetRotation: 0,
		                offsetScale: 1,
		                offsetX: 0,
		                offsetY: 0,
		                radius: radio2,
		                slices: 12,
		                zoom: 1
		            };
		            ref = this.defaults;
		            for (key in ref) {
		                if (window.CP.shouldStopExecution(1)) {
		                    break;
		                }
		                val = ref[key];
		                this[key] = val;
		            }
		            window.CP.exitedLoop(1);
		            ref1 = this.options;
		            for (key in ref1) {
		                if (window.CP.shouldStopExecution(2)) {
		                    break;
		                }
		                val = ref1[key];
		                this[key] = val;
		            }
		            window.CP.exitedLoop(2);
		            if (this.domElement == null) {
		                this.domElement = document.createElement('canvas');
		            }
		            if (this.context == null) {
		                this.context = this.domElement.getContext('2d');
		            }
		            if (this.image == null) {
		                this.image = document.createElement('img');
		            }
		        }
		        Kaleidoscope.prototype.draw = function () {
		            var cx, i, index, ref, results, scale, step;
		            this.domElement.width = this.domElement.height = this.radius * 2;
		            this.context.fillStyle = this.context.createPattern(this.image, 'repeat');
		            scale = this.zoom * (this.radius / Math.min(this.image.width, this.image.height));
		            step = this.TWO_PI / this.slices;
		            cx = this.image.width / 2;
		            results = [];
		            for (index = i = 0, ref = this.slices; 0 <= ref ? i <= ref : i >= ref; index = 0 <= ref ? ++i : --i) {
		                if (window.CP.shouldStopExecution(3)) {
		                    break;
		                }
		                this.context.save();
		                this.context.translate(this.radius, this.radius);
		                this.context.rotate(index * step);
		                this.context.beginPath();
		                this.context.moveTo(-0.5, -0.5);
		                this.context.arc(0, 0, this.radius, step * -0.51, step * 0.51);
		                this.context.lineTo(0.5, 0.5);
		                this.context.closePath();
		                this.context.rotate(this.HALF_PI);
		                this.context.scale(scale, scale);
		                this.context.scale([
		                    -1,
		                    1
		                ][index % 2], 1);
		                this.context.translate(this.offsetX - cx, this.offsetY);
		                this.context.rotate(this.offsetRotation);
		                this.context.scale(this.offsetScale, this.offsetScale);
		                this.context.fill();
		                results.push(this.context.restore());
		            }
		            window.CP.exitedLoop(3);
		            return results;
		        };
		        return Kaleidoscope;
		    }();
		    image = new Image();
    image.onload = function (_this) {
        return function () {
            return kaleidoscope.draw();
        };
    }(this);
    image.src = 'file/skycouch.png';
    kaleidoscope = new Kaleidoscope({
        image: image,
        slices: 20
    });
    kaleidoscope.domElement.style.position = 'absolute';
    kaleidoscope.domElement.style.marginLeft = -kaleidoscope.radius + 'px';
    kaleidoscope.domElement.style.marginTop = -kaleidoscope.radius + 'px';
    kaleidoscope.domElement.style.left = '50%';
    kaleidoscope.domElement.style.top = '50%';
    kaleidoscope.domElement.style.zIndex = 100;


    wan.appendChild(kaleidoscope.domElement);

    tx = kaleidoscope.offsetX;
    ty = kaleidoscope.offsetY;
    tr = kaleidoscope.offsetRotation;
    // onMouseMoved = function (_this) {
    //     return function (event) {
    //         var cx, cy, dx, dy, hx, hy;
    //         cx = window.innerWidth / 2;
    //         cy = window.innerHeight / 2;
    //         dx = event.pageX / window.innerWidth;
    //         dy = event.pageY / window.innerHeight;
    //         hx = dx - 0.5;
    //         hy = dy - 0.5;
    //         tx = hx * kaleidoscope.radius * -2;
    //         ty = hy * kaleidoscope.radius * 2;
    //         return tr = Math.atan2(hy, hx);
    //     };
    // }(this);
    var speedX=0,
        speedY=0,
        interval=8,
        tz=true,
        num_arr=[];

    var inArr=function(arr,num){
        for(var i=0;i<arr.length;i++){
            if(parseInt(arr[i])==num){
                // num=Math.ceil(Math.random()*20);
                return true;
            }
        }
        return false;
    }


    var getRandom=function(){
        var num=Math.floor(Math.random()*20);
        alert(num);
        if(!sessionStorage["num"]){
            // alert("no session");
            num_arr.push(num);
            sessionStorage.num=JSON.stringify(num_arr);
            return num;
        }
        else{
            num_arr=JSON.parse(sessionStorage["num"]);
            var length=num_arr.length;
            // alert(length);

            if(length<20){
                var result=inArr(num_arr,num);
                if(result){
                    // alert("ll");
                    getRandom();
                }
                else{
                    num_arr.push(num);
                    sessionStorage.num=JSON.stringify(num_arr);
                    // alert(sessionStorage.num);
                    return num;
                }
            }
            else{
                sessionStorage.num="";
                num_arr=[];
                num_arr.push(num);
                sessionStorage.num=JSON.stringify(num_arr);
                return num;
            }
        }
    }
    tz=true;

    var set=function(){
        tz=false;
        var num=getRandom();
        var timer=setTimeout(function(){
            // alert(sessionStorage.num);
            // alert(num);
            var url=$location.absUrl();
            var endurl="page/"+num;
            url=url.replace("wht",endurl);
            window.location.href=url;
            // tz=true;
        },3000);
    }
    onMation = function (_this) {
        return function (event) {
            var cx, cy, dx, dy, hx, hy;
            cx = window.innerWidth / 2;
            cy = window.innerHeight / 2;
            var acc=event.accelerationIncludingGravity;
            var aX=acc.x;
            var aY=acc.y;
            var distanceX=speedX*interval+(aX*Math.pow(interval,2))/2;
            var distanceY=speedY*interval+(aY*Math.pow(interval,2))/2;
            dx = distanceX / window.innerWidth;
            dy = distanceY / window.innerHeight;
            hx = dx - 0.5;
            hy = dy - 0.5;
            tx = hx * kaleidoscope.radius * -2;
            ty = hy * kaleidoscope.radius * 2;
            speedX=aX*interval;
            speedY=aY*interval;
            if(Math.abs(aX)>3&&tz){
            	tz=false;
                setTimeout(function(){
                	alert("ll");
                	window.location.href="#/page/0";
                })
            }
            return tr = Math.atan2(hy, hx);
        };
    }(this);
    // window.addEventListener('mousemove', onMouseMoved, false);
    window.addEventListener("devicemotion",onMation,false);
    options = {
        interactive: true,
        ease: 0.1
    };
    (update = function (_this) {
        return function () {
            var delta, theta;
            if (options.interactive) {
                delta = tr - kaleidoscope.offsetRotation;
                theta = Math.atan2(Math.sin(delta), Math.cos(delta));
                kaleidoscope.offsetX += (tx - kaleidoscope.offsetX) * options.ease;
                kaleidoscope.offsetY += (ty - kaleidoscope.offsetY) * options.ease;
                kaleidoscope.offsetRotation += (theta - kaleidoscope.offsetRotation) * options.ease;
                kaleidoscope.draw();
            }
            return setTimeout(update, 1000 / 60);
        };
    }(this))();
    // window.CP.exitedLoop(4);
}.call(this));
		}
	}
});

// app.controller("globalCtrl",function($scope){
// 	alert(1);
// });

// app.controller("whtCtrl",function($scope){
// 	alert(2);
// });

// app.controller("DetailCtrl",function($scope){
// 	alert(3);
// });















