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
		
		Collections.sort(pro,

					(e1,e2)->e1.getProPrize()-e2.getProPrize());
		pro.forEach(System.out::println);
		
		/*Collections.sort(pro, new Mysort());
		System.out.println(pro);*/
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