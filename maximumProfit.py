#  An analyst is analyzing the stock over a period of n days.
#  The price of the stock on the ith day is price[i], and the profit obtained is denoted by profit[i].
#  The analyst wants to pick a triplet of days (i,j,k) such that (i < j < k) and price[i] < price[j] < price[k] in such a way
#  that the total profit, i.e. profit[i] + profit[j] + profit[k] is maximized.

#  Find the maximum total profit possible. If there is no valid triplet, return -1.

#  Example
#  Consider n = 5, price = [1,5,3,4,5], profit = [2,3,4,5,6].

# An optimal triple (considering 1-based indexing) is (3,4,5). Here 3 < 4 < 6, and total profit = 4 + 5 + 6 = 15, the maximum possible.
#  So, the answer is 15.

#  Function Description
# Complete the function getMaxmimumProfit in the editor below.
#  getMaximumProfit has the following parameters:
#  int price[n]: the prices of the stock on each day
# int profit[n]: the profits obtained from the stock on each day.

def getMaximumProfit(price, profit):
    n = len(price)
    max_profit = [0]*n
    for i in range(n):
        max_profit[i] = profit[i]
    for j in range(i):
        if price[j] < price[i]:
            max_profit[i] = max(max_profit[i], profit[i] + max_profit[j])
    return max(max_profit) if max_profit else -1
