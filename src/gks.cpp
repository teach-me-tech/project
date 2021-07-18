#include <bits/stdc++.h>
using namespace std;

int fnc(long long int a[])
{
    int counter=0, count=0, max=0;
    if(a[0]+a[2] == 2*a[1])
    {
        count++;
    }
    if(a[0]+a[6] == 2*a[3])
    {
        count++;
    }
    if(a[8]+a[2] == 2*a[5])
    {
        count++;
    }
    if(a[6]+a[8] == 2*a[7])
    {
        count++;
    }
    for(int i=0; i<4; i++)
    {
        counter = 0;
       a[4] = (a[i]+a[8-i]);
        if(a[0]+a[8] == a[4])
        {
            counter++;
        }
        if(a[2]+a[6] == a[4])
        {
            counter++;
        }
        if(a[1]+a[7] == a[4])
        {
            counter++;
        }if(a[3]+a[5] == a[4])
        {
            counter++;
        }
        
        if(count+counter>max)max=count+counter;
    }return max;
}
int main()
{
    int t;
    cin >> t;
    int out[t];
    long long int a[9];
    
    for(int i=0; i<t; i++)
    {
        cin >> a[0] >> a[1] >> a[2];
        cin >> a[3] >> a[5];
        cin >> a[6] >> a[7] >> a[8];
        
        
    }
    for (int i=0; i<t; i++)
    {
        cout << "Case #"<<i+1<<": "<<fnc(&a[0]);
    }
}
