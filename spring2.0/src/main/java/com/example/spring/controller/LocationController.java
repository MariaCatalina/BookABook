package com.example.spring.controller;

import com.example.spring.frontendmodel.LocationModel;
import com.example.spring.model.Location;
import com.example.spring.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Controller()
@RequestMapping(path = "/bookabook/location") // This means URL's start with /demo (after Application path)
public class LocationController {

    @Autowired // This means to get the bean called userRepository
    // Which is auto-generated by Spring, we will use it to handle the data
    private LocationRepository locationRepository;

    @PostMapping(path = "/addLocation")
    @CrossOrigin(origins = "http://localhost:4200")
    public @ResponseBody
    Location addLocation(@RequestBody LocationModel location) {//CORS
        System.out.println(location.getLat());
        Location l = locationRepository.save(new Location(new BigDecimal(location.getLat()), new BigDecimal(location.getLng()), location.getName()));
        return l;
    }

    @GetMapping(path = "/getLocations")
    public @ResponseBody
    List<LocationModel> getLocations() {

        Iterable<Location> locations = locationRepository.findAll();
        System.out.println("get all locations " + locations);
        List<LocationModel> result = new ArrayList<>();
        for (Location loc : locations) {
            result.add(new LocationModel(loc.getLat().floatValue(), loc.getLng().floatValue(), loc.getName()));
        }
        return result;
    }
}
