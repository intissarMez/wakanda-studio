---
---

# Hello World: your first Mobile hybrid App

## Install Wakanda

First, download and install **Wakanda Community Edition**

- On Windows, [x86](https://github.com/Wakanda/wakanda-digital-app-factory/releases/download/v1.1.3/wakanda-community-all_1.1.3_x86.msi "download") or [x64](https://github.com/Wakanda/wakanda-digital-app-factory/releases/download/v1.1.3/wakanda-community-all_1.1.3_x64.msi "download")
- On Mac OS X, [x64](https://github.com/Wakanda/wakanda-digital-app-factory/releases/download/v1.1.3/wakanda-community-all_1.1.3_x64.dmg "download")


Now we can start our **HelloWorld** project.  

## Choose : mobile or web app ?
We can choose the kind of app we want to create : mobile, web or both.

Let’s say we want to create an *Android app with Ionic2*.

To do that, we're going to open the studio, (add studio icon here) and click on **"Create a new solution"**:

<img src="img/hp-initial.png"/>

Which opens the template selection page:  

<img src="img/hw-template-selection.png"/>


The structure of your future projects depends of the template you choose.

You'll always have the **same back-end structure**, but you can choose to have a **web front-end and/or mobile front-end**.

There, you can name your app *- without spaces -* and select the **Ionic2 blank template**.

Now, in your **HelloWorld** project, you can find the basic Ionic2 file structure :

<img src="img/hw-file-structure.png"/>  

You have 3 folders at the root of your project:

- Backend: Wakanda JavaScript Server. It contains all the Server files to logs, settings, permissions.  
- Database: Wakanda DB folder. It contains your data model(s), backups and your data.
- Mobile, where you’ll find all your front-end files to develop and build your mobile app. It contains all you need to code your Ionic 1 or 2 projects.

> **TIPS**:  
> - If you choose both a mobile and web template, you have both a mobile and a web front-end file, for the same back-end.


For our **HelloWorld** we’re going to work first in the `mobile` folder.


## Check for dependencies

Mobile apps are based on **AngularJS**, **Ionic** and **Cordova**.

For mobile apps, you need to check for any missing dependencies.
Go in the main menu  (_Help_ > _Wakanda Troubleshooting_) and choose Android.

<img src="img/hw-troubleshooting.png"/>

Here you can see I miss Homebrew, Apache And and Android SDK. All is explained there: why I need them, and how to install them.


## Code and preview  

Once all your dependencies are checked you can preview your app.

Just click on your project, and then on **"Preview"**.

<img src="img/hw-first-preview.png"/>


Let's have a look to our project structure : the src folder is the classical [ionic2 project structure](http://ionicframework.com/docs/v2/setup/tutorial/project-structure/ "ionic tutorial").

A simple change in `pages/home.html` and I have my **HelloWorld** done.

You can change the background color in `pages/home.css` to make it more visual.
The preview is automatically reloaded after each saving.

<img src="img/hw-colored-preview.png"/>

> **TIPS**:  
> - You can select **"Preview in web browser"** if you prefer to see the result in your default browser.  

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


Now, let's make our **HelloWorld** app more interesting and add data to it.

What about saying "Hello !" to your favorite superheros ?

To manage your data easily and quickly, Wakanda provides a **Visual Data Editor**:


<img src="img/hw-access-data-model.png" />


### Edit you data model

First, create a `Superhero` dataclass, add the attribute `name` to it and save.

<img src="img/model-designer-newdataclass.png" />


<img src="img/model-designer-addattribute.png" />



> **TIPS**:  
> - You can click on "source" button to see the JSON file generated

<img src="img/model-designer-JSON.png" />


Then add a second dataclass `Movie` linked to `Superhero` dataclass :

1 - Create the second class `Movie`

<img src="img/model-designer-addDataclass-2.png" />

2 - Add an attribute called `superhero` that has, as type, a collection of `Superhero`

<img src="img/model-designer-addrelationship.png" />

3 - The link is automatically displayed in the model

<img src="img/model-designer-addrelationship-2.png" />

### Populate your database

Now you can create a JS file to populate your database, and add *your top 3 superheros* to your `SuperHero` dataclass

<img src="img/model-designer-addJSfile.png" />


<img src="img/model-designer-addcode.png" />

## Display the list of your top 3 superheros in your App via AngularJS, Ionic and Cordova

Wakanda's client connector provides a full integration of the backend to the frontend. Let's see how you can display your backend data directly and easily to your frontend.


1 - First we're going to create the controller.

In the project's file structure, go to the `mobile/www/js/controllers` folder and open `home.js`file


<img src="img/mobile-front-gotohomejs.png" />

2 - Add the following code there to get the Datamodel and start manipulating the data.

```javascript
      ds.SuperHero.$query().$promise.then(function(event) {
         $scope.superheros = event.result;
       });
```
<img src="img/mobile-front-getdatamodel.png" />

3 - Open index.html to display the data and customize it

<img src="img/mobile-front-openindex.png" />

4 - Add the following Ionic code to display the list

```javascript
    <ion-list>
  		<ion-item ng-repeat="superhero in superheros">
   			{{superhero.name}}
  		</ion-item>
		</ion-list>
```

<img src="img/mobile-front-addioniclist.png" />


5 - Display the result on iOS and Android simulators

<img src="img/mobile-front-displaypreview.png" />

6 - Build your app in Android to install it on your phone

<img src="img/mobile-front-viewapk.png" />



[Getting Started »](index.html){:class="btn"}
