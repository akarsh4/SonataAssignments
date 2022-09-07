package com.Assignments.Day4;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Procomp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		List<Product> pro = new ArrayList<>();
		pro.add(new Product(12,"Mixer",10000));
		pro.add(new Product(22,"Oven",7500));
		pro.add(new Product(73,"Tv",45500));
		pro.add(new Product(42,"Washing Machine",17800));
		pro.add(new Product(45,"Suitcase",4000));
		
		products.forEach(
				(Product p1)-> {
					if(p1.getProdPrice() < 0) {
						throw new RuntimeException("Price is negative");
					}
				}
		);
		return products;
	}
	public List<Product>getProductsSort() {
		List<Product> products = new ProductList().getProducts();
		Collections.sort(products, new Comparator<Product>() {
			public int compare(Product o1, Product o2) {
				return Double.compare(o1.getProdPrice(), o2.getProdPrice());
			}
		});
		return products;
	}
	int prodSize() {
		return products.size();
	}
	public static void main(String args[]) {	
		System.out.println("\t\t - Before Sorting -\n" + new ProductList().getProducts() + "\n");
		System.out.println("\t\t - After Sorting -\n" + new ProductList().getProductsSort());
	}
}

/*	class Mysort implements Comparator<Product>{

		@Override
		public int compare(Product o1, Product o2) {
			// TODO Aut0o-generated method stub
			return (o1.getProPrize()-o2.getProPrize());
		}
		
}
*/