import winreg
import ctypes
import pygame
import threading
import os, sys

SUCC_VAL = 1337
SUCC_REAL_VAL = 1904


def startAudioAsync():
    APP_FOLDER = os.path.dirname(os.path.realpath(sys.argv[0]))
    full_path = os.path.join(APP_FOLDER, "assets/ussr.mp3")
    pygame.mixer.init()
    pygame.mixer.music.load(full_path)
    pygame.mixer.music.play()

def getAgilBzinRegValue():
    hKey = winreg.OpenKey(winreg.HKEY_LOCAL_MACHINE, 
                          "Software\\Russia\\RusBzin")
    result = winreg.QueryValueEx(hKey, "AgilBzin")
    return result[0]

def showMessage(msg, title="Error", flags=0):
    ctypes.windll.user32.MessageBoxW(0, msg, title, flags)

def performAgilBaValue(val):
    if val == SUCC_VAL:
        showMessage("/control/solveThisToMaster1337", "Cool and Good", 32)
    elif val == SUCC_REAL_VAL:
        threading.Thread(target=startAudioAsync).start()
        showMessage("Coordinates:\nLat = 32.0629879\nLon = 34.7789279", "420", 64)
    else:
        showMessage("Invalid Key, program failure.", "Error", 16)

value = getAgilBzinRegValue()
performAgilBaValue(value)