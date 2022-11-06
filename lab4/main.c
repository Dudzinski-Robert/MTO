#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int my_printf(char *format_string, char *param){

	int myInt = atoi(param);
	char str[12];
	sprintf(str, "%d", myInt);
	strrev(str);

	for(int i=0;i<strlen(format_string);i++){

	}


	puts("");
}



int main(int argc, char *argv[]){
	char buf[1024],buf2[1024];
	while(fgets(buf, 1024, stdin)){
		fgets(buf2, 1024, stdin);
		buf[strlen(buf)-1] = '\0';
		buf2[strlen(buf2)-1] = '\0';
		my_printf(buf,buf2);
	}
	return 0;
}