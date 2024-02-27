package com.mypack.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mypack.model.Role;
import com.mypack.model.Task;
import com.mypack.model.TaskStatus;
import com.mypack.repositories.TaskRepository;

@Service
public class TaskServiceImpl implements TaskService {

	@Autowired
	private TaskRepository taskRepository;

	@Override
	public Task createTask(Task task, Role requesterRole) throws Exception {
		// TODO Auto-generated method stub
		if (!requesterRole.equals(Role.ADMIN)) {
			throw new Exception("Only admin can create a task");
		}
		task.setStatus(TaskStatus.PENDING);
		task.setCreatedAt(LocalDateTime.now());
		return taskRepository.save(task);
	}

	@Override
	public Task getTaskById(Long id) throws Exception {
		// TODO Auto-generated method stub
		return taskRepository.findById(id).orElseThrow(() -> new Exception("Task Not Found with id : " + id));
	}

	@Override
	public List<Task> getAllTask(TaskStatus status) {
		// TODO Auto-generated method stub
		List<Task> allTask = taskRepository.findAll();

		List<Task> filteredTask = allTask.stream()
				.filter(task -> status == null || task.getStatus().name().equalsIgnoreCase(status.toString()))
				.collect(Collectors.toList());
		return filteredTask;
	}

	@Override
	public Task updateTask(Long id, Task updatedTask, Long userId) throws Exception {
		// TODO Auto-generated method stub

		Task existingTask = getTaskById(id);
		if (updatedTask.getTitle() != null) {
			existingTask.setTitle(updatedTask.getTitle());
		}
		if (updatedTask.getImage() != null) {
			existingTask.setImage(updatedTask.getImage());
		}
		if (updatedTask.getDescription() != null) {
			existingTask.setDescription(updatedTask.getDescription());
		}
		if (updatedTask.getStatus() != null) {
			existingTask.setStatus(updatedTask.getStatus());
		}
		if (updatedTask.getDeadLine() != null) {
			existingTask.setDeadLine(updatedTask.getDeadLine());
		}

		return taskRepository.save(existingTask);
	}

	@Override
	public void deleteTask(Long id) throws Exception {
		// TODO Auto-generated method stub

		Task task = getTaskById(id);
		if (task != null) {
			taskRepository.deleteById(id);
		}
	}

	@Override
	public Task assignedToUser(Long userId, Long taskId) throws Exception {
		// TODO Auto-generated method stub
		Task task = getTaskById(taskId);
		task.setAssignedUserId(userId);
		task.setStatus(TaskStatus.ASSIGNED);
		return taskRepository.save(task);
	}

	@Override
	public List<Task> assignedUsersTask(Long userId, TaskStatus status) {
		// TODO Auto-generated method stub
		List<Task> allTask = taskRepository.findByAssignedUserId(userId);

		List<Task> filteredTask = allTask.stream()
				.filter(task -> status == null || task.getStatus().name().equalsIgnoreCase(status.toString()))
				.collect(Collectors.toList());
		return filteredTask;
	}

	@Override
	public Task completeTask(Long taskId) throws Exception {
		// TODO Auto-generated method stub
		Task task = getTaskById(taskId);
		task.setStatus(TaskStatus.DONE);
		return taskRepository.save(task);
	}

}
