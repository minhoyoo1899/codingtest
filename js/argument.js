function iterator(a,b,c,d,e) {
  console.log("a", arguments[0]);
  console.log("b", arguments[1]);
  console.log("c", arguments[2]);
  console.log("d", arguments[3]);
  console.log("e", arguments[4]);
}

iterator("hi", "hello", "bye", "kdt", "train");