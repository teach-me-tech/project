#include <bits/stdc++.h>
using namespace std;
long long int p=0, ctr=0, sum = 0;
int v(long long int x)
{
    int counter = 0;
    if(x==0)return 0;
    while(x%p==0)
    {
        counter++;
        x= x/p;
    }return counter;
}
void fnc(int n, int q, long long int a[], int qq[][4])
{
    cout << "Case #"<<ctr<<": ";

    for(int i=0; i<q; i++)
    {
        if(qq[i][0] == 1)
        {
            a[qq[i][1]-1] = qq[i][2];
        }else{
            sum = 0;
            for(int j=(qq[i][2]-1); j<qq[i][3]; j++)
            {
                // cout << sum << "  ";
                sum+=v(pow(a[j],qq[i][1]) - (pow(a[j]%p,qq[i][1])));
            }
            cout << sum << " ";
        }
    }cout << endl;
    return;
}
long long int a[500000];
int qq[100000][4];
int main()
{
    int t;
    cin >> t; 
    int n,q;
    
    for(int i=0; i<t; i++)
    {
        ctr++;
        cin>>n>>q>>p;
        int k=0;
        while(k<n)
        {
            cin>>a[k];
            k++;
        }
        for(int j = 0; j<q;j++)
        {
            cin>>qq[j][0];
            if(qq[j][0] == 1){
                cin>>qq[j][1] >> qq[j][2];
            }else{
                cin>>qq[j][1] >> qq[j][2]>>qq[j][3];
            }
        }
        cout << " Calling fnc" << endl;
       fnc(n,q,&a[0], &qq[0]);
       cout << " fnccalled" << endl;
        
    }
}