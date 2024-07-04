// -------------------For - Başlangıç Bitiş Arası Sayıların Toplamı-----------------------
// kullanıcıdan bir başlangıç sayısı bir de bitiş sayısı isteyin. Bir for döngüsü yaratarak başlangıç sayısından bitiş sayısına kadar bütün sayıları toplayın. toplamı ekrana yazdırın (başlangıç ve bitiş sayısı dahil)

// let baslangicSayi=Number(prompt("Başlangıç sayısını giriniz: "));
// let bitisSayi=Number(prompt("Bitiş sayısını giriniz: "));

// let toplamSayi=0;

// for (let index = baslangicSayi; index <= bitisSayi; index++) {
//     toplamSayi=(toplamSayi+index);
// }

// console.log(toplamSayi);

// -------------------For - Dersi Geçen Öğrenci Sayısı-----------------------
// Bir sınıfta 5 öğrenci olduğunu düşünelim. Öğrencilerin notlarını almak için prompt kullanarak her öğrenci için bir not girişi yapın. Ardından, bu notları kullanarak sınıf ortalamasını hesaplayın. Son olarak, sınıftaki öğrencilerin kaç tanesinin geçtiğini (geçer not 60) bulun ve konsola yazdırın.

// let ogrenciler = ["Burak", "Hakan", "Furkan", "Yasin", "Kerem"];
// let notToplam=0;
// for (let i = 0; i < ogrenciler.length; i++) {
//   let not = Number(prompt(`${ogrenciler[i]}'nin notu`));
//   notToplam=notToplam+not;
// }
// let ortalama=notToplam/ogrenciler.length
// console.log(ortalama);

// -------------------While - Sayı Tahmin uygulaması-----------------------
// Random bir sayı tanımlayın ve kullanıcıdan 1-10 arası bir sayı girerek sayıyı tahmin etmesini isteyin. Toplam 3 hak tanımlayın. While döngüsü kullanarak, kullanıcının hakları bitene kadar denemesine izin verin. Her denemenin sonunda sayıyı arttırıp azaltması gerektiği bilgisini ekrana yazdırın.

// let randomSayi = Math.random(0,1)*10+1;
// randomSayi=parseInt(randomSayi);

// let sayac=1;

// console.log(randomSayi);
// while (sayac<4) {
//     let tahmin= prompt(`${sayac}. tahmininiz: `);

//     if (tahmin==randomSayi) {
//         console.log("Tebrikler bildiniz");
//         break;
//     }
//     else{
//         console.log("Maalesef bilemediniz");
//     }
//     sayac=sayac+1;
// }

// -------------------While - Alışveriş Sepeti Uygulaması-----------------------
// Kurallar:
// While döngüsü kullanılacak.
// Kullanıcı prompta herhangi bir ürün ismi veya "onayla" yazabilir.
// Ürün ismi yazarsa kullanıcıdan ürünün fiyat bilgisini isteyin ve toplam fiyata ekleyin.
// Kullanıcı "onayla" yazarsa, ekrana sepetin toplam tutar bilgisini yazdırın.

// let sepetToplami=0;

// while (true) {
//     let giris=prompt("Ürün ismi ya da 'onayla' yazin");
//     if (giris=="onayla" || giris=="ONAYLA") {
//         console.log(`Toplam Tutar: ${sepetToplami}`);
//         break;
//     }
//     else{
//         giris=Number(prompt(`${giris} ürününün fiyatını girin: `));
//         sepetToplami=sepetToplami+giris;
//     }
// }

// Yazacağınız fonksiyonlar içerisinde console.log ifadesi yer almayacak. Çıktıyı görmek için değişkenleri kullanabilir veya fonksiyonları console.log içerisinde çağırabilirsiniz.

// 1- Verilen iki sayının çarpımını döndüren bir fonksiyon yazın. (Arrow Function ile)

let carpma = (a, b) => a * b;

console.log(carpma(3, 4));

// 2- Verilen bir cümlenin kelime sayısını döndüren bir arrow fonksiyon yazın.

const kelimeSayisi = (cumle) => cumle.split(" ").length - 1;

console.log(kelimeSayisi("asadasda asdaa as asa  asa"));

// 3- Verilen bir sayının faktöriyelini hesaplayan bir fonksiyon yazın. (Function Declaration Yöntemi ile)

