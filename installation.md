---
---

# Hello World: your first Mobile Web App

## Install Wakanda

First, download and install **Wakanda Community Edition**

- On Windows, [x86](https://github.com/Wakanda/wakanda-digital-app-factory/releases/download/v1.1.3/wakanda-community-all_1.1.3_x86.msi "download") or [x64](https://github.com/Wakanda/wakanda-digital-app-factory/releases/download/v1.1.3/wakanda-community-all_1.1.3_x64.msi "download")
- On Mac OS X, [x64](https://github.com/Wakanda/wakanda-digital-app-factory/releases/download/v1.1.3/wakanda-community-all_1.1.3_x64.dmg "download")


Now we can start our **HelloWorld** project.  

## Choose : mobile or web app ?
We can choose the kind of app we want to create : mobile, web or both.

Let’s say we want to create an Android app with Ionic2.

To do that, we're going to open the studio, (add studio icon here) and click on "Create a new solution": (entourer le bouton sur l'image)

<img src="img/hp-initial.png"/>

Which opens the template selection page:  

<img src="img/hw-template-selection.png"/>


The structure of your future projects depends of the template you choose.
You'll always have the same back end strcture, but you can choose to have a web front-end (or not) and/or a mobile front-end.
There, you can name your app (without spaces) and select the Ionic2 blank template.

Now, in your **HelloWorld** project, you can find the basic Ionic2 file structure :

<img src="img/hw-file-structure.png"/>  

You have 3 folders at the root of your project:

- Database , in which you’ll find your data model(s) and data  
- Mobile, where you’ll find all your front-end files  
- Backend, where you’ll find the settings and permissions on your app and your business logic  

For our “Hello world” we’re going to work first in the mobile folder.


## Check for dependencies

For mobile apps, you need to check for any missing dependencies.
Go in the main menu  (_Help_ > _Wakanda Troubleshooting_) and choose Android.

<img src="img/hw-troubleshooting.png"/>

Here you can see I miss Homebrew, Apache And and Android SDK. All is explained there: why I need them, and how to install them.


## Code and preview  

Once all your dependencies are checked you can preview your app.

Just click on your project, and then on "Preview".

<img src="img/hw-first-preview.png"/>


Let's have a look to our project structure : the src folder is the classical [ionic2 project structure](http://ionicframework.com/docs/v2/setup/tutorial/project-structure/ "ionic tutorial").

A simple change in `pages/home.html` and I have my **HelloWorld** done.

You can change the background color in `pages/home.css` to make it more visual.
The preview is automatically reloaded after each saving.

<img src="img/hw-colored-preview.png"/>

You can select "Preview in web browser" if you prefer to see the result in your default browser.  

<img src="img/hw-final-preview.png"/>


## Run on emulator  

Now you can run your app on the [Android emulator](https://developer.android.com/studio/run/emulator.html "check documentation").

<img src="img/hw-run-emulator.png"/>

<img src="img/hw-emulator-view.png"/>

## Run on device  


Make sure you have [USB debugging enabled](http://developer.android.com/tools/device.html).

Wakanda Studio automatically detects supported device connected to the USB port.
Open the _Run_ dropdown and select the device to run on:

<img src="img/mobile-run-devices.png" />

## Edit your data Visually

Now let's make our HelloWorld app more intersting and add data to it. WHat about saying "Hello !" to our favorite superheros ?

To manage your data easily and quickly, Wakanda provides a Visual Data Editor:


<img src="img/model-designer-open.png" />

> **TIPS**:
> - click on <img class="inline" src="img/explorer-settings-shortcut.png"> to change the view options (the `.waModel` extension is hidden by default)
> - click on <img class="inline" src="img/model-designer-shortcut.png"> to quickly access your model

### Edit you data model

I create a `Superhero` dataclass, add the attribute `name` to it and save.

<img src="img/model-designer-newdataclass.png" />


<img src="img/model-designer-addattribute.png" />
**TIPS**:
- I click on "source" button to see the JSON file generated

<img src="img/model-designer-JSON.png" />

I add a second dataclass `Movie` linked to `Superhero` dataclass

<img src="img/model-designer-addDataclass#2.png" />

<img src="img/model-designer-addrelationship.png" />
<img src="img/model-designer-addrelationship#2.png" />

### Populate your database
Now you can create a JS file to populate your database, and add `batman` to your `Superhero` dataclass

<img src="img/model-designer-addJSfile.png" />


<img src="img/model-designer-addcode.png" />

## Display a list of superheros in your App



[Getting Started »](index.html){:class="btn"}
