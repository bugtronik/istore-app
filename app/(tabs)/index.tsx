import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CategoryType, ProductType } from '@/types/type'
import { Stack } from 'expo-router'
import Header from '@/components/Header'
import ProductItem from '@/components/ProductItem'
import ProductList from '@/components/ProductList'
import Categories from '@/components/Categories'

type Props = {}

const HomeScreen = (props: Props) => {

	const [products, setProducts] = useState<ProductType[]>([]);
	const [categories, setCategories] = useState<CategoryType[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		getCategories();
		getProducts();
	}, []);

	const getProducts = async () => {
		const URL = `http://172.22.215.203:8000/products`;
		const response = await axios.get(URL);

		//console.log(response.data);
		setProducts(response.data);
		setIsLoading(false);
	};

	const getCategories = async () => {
		const URL = `http://172.22.215.203:8000/categories`;
		const response = await axios.get(URL);

		//console.log(response.data);
		setCategories(response.data);
		setIsLoading(false);
	}
	return (
		<>
			<Stack.Screen options={{
				headerShown: true,
				header: () => <Header />
			}} />
			<Categories categories={categories} />
			<ProductList products={products} />
		</>
	)
}

export default HomeScreen

const styles = StyleSheet.create({})