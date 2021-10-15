package exam_module5.demo.repository;


import exam_module5.demo.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeRepo extends JpaRepository<Type, Integer> {
}
