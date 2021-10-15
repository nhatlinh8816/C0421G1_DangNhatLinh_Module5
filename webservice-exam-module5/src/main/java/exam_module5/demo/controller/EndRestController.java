package exam_module5.demo.controller;

import exam_module5.demo.model.End;
import exam_module5.demo.model.Start;
import exam_module5.demo.service.EndService;
import exam_module5.demo.service.StartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/end/api/v1")
public class EndRestController {
    @Autowired
    private EndService endService;
    @GetMapping
    public ResponseEntity<List<End>> getEndList(){
        List<End> endList = endService.findAll();
        if (endList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(endList, HttpStatus.OK);
    }
}
