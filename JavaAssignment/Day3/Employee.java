package com.Assignments.Day3;

public abstract class Employee {
	int empId;
	String empName;
	double empSal;
	public void display() {
		System.out.println("Employee Salary "+this.empSal);
	}
	abstract public void  salCal();
	
}
