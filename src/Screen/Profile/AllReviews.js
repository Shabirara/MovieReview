import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { View, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { Icon, Card, Avatar, Text, Overlay, Button } from 'react-native-elements'
import { Rating } from 'react-native-ratings';
import { ms } from 'react-native-size-matters';
import { useSelector } from 'react-redux';

export default function AllReviews() {
    const data = useSelector((state) => state.HomeReducer.MovieDetail)
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
    };

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
                                        <Text h2 style={styles.title}>Stars</Text>

                                    </View>

                                    <View style={styles.reviewer}>
                                        <Text>Reviewer: </Text>
                                        <Text style={styles.user}>{e.User.fullName}</Text>
                                    </View>

                                    <Overlay
                                        overlayStyle={styles.editOverlay}
                                        isVisible={visible}
                                        onBackdropPress={toggleOverlay}
                                    >
                                        <View style={styles.overlayReview}>
                                            <Text style={styles.howDoYou}>
                                                How do you think about this movie?
                                            </Text>
                                            <Rating
                                                style={styles.editRating}
                                                tintColor="#FFE7AB"
                                                type="custom"
                                                ratingBackgroundColor="#EBEDF0"
                                                ratingCount={5}
                                                showRating
                                                startingValue="{3}"
                                            />
                                            <Text style={styles.yourRating}>
                                                Your rating:
                                            </Text>
                                            <TextInput style={styles.inputReaction} />
                                            <TextInput
                                                multiline={true}
                                                numberOfLines={4}
                                                style={styles.inputReview}
                                            />
                                            <Button
                                                title="Submit"
                                                buttonStyle={{
                                                    backgroundColor: "black",
                                                    width: ms(120),
                                                    borderColor: "white",
                                                    borderRadius: 16
                                                }}
                                                containerStyle={{
                                                    alignItems: "center",
                                                    marginVertical: ms(10)
                                                }}
                                                titleStyle={{ fontWeight: "bold" }}
                                                onPress={toggleOverlay}
                                            />
                                        </View>
                                    </Overlay>

                                </View>

                            </View>

                            <Text>{e.comment}</Text>

                        </Card>
                    )
                })}

            </ScrollView>
            <TouchableOpacity onPress={toggleOverlay} style={styles.fab}>
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

    editOverlay: {
        backgroundColor: "transparent"
    },

    inputReaction: {
        backgroundColor: "white",
        marginTop: ms(20),
        marginBottom: ms(10),
        borderRadius: ms(10),
        paddingVertical: ms(4),
        color: "black",
        fontWeight: "bold"
    },

    inputReview: {
        backgroundColor: "white",
        borderRadius: ms(10),
        color: "black",
        marginBottom: ms(10),
        height: ms(100),
        textAlignVertical: "top"
    },

    editOverlay: {
        backgroundColor: "transparent"
    },

    overlayReview: {
        backgroundColor: "#FFE7AB",
        paddingVertical: ms(60),
        borderRadius: ms(20)
    },

    howDoYou: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: ms(20)
    },

    yourRating: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: ms(20),
        marginTop: ms(14)
    },

    editRating: {
        paddingHorizontal: ms(10)
    }
});

