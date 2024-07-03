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


let sepetToplami=0;

while (true) {
    let giris=prompt("Ürün ismi ya da 'onayla' yazin");
    if (giris=="onayla" || giris=="ONAYLA") {
        console.log(`Toplam Tutar: ${sepetToplami}`);
        break;
    }
    else{
        giris=Number(prompt(`${giris} ürününün fiyatını girin: `));
        sepetToplami=sepetToplami+giris;
    }
}
