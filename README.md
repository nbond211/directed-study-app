# Directed Study App

This is a cross-platform mobile application built with [React Native](https://facebook.github.io/react-native/).

## Introduction
This app was created using the [React Native](https://facebook.github.io/react-native/).

## Getting Started
This documentation is based on the [React Native Getting Started Documentation](https://facebook.github.io/react-native/docs/getting-started.html)

### Installing development environment dependencies

You will need Node, Watchman, the React Native command line interface, and Xcode.
While you can use any editor of your choice to develop your app, you will need to install Xcode in order to set up the necessary tooling to build the React Native app for iOS.

#### Node, Watchman

It is recommend install Node and Watchman using [Homebrew](https://brew.sh/). Run the following commands in a Terminal after installing Homebrew:
```
brew install node
brew install watchman
```

If you have already installed Node on your system, make sure it is version 4 or newer.
[Watchman] (https://facebook.github.io/watchman) is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.

#### The React Native CLI

Node comes with npm, which lets you install the React Native command line interface.
Run the following command in a Terminal:
```
npm install -g react-native-cli
```

#### Xcode

The easiest way to install Xcode is via the [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12). Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app.
If you have already installed Xcode on your system, make sure it is version 8 or higher.

##### Command Line Tools

You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

#### Installation

To install all dependencies of the app, run the following command in a Terminal:
```
npm install
```

Now you should be ready to run the app.

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup).
