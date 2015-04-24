$( document ).ready(function() {
	
	var date = 1;
	var sentence = "";
	var cigs = 10;
	var health = 100;
	var violence = 0;
	var overall = 0;
	var sellPrice = 0;
	var itemPrice = "";
	var score = 0;
	var inventorySize = 0;
	
	update();
	crime();


/*CLOSE OVERLAY*/
$("#begin").click(function(){
	$('.overlay').toggle();
	$('.overlayBg').toggle();
});

/*DRAGGABLE ITEMS*/
function draggable(){
$(".item").draggable({ 
		revert:true, zIndex: -999, helper: "clone" ,
		drag: function(event, ui){
		if($(this).hasClass("bread")){
			sellPrice = 1;
		}
		if($(this).hasClass("fruit")){
			sellPrice = 5;
		}
		if($(this).hasClass("paper")){
			sellPrice = 10;
		}
		if($(this).hasClass("wine")){
			sellPrice = 10;
		}
		if($(this).hasClass("pen")){
			sellPrice = 20;
		}
		if($(this).hasClass("shiv")){
			sellPrice = 30;
		}
		if($(this).hasClass("cell")){
			sellPrice = 100;
		}
		if($(this).hasClass("pills")){
			sellPrice = 40;
		}
		if($(this).hasClass("rope")){
			sellPrice = 40;
		}
		if($(this).hasClass("weed")){
			sellPrice = 125;
		}
		if($(this).hasClass("plans")){
			sellPrice = 100;
		}
		if($(this).hasClass("item")){
			sellPrice = 0;
		}
		}
});
};

/*SELL ITEMS*/
$(".sell").droppable({
		tolerance: 'intersect',
		drop: function(event, ui) {
		$(ui.draggable).remove();
		$("<li>", {class: "item"}).appendTo(".inventory ul");
		$(".item").draggable({revert:true, zIndex: -999, helper: "clone"});
		cigs = cigs + sellPrice;
		$(".sell").append("<span>sold for " + sellPrice +"<br></span>");
		inventorySize = inventorySize-1;
		sleep();
		update();	
	}
});

/*CHECK INVENTORY FOR SPECIAL ITEMS*/
function specialItems(){

		/*bread and fruit show wine*/
		if($(".filled").hasClass("bread") && $(".filled").hasClass("fruit")){
			$("#makeWine").show();
		}
		else{
			$("#makeWine").hide();
		}
		/*pen and paper show letter*/
		if($(".filled").hasClass("pen") && $(".filled").hasClass("paper")){
			$("#makeLetter").show();
		}		
		else{
			$("#makeLetter").hide();
		}
		/*letter shows pills and rope*/
		if($(".filled").hasClass("letter") ){
			$("#makePills").show();
			$("#makeRope").show();
			$("#makeLetter").hide();		
		}
		else{
			$("#makePills").hide();
			$("#makeRope").hide();
		}

		/*cell shows weed and plans*/
		if($(".filled").hasClass("cell") ){
			$("#makeWeed").show();
			$("#makePlans").show();
		}
		else{
			$("#makeWeed").hide();
			$("#makePlans").hide();
		}
}

/*BUY ITEMS*/
$("#buyBread").click(function(){
	if(inventorySize < 8){
	sleep();
	if(cigs > 0){
	$(".dialogue").append("<span>You bought some stale bread  <br></span>");
	$(".item").first().append("<img src='bread.png'>").removeClass("item").addClass("filled bread");
	cigs = cigs-1;
	inventorySize = inventorySize+1;
	}
	else{
	$(".dialogue").append("<span>You don't have enough dough<br></span> ");	
	}
	}
	else{
	$(".dialogue").append("<span>Your inventory is full. Try selling something<br></span> ");
	}
	$(".dialogue span").fadeOut(5000).removeAttr("span");
	update();
});
$("#buyFruit").click(function(){
	if(inventorySize < 8){
	if(cigs > 4){
	sleep();
	$(".dialogue").append("<span>You bought some old fruit<br></span> ");
	$(".item").first().append("<img src='fruit.png'>").removeClass("item").addClass("filled fruit");
	cigs = cigs-5;
	inventorySize = inventorySize+1;
	}
	else{
	$(".dialogue").append("<span>You don't have enough dough<br></span> ");	
	}
	}
	else{
	$(".dialogue").append("<span>Your inventory is full. Try selling something<br></span> ");
	}
	$(".dialogue span").fadeOut(5000).removeAttr("span");
	update();
});
$("#buyPaper").click(function(){
	if(inventorySize < 8){
	if(cigs > 9){
	sleep();
	$(".dialogue").append("<span>You bought some paper<br></span> ");
	$(".item").first().append("<img src='paper.png'>").removeClass("item").addClass("filled paper");
	cigs = cigs-10;
	inventorySize = inventorySize+1;
	}
	else{
	$(".dialogue").append("<span>You don't have enough dough<br></span> ");	
	}
	}
	else{
	$(".dialogue").append("<span>Your inventory is full. Try selling something<br></span> ");
	}
	$(".dialogue span").fadeOut(5000).removeAttr("span");
	update();
});
$("#buyPen").click(function(){
	if(inventorySize < 8){
	if(cigs > 19){
	sleep();
	$(".dialogue").append("<span>You bought a pen<br></span> ");
	$(".item").first().append("<img src='pen.png'>").removeClass("item").addClass("filled pen");
	cigs = cigs-20;
	inventorySize = inventorySize+1;
	}
	else{
	$(".dialogue").append("<span>You don't have enough dough<br></span> ");	
	}
	}
	else{
	$(".dialogue").append("<span>Your inventory is full. Try selling something<br></span> ");
	}
	$(".dialogue span").fadeOut(5000).removeAttr("span");
	update();	
});
$("#buyShiv").click(function(){
	if(inventorySize < 8){
	if(cigs > 49){
	sleep();
	$(".dialogue").append("<span>You bought a shiv. violence -20<br></span> ");
	$(".item").first().append("<img src='shiv.png'>").removeClass("item").addClass("filled shiv");
	cigs = cigs-50;
	inventorySize = inventorySize+1;
	violence = violence-20;
	}
	else{
	$(".dialogue").append("<span>You don't have enough dough<br></span> ");	
	}
	}
	else{
	$(".dialogue").append("<span>Your inventory is full. Try selling something<br></span> ");
	}
	$(".dialogue span").fadeOut(5000).removeAttr("span");
	update();
});
$("#buyCell").click(function(){
	if(inventorySize < 8){
	if(cigs > 99){
	sleep();
	$(".dialogue").append("<span>You bought a cellphone.<br></span> ");
	$(".item").first().append("<img src='cell.png'>").removeClass("item").addClass("filled cell");	
	cigs = cigs-100;
	inventorySize = inventorySize+1;
	}
	else{
	$(".dialogue").append("<span>You don't have enough dough<br></span> ");	
	}
	}
	else{
	$(".dialogue").append("<span>Your inventory is full. Try selling something<br></span> ");
	}
	$(".dialogue span").fadeOut(5000).removeAttr("span");
	update();
});
$("#makeWine").click(function(){
	sleep();
	$(".dialogue").append("<span>You made some prison wine.<br></span> ");
	$(".item").first().append("<img src='wine.png'>").removeClass("item").addClass("filled wine");
	if($(".filled").hasClass("bread")){
		$(".bread").first().remove();
		$("<li>", {class: "item"}).appendTo(".inventory ul").draggable({revert:true, zIndex: -999, helper: "clone"});
	}
	if($(".filled").hasClass("fruit")){
		$(".fruit").first().remove();
		$("<li>", {class: "item"}).appendTo(".inventory ul").draggable({revert:true, zIndex: -999, helper: "clone"});
	}
	inventorySize = inventorySize-1;
	$(".dialogue span").fadeOut(5000).removeAttr("span");	
	update();
});
$("#makeLetter").click(function(){
	if(inventorySize < 8){
	sleep();
	$(".dialogue").append("<span>You began writing a letter.<br></span> ");
	$(".item").first().append("<img src='letter.png'>").removeClass("item").addClass("filled letter");
	}
	else{
	$(".dialogue").append("<span>Your inventory is full. Try selling something<br></span> ");
	}
	if($(".filled").hasClass("pen")){
		$(".pen").first().remove();
		$("<li>", {class: "item"}).appendTo(".inventory ul").draggable({revert:true, zIndex: -999, helper: "clone"});

	}
	if($(".filled").hasClass("paper")){
		$(".paper").first().remove();
		$("<li>", {class: "item"}).appendTo(".inventory ul").draggable({revert:true, zIndex: -999, helper: "clone"});
	}
	inventorySize = inventorySize-1;
	$(".dialogue span").fadeOut(5000).removeAttr("span");
	update();
});
$("#makePills").click(function(){
	sleep();
	$(".dialogue").append("<span>The letter contained an encoded message, requesting pills<br></span> ");
	$(".item").first().append("<img src='pills.png'>").removeClass("item").addClass("filled pills");
	$(".letter").first().remove();
	$("<li>", {class: "item"}).appendTo(".inventory ul").draggable({revert:true, zIndex: -999, helper: "clone"});
	$(".dialogue span").fadeOut(5000).removeAttr("span");
	update();
});
$("#makeRope").click(function(){
	sleep();
	$(".dialogue").append("<span>The letter contained an encoded message, requesting rope<br></span> ");
	$(".item").first().append("<img src='rope.png'>").removeClass("item").addClass("filled rope");
	$(".letter").first().remove();
	$("<li>", {class: "item"}).appendTo(".inventory ul").draggable({revert:true, zIndex: -999, helper: "clone"});
	$(".dialogue span").fadeOut(5000).removeAttr("span");
	update();
});
$("#makeWeed").click(function(){
	sleep();
	$(".dialogue").append("<span>You use the cellphone to request some weed. The battery then dies.<br></span> ");
	$(".item").first().append("<img src='weed.png'>").removeClass("item").addClass("filled weed");
	$(".cell").first().remove();
	$("<li>", {class: "item"}).appendTo(".inventory ul").draggable({revert:true, zIndex: -999, helper: "clone"});
	$("#makeWeed").hide();
	$("makePlans").hide();
	$(".dialogue span").fadeOut(5000).removeAttr("span");
	update();
});
$("#makePlans").click(function(){
	sleep();
	$(".dialogue").append("<span>You use the cellphone to request prison floor plans. The battery then dies.<br></span> ");
	$(".item").first().append("<img src='plans.png'>").removeClass("item").addClass("filled plans");
	$(".cell").first().remove();
	$("<li>", {class: "item"}).appendTo(".inventory ul").draggable({revert:true, zIndex: -999, helper: "clone"});
	$("#makeWeed").hide();
	$("makePlans").hide();
	$(".dialogue span").fadeOut(5000).removeAttr("span");
	update();
});


/*CAUSE TROUBLE EVENTS*/
$("#trouble").click(function(){
	
	var trouble = Math.random();
	
if(trouble < 0.1){
	$(".dialogue").append("<span>You pick a fight with an inmate and win. +5 cigs<br></span>");
	cigs = cigs+5;
	update();
}
if(trouble < 0.2 && trouble > 0.1){
	$(".dialogue").append("<span>You pick a fight with an inmate and lose. -10 cigs -10 health<br></span>");
	cigs = cigs-10;
	health = health-10;
	update();
}
if(trouble < 0.3 && trouble > 0.2){
	$(".dialogue").append("<span>You start a food fight. Tension between gangs increases. +10 violence<br></span>");
	violence = violence+10;
	update();
}		
if(trouble < 0.4 && trouble > 0.3){
	$(".dialogue").append("<span>You intimidate a weaker prisoner. +5 cigs<br></span>");
	cigs = cigs+5;
	update();
}
if(trouble < 0.5 && trouble > 0.4){
	$(".dialogue").append("<span>You start a fight with a guard. -20 health <br></span> ");
	health = health-20;
	update();
}
if(trouble < 0.6 && trouble > 0.5){
	$(".dialogue").append("<span>You steal some cigs from another prisoner. He blames a rival gang. +10 cigs +10 violence <br></span> ");
	cigs = cigs+10;
	violence = violence+10;
	update();
	
}
if(trouble < 0.7 && trouble > 0+.6){
	$(".dialogue").append("<span>You get in an argument with another prisoner. he stabs you. -30 health<br></span> ");
	health = health-30;
	update();
}
if(trouble < 0.8 && trouble > 0.7){
	$(".dialogue").append("<span>You con the doctor into healing you. +20 health<br></span> ");
	health = health+20;
	update();
}
if(trouble < 0.9 && trouble > 0.8){
	$(".dialogue").append("<span>You win the illegal prison lottery. +20 cigs<br></span> ");
	cigs = cigs+20;
	update();
}	
if(trouble >0.9){
	$(".dialogue").append("<span>You drop the soap. -10 health<br></span> ");
	health = health-10;
	update();
}	
	$(".dialogue span").fadeOut(5000).removeAttr("span");	
});

/*SLEEP EVENTS*/

$("#sleep").click(function(){
sleep();
update();
});

function sleep(){
	
	cigs = cigs+2;
	date = date+1;
	health = health+2;
	
	var sleep = Math.random();
	var danger = Math.random();

if(sleep < 0.1){
	$(".dialogue").append("<span>Food Quotas have decreased. -5 health +5 violence<br></span> ");
	health = health-5;
	violence = violence+5;
	update();
}
if(sleep < 0.2 && sleep > 0.1){
	$(".dialogue").append("<span>Your new tattoo gets you respect from gangs. -5 violence<br></span> ");
	violence = violence-5;
	update();
}
if(sleep < 0.3 && sleep > 0.2){
	$(".dialogue").append("<span>You have been caught with contraband. -5 cigs<br></span> ");
	cigs = cigs-5;
	update();	
}
if(sleep < 0.4 && sleep > 0.3){
	$(".dialogue").append("<span>You have been rewarded for good behaviour. +5 cigs<br></span> ");
	cigs = cigs+5;
	update();	
}
if(sleep < 0.5 && sleep > 0.4){
	$(".dialogue").append("<span>Gang warfare has increased. +10 violence<br></span> ");
	violence = violence+10;
	update();	
}
if(sleep > 0.5){
	$(".dialogue").append("<span>Nothing happened today<br></span> ");
	update();	
}

/*VIOLENCE EVENTS*/
if(violence >= 50){

if(danger < 0.1){
	$(".dialogue").append("<span>A riot has broken out!. -20 health +10 violence<br></span> ");
	health = health-20;
	violence = violence+10;
	update();
}
if(danger < 0.2 && danger > 0.1){
	$(".dialogue").append("<span>A gang member beats you and steals some cigs. -10 health -5 cigs<br></span> ");
	health = health-10;
	cigs = cigs-5;
	update();
}
if(danger < 0.3 && danger > 0.2){
	$(".dialogue").append("<span>A guard has been stabbed. All inmates are punished. -20 health<br></span> ");
	health = health-20;
	update();
}
if(danger > 0.3){
	$(".dialogue").append("<span>You pay a gang for protection due to the increased violence. -1 cig<br></span> ");
	cigs = cigs-1
	update();
}
}
	$(".dialogue span").fadeOut(5000).removeAttr("span");
}

/*UPDATE FUNCTION*/
function update(){

	draggable();
	specialItems();
		
	$(".sentence").empty();
	$(".health").empty();
	$(".cigs").empty();
	$(".danger").empty();
	$(".clockText").empty();
	$(".sentence").append(sentence);
	$(".health").append(health);
	$(".cigs").append(cigs);
	$(".danger").append(violence);
	$(".clockText").append("day " + date + " of " + overall);
	
	$(".sell span").fadeOut(5000).removeAttr("span");
	
	if(health >= 100){health = 100}
	if(cigs <=0){cigs = 0}
	if(violence <= 0){violence = 0}
	if(health <= 0){endDead();}
	if(violence >= 100){endViolence();}
	if(date == overall){released();}

}

/*GIVE A RANDOM CRIME & SENTENCE AT START OF GAME*/
function crime(){
	var crime = Math.random();
	
	if( crime < 0.25 ){
	$(".crime").append("Murder.");	
	sentence = "6 years";
	overall = 2190;
	}
	if( crime > 0.25 && crime < 0.5){
	$(".crime").append("Armed Robbery.");
	sentence = "5 years";	
	overall = 1825;
	}
	if( crime > 0.5 && crime < 0.75){
	$(".crime").append("Fraud.");
	sentence = "3 years";
	overall = 1095;
	}
	if( crime > 0.75 ){
	$(".crime").append("Rape.");
	sentence = "4 years";
	overall = 	1460;
	}
	update();
}

/*END SCREENS*/
function escaped(){
	$('.endEscape').toggle();
	$('.overlayBg').toggle();
	score = (cigs*200) + health + 10000;
	$(".score").empty();
	$(".score").append(score);	
}
function endDead(){
	$('.endDead').toggle();
	$('.overlayBg').toggle();
	score = (cigs*100) + health;
	$(".score").empty();
	$(".score").append(score);	
}
function endFail(){
	$('.endFail').toggle();
	$('.overlayBg').toggle();
	score = (cigs*100) + health;
	$(".score").empty();
	$(".score").append(score);	
}
function endViolence(){
	$('.endViolence').toggle();
	$('.overlayBg').toggle();
	score = (cigs*100) + health;
	$(".score").empty();
	$(".score").append(score);	
}
function released(){
	$('.endReleased').toggle();
	$('.overlayBg').toggle();
	score = (cigs*100) + health;
	$(".score").empty();
	$(".score").append(score);	
}
$("#escape").click(function(){
	
	if($(".filled").hasClass("rope") && $(".filled").hasClass("shiv") && $(".filled").hasClass("plans")){
	escaped();
	}
	else{
	endFail();
	}

});
/*RESTART BUTTONS*/
$("#restartA").click(function(){
	window.location.reload();
});
$("#restartB").click(function(){
	window.location.reload();
});
$("#restartC").click(function(){
	$('.endFail').toggle();
	$('.overlayBg').toggle();
	$('.inventory ul li').remove();
	$("<li>", {class: "item"}).appendTo(".inventory ul");
	$("<li>", {class: "item"}).appendTo(".inventory ul");
	$("<li>", {class: "item"}).appendTo(".inventory ul");
	$("<li>", {class: "item"}).appendTo(".inventory ul");
	$("<li>", {class: "item"}).appendTo(".inventory ul");
	$("<li>", {class: "item"}).appendTo(".inventory ul");
	$("<li>", {class: "item"}).appendTo(".inventory ul");
	$("<li>", {class: "item"}).appendTo(".inventory ul");
	cigs = 0;
	update();
});
$("#restartD").click(function(){
	window.location.reload();
});

});
