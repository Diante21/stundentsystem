package com.diantegoffigan.stundentsystem.Service;

import com.diantegoffigan.stundentsystem.Model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);

    public List<Student> getAllStudent();


}
