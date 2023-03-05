import React, {useState, useEffect} from "react";
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, ScrollView } from "react-native";
import Room from '../../components/admin/roomItem';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Input, NativeBaseProvider, Select } from "native-base";

const Ad_Home = (props) => {
    const [addRoomModal, setAddRoomModal] = useState(false);
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('Livingroom');
    const [data, setData] = useState([]);
    const [tmp, setTmp] = useState(false);
    const home = props.route.params.data;

    async function fetchRooms() {
        const res = await fetch(`https://dev-smarthome.onrender.com/api/home/${home._id}/rooms`, {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJlNjMyYzczYmRjYzJlMDg2ZGJiMCIsImlhdCI6MTY3MTg0ODM2Nn0.QLZsHyTQwhx5KHyXiUDUdcHfDaKGm_il8CcfJY1FKSk'
            }
        })
        const json = await res.json();
        console.log(json)
        setData(json);
    }

    useEffect(() => {
        fetchRooms();
        setDesc('Livingroom')
        setName('')
    },[tmp])

    const addRoom = async ( name, desc) => {
        if(name && desc) {
            const res = await fetch(`https://dev-smarthome.onrender.com/api/home/${home._id}/rooms`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJlNjMyYzczYmRjYzJlMDg2ZGJiMCIsImlhdCI6MTY3MTg0ODM2Nn0.QLZsHyTQwhx5KHyXiUDUdcHfDaKGm_il8CcfJY1FKSk'
    
                },
                body: JSON.stringify({ name, desc }) 
            }
            )
            const json = await res.json();
            console.log(json)
            alert('Thêm phòng thành công');
            setAddRoomModal(false);
            fetchRooms();
        }
        else {
            alert("Bạn chưa nhập đủ thông tin")
        }
    }

    function renderItem(item){
        return <Room item={item} {...props} tmp={tmp} setTmp={setTmp}/>
    }

    function showAddRoomModal() {
        
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
                            <Text style={{ color: 'black', fontSize: 18, marginBottom: 5, marginTop: 20 }}>Loại phòng
                                <Text style={{ color: 'red' }}>*</Text>
                            </Text>
                            <View style= {{ marginRight: 20, borderRadius: 10 }}>
                                <Select 
                                    placeholder='Choose type of room'
                                    // defaultValue={desc}
                                    defaultValue={'Livingroom'}
                                    // selectedValue={'Livingroom'}
                                    width={150}
                                    onValueChange={text => setDesc(text)}>
                                    <Select.Item label='Livingroom' value="Livingroom"/>
                                    <Select.Item label='Bathroom' value="Bathroom"/>
                                    <Select.Item label='Kitchen' value="Kitchen"/>
                                    <Select.Item label='Bedroom' value="Bedroom"/>
                                </Select>
                            </View>
                            <Text style={{ color: 'black', fontSize: 18, marginBottom: 5, marginTop: 20 }}>Tên phòng
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
                        <TouchableOpacity style={{marginTop: 30}} onPress={() => addRoom(name, desc)}>
                            <View style={{ backgroundColor: '#3366CC', width: '40%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 26, color: 'white', paddingTop: 5, paddingBottom: 5 }}>Lưu</Text>
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
                <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', color: 'black', flex: 6 }}>Smart home: {home.code}</Text>
                <TouchableOpacity style={{ alignItems: 'flex-end', justifyContent: 'center' }} onPress={() => setAddRoomModal(!addRoomModal)}>
                    <Icon name='plus-circle' color='black' size={26}/>
                </TouchableOpacity>
            </View>
            <ScrollView style= {{ marginTop: 20, height: '93%' }}>
                {/* <FlatList
                    data={data}
                    renderItem = {(item) => renderItem(item)} 
                    keyExtractor = {item => item._id}/> */}
                {data.map(item =>(
                    renderItem(item)
                ))}
            </ScrollView>

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