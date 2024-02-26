package com.mypack.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mypack.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

	List<Task> findByAssignedUserId(Long userId);
}
