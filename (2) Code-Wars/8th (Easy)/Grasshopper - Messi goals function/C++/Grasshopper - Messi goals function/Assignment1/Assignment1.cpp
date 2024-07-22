#include <iostream>
using namespace std;

int goals(int laLigaGoals, int copaDelReyGoals, int championsLeagueGoals);

int main() {

	cout << goals(43, 10, 5) << endl;
	
	return 0;
}

int goals(int laLigaGoals, int copaDelReyGoals, int championsLeagueGoals) {
	int result = 0;
	result = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
	return result;
}
