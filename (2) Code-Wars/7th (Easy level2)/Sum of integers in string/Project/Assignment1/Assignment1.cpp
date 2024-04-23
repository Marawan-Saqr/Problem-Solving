#include <iostream>
#include <vector>
#include <string>
using namespace std;

int sumOfIntegers(const string& str);

int main() {

    string word = "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog";
    int result = sumOfIntegers(word);
    cout << result << endl;

    return 0;
}

#include <string>

int sumOfIntegers(const std::string& str) {

    int sum = 0; 

    for (size_t i = 0; i < str.size(); ++i) { 
        if (isdigit(str[i])) { 
            int num = 0;
            while (isdigit(str[i])) { 
                num = num * 10 + (str[i] - '0');
                ++i;
            }
            sum += num;
        }
    }

    return sum;
}




    