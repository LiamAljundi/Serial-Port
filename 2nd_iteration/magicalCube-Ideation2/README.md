# magicalCube  (ideation 2)

The magicalCube prototype is built using https://github.com/ClintH/interactivity/tree/master/websockets/motion-stream tutorial which  streams motion and orientation data from a mobile device via websockets to a server. From there, the server distributes it to every connected client. The code here is intended to be used as part of a tangible cube prototype that immitates tangible light controls (the web browser's window being the light source immitation) and:

* when twisted to the side: changes between a bigger and a smaller white square on the browser's window
* when accerated on a side twist: switches the browser window to grey

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

# Authors
* Victor Melbye Frederiksen
* Julija Rukanskaite

# This README is based on:
https://github.com/ClintH/interactivity/tree/master/websockets/motion-stream
