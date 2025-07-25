
// Step 1: Create an array of todo items


const todos = [
    { title: "Do homework", done: false },
    { title: "Wash Dishes", done: true },
    { title: "Read a book", done: false },
    { title: "Blog post", done: true },
    { title: "Do homework23", done: false },
    { title: "Do homework35", done: true },
];

// Step 2: Filter into Completed and ongoing tasks

const completedTasks = todos.filter(todo => todo.done === true);
const ongoingTasks = todos.filter(todo => todo.done === false);


// Step 3: Create a function to display tasks

console.log("Done:");
completedTasks.forEach((task, index) => {console.log(`${index + 1}. ${task.title}`)});
console.log("\n Ongoing:");
ongoingTasks.forEach((task, index) => {console.log(`${index + 1}. ${task.title}`)});
