package exam_module5.demo.controller;

import exam_module5.demo.model.Start;
import exam_module5.demo.model.Type;
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
@RequestMapping(value = "/start/api/v1")
public class StartRestController {
    @Autowired
    private StartService startService;
    @GetMapping
    public ResponseEntity<List<Start>> getStartList(){
        List<Start> startList = startService.findAll();
        if (startList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(startList, HttpStatus.OK);
    }
}
