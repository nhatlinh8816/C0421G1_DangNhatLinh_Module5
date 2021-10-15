package exam_module5.demo.controller;

import exam_module5.demo.dto.CarDto;
import exam_module5.demo.model.Car;
import exam_module5.demo.service.CarService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/car/api/v1")
public class CarRestController {
    @Autowired
    private CarService carService;
    @GetMapping
    public ResponseEntity<List<Car>> getCarList(){
        List<Car> carList = carService.findAll();
        if (carList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(carList, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity add(@RequestBody CarDto carDto){
        Car car = new Car();
        BeanUtils.copyProperties(carDto,car);
        carService.save(car);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Car> update(@PathVariable int id, @RequestBody CarDto carDto){
        Car currentCar = carService.findById(id);
        if (currentCar==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        currentCar.setCode(carDto.getCode());
        currentCar.setType(carDto.getType());
        currentCar.setName(carDto.getName());
        currentCar.setStart(carDto.getStart());
        currentCar.setEnd(carDto.getEnd());
        currentCar.setPhone(carDto.getPhone());
        currentCar.setTimeStart(carDto.getTimeStart());
        currentCar.setTimeEnd(carDto.getTimeEnd());
        carService.save(currentCar);
        return new ResponseEntity(currentCar, HttpStatus.OK);
    }
    @GetMapping(value = "/{id}")
    public ResponseEntity<Car> viewCar(@PathVariable int id) {
        Car car = carService.findById(id);
        if (car == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(car, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Car> delete(@PathVariable int id){
        Car currentCar = carService.findById(id);
        if (currentCar==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        carService.delete(currentCar);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Car>> searchByName(@RequestParam String name){
        List<Car> carList = carService.findByName(name);
        if (carList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(carList, HttpStatus.OK);
    }

}