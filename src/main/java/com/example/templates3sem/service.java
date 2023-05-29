package com.example.templates3sem;

import ch.qos.logback.core.model.Model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class service {

    @Autowired
    repository repository;

    public Model postData(Model model) {
        return repository.save(model);
    }


    public List<Model> allData() {
        return repository.findAll();
    }

    public ResponseEntity<Model> updateData(int id, Model model){
        Optional<Model> modelOptional = repository.findById(id);

        if (modelOptional.isPresent()) {
            repository.save(model);
            return new ResponseEntity<>(model, HttpStatus.OK);
        } else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<Model> deleteData(int id){
        //finder bruger først
        Optional<Model> modelOptional = repository.findById(id);

        if (modelOptional.isPresent()) {
            repository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
