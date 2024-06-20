package com.bookroom.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

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
    String name;
    @Column(name = "quantity_bed")
    Integer quantityBed;
    @Column(name = "quantity_people")
    Integer quantityPeople;
    Float price;
    List<String> utils;
    String description;
    @Column(name = "type_room")
    Boolean typeRoom;
    Boolean status;
}
