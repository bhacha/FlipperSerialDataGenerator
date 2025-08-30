This is a very small example of using the Flipper Zero to output random numbers to a serial console, and then reading those via Python using pySerial. It includes padding the numbers to fixed lengths. There are some quirks here:

Python :
- The Flipper Zero prints the values to the Log, which does not print to the serial console by default. The Python script must write "log" first to start the output.
- The Flipper Zero serial console starts with an ASCII graphic that I didn't bother to get rid of. I will only be intermittently reading from this connection, so it shouldn't matter after the first couple of seconds.

Flipper:
- The mJS javascript language does not seem to support some of the quality-of-life options for string formatting. It handles strings in a very basic way and I was unable to split a string with a negative index. This prevented me from easily padding the numbers with zeros, so I had to create a function that does it via if statements.

