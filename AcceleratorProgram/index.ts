let x = 4;
let num : number = 6;
let str: string = 'string';
let bool: boolean = true;
let variable: any = false;

let isAnswered: boolean = true;

console.log(x);


let strArray: string[] = [];
let strAr: Array<string> = [];

let user : [number, string] = [9, "nein"];
console.log(true)

const small: number = 5;

enum Size {small=5};
console.log(Size)

let un: number | string;

const person: {id: number, user: string} = {
    id: 0,
    user:'name',
}

function myLog (x:any): void {
    console.log(x)
}

const logger = (y: any): void => console.log(y);

interface userInterface {
    (name: string, pw:string, id: number, isSubscrubed: boolean)
}

const printUser = (user: userInterface): string => {
    return user.name;
}
