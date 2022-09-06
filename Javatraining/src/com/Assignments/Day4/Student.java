package com.Assignments.Day4;

public class Student implements Comparable<Student>{
 int id;
 String name;
int marks;

public Student(int id , String name, int marks) {
	this.id = id;
	this.marks = marks;
	this.name = name;
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

public int getMarks() {
	return marks;
}

public void setMarks(int marks) {
	this.marks = marks;
}

@Override
public String toString() {
	return "Student [id=" + id + ", name=" + name + ", marks=" + marks + "]";
}

@Override
public int compareTo(Student o) {
	// TODO Auto-generated method stub
	if(this.marks>o.marks) return 1;
	else if(this.marks<o.marks) return -1;
	return 0;
}



}
