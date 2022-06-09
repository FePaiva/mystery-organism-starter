// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, baseArray) => {
  return {
    specimenNum: number,
    dna: baseArray,
    mutate() {
      //randomaly select a base in the dna property and replace it with a random different value
      const randNumber = Math.floor(Math.random() * this.dna.length);
      let randBase = returnRandBase();
      //ensures new value is different
      while (this.dna[randNumber] === randBase) {
        randBase = returnRandBase();
      }
      this.dna[randIndex] = randBase;
    },
  };
};
const testP = pAequorFactory(2, mockUpStrand());
console.log(testP.dna);






