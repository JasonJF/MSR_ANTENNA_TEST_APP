import eel
from readData import *

@eel.expose
def getDataList():
    elements = readData()
    #print(elements)
    return(elements)

eel.init('web', allowed_extensions=['.js', '.html'])
eel.init('web')

eel.start('test.html')
