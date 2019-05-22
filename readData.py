import csv
from colorScale import *
maxPow = 5;
data = []
with open('testData.csv') as csvDataFile:
    csvReader = csv.reader(csvDataFile)
    for row in csvReader:
        data.append(row)

# print(data)
print(len(data))
for x in data:
    # print(x)
    element = x[0]
    posMagnitude = float(x[1])
    posPhase = float(x[2])
    negMagnitude = float(x[3])
    negPhase = float(x[4])
    if posMagnitude < 0:
        posMagPercent = 0
    else:
        posMagPercent = (float(posMagnitude)/maxPow)*100

    print(element,perc2color(posMagPercent))
