import eel
import serial
#from sendSerial import *


@eel.expose
def sendData(s):
    print(s)
    sendtoArd(s)

#CPLD Functions

com = "COM3"
baudrate = 9600

ser1 = serial.Serial(com,baudrate)
s = ""
@eel.expose
def sendtoArd(s):
    print(s)
    ser1.write(s.encode())
@eel.expose
def allElemOff():
    s = "$XX_Off;"
    sendtoArd(s)
    print("All elements off")
@eel.expose
def allElemOn():
    s = "$XX_On;"
    sendtoArd(s)
    print("All elements on")

@eel.expose
def allElemPos():
    s = "$XX_Pos;"
    sendtoArd(s)
    print("All elements positive")
@eel.expose
def allElemNeg():
    s = "$XX_Neg;"
    sendtoArd(s)
    print("All elements negative")
@eel.expose
def lnaON():
    s = "$MD_On ;"
    sendtoArd(s)
    print("LNA on")
@eel.expose
def lnaOFF():
    s = "$MD_Off;"
    sendtoArd(s)
    print("LNA off")

@eel.expose
def resetCPLD():
    s = "$RESET_;"
    sendtoArd(s)
    print("CPLD reset")


