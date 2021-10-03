import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon, Card, Avatar, Text } from 'react-native-elements'
import { useSelector } from 'react-redux';

export default function AllReviews() {
    const data = useSelector((state) => state.HomeReducer.MovieDetail)

    return (
        <>
            <ScrollView style={styles.background}>
                {data.map((e, i) => {
                    return (
                        <Card containerStyle={{ borderRadius: 20 }}>
                            <View style={styles.container}>

                                <Avatar rounded size="medium" source={{ uri: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg' }} />

                                <View style={styles.header}>

                                    <View style={styles.review}>
                                        <Icon name='star' color='#F0CA02' />
                                        <Text style={styles.userReview}>{e.rating}</Text>
                                        <Text style={styles.perTen}>/5</Text>
                                        <Text h2 style={styles.title}>Hmm</Text>
                                    </View>

                                    <View style={styles.reviewer}>
                                        <Text>Reviewer: </Text>
                                        <Text style={styles.user}>user</Text>
                                    </View>

                                </View>

                            </View>

                            <Text>{e.comment}</Text>

                        </Card>
                    )
                })}

            </ScrollView>
            <TouchableOpacity style={styles.fab}>
                <Icon name='add' size={60} color='#FEC100' />
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "black",
        flex: 1
    },

    container: {
        flexDirection: "row",
        paddingVertical: 10,
        alignItems: "center",
    },

    header: {
        flexDirection: "column",
        paddingHorizontal: 10
    },

    review: {
        flexDirection: "row",
        alignItems: "center"
    },

    userReview: {
        fontWeight: 'bold',
        fontSize: 18
    },

    perTen: {
        fontSize: 18
    },

    reviewer: {
        flexDirection: "row"
    },

    title: {
        paddingHorizontal: 10
    },

    user: {
        fontWeight: "bold"
    },

    containerFab: {
        flex: 1,
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 0
    },

    fab: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: 30,
        right: 30,
        height: 70,
        backgroundColor: '#824E00',
        borderRadius: 100,
    },
});

// {dataFilm?.map((value, index) => (
//   <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 20 }} key={index}>
//       <Image
//           source={{ uri: `https://image.tmdb.org/t/p/original${value.poster_path}` }}
//           style={{ width: 150, height: 150, resizeMode: "cover", borderRadius: 20 }}
//       />

//       <View
//           style={{ justifyContent: 'center', width: '45%', resizeMode: "contain" }}
//       >
//           <Text style={{ color: "white", fontSize: 20, flexShrink: 1 }}> {value.original_title} </Text>
//           <Text style={{ color: "white", fontSize: 10, opacity: 0.5, flexShrink: 1 }} > ({value.release_date}) </Text>
//           <Rating />
//       </View>
//   </View>
// ))}

{/* <FAB
        style={styles.fab}
        large
        icon={
          <Icon
            name="add"
            size={50}
            color="#FDC100"
          />
        }
        color="#824E00"
      /> */}