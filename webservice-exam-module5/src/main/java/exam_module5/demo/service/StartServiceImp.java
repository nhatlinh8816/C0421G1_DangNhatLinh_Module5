package exam_module5.demo.service;

import exam_module5.demo.model.Start;
import exam_module5.demo.repository.StartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class StartServiceImp implements StartService {
    @Autowired
    private StartRepo startRepo;
    @Override
    public List<Start> findAll() {
        return startRepo.findAll();
    }
}
