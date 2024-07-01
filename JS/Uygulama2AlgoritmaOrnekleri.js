// 1-) negatif bir sayının mutlak değerini bulun ve yeni bir değişkene atayın. Değişkeni konsola yazdırın.

let sayi = -5;
console.log(Math.abs(sayi));


// 2-) ondalıklı bir sayıyı yukarıya yuvarlayın.
let sayi2 = 19.99;
console.log(Math.ceil(sayi2));
// 3-) ondalıklı bir sayıyı aşağıya yuvarlayın.
let sayi3 = 19.99;
console.log(Math.floor(sayi2));

// 4-) 6 15 -7 0 80 -35 sayıları arasındaki en büyük sayıyı bulun.

// let sayiDizisi = [6, 15, -7, 0, 80, -35];
console.log(Math.max(6, 15, -7, 0, 80, -35));

// 5-) 6 15 -7 0 80 -35 sayıları arasındaki en küçük sayıyı bulun.
console.log(Math.min(6, 15, -7, 0, 80, -35));


// 6-) ondalıklı bir sayıyı, virgülden sonra 3 hanesi görünecek şekilde yuvarlayın.
let ondalikli = 10.9786543210;
console.log(ondalikli.toFixed(3));

// 7-) bir sayının karekökünü bulun.
let karekok = 10.9786543210;
console.log(Math.sqrt(karekok));


// 8-) bir sayının üstel fonksiyonunu bulun. (x üzeri y)
let ussel = 3;
console.log(Math.pow(ussel,2));


// 9-) 123.456789 sayısını toplamda 6 hanesi görünecek hale getirin.
let altiHane = 10.9786543210;
console.log(altiHane.toPrecision(6));


// 10-) 123.456789 sayısının ondalıklı kısmını kaldıracak şekilde tam sayı haline getirin.

let ondalikli2 = 123.956789;
console.log(parseInt(ondalikli2));
console.log(Math.trunc(ondalikli2));

// 11-) Rastgele bir sayı üretin. (1 ile 100 arasında)

let rassal = (Math.random()*100)+1;
console.log(rassal);
console.log(Math.trunc(rassal));

