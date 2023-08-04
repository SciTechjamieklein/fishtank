import { createInterface } from "readline/promises"

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})
let she = await rl.question("how many sheep do you want?                 ")
console.log("have "+she+" sheep")