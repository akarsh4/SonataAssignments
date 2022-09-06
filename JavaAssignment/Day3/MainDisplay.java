package com.Assignments.Day3;

public class MainDisplay {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
			Manager m1 = new Manager();
			m1.empId=100;
			m1.empName="Akarsh";
			m1.empSal=50000;
			m1.salCal();
			
			Developer d1 = new Developer();
			d1.empId=500;
			d1.empName="Gagan";
			d1.empSal=35000;
			d1.salCal();
			
			Tester t1 = new Tester();
			t1.empId=700;
			t1.empName="Manish";
			t1.empSal=24000;
			t1.salCal();
	}

}
