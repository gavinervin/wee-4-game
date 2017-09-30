
var crystal = {
	red: 
	{
		value: 0
	},

	yellow:
	{
		value: 0
	},

	blue:
	{
		value: 0
	},

	green:
	{
		
		value: 0
	}
};

/* score */

var target  = 0;
var current = 0;
var win = 0;
var loss = 0;

var randomNum = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var begin = function() {

	current = 0;

	target = randomNum(19, 120);

	crystal.red.value = randomNum(1, 12);
	crystal.yellow.value = randomNum(1, 12);  
	crystal.blue.value = randomNum(1, 12);
	crystal.green.value = randomNum(1, 12);

$('#targets').html(target);
$('#currents').html(current);

}
var scoreUp = function(crystal) {

current = current +crystal.value;
$('#currents').html(current);

winLose();
}
/* win loss counter */
var winLose = function() {
	
	if(current > target) {
		loss++;
		$('#loser').html(loss);
begin();
}
	else if (current == target) {
		win++;
		$('#winner').html(win);
begin();
	}
}


/* click function */
$('#red').click(function() {
	scoreUp(crystal.red);
});

$('#yellow').click(function() {
	scoreUp(crystal.yellow);
});

$('#blue').click(function() {
	scoreUp(crystal.blue);
});

$('#green').click(function() {
	scoreUp(crystal.green);
});
begin();