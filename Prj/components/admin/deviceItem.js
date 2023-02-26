import React, {useState} from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { Card, NativeBaseProvider, Select, Input } from "native-base";
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Constants from 'Prj/constants'

const Device = (props) => {
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [name, setName] = useState(props.item.name);
    const [desc, setDesc] = useState(props.item.desc);
    const type = (props.item.type == "den" ? "light" : "air");
    const device_id = (props.item._id);

    const deleteDevice = async () => {
        const res = await fetch(`https://dev-smarthome.onrender.com/api/${type}/${device_id}`,
        {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJlNjMyYzczYmRjYzJlMDg2ZGJiMCIsImlhdCI6MTY3MTg0ODM2Nn0.QLZsHyTQwhx5KHyXiUDUdcHfDaKGm_il8CcfJY1FKSk'
            },
        }
        )
        const text = await res.text();
        console.log('Xoa thiet bi: ', text)
        props.setTmp(!props.tmp)
        alert('Xóa thiết bị thành công');
        setDeleteModal(false);
    }

    const editDevice = async ( desc, name) => {
        const res = await fetch(`https://dev-smarthome.onrender.com/api/${type}/${device_id}`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJlNjMyYzczYmRjYzJlMDg2ZGJiMCIsImlhdCI6MTY3MTg0ODM2Nn0.QLZsHyTQwhx5KHyXiUDUdcHfDaKGm_il8CcfJY1FKSk'
            },
            body: JSON.stringify({ desc, name})
        }
        )
        const json = await res.json();
        console.log('Thong tin thiet bi da sua: ', json)
        props.setTmp(!props.tmp)
        // alert('Sửa thông tin phòng thành công');
        setEditModal(false);
    }

    function showEditDeviceModal() {
        return(
            <NativeBaseProvider>
                <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ backgroundColor: 'white', height: '97%', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
                        <View style={{ flexDirection: 'row', justifyContent:'space-between', margin: 10 }}>
                            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>Chỉnh sửa thông tin thiết bị</Text>
                            <TouchableOpacity 
                                style={{ alignSelf: 'flex-end', marginRight: 5 }} 
                                onPress={() => {
                                    setEditModal(false)
                                    }}>
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
                                    isDisabled={true}
                                    selectedValue={type == 'light' ? 'den' : type}
                                    width={150}
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
                                    defaultValue={props.item.name}
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
                                    defaultValue={props.item.desc}
                                    onChangeText={text => {
                                        setDesc(text);
                                    }}
                                    isDisabled={false} />
                            </View>
                        </View>
                        <TouchableOpacity 
                            onPress={() => editDevice(desc, name)}
                            style={{marginTop: 30}}>
                            <View style={{ backgroundColor: Constants.theme_color, width: '40%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 26, color: 'white', paddingTop: 5, paddingBottom: 5 }}>Lưu</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </NativeBaseProvider>
        )
    }

    function showDeleteModal() {
        return(
            <TouchableOpacity
                activeOpacity={1}
                style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }} 
                onPress={() => setDeleteModal(false)}>
                    <TouchableOpacity 
                        style={{ height: '21%', width: '80%', backgroundColor: 'white', borderRadius: 15 }}
                        activeOpacity={1}>
                        <Text style={{ textAlign: 'center', marginTop: 20, marginBottom: 30, fontSize: 18, color: 'black' }}>Bạn có muốn xóa thiết bị?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                            <TouchableOpacity
                                onPress={() => deleteDevice()} 
                                style= {{width: '40%', height: 50, borderWidth: 3, borderColor: 'red', borderRadius: 10, alignItems: 'center', backgroundColor: 'red', justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Có</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => setDeleteModal(!deleteModal)}
                                style= {{width: '40%', height: 50, borderWidth: 3, borderColor: 'red', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'red', fontSize: 16, fontWeight: 'bold' }}>Không</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>                        
            </TouchableOpacity>
        )
    }

    return(
        <NativeBaseProvider>
            <TouchableOpacity activeOpacity={0.7}>
                <Card
                style={{
                    marginBottom: 10,
                    marginTop: 5,
                    backgroundColor: 'white', 
                    marginHorizontal: 10,
                    paddingLeft: 5,
                    paddingRight: 5,
                    paddingBottom: 5,
                    paddingTop: 5,
                    borderRadius: 10,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,

                    elevation: 2,}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 5, fontWeight: 'bold', color: 'black', fontSize: 16, marginBottom: 10 }}>ID: 
                            <Text style={{ fontSize: 16 }}> {props.item._id}</Text>    
                        </Text>
                        <TouchableOpacity style={{ padding: 5 }} onPress={() => setEditModal(!editModal) }>
                            <AntDesign name='edit' size={26} color={Constants.theme_color} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ marginLeft: 5, fontWeight: 'bold', color: 'black' }}>Tên thiết bị: 
                        <Text style={{ fontWeight: 'normal' }}> {props.item.name}</Text>    
                    </Text>
                    <Text style={{ marginLeft: 5, fontWeight: 'bold', color: 'black' }}>Mô tả: 
                        <Text style={{ fontWeight: 'normal' }}> {props.item.desc}</Text>    
                    </Text>
                    <TouchableOpacity 
                        onPress={() => setDeleteModal(!deleteModal)}
                        style={{ alignItems: 'flex-end', padding: 5 }}>
                        <MaterialIcons name='delete' size={26} color='red' />
                    </TouchableOpacity>
                </Card>
            </TouchableOpacity>
            <Modal 
                visible={deleteModal} 
                animationType='slide'
                transparent={true}>
                {showDeleteModal()}
            </Modal>
            <Modal 
                visible={editModal} 
                animationType='slide'
                transparent={true}>
                {showEditDeviceModal()}
            </Modal>   
        </NativeBaseProvider>
    )
}

export default Device;