
/*

*/
#include <EduIntro.h>

int led1[]= {2, 3, 4};
int led2[]= {5, 6, 7};
int led3[]= {8, 9};

int led4[]= {10, 11, 12, 13};


/*int LightGroup2[]= 
int LightGroup3[]=*/

Potentiometer pot(A5);

int brightnessVal = 0;

int pinCountAmbient = 3;
int pinCountFocused = 4;

int lightMode= Serial.read();


void setup() {
   Serial.begin(9600);

    for (int i = 0; i < pinCountFocused; i++) {
    pinMode(led4[i], OUTPUT);
  }
    for (int i = 0; i < pinCountAmbient; i++) {
    pinMode(led1[i], OUTPUT);
    pinMode(led2[i], OUTPUT);

  }
      for (int i = 0; i < 2; i++) {
    pinMode(led3[i], OUTPUT);
  }
  
  
}

void loop() {
  
    brightnessVal = pot.read();
    Serial.println(brightnessVal);
    
    //Code to control the light from the browser
    if(Serial.available()){
      
      
      for (int i = 0; i < pinCountAmbient; i++) {
      
        if( lightMode == 1)
          // turn the pin on:
          digitalWrite(led1[i], HIGH);
    
        else  
          // turn the pin off:
          digitalWrite(led1[i], LOW);
      };    
      
      for (int i = 0; i < pinCountAmbient; i++) {
      
        if( lightMode == 2)
          // turn the pin on:
          digitalWrite(led2[i], HIGH);
    
        else  
          // turn the pin off:
        digitalWrite(led2[i], LOW);
      };
      
     for (int i = 0; i < 2; i++) {
      
      if( lightMode == 3)
          // turn the pin on:
          digitalWrite(led3[i], HIGH);
    
        else  
         // turn the pin off:
          digitalWrite(led3[i], LOW);
      };
      
      
     for (int i = 0; i < pinCountFocused; i++) {
      
        if( lightMode == 4){
        // turn the pin on:
          digitalWrite(led4[i], HIGH);
        }
        else  
        // turn the pin off:
          digitalWrite(led4[i], LOW);
      };
    }
    
    
  //Code to control the light by rotating  
  else{
    for (int i = 0; i < pinCountAmbient; i++) {
    
    
    if( brightnessVal > 350)
    // turn the pin on:
    digitalWrite(led1[i], HIGH);

    else  
    // turn the pin off:
    digitalWrite(led1[i], LOW);
    };    
    
    for (int i = 0; i < pinCountAmbient; i++) {
    
    if( brightnessVal > 550)
    // turn the pin on:
    digitalWrite(led2[i], HIGH);

    else  
    // turn the pin off:
    digitalWrite(led2[i], LOW);
    };
    
   for (int i = 0; i < 2; i++) {
    
    if( brightnessVal > 750)
    // turn the pin on:
    digitalWrite(led3[i], HIGH);

    else  
    // turn the pin off:
    digitalWrite(led3[i], LOW);
    };
    
    
   for (int i = 0; i < pinCountFocused; i++) {
    
    if( brightnessVal > 950){
    // turn the pin on:
    digitalWrite(led4[i], HIGH);
    }
    else  
    // turn the pin off:
    digitalWrite(led4[i], LOW);
    };
  }


    
    
}

