package com.bookroom.controller;

import com.bookroom.dto.RoomDTO;
import com.bookroom.entity.Room;
import com.bookroom.repository.RoomRepository;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/rooms")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@CrossOrigin("*")
public class RoomController {
    RoomRepository roomRepository;

    @PostMapping("add")
    public ResponseEntity<?> create(@RequestBody RoomDTO roomDTO) {
        Room room = Room.builder()
                .fullName(roomDTO.getFullName())
                .gift(roomDTO.getGift())
                .age(roomDTO.getAge())
                .kindOfRoom(roomDTO.getKindOfRoom())
                .email(roomDTO.getEmail())
                .phone(roomDTO.getPhone())
                .services(roomDTO.getServices())
                .startDay(roomDTO.getStartDay())
                .endDate(roomDTO.getEndDate())
                .build();
        Room savedRoom = roomRepository.save(room);
        return ResponseEntity.status(HttpStatus.OK).body(savedRoom);
    }

    @GetMapping("all-rooms")
    public ResponseEntity<?> getRooms() {
        return ResponseEntity.status(HttpStatus.OK).body(roomRepository.findAll());
    }
}
