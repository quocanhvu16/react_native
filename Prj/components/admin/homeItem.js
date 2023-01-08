import React, {useState} from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { Card, NativeBaseProvider } from "native-base";
import AntDesign from 'react-native-vector-icons/AntDesign'

const Home = (props) => {
    const [editModal, setEditModal] = useState(false);

    function showEditModal() {
        return(
            <TouchableOpacity
                activeOpacity={1}
                style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }} 
                onPress={() => setEditModal(false)}>
                    <TouchableOpacity 
                        style={{ height: '21%', width: '80%', backgroundColor: 'white', borderRadius: 15 }}
                        activeOpacity={1}>
                        <Text style={{ textAlign: 'center', marginTop: 20, marginBottom: 30, fontSize: 18, color: 'black' }}>Are you sure want to delete item?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                            <TouchableOpacity
                                // onPress={() => props.navigation.navigate('SignIn')} 
                                style= {{width: '40%', height: 50, borderWidth: 3, borderColor: 'red', borderRadius: 10, alignItems: 'center', backgroundColor: 'red', justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => setEditModal(!editModal)}
                                style= {{width: '40%', height: 50, borderWidth: 3, borderColor: 'red', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'red', fontSize: 16, fontWeight: 'bold' }}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>                        
            </TouchableOpacity>
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
                            <AntDesign name='edit' size={26} color='#3366CC' />
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
                        <Text style={{ fontWeight: 'normal', color: props.item.statusRegister? 'green' : 'red' }}> {props.item.statusRegister.toString()}</Text>    
                    </Text>
                    <Text style={{ marginLeft: 5, fontWeight: 'bold', color: 'black' }}>Trạng thái sử dụng: 
                        <Text style={{ fontWeight: 'normal', color: props.item.statusUse? 'green' : 'red' }}> {props.item.statusUse.toString()}</Text>    
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