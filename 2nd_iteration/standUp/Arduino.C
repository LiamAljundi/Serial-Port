
int sensorPin = A0;    
int ledPin1 = 5;    
int ledPin2 = 4;
int sensorValue = 0;  

void setup() 
{
  Serial.begin(9600); 
  pinMode(ledPin1, OUTPUT);
  pinMode(ledPin2, OUTPUT);

}

void loop(){
  
  sensorValue = analogRead(sensorPin); 
  Serial.print("Force value = ");
  Serial.println(sensorValue);
    
  
  if (sensorValue > 900) {
    digitalWrite(ledPin2, HIGH);
    delay(3000);
    
  }   
   
  else {   
    digitalWrite(ledPin2, LOW);
    
  if(sensorValue == 0){     
    digitalWrite(ledPin1, HIGH);
  }   
  else digitalWrite(ledPin1, LOW); 
       delay(3000);
    
  
   
}

}
  
  
  
  
  