# magicalCube 

The magicalCube prototype is built using https://github.com/ClintH/interactivity/tree/master/websockets/motion-stream tutorial which  streams motion and orientation data from a mobile device via websockets to a server. From there, the server distributes it to every connected client. The code here is intended to be used as part of a tangible cube prototype that in turn switches the browser window's color when layed on different sides.

# Geting started

In the directory you've got this sample:

`$ npm install`

This will install the necessary packages from npm.

# Running

Once set up, you can boot up your server with

`$ npm start`

It will continue running. To stop it again, press CTRL+C (PC) or CMD+C (Mac).

# Uses

* [reconnecting-websocket](https://github.com/pladaria/reconnecting-websocket) wrapper (v3.2.2)

# Read more

* [Device Orientation & Motion](https://developers.google.com/web/fundamentals/native-hardware/device-orientation/) (Google)
* [Device Orientation](https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation) (MDN)

# This README is based on the one provided by https://github.com/ClintH/interactivity/tree/master/websockets/motion-stream
