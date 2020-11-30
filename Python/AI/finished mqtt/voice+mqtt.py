import speech_recognition as sr
import requests
import webbrowser
import pyttsx3
import paho.mqtt.client as paho
import time

# Vår första mqtt function gör så att vi connectar till servern och skriver ut ett meddalnde
def on_connect(client, userdata, flags, rc):
    print("CONNACK received with code %d." % (rc))

# Andra funktionen låter oss bara veta ifall vi publicerar ett meddelande/så vi vet vad som sker
def on_publish(client, userdata, mid):
    print("publishing")

client = paho.Client()

client.on_connect = on_connect
client.on_publish = on_publish

client.username_pw_set("Dolovon", "yes") # Här connectar vi mha användarnam och lösenord/se js fil också
client.connect("broker.mqttdashboard.com") # Den allmänna servern vi anlsuter till

# Setup för att converta text 2 speech
engine = pyttsx3.init() # Använda default pyttsx3 engine
eng_voice = 'HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Speech\Voices\Tokens\TTS_MS_EN-US_ZIRA_11.0' # Basically välja vilken språktyp vi vill ha, finns olika att välja i docs
engine.setProperty('voice', eng_voice) 
engine.setProperty('rate', 180)

client.loop_start() # Startar server, kör hela tiden

while True: 
    try:
        # Starta recording och använd default mic för detta
        r = sr.Recognizer()
        with sr.Microphone() as source:
            # print("Say something!")
            audio = r.listen(source) # Lyssa från 'source' AKA din mic
        sentence = r.recognize_google(audio).lower()

        if 'go to weather' in sentence: 
            print('väder')
            client.publish("Final/teeest", "go to weather")
            time.sleep(6)
            res = requests.get('http://api.openweathermap.org/data/2.5/weather?q=vasteras&appid=572d93171b72994ef6363b5648a60746&units=metric').json()
            wordarray = ["Weather: " +str(res['weather'][0]['main']), "Temp: " +str(res['main']['temp']) + " C*", "Hum: " +str(res['main']['humidity']) + " %"]

            client.publish("Final/teeest", "go to weather")
            time.sleep(5)
            engine.say('Here is some weather data in Västerås')
            # print('\n'+ str(res['weather'][0]['main'])) # weather type
            # print('\n'+ str(res['main']['temp']), '*C') # Temp celsius
            # print('\n'+ str(res['main']['humidity']), '%' + '\n') # Humidity
        
        elif 'go to news' in sentence: # Eventuellt ändra till att triggas när man bara säger 'news' eller ksk 'show news' eller liknande
            print('BBC')
            client.publish("Final/teeest", "go to news")
            time.sleep(5)
            engine.say('Here you go')
            # webbrowser.open('https://www.bbc.com/news')
        
        elif 'help' in sentence:
            print('hjelp')
            engine.say('I can tell you about the weather in your region and I can also show you the news of today')

        elif 'thank you' in sentence or 'thanks' in sentence:
            print('tack')
            engine.say("You're welcome")

        else:
            engine.say('To me you said '+ str(sentence))
            time.sleep(1)
            engine.say('I can either display the weather in your city or show you the news of today')

    except sr.UnknownValueError:
        engine.say('Please repeat, I did not understand') 

    engine.runAndWait()