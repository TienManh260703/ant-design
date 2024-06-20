package com.bookroom.controller;

import com.bookroom.dto.RoomDTO;
import com.bookroom.entity.Room;
import com.bookroom.repository.RoomRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

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
                .name(roomDTO.getName())
                .quantityBed(roomDTO.getQuantityBed())
                .quantityPeople(roomDTO.getQuantityPeople())
                .price(roomDTO.getPrice())
                .utils(roomDTO.getUtils())
                .description(roomDTO.getDescription())
                .typeRoom(roomDTO.getTypeRoom())
                .status(roomDTO.getStatus())
                .build();
        Room r = roomRepository.save(room);
        return ResponseEntity.status(HttpStatus.OK).body(r);
    }

    @GetMapping
    public ResponseEntity<?> getRooms() {
        return ResponseEntity.ok(roomRepository.findAll().stream().map(
                room -> RoomDTO.builder().build().transRoom(room)
        ).toList());
    }

    @DeleteMapping("deleted/{id}")
    public ResponseEntity<?> deleteRoom(@PathVariable String id) {
        Optional<Room> roomOptional = roomRepository.findById(id);
        if (roomOptional.isPresent()) {
            roomRepository.deleteById(id);
            return ResponseEntity.ok("Success");

        }
        return ResponseEntity.ok("Error");
    }
}
