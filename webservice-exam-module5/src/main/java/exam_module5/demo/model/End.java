package exam_module5.demo.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class End {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    @OneToMany(mappedBy = "end")
    private Set<Car> cars;

    public End(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public End() {
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
