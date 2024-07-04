package com.bookroom.controller;

import com.bookroom.dto.RoomDTO;
import com.bookroom.entity.Room;
import com.bookroom.repository.RoomRepository;
import com.bookroom.service.WebSocketService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/v1/rooms")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@CrossOrigin("*")
public class RoomController {
    RoomRepository roomRepository;
    WebSocketService webSocketService;
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

    @GetMapping("view-edit-room/{id}")
    public ResponseEntity<?> editRoom (@PathVariable String id ){
        Room room = roomRepository.findById(id).get();
        return ResponseEntity.ok(RoomDTO.builder().build().transRoom(room));
    }
    @PatchMapping("update-rooms/{id}")
    public  ResponseEntity<?> updateRoom(
            @PathVariable String id,
            @RequestBody RoomDTO roomDTO){
        Room existingRoom = roomRepository.findById(id).get();
        existingRoom.setName(roomDTO.getName());
        existingRoom.setQuantityBed(roomDTO.getQuantityBed());
        existingRoom.setQuantityPeople(roomDTO.getQuantityPeople());
        existingRoom.setPrice(roomDTO.getPrice());
        existingRoom.setUtils(roomDTO.getUtils());
        existingRoom.setDescription(roomDTO.getDescription());
        existingRoom.setTypeRoom(roomDTO.getTypeRoom());
        existingRoom.setStatus(roomDTO.getStatus());
        Room response = roomRepository.save(existingRoom);
        return ResponseEntity.ok(RoomDTO.builder().build().transRoom(response));
    }
    @DeleteMapping("deleted/{id}")
    public ResponseEntity<?> deleteRoom(@PathVariable String id) {
        Optional<Room> roomOptional = roomRepository.findById(id);
        if (roomOptional.isPresent()) {
            roomRepository.deleteById(id);
            webSocketService.sendMessage("/app/deleteRoom", id);

            return ResponseEntity.ok("Success");
        }
        return ResponseEntity.ok("Error");
    }



}
