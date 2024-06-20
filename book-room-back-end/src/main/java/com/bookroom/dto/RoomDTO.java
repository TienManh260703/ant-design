package com.bookroom.dto;

import com.bookroom.entity.Room;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Getter
@Setter
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RoomDTO {
    String id;
    String name;
    @JsonProperty("quantity_bed")
    Integer quantityBed;
    @JsonProperty("quantity_people")
    Integer quantityPeople;
    Float price;
    List<String> utils;
    String description;
    Boolean status;

    public RoomDTO transRoom(Room room) {
        return RoomDTO.builder()
                .id(room.getId())
                .name(room.getName())
                .quantityBed(room.getQuantityBed())
                .quantityPeople(room.getQuantityPeople())
                .price(room.getPrice())
                .utils(room.getUtils())
                .description(room.getDescription())
                .status(room.getStatus())
                .build();
    }
}
