var dom = document.getElementById('clock');
var ctx = dom.getContext('2d');
var width = ctx.canvas.width;
var height = ctx.canvas.height;
var r = width / 2;
var rem = width / 200;
function background(){
	ctx.save();
	ctx.translate(r,r);
	ctx.beginPath();
	ctx.lineWidth = 6 * rem;
	ctx.arc(0, 0, r-ctx.lineWidth/2, 0, 2*Math.PI, false);
	ctx.stroke();

	var hourNum =[3,4,5,6,7,8,9,10,11,12,1,2];
	ctx.font = 18 * rem+'px Arial';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	hourNum.forEach(function(number,i){
		var rad = 2*Math.PI/12*i;
		var x = Math.cos(rad)*(r-30 * rem);
		var y = Math.sin(rad)*(r-30 * rem);
		ctx.fillText(number,x,y);
	});
	for (var i=0 ; i < 60 ; i++){
		var rad = 2*Math.PI/60*i;
		var x = Math.cos(rad)*(r-18 * rem);
		var y = Math.sin(rad)*(r-18 * rem);
		ctx.beginPath();
		console.log(i % 5);
		if(i % 5 === 0){
			ctx.fillStyle = '#000';
			ctx.arc(x, y, 2 * rem, 0, 2*Math.PI, false);
		}else {			
			ctx.fillStyle = '#ccc';
			ctx.arc(x, y, 2 * rem, 0, 2*Math.PI, false);
		}
		ctx.fill();
	}
}

function hourLine(hour,minute){
	ctx.save();
	ctx.beginPath();
	var rad = 2*Math.PI/12 * hour;
	var minuteRad = 2*Math.PI/12/60 * minute;
	ctx.rotate(rad + minuteRad);
	ctx.lineWidth = 6;
	ctx.lineCap = 'round';
	ctx.moveTo(0,10 * rem);
	ctx.lineTo(0 , -r/2);
	ctx.stroke(); 
	ctx.restore();
}

function minuteLine(minute){
	ctx.save();
	ctx.beginPath();
	var rad = 2*Math.PI/60 * minute;
	ctx.rotate(rad);
	ctx.lineWidth = 3;
	ctx.lineCap = 'round';
	ctx.moveTo(0,10 * rem);
	ctx.lineTo(0 , -r+30 * rem);
	ctx.stroke(); 
	ctx.restore();
}
function secondLine(second){
	ctx.save();
	ctx.beginPath();
	ctx.fillStyle = "#f55";
	var rad = 2*Math.PI/60 * second;
	ctx.rotate(rad);
	ctx.moveTo(-2 * rem,20 * rem);
	ctx.lineTo(2 * rem,20 * rem);
	ctx.lineTo(1,-r+18 * rem);
	ctx.lineTo(-1,-r+18 * rem);
	ctx.fill(); 
	ctx.restore();
}

function dot(){
	ctx.beginPath();
	ctx.fillStyle = "#fff";
	ctx.arc(0, 0, 2 * rem, 0, 2*Math.PI, false);
	ctx.fill();
}


function draw(){
	ctx.clearRect(0,0,width,height);
	var now = new Date();
	var	hour = now.getHours();
	var	minute = now.getMinutes();
	var	second = now.getSeconds();
	background();
	hourLine(hour,minute);
	minuteLine(minute);
	secondLine(second);
	dot();
	ctx.restore();
}
draw();
setInterval(draw,1000);