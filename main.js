var account= {
    AccountTitle: "Huziafa Saleem",
    AvailableBalance: "100000",
    AccountCurrency: "PKRS",
    IBAN: "123456789",
display:function () {


    document.getElementById("title").innerHTML = account.AccountTitle;
    document.getElementById("balance").innerHTML = account.AvailableBalance;
    document.getElementById("currency").innerHTML = account.AccountCurrency;
    document.getElementById("IBAN").innerHTML = account.IBAN;
    console.log(2);
}
/*deposit:function(x){
    var deposit=document.getElementById("deposit");
    var balancd=document.getElementById("balance");
    balance=deposit + balance;
}
    withdraw:function(y){
        var withdraw=document.getElementById("withdraw");
        var balancd=document.getElementById("balance");
        balanc = balance - withdraw;
    }*/

}
account.display();