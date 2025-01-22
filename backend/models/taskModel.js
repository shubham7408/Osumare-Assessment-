class TaskStore {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  getAllTasks() {
    return this.tasks;
  }

  getTaskById(id) {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(taskData) {
    const task = {
      id: this.nextId++,
      ...taskData,
      status: "pending",
      createdAt: new Date(),
    };
    this.tasks.push(task);
    return task;
  }

  updateTask(id, taskData) {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index === -1) return null;

    this.tasks[index] = {
      ...this.tasks[index],
      ...taskData,
      updatedAt: new Date(),
    };
    return this.tasks[index];
  }

  deleteTask(id) {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index === -1) return false;

    this.tasks.splice(index, 1);
    return true;
  }
}

module.exports = new TaskStore();
