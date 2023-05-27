package com.example.templates3sem;

import ch.qos.logback.core.model.Model;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface repository extends JpaRepository<Model, Integer> { //klassen, pirmary key


    //eksempler

    List<Model> findModelByDate(String date);

    List<Model> findModelByEmailOrderByDateAsc(String email);

}
