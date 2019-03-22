
int sensorPin = A0;    
int ledPinGreen = 5;    
int ledPinRed = 4;
int sensorValue = 0;  

void setup() 
{
  Serial.begin(9600); 
  pinMode(ledPinGreen, OUTPUT);
  pinMode(ledPinRed, OUTPUT);

}

void loop(){
  
  sensorValue = analogRead(sensorPin); 
  Serial.print("Force value = ");
  Serial.println(sensorValue);
    
  
  if (sensorValue > 900) {
    digitalWrite(ledPinRed, HIGH);
    delay(3000);
    
  }   
   
  else {   
    digitalWrite(ledPinRed, LOW);
    
  if(sensorValue == 0){     
    digitalWrite(ledPinGreen, HIGH);
  }   
  else digitalWrite(ledPinGreen, LOW); 
       delay(3000);
       
    
  
   
}

}
  
  
  