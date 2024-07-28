## Build and Deploy Steps

Follow these steps to build and deploy your Nuxt.js and Ionic Capacitor project.

### Step 1: Build the Nuxt.js Project

Run the build  command to generate the production files:

```bash
npm run build
```

Run the generate  command to generate the test files:

```bash
npm run generate
```


### Step 2: Verify the Build Output

Ensure the dist directory contains an index.html file:

```bash
ls ./dist
```

You should see an index.html file among other static assets.

### Step 3: Copy the Build Output to Capacitor

Ensure Capacitor uses the correct web assets directory by copying the built files to the www directory:

```bash
npx cap copy
```

### Step 4: Sync Capacitor with Android
Ensure Capacitor is properly synced with the Android project:


```bash
npx cap sync android
```

### Step 5: Open the Android Project
Open the Android project with Android Studio:

```bash
npx cap open android
```
