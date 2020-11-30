# Denna kod används bara för att publicera meddelanden/data till mqtt servergrejen för att JS koden ska kunna ta emot

# Här importerar vi bara MQTT och time för att sätta delays
import paho.mqtt.client as paho
import time

# Vår första mqtt function gör så att vi connectar till servern och skriver ut ett meddalnde
def on_connect(client, userdata, flags, rc):
    print("CONNACK received with code %d." % (rc))

# Andra funktionen låter oss bara veta ifall vi publicerar ett meddelande/så vi vet vad som sker
def on_publish(client, userdata, mid):
    print("publishing")

# Nedan sätts några variabler för att kunna använda funktionerna när vi publicerar och connectar med mqqt egna inbyggda funktioner
client = paho.Client()

client.on_connect = on_connect
client.on_publish = on_publish

client.username_pw_set("Dolovon", "yes") # Här connectar vi mha användarnam och lösenord/se js fil också
client.connect("broker.mqttdashboard.com") # Den allmänna servern vi anlsuter till
client.loop_start() # Viktigt för att sätta igång sjävla servern

time.sleep(5) # Jag lägger delay bara för att JS koden ska ha tid på sig att ansluta samt hämta data och processa.
client.publish("Final/teeest", 'Brian') # Vi skickar data/meddelande till vårat ämne "Final/teeest" och meddelandet är "Brian"
time.sleep(5) # Delay igen

client.loop_stop() # Stänger ner servern