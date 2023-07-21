package com.max.feedbackserver.Repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.max.feedbackserver.Models.Feedback;

public interface FeedbackRepo extends JpaRepository<Feedback, Long> {

}
