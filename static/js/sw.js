self.addEventListener("push", function (event) {
  console.log(event);
  const message = event.data.json();
  console.log(JSON.parse(event.data.text()));
  console.log(message);
  event.waitUntil(self.registration.showNotification( message.title, { body: message.text, requireInteraction: true }));
})
