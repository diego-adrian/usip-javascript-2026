interface Person {
    name: string;
    age: number;
    species: string;
    origin: string;
    lastName?: string;
}

type NameComplete = string | number;

enum Species {
    Human = "Human",
    Alien = "Alien",
    Robot = "Robot"
}

const person: Person = {
    name: "Rick Sanchez",
    age: 70,
    species: Species.Human,
    origin: "Earth (C-137)",
    lastName: "Sanchez"
};

let nameComplete: NameComplete = `${person.name} ${person.lastName}`;
nameComplete = 2;

console.log(nameComplete);


const ages: number[] = [];
ages.push(2);

function getFullName(person: Person): number {
    // return `${person.name} ${person.lastName}`;
    // throw new Error("Function not implemented.");
    return 2;
}


// function checkNumber(n:any) {
//     if (n %2 === 0 && [2, 4, 6,].includes(n)) {
//         return true;
//     }
//     return false;
// }

type Par = 2 | 4 | 6;

function checkNumber(par: Par): boolean {
    return [2, 4, 6].includes(par);
}

checkNumber(6);