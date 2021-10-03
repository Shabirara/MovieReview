/* eslint-disable no-extra-semi */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'

import { SearchBar, Card, Icon, Button } from 'react-native-elements';
import { ms } from 'react-native-size-matters';
import { Thumbnail } from 'react-native-thumbnail-video';

import { useSelector } from 'react-redux';

const DetailMovie = props => {
    const [search, setSearch] = useState('');
    const data = useSelector((state) => state.HomeReducer.MovieDetail)


    const MoveToAllReviews = () => {
        props.navigation.navigate('All Reviews')
    }

    const updateSearch = search => {
        setSearch(search);
    };

    return (
        <SafeAreaView style={styles.background}>
            <ScrollView>
                <View>
                    <SearchBar
                        placeholder="Search movies"
                        onChangeText={updateSearch}
                        value={search}
                        inputContainerStyle={{
                            backgroundColor: 'white',
                        }}
                        platform="default"
                        round
                        containerStyle={{ backgroundColor: 'black', margin: 10 }}
                    />

                    <Card containerStyle={styles.card}>
                        <Thumbnail
                            url={`${data.trailer}`}
                            imageWidth={ms(308)}
                            onPress={() => {
                                try {
                                    Linking.openURL(`${data.trailer}`)
                                }
                                catch (error) {
                                    console.log(error)
                                }
                            }}
                            iconStyle={{ tintColor: "#F2D25B" }}
                        />
                        <View style={styles.header}>
                            <Text style={styles.filmTitle}>{data.title}</Text>
                            <View style={styles.yearGenre}>
                                <Text style={styles.yearGenreText}>{data.release}</Text>
                                <Text style={styles.yearGenreText}>|</Text>
                                <Text style={styles.yearGenreText}>{data.name}</Text>
                            </View>
                        </View>
                        <Card.Divider />
                        <View style={styles.content}>
                            <Image style={styles.sideImage} source={{ uri: data.poster }} />
                            <View>
                                <View style={styles.ratings}>
                                    <View style={styles.starDetail}>
                                        <Icon name='star' color='#F0CA02' />
                                        <View style={styles.content}>
                                            <Text style={styles.userReview}>{data.rating}</Text>
                                            <Text style={styles.perTen}>/5</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={styles.starDetail}>
                                        <Icon name='star' color='#979797' />
                                        <Text style={styles.perTen}>Rate this</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.summary}>{data.synopsis}</Text>

                            </View>
                        </View>
                        <Card.Divider />
                        <View style={styles.header}>
                            <Button
                                type='clear'
                                icon={
                                    <Icon name='message-circle' type='feather' />
                                }
                                title='123'
                                titleStyle={{ color: 'black' }}
                                buttonStyle={styles.button}
                                onPress={MoveToAllReviews}
                            >
                            </Button>
                            <Button
                                type='clear'
                                icon={
                                    <Icon name='share' type='foundation' />
                                }
                                buttonStyle={styles.button}
                            >
                            </Button>
                        </View>
                    </Card>
                </View>
            </ScrollView >
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "black",
        flex: 1,
    },

    container: {
        paddingHorizontal: ms(20)
    },

    trailer: {
        backgroundColor: 'red',
        alignSelf: 'center',
        width: '100%'

    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingVertical: ms(10)
    },

    genres: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: ms(20),
    },

    button: {
        flexDirection: 'row',
        marginVertical: ms(-8)
    },

    genresText: {
        fontSize: ms(12)
    },

    icon: {
        marginHorizontal: ms(5)
    },

    card: {
        borderRadius: ms(20)
    },

    summary: {
        paddingVertical: ms(5),
        textAlign: 'justify',
        paddingHorizontal: ms(10),
        marginRight: ms(75)
    },
    userReview: {
        fontWeight: 'bold',
        fontSize: ms(12)
    },

    perTen: {
        fontSize: ms(12)
    },

    yearGenre: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: ms(120),
    },

    yearGenreText: {
        fontSize: ms(14),
        fontWeight: '700'
    },

    filmTitle: {
        fontSize: ms(20),
        fontWeight: '700'
    },

    sideImage: {
        width: ms(90),
        height: ms(131.44)
    },

    content: {
        flexDirection: 'row'
    },

    ratings: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    starDetail: {
        alignItems: 'center',
        marginHorizontal: ms(5)
    }

})


export default DetailMovie

