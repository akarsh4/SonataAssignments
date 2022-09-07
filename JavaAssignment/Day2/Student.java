package com.Assignments.Day1;

public class Student {
	int stdId;
	String stdName;
	char stuClass;


	public Student(int id, String name, char ch) {
		this.stdId = id;
		this.stdName = name;
		this.stuClass = ch;
	}
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Student s1 = new Student(001,"Akarsh",'A');
		Student s2 = new Student(002,"Manish",'B');
		System.out.println(s1.stdId+" "+s1.stdName+" "+s1.stuClass);
		System.out.println(s2.stdId+" "+s2.stdName+" "+s2.stuClass);
	}
}
