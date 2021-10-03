/* eslint-disable no-extra-semi */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TouchableOpacity, Image, Linking } from 'react-native'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { MovieDetail } from './Redux/Action';
import { SearchBar, Card, Icon, Button } from 'react-native-elements';
import { ms } from 'react-native-size-matters';
import { Thumbnail } from 'react-native-thumbnail-video'
import { awaitExpression } from '@babel/types';


const Homepage = props => {
    const dispatch = useDispatch()
    const [dataFilm, setDataFilm] = useState([{}])
    const [search, setSearch] = useState('');
    const [activeGenre, setActiveGenre] = useState(0);
    const [listGenre, setListGenre] = useState([]);
    const [namaGenre, setNamaGenre] = useState("");


    const getDataFilm = async () => {
        try {
            const listFilm = await axios.get(`https://movieapp-glints.herokuapp.com/api/v1/movies/page/1`);
            setDataFilm(listFilm.data.data.movies)
        } catch (error) {
            console.log(error)
        }
    };

    const getListGenre = async () => {
        try {
            const genres = await axios.get("https://movieapp-glints.herokuapp.com/api/v1/categories/");
            setListGenre(genres.data.data)
        } catch (error) {
            console.log(error)
        }
    };

    const updateSearch = search => {
        setSearch(search);
        const searchFilm = dataFilm.filter(film => film.title.toLowerCase().includes(search.toLowerCase()));
        setDataFilm(searchFilm);
    };

    const MoveToDetail = async (e) => {
        console.log(e)
        try {
            const res = await axios.get(`https://movieapp-glints.herokuapp.com/api/v1/movies/${e.id}`);
            dispatch(MovieDetail(res.data.data.movie));

            props.navigation.navigate('DetailMovie');
        } catch (error) {
            console.log(error, "errorID");
        }

    };

    const MoveToAllReviews = async (e) => {
        try {
            const res = await axios.get(`https://movieapp-glints.herokuapp.com/api/v1/reviews/movie/${e.id}/7`);
            dispatch(MovieDetail(res.data.data));
            props.navigation.navigate('All Reviews')
        } catch (error) {
            console.log(error, "errorAllReviews")
        }

    };

    useEffect(() => {
        getDataFilm();
        getListGenre();
    }, [])

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
                        <ScrollView horizontal style={styles.genres}>

                            {listGenre.map((e, i) => {
                                const getFilmPerGenre = async () => {
                                    try {
                                        const filmPerGenre = await axios.get(`https://movieapp-glints.herokuapp.com/api/v1/movies/${e.name}/page/1`);
                                        setDataFilm(filmPerGenre.data.data)
                                    } catch (error) {
                                        console.log(error)
                                    };
                                    setNamaGenre(`${e.name}`);
                                };

                                return (
                                    <>
                                        <TouchableOpacity
                                            onPress={() => { setActiveGenre(i); getFilmPerGenre() }}
                                            style={
                                                [{
                                                    backgroundColor: activeGenre === i ? '#FFC200' : 'white'
                                                },
                                                styles.button]}
                                            key={i}>
                                            <Image source={activeGenre === i ? require('../../Assets/Image/Icon.png') : require('../../Assets/Image/Icon(1).png')} style={styles.icon} />
                                            <Text style={[{ color: activeGenre === i ? 'white' : 'black' }, styles.genresText]}>{e.name}</Text>
                                        </TouchableOpacity>

                                    </>
                                );
                            })}

                        </ScrollView>
                        <Text style={styles.bestGenre}>Hot {namaGenre} Movies</Text>
                    </View>
                    {dataFilm.map((e, i) => {
                        return (
                            <TouchableOpacity onPress={() => MoveToDetail(e)}>
                                <Card containerStyle={styles.card}>
                                    <Thumbnail
                                        url={`${e.trailer}`}
                                        imageWidth={ms(308)}
                                        onPress={() => {
                                            try {
                                                Linking.openURL(`${e.trailer}`)
                                            }
                                            catch (error) {
                                                console.log(error)
                                            }
                                        }}
                                        iconStyle={{ tintColor: "#F2D25B" }}
                                    />
                                    <Text style={styles.summary}>{e.synopsis}</Text>
                                    <Card.Divider />
                                    <View style={styles.reviewShare}>
                                        <Button
                                            type='clear'
                                            icon={
                                                <Icon name='message-circle' type='feather' />
                                            }
                                            title='123'
                                            titleStyle={{ color: 'black' }}
                                            onPress={() => MoveToAllReviews(e)}
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
                        )
                    })
                    }
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
        paddingVertical: ms(20),
    },

    button: {
        flexDirection: 'row',
        paddingHorizontal: ms(6),
        paddingVertical: ms(13),
        borderRadius: ms(10),
        alignItems: 'center',
        marginHorizontal: ms(2)
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

