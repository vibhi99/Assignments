let res=0;
for(let i=999; i>=100; i--){
	let num = i;
	let s = String(num);
	let rev = s.split('').reverse().join('');
	
	if (s === rev) {
            res = Math.max(res, num);
        }
}

console.log(res);
