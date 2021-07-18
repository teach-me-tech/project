#include <bits/stdc++.h>
using namespace std;
int p = 2;
int v(long long int x)
{
    int counter = 0;
    cout << x << " "<< p<<endl;
    while(x%p==0)
    {
        counter++;
        x= x/p;
    }return counter;
}
int main()
{
    cout << pow(62,3) << " "<< pow(62%2,3) << endl;
    cout << v(pow(62,3) - pow(62%2,3));
}