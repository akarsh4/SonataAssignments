package com.Assignments.Day1;

public class Tshirt {
	String color;
	String material;
	String design;
	Tshirt(){
		
	}
	Tshirt(String clr, String mat, String des){
		this.color=clr;
		this.design = des;
		this.material = mat;
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Tshirt[] small = new Tshirt[3];
		small[0] = new Tshirt("blue","fabric","Round");
		small[1]= new Tshirt("red","cotton","Triangle");
		small[2]=new Tshirt("white","wollen","Faded");
		for(int i = 0;i<small.length;i++) {
			System.out.println(small[i].color+small[i].design+small[i].material);
		}
		System.out.println();
		Tshirt[] medium = new Tshirt[3];
		medium[0] = new Tshirt("blue","fabric","Round");
		medium[1]= new Tshirt("red","cotton","Triangle");
		medium[2]=new Tshirt("white","wollen","Faded");
		for(int i = 0;i<medium.length;i++) {
			System.out.println(medium[i].color+medium[i].design+medium[i].material);
		}
		System.out.println();
		Tshirt[] Large = new Tshirt[3];
		Large[0] = new Tshirt("blue","fabric","Round");
		Large[1]= new Tshirt("red","cotton","Triangle");
		Large[2]=new Tshirt("white","wollen","Faded");
		for(int i = 0;i<Large.length;i++) {
			System.out.println(Large[i].color+Large[i].design+Large[i].material);
		}

	}

}
