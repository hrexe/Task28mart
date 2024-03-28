
//  1. Array icinde en boyuk ededi tapin:
// let numbers = [1, 3, 5, 7, 9, 2, 8, 6, 4, 0];

// let boyuk_eded = numbers [0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > boyuk_eded) {
//         boyuk_eded = numbers [i];
//     }
// }

// console.log(boyuk_eded) ;

// 2. Array icinde sade ededleri tap:

// let numbers = [1, 3, 5, 7, 9, 2, 8, 6, 4, 13, 41, 44];
// numbers = numbers.filter((number) => {
//   for (var i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// });

// console.log(numbers);




// 3. Arrayda uzunlugu 7 olan sozleri ekrana cixardin:
// let data = [
//   "Salam",
//   "Dünyalı",
//   "JavaScript",
//   "Programlaşdırma",
//   "Kod",
//   "Frontend",
//   "Backend",
// ];

// let uzunluguYeddiOlanlar = data.filter(function(soz) {
//     return soz.length === 7;
// });

// console.log(uzunluguYeddiOlanlar);


// 4. İstifadeciden kilosunu ve boyunu isteyin. Daha sonra onun Bədən kütlə indeksini tapın.(kilo / boy ** 2). Tapilan bmi deyerine gore usere asagidaki sekilde mesaj verin:
// 18-dən aşağı nəticələr: İdeal çəkidən aşağı
// 18 ilə 25 arasında nəticələr: İdeal çəki
// 25 ilə 30 arasında nəticələr: İdeal çəkidən yuxarı
// 30 ilə 40 arasında nəticələr: Artıq çəki (obez)
// 40-dən yuxarı nəticələr: Artıq çəki (morbid dərəcədə piylənmə)

// let kilo = +prompt("Chekinizi daxil edin:");
// let boy = +prompt("Boyunuz:");
// let dey = kilo / boy ** 2
// if (dey < 18) {
//     alert("İdeal çekiden aşağı");
// } else if (dey >= 18 && kilo < 25) {
//     alert = "İdeal çeki";
// } else if (dey >= 25 && kilo < 30) {
//     alert = "İdeal çekiden yuxarı";
// } else if (dey >= 30 && kilo < 40) {
//     alert = "Artıq çeki (obez)";
// } else {
//     alert = "Artıq çeki (morbid dərəcədə piylənmə)";
// }


// 5. Userin daxil etdiyi qiymetin (Ela (100-90), Yaxsi(90-75), Orta(75-55), , Pis(55-35), Kafi(35-0)) oldugunu yoxlayin:
// let point = +prompt("Qiymətinizi daxil edin (0 - 100):");

// if (point < 100 && point > 90) {
//         alert("Ela");
//     } else if (point < 90 && point > 75) {
//         alert("Yaxsi");
//     } else if (point < 75 && point > 55) {
//         alert("Orta");
//     } else if (point < 55 && point > 35) {
//         alert("Pis");
//     } else if (point < 35 && point > 0) {
//         alert("Kafi");
//     }


// 6. Ucbucagin 2 terefini daxil edin. Hipetonuzu hesablayin (Arrow function):
// let a = +prompt("Birinci tərəfi daxil edin:");
// let b = +prompt("İkinci tərəfi daxil edin:");

// let hipotenuzuHesabla = (a, b) => Math.sqrt(a ** 2 + b ** 2);

// let hipotenuz = hipotenuzuHesabla(a,b);

// alert(`Üçbucağın hipotenuzu: ${hipotenuz}`);
