#include <iostream>
#include <string>
#include <sstream>
#include <vector>
using namespace std;

string highAndLow(const string& numbers);

int main() {

    string numbers = "1 2 3 4 5"; 
    string result = highAndLow(numbers);
    cout << result << endl;
    return 0;
}

std::string highAndLow(const std::string& numbers) {
    std::istringstream in(numbers);
    auto minmax = std::minmax_element(
        std::istream_iterator<int>(in),
        std::istream_iterator<int>()
    );
    std::stringstream out;
    out << *minmax.second << ' ' << *minmax.first;
    return out.str();
}
