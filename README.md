# Getting Started with Create React App for your Valentien's Day Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

This template offers a react app with a basic structure of a valentines' website. It includes the feature to play
a song once the user clicks/touch the screen. Simultaneously, random pictures, on random positions starts to cocksure on the screen.
You can add your own pictures and songs to the project. To do that adjust the code in the `App.js` file.

To see the project in action, visit the [demo](https://zer3broo.github.io/My-Valentine-Template/)

## How to add your own pictures and songs

To add your own pictures and songs, you need to adjust the `App.js` file. The `App.js` file is located in the `src` folder.
To add a new Song just replace the Audio.mp3 file in the `audio` folder. To add a new picture, just add them in the `img` folder,
import them in the `App.js` file and add them to the `pictures` array.

### Create heart shaped pictures

To create a heart shaped picture you can use software like GIMP or Photoshop. You can also use online tools like [Photopea](https://www.photopea.com/) or [Picmonkey](https://www.picmonkey.com/blog/sweethearts-youre-my-valentine).




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Deployment to github pages

To deploy the app to github pages, you need to adjust the `homepage` in the `package.json` file. To:
```json
{
  "homepage": "https://myusername.github.io/my-app",
  ...
}
```
Than run the following commands:
```npm run build```

```gh-pages -d build```

If you receive an ProcessError: fatal: A branch named 'gh-pages' already exists. Run the following command:
```node node_modules/gh-pages/bin/gh-pages-clean.js```


