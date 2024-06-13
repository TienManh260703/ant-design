package com.bookroom.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

import java.util.List;
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RoomDTO {

    String name;
    @JsonProperty("quantity_bed")
    Integer quantityBed;
    @JsonProperty("quantity_people")
    Integer quantityPeople;
    Float price;
    List<String> utils;
    String description;
    Boolean status;
}
