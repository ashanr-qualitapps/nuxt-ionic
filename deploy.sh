#!/bin/bash

echo "Generating Nuxt static files..."
npm run generate

echo "Copying web assets to Capacitor..."
npx cap copy

echo "Syncing Capacitor with Android project..."
npx cap sync android

echo "Opening Android project in Android Studio..."
npx cap open android
