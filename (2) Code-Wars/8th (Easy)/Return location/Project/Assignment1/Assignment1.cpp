#include <iostream>

class Person
{
public:
    Person(int x, int y, int z)
        : m_x(x), m_y(y), m_z(z)
    {
    }

    void location(int &x, int &y, int &z) // Pass by reference
    {
        x = m_x;
        y = m_y;
        z = m_z;
    }

private:
    int m_x;
    int m_y;
    int m_z;
};

int main() {
    Person person(10, 20, 30);
    int x = 0, y = 0, z = 0;
    person.location(x, y, z);
    std::cout << "Person's location: (" << x << ", " << y << ", " << z << ")" << std::endl;
    return 0;
}
