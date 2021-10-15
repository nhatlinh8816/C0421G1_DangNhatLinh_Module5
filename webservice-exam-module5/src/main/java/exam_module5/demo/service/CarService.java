package exam_module5.demo.service;

import exam_module5.demo.model.Car;

import java.util.List;

public interface CarService {
    List<Car> findAll();
    void save(Car car);
    Car findById(int id);
    void delete (Car car);
    void update(Car car);
    List<Car> findByName(String name);
}
