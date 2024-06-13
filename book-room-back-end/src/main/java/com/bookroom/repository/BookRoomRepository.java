package com.bookroom.repository;

import com.bookroom.entity.BookRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRoomRepository extends JpaRepository<BookRoom, String> {
}
