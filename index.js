const obj = {
  message: function (arg) {
    return {
      foo: "message response to foo",
      bar: "message response to bar",
      duck: "message response to duck",
    }[arg]
  }
};

function main() {
  console.log("start");
  console.log(obj.message(process.argv[2]) || "invalid message")
  console.log("finish");
}

if (require.main === module) {
  main();
}
