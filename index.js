// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = name => cats.push(name);

const destructivelyPrependCat = name => cats.unshift(name);

const destructivelyRemoveLastCat = () => cats.pop();

const destructivelyRemoveFirstCat = () => cats.shift();

const appendCat = name => {
    const newCatArr = [...cats, name];
    return newCatArr;
}

const prependCat = name => {
    const newCatArr = [name, ...cats];
    return newCatArr;
}

const removeLastCat = () => {
    const newCatArr = cats.slice(0, (cats.length - 1));
    return newCatArr;
}

const removeFirstCat = () => {
    const newCatArr = cats.slice(1);
    return newCatArr;
}