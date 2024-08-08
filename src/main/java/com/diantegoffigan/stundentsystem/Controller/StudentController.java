package com.diantegoffigan.stundentsystem.Controller;

import com.diantegoffigan.stundentsystem.Model.Student;
import com.diantegoffigan.stundentsystem.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * This is the controller class for the Student entity.
 * It handles HTTP requests and responses related to Student operations.
 */
@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {

    // Autowired StudentService to use its methods.
    @Autowired
    private StudentService studentService;

    /**
     * This method is used to add a new student.
     * It takes a Student object as a request body.
     * @param student This is the student to be added.
     * @return String This returns a confirmation message.
     */
    @PostMapping("/POST")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "New student is added";
    }

    /**
     * This method is used to retrieve all students.
     * It doesn't require any parameters.
     * @return List<Student> This returns a list of all students.
     */
    @GetMapping("/GET")
    public List<Student> getAll(){
        return studentService.getAllStudent();
    }

}
