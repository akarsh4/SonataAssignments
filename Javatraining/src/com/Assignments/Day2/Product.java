package com.Assignments.Day2;

public class Product {

	int proId;
	String proName;
	double proPrizes;
	Product(){
		
	}
	
	public Product(int id, String name, double proPrizes) {
		this.proId = id;
		this.proName = name;
		this.proPrizes = proPrizes;
	}
	public double gst(double proPrizes) {
		double finalprize = (this.proPrizes + 0.18*this.proPrizes);
		return finalprize;
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Product p1 = new Product(001,"Honey",500.0);
		System.out.println(p1.proId+ " "+p1.proName+" "+p1.proPrizes+" "+p1.gst(p1.proPrizes));
		
		Product p2 = new Product(002,"Oil",200.0);
		System.out.println(p2.proId+ " "+p2.proName+" "+p2.proPrizes+" "+p2.gst(p2.proPrizes));
		
	}

}
