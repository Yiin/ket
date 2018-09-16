import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    renderLink(sceen, text) {
        return (
            <Text
                style={ styles.link }
                onPress={ () => navigate(screen) }
            >
                { text }
            </Text>
        );
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={ styles.container }>
                { this.renderLink('Signs', 'Kelio ženklai') }
                { this.renderLink('Signs', 'Taisyklės') }
                { this.renderLink('Signs', 'Situacijos') }

                <Text style={ styles.settingsLink }>
                    Nustatymai
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
        justifyContent: 'flex-end',
    },
    link: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
    },
    settingsLink: {
        fontSize: 20,
        marginTop: 100,
        marginBottom: 50,
    },
});
