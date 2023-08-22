// part 1
function biger(x: number, y: number): number {
  return x > y ? x : y;
}

function bigerLog(x: number, y: number) {
  let biger = x > y ? x : y;
  console.log(biger);
}

function odd(x: number): string {
  if (x % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

function strLength(st: string): number {
  return st.length;
}

function arrNum(n: number): number[] {
  let arr = [];
  for (let index = 0; index < n; index++) {
    const element = index;
    arr.push(element);
  }
  return arr;
}

type person = {
  Name: string;
  Age: number;
  isStudent: boolean;
};
function printPerson(person: person) {
  console.log(person.Name);
  console.log(person.Age.toString());
  console.log(person.isStudent.toString());
}
let person1 = {
  Name: "ori",
  Age: 25,
  isStudent: true,
};
printPerson(person1);

function isMinor(person: person): boolean {
  if (person.Age <= 18) {
    return true;
  } else {
    return false;
  }
}

interface book {
  title: string;
  Author: string;
  Year: number;
}
type favoriteBook = {
  title: string;
  Author: string;
  Year: number;
};

type reader = person & favoriteBook;
let maxAge: number;
let oldReader: string;
function older(arReader: reader[]): string {
  arReader.forEach((element) => {
    if (element.Age > maxAge) {
      maxAge = element.Age;
      oldReader = element.Name;
    }
  });
  return oldReader;
}
let maxYear: number;
function oldBook(arReader: reader[]): number {
  arReader.forEach((element) => {
    if (element.Year > maxYear) {
      maxYear = element.Year;
    }
  });
  return maxYear;
}
//part 2
let arrNumbers : number[] = [1,2,4,6,9,5,10];
let c : number
function even(arrNumbers:number[]):number {
    arrNumbers.forEach(element => {
        if (element % 2 === 0) {
            c += element;  
        }  
    });
    return c;
}

function radius(hight:number,width:number):number {
    return hight * width;   
}
function pil(tex:number|string) {
    if (typeof(tex) != "string"){
        tex = tex.toString();
    }
 for (let index = 0; index < (tex.length / 2) ; index++) {
    const element = tex[index];
    const element2 = tex[tex.length-index];
    if (element != element2) {
        return 'not a pilndrom'
    }
} 
  return 'yay we found a pilndrom '
}