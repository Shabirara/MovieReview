/* eslint-disable no-extra-semi */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'

import { SearchBar, Card, Icon, Button } from 'react-native-elements';
import { ms } from 'react-native-size-matters';



const DetailMovie = props => {
    const [search, setSearch] = useState('');
    const [activeButton, setActiveButton] = useState(0);
    const listGenre = ['Action', 'Romance', 'Thriller', 'Comedy'];

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
                        <Image style={styles.trailer} source={require('../../Assets/Image/Movie.png')} />
                        <View style={styles.header}>
                            <Text style={styles.filmTitle}>Parasite</Text>
                            <View style={styles.yearGenre}>
                                <Text style={styles.yearGenreText}>2019</Text>
                                <Text style={styles.yearGenreText}>|</Text>
                                <Text style={styles.yearGenreText}>Thriller</Text>
                            </View>
                        </View>
                        <Card.Divider />
                        <View style={styles.content}>
                            <Image style={styles.sideImage} source={require('../../Assets/Image/Movie.png')} />
                            <View>
                                <View style={styles.ratings}>
                                    <View style={styles.starDetail}>
                                        <Icon name='star' color='#F0CA02' />
                                        <View style={styles.content}>
                                            <Text style={styles.userReview}>9</Text>
                                            <Text style={styles.perTen}>/10</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={styles.starDetail}>
                                        <Icon name='star' color='#979797' />
                                        <Text style={styles.perTen}>Rate this</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.summary}>A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. But their easy life gets complicated when their deception is threatened with exposure.</Text>

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
    );
};

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

