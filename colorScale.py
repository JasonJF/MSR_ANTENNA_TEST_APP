import math

def perc2color(perc):
    r = 0
    g = 0
    b = 0

    if (perc < 50):
        r = 255
        g = round(5.1 * perc)

    else:
        g = 255
        r = round(510 - 5.10 * perc)

    h =hex(r * 0x10000 + g * 0x100 + b * 0x1)
    col = ("rgb({},{},{})").format(r,g,b)
    return(col)
    # return '#' + ('000000' + h.toString(16)).slice(-6)


