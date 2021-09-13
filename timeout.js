/*function printname(){
	console.log("My name is Vaibhav!");
}

const time = setInterval(printname, 1000);



function allcomplete(){
	console.log("All Completed!");
}

setTimeout(allcomplete, 3000);

//clearInterval(time);*/

let count = 0;

const printname = () => {
	console.log("My name is Vaibhav!");
	count += 1;
	
	if(count === 5){
		clearInterval(timerout);
	}
};
const timerout = setInterval(printname, 1000);

function allcomplete(){
	console.log("All Completed!");
}

setTimeout(allcomplete, 8000);
