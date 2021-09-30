/* eslint-disable no-extra-semi */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'

import { SearchBar, Card, Icon, Button } from 'react-native-elements';
import { ms } from 'react-native-size-matters';


const Homepage = props => {
    const MoveToDetail = () => {
        props.navigation.navigate('DetailMovie')
    };

    const [search, setSearch] = useState('');
    const [activeButton, setActiveButton] = useState(0);
    const listGenre = ['Action', 'Romance', 'Thriller', 'Comedy'];

    const updateSearch = search => {
        setSearch(search);
    };

    const hotGenre = i => {
        if (activeButton == i)
            return 'Hot {e} Movies';
        return null;

    }

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

                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.bestGenre}>Best Genre</Text>
                            <Text style={styles.more}>more >></Text>
                        </View>
                        <View style={styles.genres}>
                            {listGenre.map((e, i) => {
                                return (
                                    <>
                                        <TouchableOpacity
                                            onPress={() => setActiveButton(i)}
                                            style={[{
                                                backgroundColor: activeButton === i ? '#FFC200' : 'white'
                                            },
                                            styles.button]}
                                            key={i}>
                                            <Image source={activeButton === i ? require('../../Assets/Image/Icon.png') : require('../../Assets/Image/Icon(1).png')} style={styles.icon} />
                                            <Text style={[{ color: activeButton === i ? 'white' : 'black' }, styles.genresText]}>{e}</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.bestGenre}>{hotGenre}</Text>
                                    </>
                                )
                            })}
                        </View>
                        <Text style={styles.bestGenre}>Hot Movies</Text>

                    </View>
                    <TouchableOpacity onPress={MoveToDetail}>
                        <Card containerStyle={styles.card}>
                            <Card.Image source={require('../../Assets/Image/Movie.png')} />
                            <Text style={styles.summary}>A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. But their easy life gets complicated when their deception is threatened with exposure.</Text>
                            <Card.Divider />
                            <View style={styles.reviewShare}>
                                <Button
                                    type='clear'
                                    icon={
                                        <Icon name='message-circle' type='feather' />
                                    }
                                    title='123'
                                    titleStyle={{ color: 'black' }}

                                >
                                </Button>
                                <Button
                                    type='clear'
                                    icon={
                                        <Icon name='share' type='foundation' />
                                    }
                                >
                                </Button>
                            </View>
                        </Card>
                    </TouchableOpacity>
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
    },

    bestGenre: {
        fontSize: ms(18),
        fontWeight: "bold",
        color: 'white',
    },

    more: {
        fontSize: ms(14),
        color: 'white',
    },

    genres: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: ms(20),
    },

    button: {
        flexDirection: 'row',
        paddingHorizontal: ms(6),
        paddingVertical: ms(13),
        borderRadius: ms(10),
        alignItems: 'center'
    },

    genresText: {
        fontSize: ms(12)
    },

    icon: {
        marginHorizontal: ms(5)
    },

    card: {
        borderRadius: ms(20),
        marginHorizontal: ms(20)
    },

    summary: {
        paddingVertical: ms(20),
        textAlign: 'justify',
    },

    reviewShare: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: ms(-8)
    }
})


export default Homepage

