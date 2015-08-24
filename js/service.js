/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-08-19 19:38:47
 * @version $Id$
 */
// var totaldata=1;
var newzService=angular.module("newzService",["ngResource"]);

newzService.factory("Http",function($http,$location){
	// sessionStorage.num="";

	// $.get("http://airnz.clients.inzen.com.cn/airnzapi/airnzcampaign")
	var promise=$http({
		method:"GET",
		url:"http://airnz.clients.inzen.com.cn/airnzapi/airnzcampaign"
	});

	// return {
	// 	promise:promise
	// }

	var sj=[];
	var hardsj=[];

	var url=$location.protocol()+"://"+$location.host()+":"+$location.port()+"/newza";
	// alert(url);
	var hard=[
		url+"/file/logo-04.png",
		url+"/file/font-03.png",
		url+"/file/11-01.png",
		url+"/file/circle.png",
		url+"/file/main.jpg",
		url+"/file/skycouch.png",
		url+"/file/hy.png",
		url+"/file/down.png",
		url+"/file/change.png",
		url+"/file/share.png"
		// url+"/file/bb.png"
		];

	var i=0;

	function getFont(i,data){
		WebFont.load({
			custom:{
				families:["NZ"]
			},
			fontactive:function(){
				hImg(i,data);
			}
		})
	}

	function hImg(i,data){
		// alert("himg");
		var obj={};

		var arr=[];

		var img1=new Image();
		img1.onload=function(){
			img1.className="wa";
			arr.push(img1);
			var img2=new Image();
			img2.onload=function(){
				img2.className="cback";
				img2.id="bbk";
				arr.push(img2);
				deal(arr,data[i]);
				console.log(arr);
				i=i+1;
				if(i<data.length){
					hImg(i,data);
				}
				else{
					console.log(sj);
					totalhard=hardsj;
					totald=sj;
					var url=$location.absUrl();
					window.location.href=url+"wht";
				}
			}
			img2.src=data[i].backgroud;
		}
		img1.src=data[i].copy;
	}

	function deal(arr,data){
		var obj={};
		obj.back=arr[1];
		obj.wa=arr[0];
		obj.text=data.description;
		sj.push(obj);
	}
	var j=0;


	function getImage2(data){
		console.log(data);
		var img=new Image();
		var i=0;
		img.onload=function(){
			hardsj.push(img);
			j=j+1;
			console.log(hardsj);
			if(j<hard.length){
				getImage2(data);
			}
			else{
				getFont(i,data);
			}
		}
		img.src=hard[j];
	}


	promise.success(function(data){
		getImage2(data);
		// console.log(data)
	});

	return{
		name:"ll"
	}


	
})

newzService.factory("View",function(){
	var use=navigator.userAgent,
		width,
		height,
		bl;

		// alert(use);
	if(use.indexOf("iPhone")!=-1){
			width=document.documentElement.clientWidth;
			height=document.documentElement.clientHeight;

			if(width==640||width==1136){
				$("html").css("fontSize","34.782px");
				bl=1.2;
				// scale.y=1.2;
			}
			else if(width==750||width==1334){
				$("html").css("fontSize","40.76px");
				bl=1.4;
				// scale.y=1.4;
				// $(".pfonts").css("bottom","3rem");

			}
			else if(width==828||width==1472){
				$("html").css("fontSize","45px");
				bl=1.55;
			}
		}

		else{
			// alert("an");
			var view=document.getElementById("view");
			view.content="width=device-width,minimum-scale=1.0,initial-scale=1.0,maximum-scale=1,user-scalable=no";
			width=document.documentElement.clientWidth;
			height=document.documentElement.clientHeight;

			var nb=width/818,
			    nrem=nb*45;
			bl=1.55*nb;
			$("html").css("fontSize",nrem+"px");


			// alert(document.body.clientHeight);
			// if(width==360||width==598||width==640){
			// 	$("html").css("fontSize","19.565px");
			// 	bl=0.675;
			// }
			// else if(width==412||width==732){
			// 	$("html").css("fontSize","22.391px");
			// 	bl=0.7725;
			// }
			// else if(width==320){
			// 	$("html").css("fontSize","17.391px");
			// }

		}

		var rem=parseInt($("html").css("fontSize"));
		var radio2=5.2666*rem;

	// 	$(".wa").css({
	// 		left:(width-$(".wa").width())/2+"px"
	// });

	// $(".num").css({
	// 	left:(width-$(".num").width())/2+"px"
	// });
		return {
			width:width,
			height:height,
			radio:radio2,
			bl:bl
		}
})
