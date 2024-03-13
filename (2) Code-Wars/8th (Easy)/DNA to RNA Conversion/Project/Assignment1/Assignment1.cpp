#include <iostream>
#include <string>
using namespace std;

string DNAtoRNA(string dna);

int main() {

    cout << DNAtoRNA("GCAT") << endl;
    return 0;
}

string DNAtoRNA(string dna) {
    for (int i = 0; i < dna.length(); i++) {
        if (dna[i] == 'T') {
            dna[i] = 'U';
        }
    }
    return dna;
}