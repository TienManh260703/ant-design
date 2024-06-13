package com.bookroom.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "rooms")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;
    @JsonProperty("full_name")
    @Column(name = "full_name")
    String fullName;
    String gift;
    Integer age;
    @JsonProperty( "kind_of_room")
    @Column(name = "kind_of_room")
    Integer kindOfRoom;
    @Column(name = "email")
    String email;
    @Column(name = "phone")
    String phone ;
    @Column(name = "services")
    List<String> services;
    @JsonProperty("start_day")
    @Column(name = "start day")
    LocalDateTime startDay;
    @JsonProperty( "end_date")
    @Column(name = "end_date")
    LocalDateTime endDate;
}
