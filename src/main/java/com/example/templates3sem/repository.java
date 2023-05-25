package com.example.templates3sem;

import ch.qos.logback.core.model.Model;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface repository extends JpaRepository<Model, Integer> { //klassen, pirmary key


    //eksempler

    List<Model> findReservationByDate(String date);

    List<Model> findReservationByCustomerEmailOrderByDateAsc(String email);

}
