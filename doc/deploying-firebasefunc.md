## Deploying Firebase Cloud Function

**Purpose:** We used cloud function for sending push notification for user based on some triggers like new messages, group creation..etc

### Let's do setup.

Before doing firebase setup, we need to install firebase tools on your machine. To do that, please execute

    npm install -g firebase-tools

### Step 1: Create new project & login to firebase

    mkdir fcf
    cd fcf
    firebase login
    firebase init functions

It might asks your few questions, please answer as followed

- Choose your firebase project
- Language: JavaScript
- EsLint: No
- Npm install: Yes

### Step 2: Installing Required dependencies

Then, we need to follow these steps,

    cd functions
    npm install --save firebase-admin
    npm install --save firebase-functions
    npm install --save request


### Step 3:
After installation, we need to **replace** newly created index.js file with downloaded (purchased) index.js;

### Step 4: Updating Files


![updating service account]( https://github.com/zinderud/ZindeTypeScriptStart/blob/master/img/service-account-key.png "updating service account")

- Rename downloaded files to `service-account-key.json`
- Copy your `service-account-key.json` to `fcf/functions/`
- Open `fcf/functions/index.js` with any text editor & Update your databaseURL

### Step 5: Deploying FCF
    cd ..
    firebase deploy --only functions

**Note:** You must be inside fcf/ (not inside fcf/functions) folder for deploying.

### Step 6: Updating customToken URL

After deployment, you can see CustomTokenURL on console, which you need to update with your ``project/src/settings.ts``
