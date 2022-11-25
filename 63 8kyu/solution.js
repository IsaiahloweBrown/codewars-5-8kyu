function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
   let dnaArray = dna.split("")
   for (i=0; i<dnaArray.length;i++) {
     
     dnaArray[i] === "T" ? dnaArray[i] = "U" : dnaArray[i] = dnaArray[i]
     
    }
    return dnaArray.join("")
  }