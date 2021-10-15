package exam_module5.demo.dto;

import exam_module5.demo.model.End;
import exam_module5.demo.model.Start;
import exam_module5.demo.model.Type;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class CarDto {
    private int id;
    private String code;
    private Type type;
    private String name;
    private Start start;
    private End end;
    private String phone;
    private String timeStart;
    private String timeEnd;
    private String email;

    public CarDto(int id, String code, Type type, String name, Start start, End end, String phone, String timeStart, String timeEnd, String email) {
        this.id = id;
        this.code = code;
        this.type = type;
        this.name = name;
        this.start = start;
        this.end = end;
        this.phone = phone;
        this.timeStart = timeStart;
        this.timeEnd = timeEnd;
        this.email = email;
    }

    public CarDto() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Start getStart() {
        return start;
    }

    public void setStart(Start start) {
        this.start = start;
    }

    public End getEnd() {
        return end;
    }

    public void setEnd(End end) {
        this.end = end;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getTimeStart() {
        return timeStart;
    }

    public void setTimeStart(String timeStart) {
        this.timeStart = timeStart;
    }

    public String getTimeEnd() {
        return timeEnd;
    }

    public void setTimeEnd(String timeEnd) {
        this.timeEnd = timeEnd;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
