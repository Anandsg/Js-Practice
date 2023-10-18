function JuiceProcessor(apples, oranges) {
    console.log(apples, oranges);
    const Juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return Juice;
}

const appleJuice = JuiceProcessor(4, 0);
console.log(appleJuice);

const appleOrangeJuice = JuiceProcessor(3, 2);
console.log(appleOrangeJuice);