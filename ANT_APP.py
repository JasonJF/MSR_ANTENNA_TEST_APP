import eel
from Arduino import *
from readData import *

@eel.expose
def getDataList():
    elements = readData()
    return(elements)
@eel.expose
def getColourList():
    colours = readColours()
    return(colours)

eel.init('web', allowed_extensions=['.js', '.html'])
eel.init('web')

eel.start('test.html')
