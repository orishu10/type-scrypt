export enum ItemType {
  Book = 'book',
  DVD = 'dvd',
}
interface Book {
  type:string
  title:string
  author:string
  }

  interface DVD {
    type :string
    title:string
    duration:number
  }
  


const libraryItems: (Book | DVD)[] = [
  { type: ItemType.Book, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { type: ItemType.DVD, title: 'Inception', duration: 148 },
  { type: ItemType.Book, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { type: ItemType.DVD, title: 'Avatar', duration: 162 },
  { type: ItemType.Book, title: 'Go Set a Watchman', author: 'Harper Lee' },
];





  function filterItems <T extends Book | DVD >(libraryItems:T[], filterFn:(element:T)=>boolean):T[] {
    console.log( libraryItems.filter(filterFn));
    
  return libraryItems.filter(filterFn)
  }


  function printItemsData <T extends Book | DVD> (libraryItems:T[]):void {
     for (let index = 0; index < libraryItems.length; index++) {
      const element = libraryItems[index];
      console.log(element);    
     }
  }
   

  function filterFn<T extends Book | DVD> (element:T):boolean{
    if ("duration" in element) {
     return element.duration >120;
    }
    return false;
  } 

  function filterHar<T extends Book | DVD> (element:T):boolean{
    if ("author" in element) {
     return element.author === 'Harper Lee'  ;
    }
    return false;
  } 
   
  filterItems(libraryItems,filterFn)
  filterItems(libraryItems,filterHar)
//2  rock paper scissors
interface player {
  play:string
  }

enum options{
rock,
paper,
scissors
}

let moshe:player = {
  play:"rock"
}

let elad:player = {
 play: 'paper'
}

function playGame (player1:player ,player2:player):string {
  let result:string;
if (player1.play === undefined || player2.play === undefined ){
  throw new Error('error acourd')
}
let play1:string = player1.play
let play2:string = player2.play
switch (true) {
  case(play1 === play2):
  result = 'tie'
  break;
  case (play1 === 'paper' && play2 ==='rock'):
    result = 'player1'
    break;
 case (play1 === 'rock' && play2 === 'scissors' ):
 result = 'player1'
   break;
   case (play1 === 'scissors' && play2 === 'paper' ):
    result = 'player1'
  default:
    result ='player2'
    break;
}
return result;

}

const play = playGame(moshe, elad);
console.log(play);

//3