import React from 'react';
import { Image, Text, View, Dimensions, TouchableOpacity } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Room extends React.Component {
    render() {
        return (
            <TouchableOpacity>
                <View style={{
                    width: width * 0.41,
                    height: width * 0.55,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    marginTop: 20,
                    marginBottom: 10,
                    marginLeft: width*0.03,
                    marginRight: width*0.03,
                }}>
                        <Image source={{ uri: this.props.image }} style={{ width: width * 0.41, height: width * 0.41, borderRadius: 10 }} resizeMode="cover" />
                        <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', marginTop: 10 }}>{this.props.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
