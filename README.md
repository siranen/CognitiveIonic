# Cognitive Ionic App with 
It is a mobile application, which recognizes your face registered with your data (Name, Username, Email).
To verify if it is the same person, it check face id and then shows the private data


## Used Technologies
- [Ionic 3](http://ionicframework.com/) 
- [Firebase](https://firebase.google.com/)
- [ApiFace Services Cognitive Microsoft](https://azure.microsoft.com/en-us/services/cognitive-services/)


## Config & Start
1. Clone the repository and enter the repository of the repository.

2. Install the dependencies:
     - `` `npm install -g ionic @ latest` ``
     - `` `npm install` ``

3. In the path `` `CognitiveIonic / src / app /` `` create the file app.config.ts and add the settings of [firebase] (https://firebase.google.com/) and [Microsoft apiKey ] (https://azure.microsoft.com/en-us/services/cognitive-services/) (sample app.config.sample.js):

```
export const config = {
  firebaseConfig: {
    apiKey: "apiKey-firebase",
    authDomain: "authDomain-firebase",
    databaseURL: "databaseURL-firebase",
    projectId: "projectId-firebase",
    storageBucket: "storageBucket-firebase",
    messagingSenderId: "messagingSenderId-firebase"
  },
  apiKeyMicrosoft: 'apiKeyMicrosoft'
};
```
