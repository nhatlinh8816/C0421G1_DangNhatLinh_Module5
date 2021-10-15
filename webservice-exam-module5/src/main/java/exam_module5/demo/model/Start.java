package exam_module5.demo.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Start {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    @OneToMany(mappedBy = "start")
    private Set<Car> cars;

    public Start(int id, String name) {
        this.id = id;
        this.name = name;

    }

    public Start() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
