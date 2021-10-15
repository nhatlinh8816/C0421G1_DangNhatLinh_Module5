package exam_module5.demo.service;

import exam_module5.demo.model.Type;
import exam_module5.demo.repository.TypeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TypeServiceImp implements TypeService {
    @Autowired
    private TypeRepo typeRepo;
    @Override
    public List<Type> findAll() {
        return typeRepo.findAll();
    }
}
