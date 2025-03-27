import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import axios from 'axios'
import { ProductType } from '@/types/type'
import ImageSlider from '@/components/ImageSlider'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors';

type Props = {}

const ProductDetails = (props: Props) => {
    const {id} = useLocalSearchParams();
    const [product, setProduct] = useState<ProductType>();

    useEffect(() => {
        getProductDetails();
    }, []);

    const getProductDetails = async () => {
        const URL = `http://172.22.215.203:8000/saleProducts/${id}`;
        const response = await axios.get(URL);

        console.log('Product Details ', response.data);
        setProduct(response.data);
    }
  return (
    <View>
        {product && <ImageSlider imageList={product.images} />}
        {product && 
        <View style={styles.container}>
            <View style={styles.ratingWrapper}>
                <View style={styles.ratingWrapper}>
                <Ionicons name="star" size={20} color={"#D4AF37"} />
                <Text style={styles.rating}>
                    4.7 <Text>(136)</Text>
                </Text>
                </View>
                <TouchableOpacity>
                    <Ionicons name="heart-outline" size={22} color={Colors.black} />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>{product.title}</Text>
            <View style={styles.priceWrapper}>
                <Text style={styles.price}>{product.price} F CFA</Text>
                <View style={styles.priceDiscount}>
                    <Text style={styles.priceDiscountText}>6% off</Text>
                </View>
                <Text style={styles.oldPrice}>{product.price + 2} F CFA</Text>
            </View>
            <Text style={styles.description}>{product.description}</Text>

            <View style={styles.productVariationWrapper}>
                <View style={styles.productVariationType}>
                    <Text style={styles.productVariationTitle}>Couleur</Text>
                    <View style={styles.productVariationValueWrapper}>
                        <View style={{borderColor: Colors.primary, borderWidth: 1, borderRadius: 100, padding: 2}}>
                        <View style={[styles.productVariationColorValue, {backgroundColor: "#D4AF37"}]} />
                        </View>
                        <View style={[styles.productVariationColorValue, {backgroundColor: "#333"}]} />
                        <View style={[styles.productVariationColorValue, {backgroundColor: "#8bc34a"}]} />
                        <View style={[styles.productVariationColorValue, {backgroundColor: "#2196f3"}]} />
                        <View style={[styles.productVariationColorValue, {backgroundColor: "#f44336"}]} />
                        <View style={[styles.productVariationColorValue, {backgroundColor: "#9c27b0"}]} />
                    </View>
                </View>
                <View style={styles.productVariationType}>
                    <Text style={styles.productVariationTitle}>Taille</Text>
                </View>
            </View>
        </View>}
    </View>
  )
}

export default ProductDetails 

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    ratingWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 5
    },
    rating: {
        marginLeft: 5,
        fontSize: 14,
        fontWeight: '400',
        color: Colors.gray
    },
    title: {
        fontSize: 20,
        fontWeight: '400',
        color: Colors.black,
        letterSpacing: 0.6,
        lineHeight: 32
    },
    priceWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        gap: 5
    },
    price: {
        fontSize: 18,
        fontWeight: "600",
        color: Colors.black
    },
    priceDiscount: {
        backgroundColor: Colors.extraLightGray,
        padding: 5,
        borderRadius: 5
    },
    priceDiscountText: {
        fontSize: 14,
        fontWeight: '400',
        color: Colors.primary
    },
    oldPrice: {
        fontSize: 16,
        fontWeight: '400',
        textDecorationLine: 'line-through',
        color: Colors.gray
    },
    description: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: '400',
        color: Colors.black,
        letterSpacing: 0.6,
        lineHeight: 24
    },
    productVariationWrapper: {
        flexDirection: 'row',
        marginTop: 20,
        flexWrap: 'wrap',
    },
    productVariationType: {
        width: '50%',
        gap: 5,
        marginBottom: 10
    },
    productVariationTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.black
    },
    productVariationValueWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        flexWrap: 'wrap'
    },
    productVariationColorValue: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: Colors.extraLightGray
    }
})