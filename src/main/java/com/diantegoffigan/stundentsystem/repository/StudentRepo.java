package com.diantegoffigan.stundentsystem.repository;

import com.diantegoffigan.stundentsystem.Model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepo extends JpaRepository<Student, Integer> {





}