function faktöriyel(sayi) {
  let sonuc = 1;
  for (let i = 1; i <= sayi; i++) {
    sonuc = sonuc * i;
  }
  return sonuc;
}

console.log(faktöriyel(5));
console.log(faktöriyel(0));

// 4- Verilen bir sayının asal olup olmadığını kontrol eden bir fonksiyon yazın. (Function Expression Yöntemi ile)

// console.log(asalMi(9)); 

const asalMi =function (asalSayi) {
  if (asalSayi < 2) {
    return false;
  }
  for (let i = 2; i <= asalSayi / 2; i++) {
    if (asalSayi % i == 0) return false;
  }
  return true;
}

console.log(asalMi(-1));
console.log(asalMi(9));
console.log(asalMi(17));
console.log(asalMi(6));

// 5- Verilen bir dizi içindeki en büyük sayıyı bulan bir fonksiyon yazın.

function EnBuyuk(dizi) {
  let enBuyukSayi = dizi[0];
  for (let i = 0; i < dizi.length; i++) {
    if (dizi[i] > enBuyukSayi) {
      enBuyukSayi = dizi[i];
    }
  }
  return enBuyukSayi;
}

let sayiDizisi = [30, 5, 1, -9, 21];

console.log(EnBuyuk(sayiDizisi));

// 6- Verilen bir dizi içindeki sayıların toplamını hesaplayan bir fonksiyon yazın.

function SayilarToplami(dizi) {
  let SayilarToplami = 0;
  for (let i = 0; i < dizi.length; i++) {
    SayilarToplami = SayilarToplami + dizi[i];
  }
  return SayilarToplami;
}

console.log(SayilarToplami(sayiDizisi));

// 7-Yukarıdaki son iki fonksiyonu arrow function olarak yeniden yazın.

// let carpma = (a, b) => a * b;

let EnBuyuk2 = (dizi) => {
  let enBuyukSayi = dizi[0];
  for (let i = 0; i < dizi.length; i++) {
    if (dizi[i] > enBuyukSayi) {
      enBuyukSayi = dizi[i];
    }
  }
  return enBuyukSayi;
};

let SayilarToplami2 = (dizi) => {
  let toplam = 0;
  for (let i = 0; i < dizi.length; i++) {
    toplam += dizi[i];
  }
  return toplam;
};

console.log(EnBuyuk2(sayiDizisi));
console.log(SayilarToplami2(sayiDizisi));

// Buradan itibaren yalnızca arrow function kullanıyoruz.
// 8- Verilen bir stringi tersine çeviren bir fonksiyon yazın.

let Ters = (kelime) => {
    let tersKelime = "";
    let uzunluk = kelime.length;
    for (let i = 0; i < uzunluk; i++) {
      tersKelime += kelime[(uzunluk - 1) - i];
    }
    return tersKelime;
  };
  
  console.log(Ters("furkan"));  
  



  console.clear();

// Kullanılacak diziler
const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dizi1 = ["elma", "armut", "kiraz", "üzüm"];
const dizi2 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];
const dizi3 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];

// ---------------forEach-------------------
// 1- Verilen bir dizinin tüm elemanlarını ekrana yazdıran bir forEach döngüsü oluşturun.


dizi.forEach(element => {
    console.log(element);
});

console.log("--------------------------------------");

// 2- Verilen bir dizinin sadece çift sayılarını ekrana yazdıran bir forEach döngüsü oluşturun.


dizi.forEach(element => {
    if (element%2===0) {
        console.log(element);
    }
});

console.log("--------------------------------------");

// 3- Verilen bir dizinin elemanlarını 2 ile çarpan ve sonucu yeni bir diziye ekleyen bir forEach döngüsü oluşturun.

let yeniDizi = [];

dizi.forEach(element => {
    let sonuc = 2 * element;
    yeniDizi.push(sonuc);
});

console.log(yeniDizi);  

console.log("--------------------------------------");

// 4- Verilen bir dizinin elemanlarının toplamını hesaplayan bir forEach döngüsü oluşturun.(reduce kullanmadan)

let toplam=0;

dizi.forEach(element => {
    toplam=toplam+element;
});

console.log(toplam);

console.log("--------------------------------------");

