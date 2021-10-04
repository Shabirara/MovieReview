import React, { useState } from "react";
import {
    Alert,
    Modal,
    Pressable,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from "react-native";
import { Button, Overlay, Card, Icon, Rating } from "react-native-elements";
import { ms } from "react-native-size-matters";
import { widthPercentageToDP } from "react-native-responsive-screen";
import posterfilm from "../../Assets/images/PosterFilm.jpg";
import posterfilm1 from "../../Assets/images/PosterFilm1.jpg";
import { color } from "react-native-elements/dist/helpers";

const YourReview = () => {
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <View style={styles.fullscreen}>
            <Card containerStyle={{ height: ms(320), borderRadius: ms(24) }}>
                <View style={{ flexDirection: "row" }}>
                    {/* poster image */}
                    <View>
                        <Image
                            resizeMode="contain"
                            style={styles.image}
                            source={posterfilm}
                        />
                    </View>
                    {/* end poster image */}

                    {/* title and review */}
                    <View style={styles.titleReview}>
                        <Text style={styles.title}>Joker (2019)</Text>
                        <Text>Reviewed February 24, 2021 </Text>
                        <View style={{ flexDirection: "row" }}>
                            <Icon
                                style={styles.ratingStar}
                                name="star"
                                color="#FDC600"
                            />
                            <Text style={styles.ratingNumber}>9/10</Text>
                        </View>
                        <View style={styles.allButton}>
                            <TouchableOpacity
                                onPress={toggleOverlay}
                                style={styles.buttonEdit}
                            >
                                <Icon size={ms(20)} name="edit" color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonEdit}>
                                <Icon
                                    size={ms(20)}
                                    name="delete"
                                    color="white"
                                />
                            </TouchableOpacity>
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
                                        ratingCount={10}
                                        startingValue={9}
                                        readOnly
                                    />
                                    <Text style={styles.yourRating}>
                                        Your rating: 9
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
                                    />
                                </View>
                            </Overlay>
                        </View>
                    </View>
                    {/* end of title and review */}
                </View>

                <View>
                    <Text style={styles.reaction}>Sugoiiiii</Text>
                    <Text style={styles.movieReview}>
                        This Movie should encourage each and every one of us to
                        become a better person, trear everyone with respect and
                        make each other feel like they belong in this world,
                        instead of making them feel isolated.{" "}
                    </Text>
                </View>
            </Card>
            <Card containerStyle={{ height: ms(320), borderRadius: ms(24) }}>
                <View style={{ flexDirection: "row" }}>
                    {/* poster image */}
                    <View>
                        <Image
                            resizeMode="contain"
                            style={styles.image}
                            source={posterfilm1}
                        />
                    </View>
                    {/* end poster image */}

                    {/* title and review */}
                    <View style={styles.titleReview}>
                        <Text style={styles.title}>Squid game (2021)</Text>
                        <Text>Reviewed September 25, 2021 </Text>
                        <View style={{ flexDirection: "row" }}>
                            <Icon
                                style={styles.ratingStar}
                                name="star"
                                color="#FDC600"
                            />
                            <Text style={styles.ratingNumber}>9/10</Text>
                        </View>
                        <View style={styles.allButton}>
                            <TouchableOpacity
                                onPress={toggleOverlay}
                                style={styles.buttonEdit}
                            >
                                <Icon size={ms(20)} name="edit" color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonEdit}>
                                <Icon
                                    size={ms(20)}
                                    name="delete"
                                    color="white"
                                />
                            </TouchableOpacity>
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
                                        ratingCount={10}
                                        startingValue={9}
                                        readOnly
                                        imageSize={40}
                                    />
                                    <Text style={styles.yourRating}>
                                        Your rating: 9
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
                                    />
                                </View>
                            </Overlay>
                        </View>
                    </View>
                    {/* end of title and review */}
                </View>

                <View>
                    <Text style={styles.reaction}>Daebaak !!!</Text>
                    <Text style={styles.movieReview}>
                        Squid Game is nearly impossible to stop watching. Most
                        episodes end in cliffhangers that leave you racing
                        toward the show's bloody conclusion.{" "}
                    </Text>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    fullscreen: {
        flex: ms(1),
        backgroundColor: "black"
    },

    image: {
        marginBottom: ms(20),
        height: ms(180),
        width: ms(120)
    },

    titleReview: {
        paddingLeft: ms(18),
        paddingTop: ms(8)
    },

    title: {
        fontSize: ms(18),
        fontWeight: "bold"
    },

    ratingStar: {
        paddingTop: ms(4),
        paddingBottom: ms(60),
        alignItems: "baseline",
        textAlign: "right"
    },

    ratingNumber: {
        paddingTop: ms(6),
        paddingBottom: ms(60),
        width: ms(40),
        textAlign: "right"
    },

    allButton: {
        flexDirection: "row",
        width: ms(80)
    },

    buttonEdit: {
        backgroundColor: "#FDC600",
        borderRadius: ms(100),
        height: ms(22),
        marginRight: ms(12)
    },

    reaction: {
        fontWeight: "bold",
        marginTop: ms(-14)
    },
    movieReview: {
        fontSize: ms(14)
    },

    editBackground: {
        backgroundColor: "#FFE199"
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

export default YourReview;
