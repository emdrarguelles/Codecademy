class Media {
  constructor(title, isCheckedOut, ratings) {
    this._title = title;
    this._isCheckedOut = isCheckedOut;
    this._ratings = ratings;
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  set isCheckedOut(newCheckOut) {
    this._isCheckedOut = newCheckOut;
  }

  get ratings() {
    return this._ratings;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    return this.ratings.reduce((currentSum, rating) => currentSum + rating, 0) / this.ratings.length;
  }

  addRating(newRating) {
    if (newRating >= 1 && newRating <= 5) {
        this.ratings.push(newRating);
    } else {
        console.log('Rating must be between 1 and 5');
    }
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title, false, []);
    this._author = author;
    this._pages = pages;
    this._publisher = '';
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }

  get publisher() {
    return this._publisher;
  }

  set publisher(newPublisher) {
    this._publisher = newPublisher;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title, false, []);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = [];
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }

  get movieCast() {
    return this._movieCast;
  }

  addMovieCast(newCast) {
    this._movieCast.push(newCast);
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)

console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();

console.log(speed.isCheckedOut);

speed.addRating(1)
speed.addRating(1)
speed.addRating(5)

console.log(speed.getAverageRating());

class CD extends Media {
  constructor(artist, title, songs) {
    super(title, false, []);
    this._artist = artist;
    this._songs = songs;
    this._featArtist = [];
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }

  get featArtist() {
    return this._featArtist;
  }

  addFeatArtist(newFeatArtist) {
    this._featArtist.push(newFeatArtist);
  }

  shuffle() {
    return this.songs.sort(() => Math.random() - 0.5);
  }
}

const tablo = new CD('Tablo', 'Rage Quit', ['Terra', 'Cotta', 'Spring']);

tablo.toggleCheckOutStatus();

console.log(tablo.isCheckedOut);

tablo.addRating(5)
tablo.addRating(5)
tablo.addRating(5)

console.log(tablo.getAverageRating());

tablo.addFeatArtist('lil Nikki')

tablo.shuffle();

class Catalog {
    constructor() {
        this._catalog = [];
    }

    get catalog() {
        return this._catalog;
    }

    addMedia(newMedia) {
        this._catalog.push(newMedia);
    }
}

const libraryCatalog = new Catalog();
libraryCatalog.addMedia(historyOfEverything);
libraryCatalog.addMedia(speed);
libraryCatalog.addMedia(tablo);
console.log(libraryCatalog.catalog);
