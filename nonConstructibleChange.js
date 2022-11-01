// Given an array of positive integers representing the values of coins in your
// possession, write a function that returns the minimum amount of change (the
// minimum sum of money) that you
// create. The given coins can have
// any positive integer value and aren't necessarily unique (i.e., you can have
// multiple coins of the same value).

function nonConstructibleChange(coins) {
    coins.sort((a,b) => a - b)
	let changeCreated = 0
	for (let i = 0; i < coins.length; i++) {
		let coin = coins[i]
		if (coin > changeCreated + 1) return changeCreated + 1

		changeCreated += coin;
	}
  return changeCreated + 1;
  }
 