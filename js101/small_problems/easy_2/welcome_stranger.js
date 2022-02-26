function greetings(nameArray, object) {
  return (`Greetings, ${object.title} ${nameArray.join(" ")}. I hear you are an excellent ${object.occupation}.`);
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);