# Introduction
This is a small web with all the information from the Factions, Heroes, Artifacts and Locations from Claim! cardgame.

# Usage
In order to make it accessible and portable two ways of runing are available:

## Web Application
This tool has been designed for easy usage in any browser, navigate to www folder and execute claim.html in your web browser.

## Android App
Another option is to create an Android application based on the web using "Cordova" framework.

You need following packages in order to build the project for android:

- Java SDK 17 (https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- node.js (v11.17.0)
- Cordova framework (v13.0.0) [npm install -g cordova]
- Android Studio or Gradle for compilation (v8.14.4)

### Buiding

Just run:

<pre>
cordova platform add android
</pre>

for the creation of the platform, and:

<pre>
cordova build android
</pre>

for compilation.