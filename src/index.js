module.exports = function getZerosCount(number) {
  
	let divider = 5,
		numersCount = 0;
	
	while ( number > divider )
	{
		numersCount += Math.floor( number / divider );
		divider *= 5;
	}

	return numersCount;
}
