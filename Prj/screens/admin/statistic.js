import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native' 
import MenuLeft from '../../components/admin/menuLeft'

export default function Statistic(props){
    return (
        <View style={{ marginHorizontal: 10, marginTop: 20 }}>
            <View style= {{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                <MenuLeft navigation={props.navigation}/>
                <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', color: 'black', flex: 6 }}>Thống kê</Text>
                <View></View>
            </View>        
        </View>
    )
}