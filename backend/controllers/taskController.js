const TaskStore = require("../models/taskModel");
const ResponseHandler = require("../utils/responseHandler");

class TaskController {
  async getTasks(req, res) {
    try {
      const { page = 1, limit = 10, status, sortBy } = req.query;
      let tasks = TaskStore.getAllTasks();
      if (status) {
        tasks = tasks.filter((task) => task.status === status);
      }
      if (sortBy) {
        tasks.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      }

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const paginatedTasks = tasks.slice(startIndex, endIndex);

      return ResponseHandler.success(res, {
        tasks: paginatedTasks,
        total: tasks.length,
        page: parseInt(page),
        totalPages: Math.ceil(tasks.length / limit),
      });
    } catch (error) {
      return ResponseHandler.error(res, error.message, 500);
    }
  }

  async getTaskById(req, res) {
    try {
      const task = TaskStore.getTaskById(parseInt(req.params.id));
      if (!task) {
        return ResponseHandler.error(res, "Task not found", 404);
      }
      return ResponseHandler.success(res, task);
    } catch (error) {
        console.error(error);
        return ResponseHandler.error(res, "Internal Server Error", 500);
    }
  }

  async createTask(req, res) {
    try {
      const task = TaskStore.createTask(req.body);
      return ResponseHandler.success(res, task, 201);
    } catch (error) {
        console.error(error);
      return ResponseHandler.error(res, error.message, 500);
    }
  }

  async updateTask(req, res) {
    try {
      const task = TaskStore.updateTask(parseInt(req.params.id), req.body);
      if (!task) {
        return ResponseHandler.error(res, "Task not found", 404);
      }
      return ResponseHandler.success(res, task);
    } catch (error) {
        console.error(error);
      return ResponseHandler.error(res, "Internal Server Error", 500);
    }
  }

  async deleteTask(req, res) {
    try {
      const deleted = TaskStore.deleteTask(parseInt(req.params.id));
      if (!deleted) {
        return ResponseHandler.error(res, "Task not found", 404);
      }
      return ResponseHandler.success(res, null, 204);
    } catch (error) {
      return ResponseHandler.error(res, error.message, 500);
    }
  }
}

module.exports = new TaskController();
