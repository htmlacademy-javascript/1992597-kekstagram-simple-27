//возвращает целое число
 func = (x) =>{
     if(x >= 0 && x <= 10){
        return 'верно';
     }
        return NaN;
}
console.log(func(10));


//проверяет длинну строки
string = (controlString,maxLength) => {
         if(controlString.length <= maxLength.length){
            console.log('проходит');
         }else{
            console.log('не проходит');
         }
}
string('пятьдесят','шесть');



