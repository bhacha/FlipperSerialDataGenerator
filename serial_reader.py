import serial
import time

ser = serial.Serial("COM5", 230400, timeout=0)
ser.write('log \r'.encode('utf-8'))
    
while True:
    time.sleep(.1)
    s = ser.readline().decode()       
    print(str(s[-6:-1]).replace("m", ''))