
// -- Birkaç cümleden oluşan bir metin yazıp myStory isimli bir değişkene atayalım. İçerisinde tekrar eden birkaç kelime bulunsun.
// 1- Yazdığınız hikayenin uzunluğunu yazdırın.
// 2- Hikayenin toplam index sayısı kaçtır.
// 3- string içerisinde tekrar eden bir kelimenin ilkinin indexini ve sonuncusunun indexini sorgulayın.
// 4- İlk 15 karakterini yazdırın. ( 2 farklı yöntem kullanarak)
// 5- 15. karakterden sonrasını yazdırın. 15 dahil. ( 2 farklı yöntem kullanarak)
// 6- Son 5 karakteri yazdırın. ( 2 farklı yöntem kullanarak)
// 7- 11. karakterden sonra gelen 10 karakteri yazdırın.
// 8- Son 5 karakter haric hikayenizi yazdırın.
// 9- Hikayeniz, seçeceğiniz bir kelimeyi içeriyor mu diye kontrol edin.
// 10- Hikayenizdeki tüm "i" karakterlerini "ı" ya çevirin.
// 11- Hikayenizdeki ilk "a" karakterini "e" ye çevirin.
// 12- Bütün metni büyük harfe çevirin.
// 13- Bütün metni küçük harfe çevirin.
// 14- prompt üzerinden kullancıdan bir isim isteyin ve bir değişkene atayın.
//   a- Ardından bu değişkeni kullanarak console'a "Hoşgeldin, isim" şeklinde yazdırın.
//   b- Yukarıdaki çıktının aynısını template litteral kullanarak konsola yazdırın. Örn: console.log(degisken) => "benim adım: Cem"  
// 15- Kullanıcıdan gelen stringin başında ve sonunda boşluk olsun. 
//   a- Başındaki boşlukları kaldırın.
//   b- Sonundaki boşlukları kaldırın.
//   c- Boşluksuz halini yeni bir değişkene atayarak konsola yazdırın.
// 16- 14. sorudaki Çıktıyı uygun metotları kullanarak "BENİM Adım: İsim" yazacak hale getirin.
// 17- Ekrana, daha öncesinde bir değişkene atadığınız bir değeri yazdıran pop-up oluşturun.



let myStory="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores animi repudiandae deleniti commodi sequi suscipit molestiae quam temporibus nihil, facilis atque sit amet? Cumque recusandae facilis accusantium. Explicabo quibusdam est suscipit laudantium quaerat dolor assumenda, sit iste labore maiores. Fuga quasi a maiores cumque velit ut placeat similique esse, culpa necessitatibus possimus beatae aspernatur nihil at facilis! Ex illo vero, cumque illum voluptate dolores officia consectetur beatae explicabo porro quam eaque? Amet repudiandae voluptatibus magni enim tempore, repellat ipsam magnam!";

console.log(myStory.length);

console.log(myStory.length);

console.log(myStory.lastIndexOf("sit"));

console.log(myStory.indexOf("sit"));

console.log(myStory.slice(0,16));

console.log(myStory.substring(0,16));

console.log(myStory.substring(15));

console.log(myStory.slice(-5));

// 7- 11. karakterden sonra gelen 10 karakteri yazdırın.
console.log(myStory.slice(11,21));

// 8- Son 5 karakter haric hikayenizi yazdırın.
console.log(myStory.slice(0,-5));

// 9- Hikayeniz, seçeceğiniz bir kelimeyi içeriyor mu diye kontrol edin.
console.log(myStory.includes("repellat"));

// 10- Hikayenizdeki tüm "i" karakterlerini "ı" ya çevirin.
console.log(myStory.replaceAll("i","ı"));

// 11- Hikayenizdeki ilk "a" karakterini "e" ye çevirin.
console.log(myStory.replace("a","e"));

// 12- Bütün metni büyük harfe çevirin.
console.log(myStory.toUpperCase());

// 13- Bütün metni küçük harfe çevirin.
console.log(myStory.toLowerCase());

// 14- prompt üzerinden kullancıdan bir isim isteyin ve bir değişkene atayın.
//   a- Ardından bu değişkeni kullanarak console'a "Hoşgeldin, isim" şeklinde yazdırın.
//   b- Yukarıdaki çıktının aynısını template litteral kullanarak konsola yazdırın. Örn: console.log(degisken) => "benim adım: Cem"  

 let isim = prompt("Lütfen adinizi giriniz: ")
console.log(isim);

let message=`Benim adım ${isim}`;

console.log(message);


// 15- Kullanıcıdan gelen stringin başında ve sonunda boşluk olsun. 
//   a- Başındaki boşlukları kaldırın.
//   b- Sonundaki boşlukları kaldırın.
//   c- Boşluksuz halini yeni bir değişkene atayarak konsola yazdırın.

console.log(myStory.trimStart());
console.log(myStory.trimEnd());

let yeni=myStory.trim();
console.log(yeni);



// 16- 14. sorudaki Çıktıyı uygun metotları kullanarak "BENİM Adım: İsim" yazacak hale getirin.


function AdYazdir(){

    console.log("Selam, benim adım " + isim);
}

AdYazdir();

// 17- Ekrana, daha öncesinde bir değişkene atadığınız bir değeri yazdıran pop-up oluşturun.

let bilgi = "Dikkat dikkat!!!"
alert(bilgi);