package com.bookroom.controller;

import com.bookroom.dto.BookRoomDTO;
import com.bookroom.entity.BookRoom;
import com.bookroom.repository.BookRoomRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/book_room")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@CrossOrigin("*")
public class BookRoomController {
    BookRoomRepository bookRoomRepository;

    @PostMapping("add")
    public ResponseEntity<?> create(@RequestBody BookRoomDTO bookRoomDTO) {
        BookRoom bookRoom = BookRoom.builder()
                .fullName(bookRoomDTO.getFullName())
                .gift(bookRoomDTO.getGift())
                .age(bookRoomDTO.getAge())
                .kindOfRoom(bookRoomDTO.getKindOfRoom())
                .email(bookRoomDTO.getEmail())
                .phone(bookRoomDTO.getPhone())
                .services(bookRoomDTO.getServices())
                .startDay(bookRoomDTO.getStartDay())
                .endDate(bookRoomDTO.getEndDate())
                .build();
        BookRoom savedBookRoom = bookRoomRepository.save(bookRoom);
        return ResponseEntity.status(HttpStatus.OK).body(savedBookRoom);
    }

    @GetMapping("all-book-room")
    public ResponseEntity<?> getRooms() {
        return ResponseEntity.status(HttpStatus.OK).body(bookRoomRepository.findAll());
    }
}
