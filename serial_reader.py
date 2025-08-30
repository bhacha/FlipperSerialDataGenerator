import serial
import time

ser = serial.Serial("COM5", 230400, timeout=0)
ser.write('log \r'.encode('utf-8')) #This puts Flipper into log mode, where it prints the log to console (serial)
    
while True:
    time.sleep(.1) # Just for aesthetics
    s = ser.readline().decode() # Get this as a string
    print(str(s[-6:-1]).replace("m", '')) #There's a bunch of ANSI style terms in the output. Regex would be better here, but this is simpler for me.