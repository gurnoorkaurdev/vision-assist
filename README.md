# vision-assist

do:
npm install

download expo go on your phone

to run app:
right click package.json -> open in terminal
do:
```
npx expo start
```
if that doesn't work, do:
```
npx expo start --tunnel
```
use your phone to scan qr code that shows up in terminal

if you run into: CommandError: ngrok tunnel took too long to connect.
then do:
```
npx expo start --tunnel --reset-cache
```
