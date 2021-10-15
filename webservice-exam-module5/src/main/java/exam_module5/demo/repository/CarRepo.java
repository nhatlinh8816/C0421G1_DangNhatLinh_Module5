package exam_module5.demo.repository;

import exam_module5.demo.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarRepo extends JpaRepository<Car, Integer> {
    List<Car> findByNameContaining(String name);
}
