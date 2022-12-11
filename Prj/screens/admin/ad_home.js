import React, {useState} from "react";
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, TextInput } from "react-native";
import Room from '../../components/admin/roomItem';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Input, NativeBaseProvider } from "native-base";

const Ad_Home = (props) => {
    console.log('romm: ', props)
    const [addRoomModal, setAddRoomModal] = useState(false);
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const data = props.route.params.data;

    function renderItem(item){
        return <Room {...item} {...props} />
    }

    function showAddRoomModal() {
        const min = 1000;
        const max = 9999;
        const id =  parseInt(min + Math.random() * (max - min));
        return(
            <NativeBaseProvider>
                <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ backgroundColor: 'white', height: '97%', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
                        <View style={{ flexDirection: 'row', justifyContent:'space-between', margin: 10 }}>
                            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>Thêm phòng</Text>
                            <TouchableOpacity 
                                style={{ alignSelf: 'flex-end', marginRight: 5 }} 
                                onPress={() => setAddRoomModal(false)}>
                                <Ionicons name='close' color='black' size={26} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 20, marginTop: 20 }}>
                            <Text style={{ color: 'black', fontSize: 18, marginBottom: 5 }}>ID
                                <Text style={{ color: 'red' }}>*</Text>
                            </Text>
                            <View style= {{ marginRight: 20, borderRadius: 10 }}>
                                <Input
                                    defaultValue={'R' + id.toString()}
                                    isDisabled={true} />
                            </View>
                            <Text style={{ color: 'black', fontSize: 18, marginBottom: 5, marginTop: 20 }}>Loại phòng:
                                <Text style={{ color: 'red' }}>*</Text>
                            </Text>
                            <View style= {{ marginRight: 20, borderRadius: 10 }}>
                                <Input
                                    placeholder="Please enter type of room"
                                    onChangeText={text => {
                                        setType(text);
                                    }}
                                    isDisabled={false} />
                            </View>
                            <Text style={{ color: 'black', fontSize: 18, marginBottom: 5, marginTop: 20 }}>Tên phòng:
                                <Text style={{ color: 'red' }}>*</Text>
                            </Text>
                            <View style= {{ marginRight: 20, borderRadius: 10 }}>
                                <Input
                                    placeholder="Please enter name of room"
                                    onChangeText={text => {
                                        setName(text);
                                    }}
                                    isDisabled={false} />
                            </View>
                        </View>
                        <TouchableOpacity style={{marginTop: 30}}>
                            <View style={{ backgroundColor: '#3366CC', width: '40%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 26, color: 'white', paddingTop: 5, paddingBottom: 5 }}>Save</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </NativeBaseProvider>
        )
    }

    return (
        <View style={{ margin: 10, marginBottom: 0, marginTop: 20 }}>
            <View style= {{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                <TouchableOpacity 
                    onPress={() => props.navigation.goBack()}
                    style={{ alignItems: 'flex-start', justifyContent: 'center'}}>
                    <Ionicons name='arrow-back' color='black' size={26} />
                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', color: 'black', flex: 6 }}>Smart home ID: {props.route.params.id}</Text>
                <TouchableOpacity style={{ alignItems: 'flex-end', justifyContent: 'center' }} onPress={() => setAddRoomModal(!addRoomModal)}>
                    <Icon name='plus-circle' color='black' size={26}/>
                </TouchableOpacity>
            </View>
            <View style= {{ marginTop: 20 }}>
                <FlatList
                    data={data}
                    renderItem = {(item) => renderItem(item)} 
                    keyExtractor = {item => item.ID}/>
            </View>

            {/* modal add room */}
            <Modal 
                visible={addRoomModal} 
                animationType='slide'
                transparent={true}>
                {showAddRoomModal()}
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

export default Ad_Home;