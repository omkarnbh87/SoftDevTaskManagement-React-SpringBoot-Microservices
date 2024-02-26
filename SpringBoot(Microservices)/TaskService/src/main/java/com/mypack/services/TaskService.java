package com.mypack.services;

import java.util.List;

import com.mypack.model.Role;
import com.mypack.model.Task;
import com.mypack.model.TaskStatus;

public interface TaskService {

	Task createTask(Task task, Role requesterRole) throws Exception;

	Task getTaskById(Long id) throws Exception;

	List<Task> getAllTask(TaskStatus status);

	Task updateTask(Long id, Task updatedTask, Long userId) throws Exception;

	void deleteTask(Long id) throws Exception;

	Task assignedToUser(Long userId, Long taskId) throws Exception;

	List<Task> assignedUsersTask(Long userId, TaskStatus status);

	Task completeTask(Long taskId) throws Exception;
}
