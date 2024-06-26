package com.diantegoffigan.stundentsystem.Service;

import com.diantegoffigan.stundentsystem.Model.Student;
import com.diantegoffigan.stundentsystem.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StundentServiceImpl implements StudentService {


    @Autowired
    private StudentRepo studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);

    }

    @Override
    public List<Student> getAllStudent() {
        return studentRepository.findAll();
    }


}
