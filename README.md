## Platform-Blue Data Layer ##

This library controls all authentication and access to firebase. 

### Typescript ###

* This project uses typescript
* Running 'npm run build' will transpile code into the 'dist' directory

### Install ###

Clone the repository to your local machine and install all required packages: 

```
git clone https://github.com/ChicagosNext/platformBlue-data platformBlue-data
npm install
```

### Testing ###

All of the tests are written in TypeScript using jest. You may need to install jest globally as well as a few other utilities*:

```
npm install -g jest-cli copyfiles ts-node

``` 
*It should be noted that I should write the package.json scripts to not require globally installed packages but I'm just lazy.

Transpile:

```
npm run build
```

### Firebase ###

This component uses my firebase app. Please change the FbApp.ts file in the config directory to use your own instance. I'm trusting you...for now.
