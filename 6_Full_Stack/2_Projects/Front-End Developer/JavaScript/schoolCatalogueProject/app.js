class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
    this._averageTestScores = [];
    this._schoolOverview = "";
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  get averageTestScores() {
    return this._averageTestScores.reduce((sum, score) => sum + score, 0) / this._averageTestScores.length;
  }

  set averageTestScores(testScores) {
    this._averageTestScores = testScores;
  }

  get schoolOverview() {
    return this._schoolOverview;
  }

  set schoolOverview(overview) {
    this._schoolOverview = overview;
  }

  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'number') {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }

  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
  }

  static pickSubstituteTeacher(substituteTeachers) {
    return substituteTeachers[Math.floor(Math.random() * substituteTeachers.length - 1)];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents)
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents)
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    console.log(this._sportsTeams);
    return this._sportsTeams;
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

lorraineHansbury.averageTestScores = [90, 95, 87, 89, 90]

lorraineHansbury.schoolOverview = "Great place to learn and play"

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.sportsTeams;

alSmith.averageTestScores = [89, 94, 86, 88, 89];

alSmith.schoolOverview = "Studying is getting hard at this school."

class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, 'middle', numberOfStudents)
  }
}

const taehyungKim = new MiddleSchool('Taehyung Kim', 321);

taehyungKim.quickFacts();

taehyungKim.averageTestScores = [93, 97, 89, 91, 92];

taehyungKim.schoolOverview = "Lajimolala!"

class SchoolCatalog {
  constructor() {
    this._catalog = [];
  }

  get catalog() {
    return this._catalog;
  }

  addCatalog(newSchool) {
    this.catalog.push(newSchool)
  }
}

const SchoolCollection = new SchoolCatalog();
SchoolCollection.addCatalog(lorraineHansbury);
SchoolCollection.addCatalog(alSmith);
SchoolCollection.addCatalog(taehyungKim);
console.log(SchoolCollection);
