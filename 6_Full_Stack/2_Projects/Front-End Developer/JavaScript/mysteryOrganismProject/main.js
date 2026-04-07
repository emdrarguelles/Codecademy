// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,

    mutate() {
      let ranBase = Math.floor(Math.random() * 15);
      let newBase = returnRandBase();
      while (this.dna[ranBase] === newBase) { 
        ranBase = Math.floor(Math.random() * 15);
        newBase = returnRandBase();
      }
      this.dna.splice(ranBase, 1, newBase)
      return this.dna
    },

    compareDNA(obj) {
      let same = []
      let perc;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === obj.dna[i]) {
          same.push(this.dna[i]);
        }
      }
      perc = Math.round((same.length / 15) * 100)
      return `Specimen #${this.specimenNum} and specimen #${obj.specimenNum} have ${perc}% DNA in common`
    },

    willLikelySurvive() {
      let cOrGBase = []
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          cOrGBase.push(this.dna[i]);
        }
      }
      if (cOrGBase.length >= 9) {
        return true;
      } else {
        return false;
      }
    },

    complementStrand() {
      let complement = []
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'A') {
          complement.push('T');
        } else if (this.dna[i] === 'T') {
          complement.push('A');
        } else if (this.dna[i] === 'C') {
          complement.push('G');
        } else if (this.dna[i] === 'G') {
          complement.push('C');
        } else {
          complement.push(this.dna[i]);
        }
      }
      return complement;
    }
  }
}

let test = pAequorFactory(1, mockUpStrand());

console.log(test.willLikelySurvive());

const setOfThirty = []
let count = 1
while (count <= 30) {
  let newSpec = pAequorFactory(count, mockUpStrand());
  if (newSpec.willLikelySurvive() === true) {
    setOfThirty.push(newSpec);
    count++;
  }
}

console.log(setOfThirty);

