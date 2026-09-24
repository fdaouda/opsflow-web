type Task = {
    title: string,
    status: string,
    priority: string
};

const task1: Task = {
    title:"tâche1", 
    status:"OPEN",
    priority: "NORMAL"
};

const task2: Task = {
    title:"tâche2", 
    status:"IN PROGRESS",
    priority: "NORMAL"
};

const task3: Task = {
    title:"tâche3", 
    status:"OPEN",
    priority: "URGENT"
};

const task4: Task = {
    title:"tâche4", 
    status:"DONE",
    priority: "NONE"
};

const tasks: Task[] = [task1, task2, task3, task4];


const openTasks = tasks.filter(task => task.status === "OPEN");

const priorityMap: Record<string, number> = {
    NONE: 0,
    NORMAL: 1,
    URGENT: 2
  };
  
openTasks.sort((a, b) => {
    return priorityMap[b.priority] - priorityMap[a.priority];
});

openTasks.forEach(task => {
    console.log(task.title + "- priorité " + task.priority);
});