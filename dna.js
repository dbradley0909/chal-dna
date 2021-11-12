// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the “instructions” for the development and functioning of living organisms.

// In DNA strings, symbols “A” and “T” are complements of each other, as are “C” and “G”.

// Write a function that takes in a string (one side of the DNA); it should return the other complementary side.

// For example:

// dnaStrand("ATTGC") --> "TAACG"

// dnaStrand("GTAT") --> "CATA"

function DNA_strand (str) {
    let result = '';
    for(i=0; i<str.length; i++){    
        switch (str[i]) {
            case 'A':
                result = result + 'T';
                break;
            case 'T':
                result = result + 'A';
                break;
            case 'C':
                result = result + 'G';
                break;
            case 'G':
                result = result + 'C';
                break;
            default:
                return 'Your DNA is not from this planet';
        }
    }
    return result
};