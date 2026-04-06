package com.project.database.api.accounts.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired(required = false)
    private JavaMailSender mailSender;

    public void sendPasswordResetEmail(String to, String token) {
        if (mailSender == null) {
            System.out.println("Email not configured. Token for " + to + ": " + token);
            return;
        }
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject("Password Reset Request");
        message.setText("To reset your password, use this token: " + token + "\n\nThis token expires in 1 hour.");
        mailSender.send(message);
    }
}