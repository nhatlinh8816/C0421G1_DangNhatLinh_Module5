package exam_module5.demo.service;

import exam_module5.demo.model.Car;
import exam_module5.demo.repository.CarRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CarServiceImp implements CarService {
    @Autowired
    private CarRepo carRepo;
    @Override
    public List<Car> findAll() {
        return carRepo.findAll();
    }

    @Override
    public void save(Car car) {
        carRepo.save(car);
    }

    @Override
    public Car findById(int id) {
        return carRepo.findById(id).get();
    }

    @Override
    public void delete(Car car) {
        carRepo.delete(car);
    }

    @Override
    public void update(Car car) {
        carRepo.save(car);
    }

    @Override
    public List<Car> findByName(String name) {
        return carRepo.findByNameContaining(name);
    }
}
