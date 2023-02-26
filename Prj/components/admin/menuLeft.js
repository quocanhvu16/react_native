import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';
import Constants from 'Prj/constants'

const MenuLeft = (props) => {
    const [menuModal, setMenuModal] = useState(false);
    const [isDashboard, setIsDashboard] = useState(true);
    const [signOutModal, setSignOutModal] = useState(false);

    function showMenuLeft(){
        return(
            <TouchableOpacity
                activeOpacity={1}
                style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' }} 
                onPress={() => setMenuModal(false)}>
                    <TouchableOpacity 
                        style={{ height: '100%', width: '70%', borderTopRightRadius: 15, borderBottomRightRadius: 15, backgroundColor: 'white' }}
                        activeOpacity={1}>
                        <View style={{ alignItems: 'center', marginTop: 40, marginBottom: 50 }}>
                            <FontAwesome5 name='user-cog' size={60} color={Constants.theme_color} />
                        </View>
                        <View>
                            <TouchableOpacity 
                                disabled={isDashboard ? true : false }
                                onPress={() =>{
                                    setIsDashboard(true)
                                    props.navigation.navigate('Ad_Dasboard')
                                }}
                                style={[styles.item, {backgroundColor: isDashboard ? Constants.theme_color : 'white'}]}>
                                <AntDesign style={{ marginLeft: 40 }} name='dashboard' size={26} color={ isDashboard ? 'white' : 'black'}/>
                                <Text style={{ marginLeft: 20, color: isDashboard ? 'white' : 'black', fontSize: 18 }}>Dasboard</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                disabled={isDashboard ? false : true }
                                onPress={() => {
                                    setIsDashboard(false)
                                    props.navigation.navigate('Statistic')
                                }}
                                style={ [styles.item, {backgroundColor: isDashboard ? 'white' : Constants.theme_color}]}>
                                <Ionicons style={{ marginLeft: 40 }} name='md-stats-chart-outline' size={26} color={ isDashboard ? 'black' : 'white'}/>
                                <Text style={{ marginLeft: 20, color: isDashboard ? 'black' : 'white', fontSize: 18 }}>Thống kê</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ styles.item } onPress={() => setSignOutModal(!signOutModal)}>
                                <Ionicons style={{ marginLeft: 40 }} name='log-out-outline' size={26} color='red'/>
                                <Text style={{ marginLeft: 20, color: 'black', fontSize: 18 }}>Đăng xuất</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>                        
            </TouchableOpacity>
        )
    }

    function showSignOutModal() {
        return(
            <TouchableOpacity
                activeOpacity={1}
                style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' }} 
                onPress={() => setSignOutModal(false)}>
                    <TouchableOpacity 
                        style={{ height: '30%', width: '100%', backgroundColor: 'white', borderRadius: 15 }}
                        activeOpacity={1}>
                        <View 
                            style={{
                                flexDirection: 'row', 
                                alignItems: 'center', 
                                justifyContent: 'space-between', 
                                paddingTop: 15, 
                                paddingBottom: 15,
                                borderBottomWidth: 0.5, 
                                borderBottomColor: 'gray' }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 15, color: 'black' }}>Đăng xuất</Text>
                            <TouchableOpacity 
                                sdfj
                                onPress={() => setSignOutModal(false)}>
                                <Ionicons name='close' color='black' size={26} style= {{ marginRight: 15 }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ textAlign: 'center', marginTop: 30, marginBottom: 30, fontSize: 20, color: 'black' }}>Bạn có muốn đăng xuất?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('SignIn')} 
                                style= {{width: '40%', height: 50, borderWidth: 3, borderColor: Constants.theme_color, borderRadius: 10, alignItems: 'center', backgroundColor: Constants.theme_color, justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Có</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => setSignOutModal(!signOutModal)}
                                style= {{width: '40%', height: 50, borderWidth: 3, borderColor: Constants.theme_color, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: Constants.theme_color, fontSize: 16, fontWeight: 'bold' }}>Không</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>                        
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <TouchableOpacity 
                onPress={() => setMenuModal(!menuModal)}
                style={{ alignItems: 'flex-start', justifyContent: 'center'}}>
                <Icon name='menu' color='black' size={26} />
            </TouchableOpacity>
            <Modal 
                visible={menuModal} 
                animationType="fade"
                transparent={true}>
                {showMenuLeft()}
            </Modal>
            <Modal 
                visible={signOutModal} 
                animationType='slide'
                transparent={true}>
                {showSignOutModal()}
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        marginBottom: 3,
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingBottom: 20, 
        paddingTop: 20, 
        borderRadius: 10, 
        borderWidth: 0.5,
        borderColor: '#C0C0C0',
        backgroundColor: 'white', 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})

export default MenuLeft