package com.bookroom.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Component
public class RoomDTO {
    @JsonProperty("full_name")
    private String fullName;

    private String gift;

    @JsonProperty("kind_of_room")
    private Integer kindOfRoom;

    private String email;
    private String phone;
   private Integer age;
    private List<String> services;

    @JsonProperty("start_day")
    private LocalDateTime startDay;

    @JsonProperty("end_date")
    private LocalDateTime endDate;
}

