import eel

eel.init('web', allowed_extensions=['.js', '.html'])
eel.init('web')

eel.start('test.html')
