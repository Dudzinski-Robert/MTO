#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int my_printf(char *format_string, char *param){
	int numberFlag = 0;

	char stringNumber[100];
	int stringNumberLength = 0;
	int number = 0;

	for(int i=0;i<strlen(format_string);i++){
		if((format_string[i] == '#') && (format_string[i+1] == 'k')){
			i++;
			
			for(int j = 0; j<strlen(param); j++) {
			char letter = param[j];
				if(letter >= 65 && letter <= 90) {
				   param[j] = letter + 32;
				}
				
				if (letter >= 97 && letter <= 122) {
				   param[j] = letter - 32;
				}
			}
			
			printf("%s",param);
		} else if((format_string[i] == '#')){
			if(format_string[i+1] >= 48 && format_string[i+1] <= 57){
				numberFlag = 1;
				if(format_string[i+1] == '.'){
					i++;
				}
			}

		} else{
			if(!numberFlag)
				putchar(format_string[i]);
		} 

		if(numberFlag){
			char ch = format_string[i];

			if(ch >= 48 && ch <= 57){
				stringNumber[stringNumberLength] = ch;
				stringNumberLength++;
			}

			if(ch == 'k'){
				numberFlag = 0;
				number = atoi(stringNumber);
			}
		}

		if(number){
			for(int i = 0; i < number; i++){
				if(param[i] >= 65 && param[i] <= 90){
					printf("%c", param[i] + 32);
				}

				if (param[i] >= 97 && param[i] <= 122){
					printf("%c", param[i] - 32);
				}
			}

			number = 0;
		}
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