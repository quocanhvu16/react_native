import React, {useState, useEffect} from "react";
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Input, NativeBaseProvider, Card, Select } from "native-base";
import Device from "../../components/admin/deviceItem";


const Ad_Room = (props) => {
    const [addRoomModal, setAddRoomModal] = useState(false);
    const [type, setType] = useState('den');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [lights, setLights] = useState([]);
    const [airs, setAirs] = useState([]);

    const room = props.route.params.data;

    async function fetchLights() {
        const res = await fetch(`https://dev-smarthome.onrender.com/api/room/${room._id}/light`, {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJlNjMyYzczYmRjYzJlMDg2ZGJiMCIsImlhdCI6MTY3MTg0ODM2Nn0.QLZsHyTQwhx5KHyXiUDUdcHfDaKGm_il8CcfJY1FKSk'
            }
        })
        const json = await res.json();
        console.log(json)
        setLights(json);
    }

    async function fetchAirs() {
        const res = await fetch(`https://dev-smarthome.onrender.com/api/room/${room._id}/air`, {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJlNjMyYzczYmRjYzJlMDg2ZGJiMCIsImlhdCI6MTY3MTg0ODM2Nn0.QLZsHyTQwhx5KHyXiUDUdcHfDaKGm_il8CcfJY1FKSk'
            }
        })
        const json = await res.json();
        console.log(json)
        setAirs(json);
    }

    useEffect(() => {
        fetchLights();
        fetchAirs();
    },[])

    const addDevice = async ( type, name, desc) => {
        let url = ''
        if (type === 'den') url = `https://dev-smarthome.onrender.com/api/room/${room._id}/light`;
        else url = `https://dev-smarthome.onrender.com/api/room/${room._id}/air`;
        const res = await fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJlNjMyYzczYmRjYzJlMDg2ZGJiMCIsImlhdCI6MTY3MTg0ODM2Nn0.QLZsHyTQwhx5KHyXiUDUdcHfDaKGm_il8CcfJY1FKSk'

            },
            body: JSON.stringify({ type, name, desc }) 
        }
        )
        const json = await res.json();
        console.log(json)
        alert('Thêm thiết bị thành công');
        setAddRoomModal(false);
        if (type === 'den') fetchLights();
        else fetchAirs();
    }

    function renderItem(item){
        return <Device {...item} {...props} />
    }

    function showAddDeviceModal() {
        return(
            <NativeBaseProvider>
                <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ backgroundColor: 'white', height: '97%', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
                        <View style={{ flexDirection: 'row', justifyContent:'space-between', margin: 10 }}>
                            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>Thêm thiết bị</Text>
                            <TouchableOpacity 
                                style={{ alignSelf: 'flex-end', marginRight: 5 }} 
                                onPress={() => setAddRoomModal(false)}>
                                <Ionicons name='close' color='black' size={26} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 20, marginTop: 20 }}>
                            <Text style={{ color: 'black', fontSize: 18, marginBottom: 5, marginTop: 20 }}>Loại thiết bị
                                <Text style={{ color: 'red' }}>*</Text>
                            </Text>
                            <View style= {{ marginRight: 20, borderRadius: 10 }}>
                                <Select
                                    placeholder='Choose type of device'
                                    selectedValue={type}
                                    width={150}
                                    onValueChange={text => setType(text)}
                                    >
                                        <Select.Item label='den' value='den' />
                                        <Select.Item label='air' value='air' style={{ color: 'black' }}  />
                                    </Select>
                            </View>
                            <Text style={{ color: 'black', fontSize: 18, marginBottom: 5, marginTop: 20 }}>Tên thiết bị
                                <Text style={{ color: 'red' }}>*</Text>
                            </Text>
                            <View style= {{ marginRight: 20, borderRadius: 10 }}>
                                <Input
                                    placeholder="Please enter name of device"
                                    onChangeText={text => {
                                        setName(text);
                                    }}
                                    isDisabled={false} />
                            </View>
                            <Text style={{ color: 'black', fontSize: 18, marginBottom: 5, marginTop: 20 }}>Mô tả
                                <Text style={{ color: 'red' }}>*</Text>
                            </Text>
                            <View style= {{ marginRight: 20, borderRadius: 10 }}>
                                <Input
                                    placeholder="Please enter description"
                                    onChangeText={text => {
                                        setDesc(text);
                                    }}
                                    isDisabled={false} />
                            </View>
                        </View>
                        <TouchableOpacity style={{marginTop: 30}} onPress={() => addDevice(type, name, desc)}>
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
                <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', color: 'black', flex: 6 }}>Room: {room.name}</Text>
                <TouchableOpacity style={{ alignItems: 'flex-end', justifyContent: 'center' }} onPress={() => setAddRoomModal(!addRoomModal)}>
                    <Icon name='plus-circle' color='black' size={26}/>
                </TouchableOpacity>
            </View>
            <View style= {{ marginTop: 20, height: '93%' }}>
                {lights.length == 0 ? null : (
                    <NativeBaseProvider>
                        <Card style={{
                            height: '95%',
                            marginTop: 5,
                            backgroundColor: 'white', 
                            paddingLeft: 5,
                            paddingRight: 5,
                            paddingTop: 5,
                            borderRadius: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,
                            
                            elevation: 3,}}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, marginTop: 10, marginBottom: 10, marginLeft: 10 }}>Danh sách đèn:</Text>
                            <View style={{ backgroundColor: '#BBBBBB', width: '95%', alignSelf: 'center', height: 3, marginBottom: 10 }}></View>
                            <FlatList
                                data={lights}
                                renderItem = {(item) => renderItem(item)} 
                                keyExtractor = {item => item._id}/>
                        </Card>
                    </NativeBaseProvider>
                )}
                {airs.length == 0 ? null : (
                    <NativeBaseProvider>
                        <Card style={{
                            height: '95%',
                            marginBottom: 10,
                            backgroundColor: 'white', 
                            paddingLeft: 5,
                            paddingRight: 5,
                            paddingTop: 5,
                            borderRadius: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,
                            
                            elevation: 3,}}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, marginTop: 10, marginBottom: 10, marginLeft: 10 }}>Danh sách air:</Text>
                            <View style={{ backgroundColor: '#BBBBBB', width: '95%', alignSelf: 'center', height: 3, marginBottom: 10 }}></View>
                            <View style={{ backgroundColor: '' }}></View>
                            <FlatList
                                data={airs}
                                renderItem = {(item) => renderItem(item)} 
                                keyExtractor = {item => item._id}/>
                        </Card>
                    </NativeBaseProvider>
                )}
            </View>

            {/* modal add devide */}
            <Modal 
                visible={addRoomModal} 
                animationType='slide'
                transparent={true}>
                {showAddDeviceModal()}
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

export default Ad_Room;