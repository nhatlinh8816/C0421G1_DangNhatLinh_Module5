package exam_module5.demo.service;

import exam_module5.demo.model.End;
import exam_module5.demo.repository.EndRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EndServiceImp implements EndService {
    @Autowired
    private EndRepo endRepo;
    @Override
    public List<End> findAll() {
        return endRepo.findAll();
    }
}
