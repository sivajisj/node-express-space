const EventEmmiter = require("events");

const customEmitter = new EventEmmiter();

customEmitter.on("response", () => {
  console.log("data recieved");
});
customEmitter.on("response", (name) => {
  console.log("Some other opertations performed..."+"by "+name);
});
customEmitter.emit("response","sj");
