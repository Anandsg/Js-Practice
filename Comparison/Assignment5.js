const age = 18;
if (age === 18) console.log("age is strict");

if (age == 18) console.log("age is loose");

const fav = Number(prompt("what's your favourite num?"));
console.log(typeof fav);

if (fav === 22) { // '22' == 22
    console.log('Cool, 22 is good number');
} else if (fav === 10) {
    console.log('Cool, 10 is also an amazing num')
} else {
    console.log('Number is not 22 or 10');
}

if (fav !== 2) console.log('this is not equal')