//Input Example

_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------
var i=1;
function sherlock(INPUT){
split1 = INPUT.split("\n");
casos = split1[0];


if (casos>=1 && casos<= 100){
while (i <= casos){
contador = 0;
split2 = split1[i].split(" ");
			
		for(j=split2[0];j<=split2[1];j++){
			if(Math.sqrt(j) % 1 == 0){
				contador =  contador + 1;
					}		

}
console.log(contador);
i = i +1;
}
}

else {
console.log("EL numero de casos tiene que ser mayor a 0 y menor a 101");
}
}
sherlock("6\n1 8\n2 4\n10 13\n11 20\n1 8\n1 8");
