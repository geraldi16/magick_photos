# Magick Photos

Hello and welcome! This project is created to help user to change their photo background easily. Basically magick photos is using API from https://www.remove.bg/ as main function, but we try to enhance the ui/ux so it will be more interactive for user to use.

## Getting Started
## 1. API Key
Before we start, there are some things to be prepared. First, create your own API Key by creating account in remove.bg and follow instructions to create key [here](https://www.remove.bg/api#remove-background)

After get your api key, copy .env.template to .env and paste your api key as `REACT_APP_REMOVEBG_API_KEY` value.

## 2. Json data
Go to `src/data` folder. Copy `background-data.example.json` to `background-data.json`. Modify the JSON values there as you like as long you follow the format.\
\
There are two types of data can be provided, one is `image`, provide the url for background material; or\
Two, `color`, you can just provide the color code in rgb

## 3. Start App
Lastly, start your app
```
npm run start
```
