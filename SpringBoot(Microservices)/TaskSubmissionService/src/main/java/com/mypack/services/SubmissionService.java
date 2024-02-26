package com.mypack.services;

import java.util.List;

import com.mypack.models.Submission;

public interface SubmissionService {

	Submission submitTask(Long taskId, String gitHubLink, Long userId,String jwt)throws Exception;
	
	Submission getTaskSubmissionById(Long submissionId)throws Exception;
	
	List<Submission> getAllTaskSubmission();
	
	List<Submission> getTaskSubmissionByTaskId(Long taskId);
	
	Submission acceptDeclineSubmission(Long id, String status)throws Exception;
	
}
