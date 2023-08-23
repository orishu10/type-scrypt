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
