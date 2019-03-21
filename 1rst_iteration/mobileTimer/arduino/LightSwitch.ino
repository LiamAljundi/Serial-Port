int h= 0;
int m= 0;
int s= 0;
int timer = SetTimer(h,m,s);


void setup() {

  Serial.begin(9600);
  while (! Serial);
  Serial.println("Enter On to turn on the LED!");
}

void loop(){
  if (Serial.available()){
    char ch = Serial.read();
    if (ch == 'a'){
      digitalWrite(ledPin, HIGH);
      Serial.println("You have turned on the LED!");
      Serial.println("Enter Off to turn off the LED!");
    }
    if (ch == 'b'){
      digitalWrite(ledPin, LOW);
      Serial.println("You have turned off the LED!");
      Serial.println("Enter On to turn on the LED!");
    }
  }
}
