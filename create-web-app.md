---
---

# Hello World: your first Web App with Angular2

## Install Wakanda

First, download and install **Wakanda Community Edition**

- On Windows, [x86](https://github.com/Wakanda/wakanda-digital-app-factory/releases/download/v1.1.3/wakanda-community-all_1.1.3_x86.msi "download") or [x64](https://github.com/Wakanda/wakanda-digital-app-factory/releases/download/v1.1.3/wakanda-community-all_1.1.3_x64.msi "download")
- On Mac OS X, [x64](https://github.com/Wakanda/wakanda-digital-app-factory/releases/download/v1.1.3/wakanda-community-all_1.1.3_x64.dmg "download")


Now we can start our **HelloWorld** project.  

## Choose : mobile or web app ?
We can choose the kind of app we want to create : mobile, web or both.

Here we want to create an *Angular2 web app*.

To do that, we're going to open the studio, (add studio icon here) and click on **"Create a new solution"**:

<img src="img/hp-initial.png"/>

Which opens the template selection page:  

<img src="img/hww-template-selection.png"/>


The structure of your future projects depends of the template you choose.

You'll always have the **same back end strcture**, but you can choose to have a **web front-end and/or mobile front-end**.

There, you can name your app *- without spaces -* and select the **Angular2 webpack template**.

Now, in your **HelloWorld** project, you can find the Angular2 web app file structure :

<img src="img/hw-file-structure.png"/>  

You have 4 folders at the root of your project:

- Backend: Wakanda JavaScript Server. It contains all the Server files to logs, settings, permissions.  
- Database: Wakanda DB folder. It contains your data model(s), backups and your data.
- Mobile, where you’ll find all your front-end files to develop and build your mobile app. It contains all you need to code your Ionic 1 or 2 projects.
- Web, where you’ll find all your front-end files to develop and build your web app. It contains all you need to code your Angular 1 or 2 projects.

**Note** : "prototyper" folder in the Web Project is a prototyper tool to create quickly Web UI based on widgets architecture. But it is deprecated and will be excluded from the platform in our next major release!

For our **HelloWorld** we’re going to work first in the `mobile` folder.


## Table of contents

- [Run your web application](#run-your-web-application)
- [Customize the panels](#customize-the-panels)
- [Enable live reload](#enable-live-reload)
- [Code your Angular application](#code-your-angular-application)

## 1 - Run your web application

Click on the _Run Page_ toolbar button:

<img src="img/web-run-page.png"/>

[Activate live reload](installation.html#increase-your-productivity) to reload automatically the page after any file changes occur.

## 2 - Customize the panels

Open the right panel from the toolbar toggles:

<img src="img/panel-toggles.png" />

You can move the web preview on the right panel:

<img src="img/web-app-creation.png" />

To open your application in your default browser, set this preference via _Run Page_ dropdown:

<img src="img/web-run-dropdown.png" />

## 4 - Code your Angular application

<img src="http://wakanda.github.io/angular-wakanda/images/angular-wakanda.png" />

Wakanda integrates the Angular framework.

[Learn more »](http://wakanda.github.io/angular-wakanda/){:target="_blank"}{:class="btn"}

---

You can also create a mobile version of your application, based on the same backend.

[Create the mobile version »](create-mobile-app.html){:class="btn"}

