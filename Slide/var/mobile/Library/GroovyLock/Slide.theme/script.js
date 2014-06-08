run();

function run(){
	var verbal = new VerbalDate(false);
	var date = new Date();
	
	$(".date").html(date.getDate() + " " + verbal.getMonth() + " " + date.getFullYear());
	$(".hours").html(date.getHours());
	$(".mins").html(date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes());
	setTimeout("run();", 1000);
}