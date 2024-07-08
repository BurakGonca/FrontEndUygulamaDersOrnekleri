import slugify from "slugify";
import randomColorRGB from "random-color-rgb"

console.log("Using Second");

//es6 ozelligi olan import kullanımı icin package.json dsoyasına "type: module" eklenmelidir

console.log(slugify("bilgeAdam Akademi frontend eğitimi"));
console.log(slugify("bilgeAdam Akademi frontend eğitimi","*"));
console.log(slugify("bilgeAdam Akademi frontend eğitimi","_"));
console.log(slugify("bilgeAdam Akademi frontend eğitimi","/"));

console.log(randomColorRGB());