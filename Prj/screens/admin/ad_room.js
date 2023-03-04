import React, {useState, useEffect} from "react";
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, Dimensions, ImageBackground, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Input, NativeBaseProvider, Card, Select } from "native-base";
import Device from "../../components/admin/deviceItem";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const {width} = Dimensions.get('window');

const Ad_Room = (props) => {
    const [addRoomModal, setAddRoomModal] = useState(false);
    const [type, setType] = useState('den');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [lights, setLights] = useState([]);
    const [airs, setAirs] = useState([]);
    const [tmp, setTmp] = useState(false);
    const [typePage, setTypePage] = useState('light')
    const room = props.route.params.data;
    console.log('name: ', name)
    console.log('desc: ', desc)

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
    },[tmp])

    const addDevice = async ( type, name, desc) => {
        if(type, name, desc) {
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
            if (type === 'den') {
                fetchLights();
                setTypePage('light')
            }
            else if (type== 'air') {
                fetchAirs();
                setTypePage('air')
            }
            setAddRoomModal(false);
        }
        else {
            alert('Bạn chưa nhập đủ thông tin')
        }
    }

    function renderItem(item){
        return <Device item={item} {...props} tmp={tmp} setTmp={setTmp}/>
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
                                <Text style={{ fontWeight: 'bold', fontSize: 26, color: 'white', paddingTop: 5, paddingBottom: 5 }}>Lưu</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </NativeBaseProvider>
        )
    }


    function listLight(){
        return(
            <NativeBaseProvider>
                <Card style={{
                    height: '97%',
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
                    <ScrollView>
                        {lights.map(item =>(
                            renderItem(item)
                        ))}
                    </ScrollView>
                </Card>
            </NativeBaseProvider>
        )
    }

    function listAir(){
        return(
            <NativeBaseProvider>
                <Card style={{
                    height: '97%',
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
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, marginTop: 10, marginBottom: 10, marginLeft: 10 }}>Danh sách air:</Text>
                    <View style={{ backgroundColor: '#BBBBBB', width: '95%', alignSelf: 'center', height: 3, marginBottom: 10 }}></View>
                    <ScrollView>
                        {airs.map(item =>(
                            renderItem(item)
                        ))}
                    </ScrollView>
                </Card>
            </NativeBaseProvider>
        )
    }

    function renderList(){
        if(typePage == 'light'){
            if(lights.length == 0) return (
                <View style={{ height: '90%', alignItems: 'center', justifyContent: 'center',  }}>
                    <ImageBackground source={require('../../image/no_result.jpg')} style={{ width: 300, height: 300}}>
                        <Text style={{ color: 'gray', textAlign: 'center', fontSize: 24, fontWeight: '900' }}>Không có đèn</Text>
                    </ImageBackground>
                </View>
            )
            else return listLight()
        }
        else if(typePage == 'air'){
            if(airs.length == 0) return (
                <View style={{ height: '90%', alignItems: 'center', justifyContent: 'center',  }}>
                    <ImageBackground source={require('../../image/no_result.jpg')} style={{ width: 300, height: 300}}>
                        <Text style={{ color: 'gray', textAlign: 'center', fontSize: 24, fontWeight: '900' }}>Không có air</Text>
                    </ImageBackground>
                </View>
            )
            else return listAir()
        }
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
            <View style= {{ marginTop: 20, height: '93%', justifyContent: 'space-between' }}>
                {renderList()}
                <View style={{width: width, flexDirection: 'row', height: 50, backgroundColor: 'white'}}>
                    <TouchableOpacity 
                        onPress={() => setTypePage('light')}
                        disabled={typePage == 'light' ? true : false}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: typePage == 'light' ? 10 : 0, backgroundColor: typePage == 'light' ? 'blue' : 'white' }}>
                        <MaterialCommunityIcons name="lightbulb-variant" color={typePage == 'light' ? 'white' : "blue"} size={28} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => setTypePage('air')}
                        disabled={typePage == 'air' ? true : false}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: typePage == 'air' ? 10 : 0, backgroundColor: typePage == 'air' ? 'blue' : 'white' }}>
                        <Entypo name="air" color={typePage == 'air' ? 'white' : "blue"} size={28} />
                    </TouchableOpacity>
                </View>
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