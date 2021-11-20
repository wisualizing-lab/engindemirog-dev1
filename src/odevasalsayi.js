/*function asalSayi(...numbers){
    
    for(let i=1;i<numbers.length;i++){
        console.log(i)
        if(numbers[i-1]%i==0){
            console.log("asal sayı değildir")
        }
        else {
            console.log("asaldır")
        }
    }
   
}
asalSayi(2,5,7,8,9)*/


/*function friendsNumbers(number1,number2){
   let sum1=0
   let sum2=0
   for(let i=1;i<number1;i++){
       if(number1%i==0){
           sum1+=i;
           
       }
     }
     for(let j=1;j<number2;j++){
         if(number2%j==0){
             sum2+=j;
             
         }
     }
    if(sum1==number2 && sum2==number1){
        console.log("arkadaş sayılar")
    }
    
    else{
        console.log("arkadaş sayı değiller")
    }
     
}
friendsNumbers(220,284)*/

/*for (let sayi = 1; sayi < 1000; sayi++) 
{
    let sayiToplam=0
    for (let i = 1; i < sayi; i++) 
    {
        if(sayi%i==0)
        {
            sayiToplam+=i
        }
    }

    if(sayi==sayiToplam)
    {
        console.log(sayi)
    }
}*/

/*function asalMi(numbers)
{
    for(let i=2;i<numbers;i++)
    {
        for( j=0;j<i;j++)
        {
            if(i%j==0)
            {
                console.log(i+"asal değil ")
            }
       
        }

    }
}
asalMi(1000)*/