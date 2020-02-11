var panggilSort = () => {
	var x = [2,39,76,50,9,7,41,2,24,1,16];
	console.log("Sebelumnya :",x.join(" "));
	var y = x.sort();
	console.log("Ascending :", y.join(" "));
	var z = x.reverse();
	console.log("Descending :", z.join(" "));
	var c = x.filter(x=>x>10);
	console.log("Filter >10 :", c.join(" "));
}

panggilSort()
