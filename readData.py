import csv
from colorScale import *
maxPow = 5
data = []
newData = []

def readData():


    with open('testData.csv') as csvDataFile:
        csvReader = csv.reader(csvDataFile)
        for row in csvReader:
            data.append(row)

    # print(data)
    # print(len(data))
    for x in data:
        # print(x)
        element = x[0]
        posMagnitude = float(x[1])
        posPhase = float(x[2])
        negMagnitude = float(x[3])
        negPhase = float(x[4])
        #Calculate positive colour scale
        if posMagnitude < 0:
            posMagPercent = 0
        else:

            posMagPercent = (float(posMagnitude)/maxPow)*100
            if posMagPercent > 100:
                posMagPercent = 100
        # Calculate negative colour scale
        if negMagnitude < 0:
            negMagPercent = 0
        else:

            negMagPercent = (float(negMagnitude)/maxPow)*100
            if negMagPercent > 100:
                negMagPercent = 100
        #append positive data

        y =((element+"POS"),perc2color(posMagPercent),posPhase)
        newData.append(y) #append positive data
        #append negative data
        y =((element+"NEG"),perc2color(negMagPercent),negPhase)
        newData.append(y)


    return (newData)
# readData()
# print(newData)