// 5- Verilen bir dizinin elemanlarını ekrana yazdırırken, dizinin son elemanını özel bir mesajla birlikte yazdıran bir forEach döngüsü oluşturun.

let sayac = dizi1.length - 1;

dizi1.forEach(element => {
    if (sayac === 0) {
        console.log(element + " - son elemandır");
    } else {
        console.log(element);
    }
    sayac--;
});

console.log("--------------------------------------");



// ---------------map-------------------
// 6- Verilen bir dizideki elemanları büyük harf yaparak yeni bir dizi oluşturan bir map döngüsü oluşturun.

const buyukHarfDizi = dizi1.map(element => element.toUpperCase());


console.log(buyukHarfDizi);

console.log("--------------------------------------");

// 7- Verilen bir dizinin elemanlarını 1 ile 10 arasında rastgele bir sayıyla toplayıp yeni bir dizi oluşturan bir map döngüsü oluşturun.

let rasgeleSayi = parseInt(Math.random(0,1)*10);
console.log("Rasgele sayi: "+rasgeleSayi);

let toplamDizi= dizi.map(element => element+rasgeleSayi);

console.log(toplamDizi);

console.log("--------------------------------------");

// 8- Verilen bir stringin her bir kelimesini ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.

let kelime = "benim adım burak";

let kelimeDizisi = kelime.split(" ");

let tersDizi = kelimeDizisi.map(kelime => kelime.split("").reverse().join(""));


console.log(tersDizi); 



console.log("--------------------------------------");

// 9- Verilen bir dizinin elemanlarını(elemanlar sayı olmalı) stringe çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.

let stringDizi = dizi.map(element => element.toString());
console.log(stringDizi); 


console.log("--------------------------------------");


// 10- Verilen bir dizi içindeki stringleri ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun. Ancak, bu sefer reverse() yerine kendi ters çevirme algoritmanızı oluşturun.


let tersCevirilmisDizi = dizi1.map(element => {
    let tersKelime = "";
    for (let i = element.length - 1; i >= 0; i--) {
        tersKelime += element[i];
    }
    return tersKelime;
});

console.log(tersCevirilmisDizi); 

console.log("--------------------------------------");


// ---------------filter-------------------
// 11- Verilen bir dizi içerisindeki çift sayıları filtreleyen bir örnek yazın.


let ciftSayilar = dizi.filter(sayi => sayi % 2 === 0);

console.log(ciftSayilar); 
console.log("--------------------------------------");


// 12- Verilen bir dizi içerisindeki stringlerden belirli bir uzunluğa sahip olanları filtreleyen bir örnek yazın.

let uzunlugaGore = dizi1.filter(element => element.length === 5);

console.log(uzunlugaGore);

console.log("--------------------------------------");

// ---------------reduce-------------------
// 13- Verilen bir dizi içerisindeki sayıların toplamını, her bir sayıya 2 ekleyerek hesaplayan bir örnek yazın.

let artanDizi = dizi.reduce((toplam,sayi) => toplam+(sayi+2),0 )

console.log(artanDizi);

// ---------------find-------------------
// 14- Verilen bir dizi içerisindeki ilk çift sayıyı döndüren bir örnek


let ilkCiftSayi = dizi.find(element => element % 2 ===0 );

console.log(ilkCiftSayi);

console.log("--------------------------------------");


// 15- Verilen bir dizi içerisindeki son çift sayıyı döndüren bir örnek

let sonCiftSayi = dizi.reverse().find(element => element % 2 === 0);

console.log(sonCiftSayi);

console.log("--------------------------------------");

// ---------------some-------------------
// 16- Verilen bir dizi içerisinde en az bir negatif sayı olup olmadığını kontrol eden bir örnek

let negatifVarMi = dizi2.some(element => element < 0);

if (negatifVarMi) {
    console.log("Dizide en az bir negatif sayı var.");
} else {
    console.log("Dizide negatif sayı yok.");
}

console.log("--------------------------------------");


// ---------------every-------------------
// 17- Verilen bir dizi içerisindeki tüm sayıların pozitif olduğunu kontrol eden bir örnek

let control = dizi2.every(element=> element>0 )

console.log(control);

// ---------------sort-------------------
// 18- Verilen bir dizi içerisindeki sayıları sıralayan bir örnek


let siralama = dizi2.sort(element => element)

console.log(siralama);