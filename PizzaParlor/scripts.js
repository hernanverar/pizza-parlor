function Pizza(toppings, size){
  this.toppings = toppings,
  this.size = size
}

Pizza.prototype.toppingsAmount = function(){
    if(this.toppings.length != 0){
      let toppingPrice = this.toppings.length *3;
      return toppingPrice;
    }else {
      alert("please choose your Toppings !!")
    }
  }

Pizza.prototype.sizeAmount = function(){
  if (this.size === "Small"){
    return 4;
  } else if(this.size === "Medium"){
    return 5;
  } else if(this.size === "Large"){
    return 6;
  } else {
    alert ("Please select a size that you would prefer");
  }
}

Pizza.prototype.calculateCost = function(tBasedAmt, sizeBasedAmt){
  let totalCost =tBasedAmt +sizeBasedAmt;
  
}

