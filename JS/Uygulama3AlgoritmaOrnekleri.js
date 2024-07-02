// 1- Bir sayı oluşturun ve bu sayının pozitif, negatif veya sıfır olduğunu kontrol eden bir if-else yapısı oluşturun. Her durumu console.log() ile yazdırın.

// let sayi = 5;
// if (sayi > 0) {
//   console.log("Sayı pozitiftir.");
// } else if (sayi < 0) {
//   console.log("Sayi negatiftir.");
// } else {
//   console.log("Sayi sıfırdır.");
// }

// 2- İki farklı sayı oluşturun ve bu sayıların büyüklük ilişkisini kontrol eden bir if-else yapısı oluşturun. Her durumu console.log() ile yazdırın.

// let sayi10 = 4;
// let sayi20 = 4;

// if (sayi10 < sayi20) {
//   console.log("Sayi2 büyüktür.");
// } else if (sayi10 > sayi20) {
//   console.log("Sayi1 büyüktür");
// } else {
//   console.log("Sayilar eşittir.");
// }

// 3- Bir kelimeyi tersine çevirerek farklı bir değişkene atayın. Orijinal kelimenin palindrom (tersine de aynı olan) olup olmadığını kontrol eden bir if else yapısı oluşturun. Örneğin, "kayak" kelimesi palindromdur, ancak "merhaba" palindrom değildir.

// let kelime = "merhaba";

// let tersKelime = kelime.split("").reverse().join("");

// console.log(kelime);
// console.log(tersKelime);
// if (kelime == tersKelime) {
//   console.log("Kelime palindromdur");
// } else {
//   console.log("Kelime palindrom değildir.");
// }

// 4- VKI Hesabı
// Kullanıcıdan boy,kilo,yaş,cinsiyet
// VKI = kilo/(boy/100)**2
// 18,5 düşükse zayıf
// 18,5 ile 24,9 arası normal
// 25 ile 29,9 arası kilolu
// 30 ile 34,9 arası obez
// 35 üstü ise aşırı obez
// Konsol Çıktısı = VKI değeriniz = ??? ve bu değerlere göre kilolusunuz/zayıfsınız.

// let boy=prompt("Boy giriniz: ")
// let kilo=prompt("Kilonuzu giriniz: ")
// let vki=kilo/(boy/100)**2;
// let yas=prompt("Yasiniz");
// let cinsiyet=prompt("Cinsiyetiniz").toLowerCase();
// let sonuc;

// if (vki<18.5) {
//     sonuc="Zayıfsınız"
// }

// else if (18.5<vki && vki<24.9) {
//     sonuc="Normal kilodasınız"
// }

// else if (25<vki && vki<29.9) {
//     sonuc="Kilolusunuz"
// }
// else if (130<vki && vki<34.9) {
//     sonuc="Obezsiniz"
// }
// else if (vki>35) {
//    sonuc="Aşırı Obezsiniz"
// }
// else {
//     sonuc="Tanımlanan limitlerin dışında sonuc çıkmıştır.";
// }

//50yaşın üstü ve erkekse bolbol yürüyüs yapmalısınız!
//60yaş üstü ve kadınsa sebze tüketimini arttırmalısınız!

// console.log(`VKI değeriniz = ${vki} ve bu değerlere göre ${sonuc} `);

// if (yas>50 && cinsiyet=="erkek") {
//     console.log("Bol bol yürüyüş yapmalısınız");
// }
// else if (yas>60 && cinsiyet=="kadin" || cinsiyet=="kadın") {
//     console.log("sebze tüketimini arttırmalısınız!");
// }




// 5- Hesap Makinesi
// Kullanıcıdan iki sayı ve bir işlem türü (+, -, *, /) girmesini isteyin. Girilen işlem türüne göre iki sayı üzerinde matematiksel işlem gerçekleştirin ve sonucu gösterin. Eğer kullanıcı geçersiz bir işlem türü girerse, hata mesajı verin.

// let sayi1= Number(prompt("İşlem yapmak istediğiniz ilk sayıyı giriniz : "));
// let sayi2= Number(prompt("İşlem yapmak istediğiniz ikinci sayıyı giriniz : "));
// let islem= prompt("Hangi işlemi yapmak istiyorsunuz : (+,-,*,/) ");

//     if(islem === "+"){
//         console.log("İki sayının toplamı : Sonuc :" + (sayi1 + sayi2));
//     }
//     else if(islem === "-"){
//         console.log("İki sayının çıkarması : Sonuc :" + (sayi1-sayi2));

//     }
//     else if(islem === "*"){
//         console.log("İki sayının çarpımı : Sonuc :" + (sayi1*sayi2));
//     }
//     else if(islem === "/"){
//         console.log("İki sayının bölümü : Sonuc :" + (sayi1/sayi2));5

//     }
//     else{
//         console.log("Hatalı işlem");
//     }






// Kullanıcıdan bir ay ismi alın ve girilen ayın kaç gün olduğunu konsola yazdırın. (Switch Case)

// let ay = prompt("Lütfen bir ay ismi giriniz:").toLowerCase();
// let gun;

