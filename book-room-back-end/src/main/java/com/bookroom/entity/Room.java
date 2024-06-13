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
    @JsonProperty("quantity_bed")
    Integer quantityBed;
    Integer quantityPeople;
    Float price;
    List<String> utils;
    String description;
    Boolean status= false;
}
