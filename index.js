function maxStockProfit(arr){
  let buy = 0;
  let sell = 0;
  let maxProfit = -1;
  let changeBuy = true;
  for(let i =0; i< arr.length;  i++){
    if(changeBuy) buy = arr[i] 
    sell = arr[i+1]
    if(sell < buy) changeBuy = true;
    else{
      let tempProfit = sell - buy;
      if(tempProfit > maxProfit) maxProfit = tempProfit
      changeBuy = false
    }
  }
  return maxProfit
}
console.log(maxStockProfit([32,46,26,38,40,48,42]));
