# OracleApp

OracleApp is a React Native application designed to gather and send location, network, and WiFi data to a server for secure storage and analysis.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the App](#running-the-app)
- [Folder Structure](#folder-structure)
- [License](#license)

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Installation

To get started with OracleApp, follow these steps:

1. **Clone the repository:**

   git clone https://github.com/guibros/oracleapp.git
   cd oracleapp

2. **Install dependencies:**

    npm install

3. **Install required packages for ios:**

    npx pod-install

## Configuration

1. **Environment Variables:**

   Create a .env file in the root directory and add any necessary environment variables.

2. **Permissions:**

    Ensure that the app has the necessary permissions for accessing location and network information. You may need to modify the AndroidManifest.xml and Info.plist files.

## Running the App

1. **Start the React Native Metro Bundler:**

   npx react-native start


2. **Run the app on Android:**

    npx react-native run-android

3. **Run the app on iOS:**

    npx react-native run-ios

    
Make sure you have an Android/iOS simulator or device connected.

## Folder Structure

```
/oracleapp
├── /android
├── /ios
├── /src
│   ├── /components
│   │   ├── Section.tsx
│   │   ├── sendData.tsx
│   │   ├── useLocation.ts
│   │   ├── useNetInfo.ts
│   │   └── useWifiInfo.ts
│   ├── /types
│   │   ├── IDataTransmissionProps.ts
│   │   ├── ILocation.ts
│   │   ├── INetworkInfo.ts
│   │   └── IWifiInfo.ts
│   ├── App.tsx
│   └── styles.ts
├── .env
├── package.json
└── tsconfig.json
```

- /android: Contains the Android-specific code and configuration.
- /ios: Contains the iOS-specific code and configuration.
- /src: Contains the source code for the React Native app.
    - /components: Contains the reusable components.
    - /types: Contains TypeScript type definitions.
    - App.tsx: The main application file.
    - styles.ts: The stylesheet for the application.

## Congratulations! :tada:

You've successfully run the React Native OracleApp. :partying_face:

### Now what?

- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.


# License

This project is licensed under the MIT License - see the LICENSE file for details.


These README files provide clear instructions on how to set up, configure, and run both the OracleApp and the server.
