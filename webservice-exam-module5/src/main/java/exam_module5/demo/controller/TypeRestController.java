package exam_module5.demo.controller;

import exam_module5.demo.model.Car;
import exam_module5.demo.model.Type;
import exam_module5.demo.service.CarService;
import exam_module5.demo.service.TypeService;
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
@RequestMapping(value = "/type/api/v1")
public class TypeRestController {
    @Autowired
    private TypeService typeService;
    @GetMapping
    public ResponseEntity<List<Type>> getTypeList(){
      List<Type> typeList = typeService.findAll();
        if (typeList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(typeList, HttpStatus.OK);
    }

}
