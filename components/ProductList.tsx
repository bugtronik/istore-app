import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import ProductItem from './ProductItem'
import { Colors } from '@/constants/Colors'
import { ProductType } from '@/types/type'

type Props = {
    products: ProductType[];
}

const ProductList = ({products}: Props) => {
  return (
    <View style={styles.container}>
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>Pour vous</Text>
            <TouchableOpacity>
                <Text style={styles.titleBtn}>Tout voir</Text>
            </TouchableOpacity>
        </View>
        <FlatList
            data={products}
            numColumns={2}
            contentContainerStyle={{justifyContent:'space-between', marginBottom: 20,}}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
            <ProductItem item={item} index={index} />
             )}
        />
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1
      },
      titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
      },
      title: {
        fontSize: 18,
        fontWeight: "600",
        letterSpacing: 0.6,
        color: Colors.black
      },
      titleBtn: {
        fontSize: 14,
        fontWeight: '500',
        letterSpacing: 0.6,
        color: Colors.black
      }
})