import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { CategoryType } from '@/types/type'
import { Colors } from '@/constants/Colors'

type Props = {
    categories: CategoryType[]
}

const Categories = ({categories}: Props) => {
  return (
    <View style={styles.container}>
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>Categorie</Text>
            <TouchableOpacity>
                <Text style={styles.titleBtn}>Tout voir</Text>
            </TouchableOpacity>
        </View>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories} 
            keyExtractor={(item) => item.id.toString()} 
            renderItem={({item, index}) => (
            <TouchableOpacity>
                <View style={styles.item}>
                    <Image source={{uri: item.image}} style={styles.itemImg} />
                    <Text>{item.name}</Text>
                </View>
            </TouchableOpacity>
            )} 
            />
    </View>
  )
}

export default Categories


const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginHorizontal: 20
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
    },
    item: {
        marginVertical: 10,
        gap: 5,
        alignItems: "center",
        marginLeft: 20
    },
    itemImg: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: Colors.lightGray
    }
})