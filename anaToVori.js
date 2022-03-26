//Ana to Vori Conversion

function anaToVori(ana) {
    var vori = ana * 0.0625;

    return vori;
}

var myVori = anaToVori(5);
console.log(myVori);


//Panda Cost calculation

var singaraPrice = 7;
var samusaPrice = 10;
var zilapiPrice = 15;


function pandaCost(singara, samusa, zilapi){
    var singara = singara * singaraPrice;
    var samusa = samusa * samusaPrice;
    var zilapi = zilapi * zilapiPrice;

    var totalCost = singara + samusa + zilapi;

    return totalCost;
}

var myCost = pandaCost(5, 10, 15);
console.log(myCost);


//Picnic Budget Calculation

function picnicBudget(numberofpeople){
    const peopleDensityForFirst100 = 5000;
    const peopleDensityForSecond100 = 4000;
    const peopleDensityforMoreThan200 = 3000;

    if(numberofpeople <= 100){
        const budgetCount = numberofpeople * peopleDensityForFirst100;
        return budgetCount;
    }
    else if(numberofpeople <= 200){
        const firstDensePeople = 100 * peopleDensityForFirst100;
        const restPeople = numberofpeople - 100;
        const secondDensePeople = restPeople * peopleDensityForSecond100;
        const secondtotalBudget = firstDensePeople + secondDensePeople;
        return secondtotalBudget;
    }
    else{
        const firstDensePeople = 100 * peopleDensityForFirst100;
        const secondDensePeople = 100 * peopleDensityForSecond100;
        const restPeople = numberofpeople - 200;
        const restDensePeople = restPeople * peopleDensityforMoreThan200;
        const finalTotalBudget = firstDensePeople + secondDensePeople + restDensePeople;
        return finalTotalBudget;
    }

}

var picnicBudgetCount = picnicBudget(250);
console.log(picnicBudgetCount);


// Finding OddFriend using Array

var friendName = ["Sohail", "Faisal", "Junjuni", "Sabbir", "Forka"];

function oddFriend(friendName){
    for(var i=0; i<friendName.length; i++){
        if(friendName[i].length % 2 !=0){
            return friendName[i];
        }
    }
}

var myFriend = oddFriend(friendName);
console.log(myFriend);