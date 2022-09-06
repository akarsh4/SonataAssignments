package com.Assignments.Day4;

public class Product implements Comparable<Product>{
int proId;
String proName;
int proPrize;


public Product(int id, String name, int prize) {
	// TODO Auto-generated constructor stub
	this.proId = id;
	this.proName = name;
	this.proPrize =prize;
}

public int getProId() {
	return proId;
}

public void setProId(int proId) {
	this.proId = proId;
}

public String getProName() {
	return proName;
}

public void setProName(String proName) {
	this.proName = proName;
}

public int getProPrize() {
	if(this.proPrize<=0) {
		return this.proPrize*0;
	}
	else
	return -1;
	
}

public void setProPrize(int proPrize) {
	this.proPrize = proPrize;
}

@Override
public String toString() {
	return "Product [proId=" + proId + ", proName=" + proName + ", proPrize=" + proPrize + "]";
}

@Override
public int compareTo(Product o) {
	// TODO Auto-generated method stub
	if(this.getProPrize()>o.getProPrize()) return 1;
	if(this.getProPrize()<o.getProPrize()) return -1;
	return 0;
}




}
