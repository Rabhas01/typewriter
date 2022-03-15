const sentence = "hello there from lighthouse labs";
let timer = 0
sanitizedSentence = sentence + "\n";  
for (const char of sanitizedSentence){
  setTimeout(() => {
    process.stdout.write(char) //to have more control and avoid automatically adding an extra "newline character" at the end each time (process.stdout.write)
  }, timer);
  timer +=100
}
