import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Linking } from 'react-native';
import { getPlatformOrientationLockAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';
import {navigationOptions} from 'react-navigation'

class GameList extends Component {
    static navigationOptions = {
        title: "welcome"
    }
    state = {  }
    render() {
        const {navigate} = this.props.navigation
        return (
        <View>
            <FlatList
                data={[
                    {key: '벼룩서커스'},
                    {key: '하나비'},
                    {key: '센추리'},
                    {key: '러브레터'},
                ]}
                renderItem={({item}) => <Text style={styles.item} 
                onPress={() => navigate('FleaCircus', {name: '벼룩서커스'})}>{item.key}</Text>}
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    item:{
        backgroundColor : "pink",
        color : "black",
        padding : 10,
        fontWeight: "bold",
        fontSize: 30,
    }
})

export default GameList;
AppRegistry.registerComponent('yjcompany', () => GameList);