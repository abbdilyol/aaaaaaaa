import requests

res = requests.get('http://api.openweathermap.org/data/2.5/weather?q=vasteras&appid=572d93171b72994ef6363b5648a60746&units=metric').json()
sentence = ["Weather: " +str(res['weather'][0]['main']), "Temp: " +str(res['main']['temp']) + " C*", "Hum: " +str(res['main']['humidity']) + " %"]

print(sentence)
