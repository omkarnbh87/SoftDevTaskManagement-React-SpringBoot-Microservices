package com.mypack.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.mypack.models.Submission;
import com.mypack.models.TaskDto;
import com.mypack.repositories.SubmissionRepository;

@Service
public class SubmissionServiceImpl implements SubmissionService {

	@Autowired
	private SubmissionRepository submissionRepository;
	@Autowired
	private UserService userService;
	@Autowired
	private TaskService taskService;

	@Override
	public Submission submitTask(Long taskId, String gitHubLink, Long userId, String jwt) throws Exception {
		// TODO Auto-generated method stub
		ResponseEntity<TaskDto> task = taskService.getTaskById(taskId, jwt);
//		TaskDto taskDto = new TaskDto();
//		taskDto.setId(task.getBody().getId());
//		taskDto.setAssignedUserId(task.getBody().getAssignedUserId());
//		taskDto.setCreatedAt(task.getBody().getCreatedAt());
//		taskDto.setDeadLine(task.getBody().getDeadLine());
//		taskDto.setDescription(task.getBody().getDescription());
//		taskDto.setImage(task.getBody().getImage());
//		taskDto.setStatus(task.getBody().getStatus());
//		taskDto.setTags(task.getBody().getTags());
//		taskDto.setTitle(task.getBody().getTitle());

		if (task.getBody() != null) {
			Submission submission = new Submission();
			submission.setTaskId(taskId);
			submission.setUserId(userId);
			submission.setGitHubLink(gitHubLink);
			submission.setSubmissionTime(LocalDateTime.now());
			return submissionRepository.save(submission);
		}
		throw new Exception("Task not found with is : " + taskId);
	}

	@Override
	public Submission getTaskSubmissionById(Long submissionId) throws Exception {
		// TODO Auto-generated method stub
		return submissionRepository.findById(submissionId)
				.orElseThrow(() -> new Exception("Task Submission not found with id : " + submissionId));
	}

	@Override
	public List<Submission> getAllTaskSubmission() {
		// TODO Auto-generated method stub
		return submissionRepository.findAll();
	}

	@Override
	public List<Submission> getTaskSubmissionByTaskId(Long taskId) {
		// TODO Auto-generated method stub
		return submissionRepository.findByTaskId(taskId);
	}

	@Override
	public Submission acceptDeclineSubmission(Long id, String status) throws Exception {
		// TODO Auto-generated method stub
		Submission submission = getTaskSubmissionById(id);
		submission.setStatus(status);
		if(status.equals("ACCEPT")) {
			
			taskService.completeTask(submission.getTaskId());

		}
		return submissionRepository.save(submission);
	}

}
