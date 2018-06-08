// Night Club Bouncer

var age = prompt("What is your age");

if (Number(age) < 18) {
	alert("Sorry, you are too young to enter this club. Door closed !")
} else if (Number(age) > 18) {
	alert("Enjoy your night. Doors open!")
} else if (Number(age) === 18) {
	alert("Enjoy your first night out! Doors open!")
}
