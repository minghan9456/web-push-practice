# Web Notification from backend Practice

## Pre Work
```bash
# Install web-push -g
$ npm install web-push -g
# Generate vapid keys
$ web-push generate-vapid-keys [--json]
# Save your vapid keys (Public & Private)
```

## Build Setup
```bash
# Paste public key to ./static/html/test.html
# Paste public key & private key to ./push.js 

# Launch express server
$ node ./index.js
# Go to localhost:3000 and allow notification permission

# Open new terminal window & excute push.js to push notification from backend.
$ node ./push.js

# Finally, will get notification on your browser.
```
