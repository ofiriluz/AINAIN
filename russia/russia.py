import winreg
import ctypes

def getAgilBzinRegValue():
    hKey = winreg.OpenKey(winreg.HKEY_LOCAL_MACHINE, 
                          "Software\\Russia\\RusBzin")
    result = winreg.QueryValueEx(hKey, "AgilBzin")
    return result[0]

def showError(msg):
    ctypes.windll.user32.MessageBoxW(0, msg, "Error", 0)

def performAgilBaValue(val):
    if val == 1337:
        print("CAKDEFJEPOFJA")
    else:
        showError("Invalid Key, program failure.")

value = getAgilBzinRegValue()
performAgilBaValue(value)