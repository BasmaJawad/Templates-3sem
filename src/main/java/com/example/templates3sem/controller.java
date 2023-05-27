package com.example.templates3sem;

import ch.qos.logback.core.model.Model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin //for at vi kan sende requets hertil med javascript
public class controller {

    @Autowired
    service service;

    @PostMapping("/postData")
    @ResponseStatus(HttpStatus.CREATED)
    public Model postData(@RequestBody Model model) {
        return service.postData(model);
    }

    @GetMapping("/getAllData")
    public List<Model> allData() {
        return service.allData();
    }

    @PutMapping("/updateData/{id}")
    public ResponseEntity<Model> updateRestaurant(@PathVariable int id, @RequestBody Model model) {
        return service.updateData(id, model);
    }

    @DeleteMapping("/deleteData/{id}")
    public ResponseEntity<Model> deleteData(@PathVariable int id) {
        return service.deleteData(id);
    }
}
