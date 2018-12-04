class Ksiazka {
    constructor(tytul, autor, przeczytana){
        this.tytul=tytul;
        this.autor=autor;
        this.przeczytana=przeczytana;
    }
    opiszKsiazke(){
      if(this.przeczytana==true){
        console.log("Książka ma tytuł "+this.tytul+",autorem jest "+this.autor+" i została przeczytana");
      } else {
        console.log("Książka ma tytuł "+this.tytul+",autorem jest "+this.autor+" i nie została przeczytana");
      }
    }
    }
    
    let ksiazka1 = new Ksiazka ('Hamlet', 'William Shakespear',true);
    let ksiazka2 = new Ksiazka ('Harry Potter', 'Joane Roaling', false);
    let ksiazka3 = new Ksiazka ('House of cards', 'Michael Dobbs', false);
    
    let booksList = [ksiazka1, ksiazka2, ksiazka3];
    
    const iloscPrzeczytanych = (booksList) =>{
        let count =0;
        booksList.forEach((element, index)=>{
          element.opiszKsiazke();
            if(element.przeczytana==true){
                ++count;
        }
    });
    console.log('Ilosc przeczytanych: '+count);
    }
    iloscPrzeczytanych(booksList);