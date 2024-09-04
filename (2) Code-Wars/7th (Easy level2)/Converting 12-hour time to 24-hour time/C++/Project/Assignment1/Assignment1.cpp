#include <iostream>
#include <string>
using namespace std;

string to24HourTime(int hour, int minute, const string& period);

int main() {

    string result = to24HourTime(1, 0, "am");
    cout << result << endl;
    return 0;
}


string to24HourTime(int hour, int minute, const string& period) {
    
    if (period == "am" && hour == 12) {
        hour = 0;
    }

    else if (period == "pm" && hour < 12) {
        hour += 12;
    }
    string result = "";

    if (hour < 10) {
        result += "0";
    }
    result += to_string(hour);

    if (minute < 10) {
        result += "0";
    }
    result += to_string(minute);

    return result;
}