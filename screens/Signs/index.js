import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={ styles.container }>
                <Text
                    style={ styles.link }
                    onPress={ () => navigate('Home', { name: 'Jane' }) }
                >
                    Go to back to Home page
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    link: {
        fontSize: 24,
        fontWeight: 'bold',
    }
});
