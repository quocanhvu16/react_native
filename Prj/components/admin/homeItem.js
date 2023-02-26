import React, {useState} from "react";
import { View, Text, TouchableOpacity, Modal, KeyboardAvoidingView } from "react-native";
import { Card, NativeBaseProvider, Input, Select } from "native-base";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Constants from 'Prj/constants'

const Home = (props) => {
    const [editModal, setEditModal] = useState(false);
    const [address, setAddress] = useState(props.item.address);
    const [desc, setDesc] = useState(props.item.desc);
    const [statusUse, setStatusUse] = useState(props.item.statusUse);
    const home_id = props.item._id;
    const { statusUse: checkUse, statusRegister: checkRegister } = props.item;

    const tmp = (desc, address, statusUse) => (fetch(`https://dev-smarthome.onrender.com/api/home/${home_id}`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJlNjMyYzczYmRjYzJlMDg2ZGJiMCIsImlhdCI6MTY3MTg0ODM2Nn0.QLZsHyTQwhx5KHyXiUDUdcHfDaKGm_il8CcfJY1FKSk'
            },
            body: JSON.stringify({ desc, address, statusUse }) 
        }
        ).then(res => res.json())
    )

    const editHome = async ( desc, address, statusUse) => {
        tmp(desc, address, statusUse, )
        .then(res => console.log("thong tin nha da sua: ", res))
        .catch(err => console.log(err))        
        alert('Sửa thông tin nhà thành công');
        props.setTmp(!props.tmp)
        setEditModal(false);
    }

    function showEditModal() {
        return(
            <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <View style={{ backgroundColor: 'white', height: '97%', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
                    <View style={{ flexDirection: 'row', justifyContent:'space-between', margin: 10 }}>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>Chỉnh sửa thông tin smart home</Text>
                        <TouchableOpacity 
                            style={{ alignSelf: 'flex-end', paddingHorizontal: 5, paddingVertical: 5 }} 
                            onPress={() => setEditModal(false)}>
                            <Ionicons name='close' color='black' size={26} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: 20, marginTop: 20 }}>
                        <Text style={{ color: 'black', fontSize: 18, marginBottom: 5 }}>ID
                            <Text style={{ color: 'red' }}>*</Text>
                        </Text>
                        <View style= {{ marginRight: 20, borderRadius: 10 }}>
                            <Input
                                defaultValue={props.item.code}
                                isDisabled={true} />
                        </View>
                        <Text style={{ color: 'black', fontSize: 18, marginBottom: 5, marginTop: 20 }}>Địa chỉ
                            <Text style={{ color: 'red' }}>*</Text>
                        </Text>
                        <View style= {{ marginRight: 20, borderRadius: 10 }}>
                            <Input
                                placeholder="Please enter adrress"
                                defaultValue={address}
                                onChangeText={text => {
                                    setAddress(text);
                                }}
                                isDisabled={false} />
                        </View>
                        <Text style={{ color: 'black', fontSize: 18, marginBottom: 5, marginTop: 20 }}>Mô tả
                            <Text style={{ color: 'red' }}>*</Text>
                        </Text>
                        <View style= {{ marginRight: 20, borderRadius: 10 }}>
                            <Input
                                placeholder="Please enter description"
                                defaultValue={desc}
                                onChangeText={text => {
                                    setDesc(text);
                                }}
                                isDisabled={false} />
                        </View>
                        <Text style={{ color: 'black', fontSize: 18, marginBottom: 5, marginTop: 20 }}>Trạng thái sử dụng
                            <Text style={{ color: 'red' }}>*</Text>
                        </Text>
                        <View style= {{ marginRight: 20, borderRadius: 10 }}>
                            <Select
                                placeholder='Choose type of device'
                                selectedValue={statusUse}
                                style={{ color: statusUse ? 'green' : 'red' }}
                                width={150}
                                onValueChange={text => setStatusUse(text)}>
                                <Select.Item label='true' value={true}/>
                                <Select.Item label='false' value={false}/>
                            </Select>
                        </View>
                    </View>
                    <TouchableOpacity style={{marginTop: 30}} 
                        onPress={() => editHome( desc, address, statusUse)}
                        >
                        <View style={{ backgroundColor: Constants.theme_color, width: '40%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 26, color: 'white', paddingTop: 5, paddingBottom: 5 }}>Lưu</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return(
        <NativeBaseProvider>
            <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate('Ad_Home', {data: props.item})}>
                <Card
                style={{
                    marginBottom: 10,
                    marginTop: 5,
                    backgroundColor: 'white', 
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
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    
                    elevation: 3,}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 5, fontWeight: 'bold', color: 'black', fontSize: 16, marginBottom: 10 }}>ID: 
                            <Text style={{ fontSize: 16 }}> {props.item.code}</Text>    
                        </Text>
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => setEditModal(!editModal) }>
                            <AntDesign name='edit' size={26} color={Constants.theme_color} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ marginLeft: 5, fontWeight: 'bold', color: 'black' }}>Họ tên: 
                        <Text style={{ fontWeight: 'normal' }}> {props.item.name}</Text>    
                    </Text>
                    <Text style={{ marginLeft: 5, fontWeight: 'bold', color: 'black' }}>Địa chỉ: 
                        <Text style={{ fontWeight: 'normal' }}> {props.item.address}</Text>    
                    </Text>
                    <Text style={{ marginLeft: 5, fontWeight: 'bold', color: 'black' }}>Mô tả: 
                        <Text style={{ fontWeight: 'normal' }}> {props.item.desc}</Text>    
                    </Text>
                    <Text style={{ marginLeft: 5, fontWeight: 'bold', color: 'black' }}>Trạng thái đăng ký: 
                        <Text style={{ fontWeight: 'normal', color: checkRegister? 'green' : 'red' }}>{checkRegister ? ' Tài khoản đã được đăng ký' : ' Tài khoản chưa được đăng ký'}</Text>    
                    </Text>
                    <Text style={{ marginLeft: 5, fontWeight: 'bold', color: 'black' }}>Trạng thái sử dụng: 
                        <Text style={{ fontWeight: 'normal', color: checkUse ? 'green' : 'red' }}>{checkUse ? ' Tài khoản còn sử dùng được' : ' Tài khoản không sử dụng được'}</Text>    
                    </Text>
                </Card>
            </TouchableOpacity>
            <Modal 
                visible={editModal} 
                animationType='slide'
                transparent={true}>
                {showEditModal()}   
            </Modal>  
        </NativeBaseProvider>
    )
}

export default Home;