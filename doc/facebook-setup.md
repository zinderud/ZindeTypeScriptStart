## Facebook Setup

In this article, we're going to setup both facebook login and facebook accountkit (for phone number authentication)

## Step 1: Working with Config.xml

Before starting facebook setup, we need to update your branding details such as,
-  appname
-  developer name, email, weblink
-  widget id (com.yourcompanyname.appname)

Navigate to ``config.xml`` and update your app details

![updating config]( https://github.com/zinderud/ZindeTypeScriptStart/blob/master/img/config-file.png "updating config")

Navigate to ``package.json`` and update your own credentials

![updating package json]( https://github.com/zinderud/ZindeTypeScriptStart/blob/master/img/package.png "updating package json")

## Step 2: Updating credentials

Once, you have completed these, we need have,
- APP_ID
- APP_NAME
- CLIENT_TOKEN
- API_VERSION
for adding facebook plugin and accountkit plugin. For that, you can follow this article (https://codesundar.com/create-facebook-application/)

After following these steps, you need to update your

    project/config.xml
    project/src/settings.ts
    project/package.json

![updating config 2]( https://github.com/zinderud/ZindeTypeScriptStart/blob/master/img/config-file-2.png "updating config 2")

![updating package json]( https://github.com/zinderud/ZindeTypeScriptStart/blob/master/img/fbauth-package.png "updating package json")


## Step 3: Enabling Facebook login on Firebase

- Navigate your firebase project
- Goto Authentication -> SignIn method
- Choose Facebook, then enable
- Fill your AppID & App Secret
- You need to update OAuth Redirect URI (from firebase), to your Facebook login setting

![updating config 2]( https://github.com/zinderud/ZindeTypeScriptStart/blob/master/img/fbauth-redirect.png "updating config 2")