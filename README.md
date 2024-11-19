# vision-assist

do:
npm install

download expo go on your phone

to run app:
right click package.json -> open in terminal <br>
do:

```
npx expo start
```

if that doesn't work, do:

```
npx expo start --tunnel
```

use your phone to scan qr code that shows up in terminal

if you run into: CommandError: ngrok tunnel took too long to connect. <br>
then do:

```
npx expo start --tunnel --reset-cache
```

For text to speech dependency:

```
npm install react-native-camera react-native-tesseract-ocr react-native-tts
```

## Environment Setup
1. Create a new `.env` file in the root directory
2. Copy the contents of `.env.example` into your new `.env` file
3. Replace the placeholder values with your actual API keys
4. Run `npm install`
5. Start the app with `npm start`