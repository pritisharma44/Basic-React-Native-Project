import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { darkGreen } from '../component/Constant';

const HomePage = () => {
    return (
        <ScrollView>
            <Text style={{ color: darkGreen, fontSize: 30, fontWeight: 'bold', marginTop: 10, marginLeft: 15 }}>Product List</Text>
            <View style={styles.card}>
                <Image
                    source={require("../assets/leaves.jpg")} // Replace with your image URL
                    style={styles.cardImage}
                />
                <View style={styles.cardText}>
                    <Text style={styles.cardTitle}>Card Title</Text>
                    <Text style={styles.cardContent}>This is the content of the card.</Text>
                    <Text style={styles.cardContent}>Rs. 500</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Image
                    source={require("../assets/leaves.jpg")} // Replace with your image URL
                    style={styles.cardImage}
                />
                <View style={styles.cardText}>
                    <Text style={styles.cardTitle}>Card Title</Text>
                    <Text style={styles.cardContent}>This is the content of the card.</Text>
                    <Text style={styles.cardContent}>Rs. 500</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Image
                    source={require("../assets/leaves.jpg")} // Replace with your image URL
                    style={styles.cardImage}
                />
                <View style={styles.cardText}>
                    <Text style={styles.cardTitle}>Card Title</Text>
                    <Text style={styles.cardContent}>This is the content of the card.</Text>
                    <Text style={styles.cardContent}>Rs. 500</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Image
                    source={require("../assets/leaves.jpg")} // Replace with your image URL
                    style={styles.cardImage}
                />
                <View style={styles.cardText}>
                    <Text style={styles.cardTitle}>Card Title</Text>
                    <Text style={styles.cardContent}>This is the content of the card.</Text>
                    <Text style={styles.cardContent}>Rs. 500</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Image
                    source={require("../assets/leaves.jpg")} // Replace with your image URL
                    style={styles.cardImage}
                />
                <View style={styles.cardText}>
                    <Text style={styles.cardTitle}>Card Title</Text>
                    <Text style={styles.cardContent}>This is the content of the card.</Text>
                    <Text style={styles.cardContent}>Rs. 500</Text>
                </View>
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row', // Arrange image and text side by side
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        margin: 10,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3, // For Android shadow
    },
    cardImage: {
        width: 100, // Adjust the width of the image as needed
        height: 100, // Adjust the height of the image as needed
        resizeMode: 'cover', // You can set the appropriate resizeMode
        marginRight: 10, // Add space between the image and text
    },
    cardText: {
        flex: 1, // Allow the text to take up the remaining space
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    cardContent: {
        fontSize: 16,
    },
});

export default HomePage;
