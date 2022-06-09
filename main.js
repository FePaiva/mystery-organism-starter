// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
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
      this.dna[randNumber] = randBase;
    },
    //compare the dna of two samples and display percentage of identical bases that appear in the same position
    compareDNA(pAequor) {
      let sameCount = 0;
      if (this.dna.length != pAequor.dna.length) {
        console.log("DNA strands of differing length! Cannot compare.");
      } else {
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === pAequor.dna[i]) {
            sameCount++;
          }
        }
      }
      const samePercen = Math.floor((sameCount / this.dna.length) * 100);
      console.log(
        `Specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${samePercen}% DNA in common.`
      );
      return samePercen;
    },
    willLikelySurvive() {
      if (this.dna.length != 15) {
        console.log("Invalid DNA sample");
      } else {
        let countCG = 0;
        this.dna.forEach((base) => {
          if (base === "C" || base === "G") {
            countCG++;
          }
        });
        return Math.floor((countCG / this.dna.length) * 100) >= 60;
      }
    },
  };
};
const testP = pAequorFactory(3, mockUpStrand());
console.log(testP.dna);
testP.mutate();
const testP2 = pAequorFactory(2, mockUpStrand());
console.log(testP2.dna);
testP.compareDNA(testP2);
console.log(testP2.willLikelySurvive());
// const sampleSet = buildSampleSet();
// console.log(sampleSet.length);
// console.log(sampleSet[25]);
// console.log(sampleSet[25].willLikelySurvive());
// console.log(testP.complementStrand());
// findMostRelated(sampleSet);
