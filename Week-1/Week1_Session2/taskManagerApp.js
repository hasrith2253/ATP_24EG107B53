// Hasrith's task management system
import { addTask, getAllTasks, completeTask } from './task.js'

addTask("Learn React Hooks","high","2024-05-20");
addTask("Build Weather App", "high", "2024-05-18");
addTask("Review TypeScript", "medium", "2024-05-19");

const tasks = getAllTasks()
console.log("Hasrith's Tasks:", tasks)