// switch (ay) {
//   case "ocak":
//     gun = "31";
//     break;
//   case "subat":
//     gun = "28";
//     break;
//   case "mart":
//     gun = "31";
//     break;
//   case "nisan":
//     gun = "30";
//     break;
//   case "mayıs":
//   case "mayis":
//     gun = "31";
//     break;
//   case "haziran":
//     gun = "30";
//   case "temmuz":
//     gun = "31";
//     break;
//   case "ağustos":
//     gun = "301";
//     break;
//   case "eylül":
//     gun = "30";
//     break;
//   case "ekim":
//     gun = "31";
//     break;
//   case "kasim":
//     gun = "30";
//     break;
//   case "aralık":
//     gun = "31";
//     break;

//   default:
//     console.log("Tanımsız bir ay girdiniz");
//     break;
// }

// console.log(`${ay} ayinda ${gun} gün vardır.`);







// BMW, Mercedes ve Audi Markaları için farklı renk çeşitlerine göre stok durumunu kontrol eden iç içe bir switch yapısı oluşturun. Marka ismini ve renk bilgisini gereken zamanlarda kullanıcıdan prompt olarak isteyin. Kullanıcı, ilgili marka ve renk bilgisini girdikten sonra konsolda Stokta Var veya Yok şeklinde bir mesaj yayınlayın. Stok durumunu elde edebilmek için yaratacağınız bir stokDurumu değişkenini stokta "Var" veya "Yok" olarak caselerin içerisinde güncelleyin.

// let marka = prompt("Marka bilgisini giriniz: ").toLowerCase();
// let renk = prompt("Renk bilgisini giriniz: ").toLowerCase();
// let stok;
// switch (marka) {
//   case "bmw":
//     switch (renk) {
//       case "siyah":
//         stok="var"
//         break;
//       case "kırmızı":
//         stok="yok"
//         break;
//       case "beyaz":
//         stok="var"
//         break;
//       case "mavi":
//         stok="var"
//         break;
//       default:
//         console.log("Lütfen renk bilgisiniz doğru giriniz.");
//         break;
//     }
//     break;

//   case "mercedes":
//     switch (renk) {
//         case "siyah":
//           stok="yok"
//           break;
//         case "kırmızı":
//           stok="yok"
//           break;
//         case "beyaz":
//           stok="var"
//           break;
//         case "mavi":
//           stok="var"
//           break;
//         default:
//           console.log("Lütfen renk bilgisiniz doğru giriniz.");
//           break;
//       }
//     break;

//   case "audi":
//     switch (renk) {
//         case "siyah":
//           stok="yok"
//           break;
//         case "kırmızı":
//           stok="var"
//           break;
//         case "beyaz":
//           stok="var"
//           break;
//         case "mavi":
//           stok="yok"
//           break;
//         default:
//           console.log("Lütfen renk bilgisiniz doğru giriniz.");
//           break;
//       }
//     break;

//   default:
//     console.log("Lütfen marka bilgisiniz doğru giriniz.");
//     break;
// }


// console.log(`${marka} markalı araç için ${renk} rengiyle stok durumu: ${stok}`);




console.clear();



// 1- myArray isimli bir dizi tanımlayın. 10 elemandan oluşsun ad soyad yaş true sevdiğiniz meyveler, sevdiğiniz yemekler
let myArray = ["burak", "gonca", 34, false, "ananas", "elma", "armut", "mantı", "köfte", "patates"];



// 2- adınızı değiştirin => Cem => Mert. Diziyi konsola yazdırın.
myArray[0] = "Burki";
console.log(myArray);



// 3- dizinin uzunluğunu konsola yazdırın.
console.log(myArray.length);



// 4- dizinin sonuna bir hayvan ismi ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
myArray.push("Tazı");
console.log(myArray);



// 5- dizinin başına bir hayvan ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
let yeniUzunluk = myArray.unshift("Kurt");
console.log(yeniUzunluk);
console.log(myArray);



// 6- dizinin sonundaki elemanı silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
let sondakiELeman = myArray.pop();
console.log(sondakiELeman);
console.log(myArray);




// 7- dizinin ilk elemanını silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
let ilkEleman = myArray.shift();
console.log(ilkEleman);
console.log(myArray);




// 8- silmiş olduğunuz elemanları ve uzunluk bilgilerini newArray isimli yeni bir dizide toplayın.(sakladığınız değişkenleri kullanın)
let newArray = [ilkEleman, sondakiELeman, yeniUzunluk];
console.log(newArray);




// 9- myArray ve newArray dizilerini birleştirin ve yeni değişkenlere atayın. 2 yöntem.

let birlesikArray = myArray.concat(newArray);

console.log(birlesikArray);





// 10- myArray içerisinde eleman olarak "Veli" var mı ?

let control=myArray.includes("Veli");
if (control==true) {
    console.log("Veli var");
}
else{
    console.log("Veli yok!");
}


// 11- myArray içersinide 4.elemandan itibaren patates var mı?


if (myArray.indexOf("patates",3)===-1) {
    console.log("Patates yoktur!");
}
else{
    console.log("Patates vardır");
}


// 12- sevdiğiniz meyvelerden ilkinin indexi nedir?
console.log(myArray.indexOf("ananas"));



// 13- newArray dizisinin ilk 3 elemanını bir değişkene atayın, konsola yazdırın.
let newArray2 = myArray.slice(0,3);
console.log(newArray2);
