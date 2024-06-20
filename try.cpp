cpp
Copy code
#include<iostream>
using namespace std;

class ABC{
    int a = 10;

public:
    void Show() {
        cout << "a is : " << a << endl;
    }
};

int main() {
    ABC a; // Correct object instantiation
    a.Show(); // Correct function call
    return 0;
}