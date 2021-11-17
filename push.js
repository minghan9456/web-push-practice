const webpush = require('web-push');

async function main() {
  webpush.setVapidDetails(
    "mailto: example@john.test",
    "-- Public Vapid Key --",
    "-- Private Vapid Key --",
  );

  // TODO get subscription from client pushManager.subscribe()
  const pushSubscription = 'JSON string';
  const payload = {"topic":"news", "title":"test title", "text": "texxxt"};
  console.log(pushSubscription);
  console.log(payload);
  const buf = Buffer.from(JSON.stringify(payload));

  const r = await webpush.sendNotification(JSON.parse(pushSubscription), buf);
  console.log(r);
}

main();
