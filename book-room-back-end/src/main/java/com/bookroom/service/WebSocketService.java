package com.bookroom.service;

import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WebSocketService {

    private final SimpMessagingTemplate messagingTemplate;

    @MessageMapping("/deleteRoom")
    public void sendRoomDeletedNotification(String id) {
        System.err.println("ID : "+id);
        messagingTemplate.convertAndSend("/topic/rooms", id);
    }

    public void sendMessage(String destination, String message) {
        System.err.println("D : "+ destination + " /n Me : "+message);
        messagingTemplate.convertAndSend(destination, message);
    }
}
