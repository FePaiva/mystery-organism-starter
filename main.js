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

const pAequorFactory = (number, dnaArray) => {
  
  return {
    specimenNum: number,
    dna: dnaArray,
    mutate() {
      let selectedDNA = Math.floor(Math.random() * 15)
      let changingDNA = this.dna[selectedDNA]
      let removedBases = dnaBases.filter(element => element !== changingDNA)
      this.dna[selectedDNA] = removedBases[Math.floor(Math.random() * 3)]
      return this.dna;
    }
  }
};







