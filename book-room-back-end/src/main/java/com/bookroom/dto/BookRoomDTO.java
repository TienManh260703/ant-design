package com.bookroom.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BookRoomDTO {
    @JsonProperty("full_name")
    String fullName;
    String gift;
    @JsonProperty("kind_of_room")
    Integer kindOfRoom;
    String email;
    String phone;
    Integer age;;
    List<String> services;
    @JsonProperty("start_day")
    LocalDateTime startDay;
    @JsonProperty("end_date")
    LocalDateTime endDate;
}

