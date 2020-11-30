import speech_recognition as sr
import requests
import webbrowser
import pyttsx3

# Setup för att converta text 2 speech

engine = pyttsx3.init() # Använda default pyttsx3 engine
eng_voice = 'HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Speech\Voices\Tokens\TTS_MS_EN-US_ZIRA_11.0' # Basically välja vilken språktyp vi vill ha, finns olika att välja i docs
engine.setProperty('voice', eng_voice) 

# Starta recording och använd default mic för detta

r = sr.Recognizer()

with sr.Microphone() as source:
    # print("Say something!")
    audio = r.listen(source) # Lyssa från 'source' AKA din mic

sentence = r.recognize_google(audio).lower()

while True: 

    # Starta recording och använd default mic för detta
    r = sr.Recognizer()
    with sr.Microphone() as source:
        # print("Say something!")
        audio = r.listen(source) # Lyssa från 'source' AKA din mic

    sentence = r.recognize_google(audio).lower()

    try:
        if 'goto weather' in sentence: 
            res = requests.get('http://api.openweathermap.org/data/2.5/weather?q=vasteras&appid=572d93171b72994ef6363b5648a60746&units=metric').json()

            engine.say('Here is some weather data in Västerås')
            print('\n'+ str(res['weather'][0]['main'])) # weather type
            print('\n'+ str(res['main']['temp']), '*C') # Temp celsius
            print('\n'+ str(res['main']['humidity']), '%' + '\n') # Humidity
        
        elif 'goto news' in sentence: # Eventuellt ändra till att triggas när man bara säger 'news' eller ksk 'show news' eller liknande
            engine.say('Here you go')
            webbrowser.open('https://www.bbc.com/news')
        
        elif 'help' in sentence:
            engine.say('I can tell you about the weather in your region and I can also show you the news of today')

        elif 'thank you' in sentence or 'thanks' in sentence:
            engine.say("You're welcome")

        else:
            engine.say('To me you said:', sentence)
            engine.say('I can either display the weather in your city or show you the news of today')
        
    except sr.UnknownValueError:
        engine.say('I did not understand') # Om den inte förstår, ljudet var ksk för lågt eller uttal dåligt

    except sr.RequestError as e:
        engine.say('Error; {0}'.format(e)) # Om något fel sker

    engine.runAndWait()




# Alternativ ifall vi inte vill öppna länk/byta sida
# Idé är att skapa ett enkelt top 10 interface med dagens 10 senaste nyheter

# def NewsFromBBC(): 
#     main_url = " https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=4dbc17e007ab436fb66416009dfb59a8"
#     open_bbc_page = requests.get(main_url).json() 
#     article = open_bbc_page["articles"] 
#     results = [] 

#     for ar in article: 
#         results.append(ar["title"]) 
          
#     for i in range(5): 
#         print(i + 1, results[i])  


# def weather_data(query):
# 	res=requests.get('http://api.openweathermap.org/data/2.5/weather?'+query+'&appid=572d93171b72994ef6363b5648a60746&units=metric');
# 	return res.json()

