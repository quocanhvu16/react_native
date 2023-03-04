
import React, {useEffect, useState} from "react";
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, Dimensions, ScrollView } from "react-native";
import Home from '../../components/admin/homeItem';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Input, NativeBaseProvider } from "native-base";

let id =  (Math.random() + 1).toString(36).substring(6);
const height = Dimensions.get('window').height;

const Ad_Dasboard = (props) => {
    const [menuModal, setMenuModal] = useState(false);
    const [signOutModal, setSignOutModal] = useState(false);
    const [addHomeModal, setAddHomeModal] = useState(false);
    const [address, setAddress] = useState('');
    const [desc, setDesc] = useState('');
    const [data, setData] = useState([]);

    // const checkLogin = (token) => (
    //     fetch(`${Setting.url}check_login.php`,
    //     {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Accept: 'application/json'
    //         },
    //         body: JSON.stringify({ token })
    //     })
    //     .then(res => res.json())
    // );

    // const homeData = () => (
    //     fetch(Setting.url)
    //     .then(res => res.json())
    // );
    async function fetchHome() {
        const res = await fetch('https://dev-smarthome.onrender.com/api/home', {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJlNjMyYzczYmRjYzJlMDg2ZGJiMCIsImlhdCI6MTY3MTg0ODM2Nn0.QLZsHyTQwhx5KHyXiUDUdcHfDaKGm_il8CcfJY1FKSk'
            }
        })
        const json = await res.json();
        setData(json);
    }

    useEffect(() => {
        fetchHome();
        while(1){
            let check = true;
            data.map(item => {
                if(item.code == id) {
                    id = (Math.random() + 1).toString(36).substring(6);
                    check = false;
                }
            })
            if(check) break;
        }
    },[])

    function renderItem(item){
        return <Home {...item} {...props} />
    }

    const addHome = async ( desc, address, code) => {
        const res = await fetch('https://dev-smarthome.onrender.com/api/home',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJlNjMyYzczYmRjYzJlMDg2ZGJiMCIsImlhdCI6MTY3MTg0ODM2Nn0.QLZsHyTQwhx5KHyXiUDUdcHfDaKGm_il8CcfJY1FKSk'

            },
            body: JSON.stringify({ name: 'default name', desc, address, code })
        }
        )
        const json = await res.json();
        console.log(json)
        alert('Thêm nhà thành công');
        setAddHomeModal(false);
        fetchHome();
    }

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
                            <FontAwesome5 name='user-cog' size={60} color='#3366CC' />
                        </View>
                        <View>
                            <TouchableOpacity style={[styles.item, {backgroundColor: '#3366CC',}]}>
                                <AntDesign style={{ marginLeft: 40 }} name='dashboard' size={26} color='white'/>
                                <Text style={{ marginLeft: 20, color: 'white', fontSize: 18 }}>Dasboard</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ styles.item }>
                                <Ionicons style={{ marginLeft: 40 }} name='md-stats-chart-outline' size={26} color='black'/>
                                <Text style={{ marginLeft: 20, color: 'black', fontSize: 18 }}>Thống kê</Text>
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
                            <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 15, color: 'black' }}>Sign Out</Text>
                            <TouchableOpacity onPress={() => setSignOutModal(false)}>
                                <Ionicons name='close' color='black' size={26} style= {{ marginRight: 15 }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ textAlign: 'center', marginTop: 30, marginBottom: 30, fontSize: 20, color: 'black' }}>Are you sure want to sign out?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('SignIn')}
                                style= {{width: '40%', height: 50, borderWidth: 3, borderColor: '#3366CC', borderRadius: 10, alignItems: 'center', backgroundColor: '#3366CC', justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setSignOutModal(!signOutModal)}
                                style= {{width: '40%', height: 50, borderWidth: 3, borderColor: '#3366CC', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#3366CC', fontSize: 16, fontWeight: 'bold' }}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
            </TouchableOpacity>
        )
    }

    function showAddHomeModal() {
        return(
            <NativeBaseProvider>
                <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ backgroundColor: 'white', height: '97%', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
                        <View style={{ flexDirection: 'row', justifyContent:'space-between', margin: 10 }}>
                            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>Thêm smart home</Text>
                            <TouchableOpacity
                                style={{ alignSelf: 'flex-end', marginRight: 5 }}
                                onPress={() => setAddHomeModal(false)}>
                                <Ionicons name='close' color='black' size={26} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 20, marginTop: 20 }}>
                            <Text style={{ color: 'black', fontSize: 18, marginBottom: 5 }}>ID
                                <Text style={{ color: 'red' }}>*</Text>
                            </Text>
                            <View style= {{ marginRight: 20, borderRadius: 10 }}>
                                <Input
                                    defaultValue={id.toString()}
                                    isDisabled={true} />
                            </View>
                            <Text style={{ color: 'black', fontSize: 18, marginBottom: 5, marginTop: 20 }}>Địa chỉ
                                <Text style={{ color: 'red' }}>*</Text>
                            </Text>
                            <View style= {{ marginRight: 20, borderRadius: 10 }}>
                                <Input
                                    placeholder="Please enter adrress"
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
                                    onChangeText={text => {
                                        setDesc(text);
                                    }}
                                    isDisabled={false} />
                            </View>
                            <Text style={{ color: 'black', fontSize: 18, marginBottom: 5, marginTop: 20 }}>Trạng thái đăng ký
                                <Text style={{ color: 'red' }}>*</Text>
                            </Text>
                            <View style= {{ marginRight: 20, borderRadius: 10 }}>
                                <Input
                                    style={{ color: 'red' }}
                                    defaultValue='false'
                                    isDisabled={true} />
                            </View>
                            <Text style={{ color: 'black', fontSize: 18, marginBottom: 5, marginTop: 20 }}>Trạng thái sử dụng
                                <Text style={{ color: 'red' }}>*</Text>
                            </Text>
                            <View style= {{ marginRight: 20, borderRadius: 10 }}>
                                <Input
                                    style={{ color: 'red' }}
                                    defaultValue='false'
                                    isDisabled={true} />
                            </View>
                        </View>
                        <TouchableOpacity style={{marginTop: 30}} onPress={() => addHome( desc, address, id)}>
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
        <View style={{ marginHorizontal: 10, marginTop: 20 }}>
            <View style= {{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => setMenuModal(!menuModal)}
                    style={{ alignItems: 'flex-start', justifyContent: 'center'}}>
                    <Icon name='menu' color='black' size={26} />
                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', color: 'black', flex: 6 }}>List of smart home</Text>
                <TouchableOpacity style={{ alignItems: 'flex-end', justifyContent: 'center' }} onPress={() => setAddHomeModal(!addHomeModal)}>
                    <Icon name='plus-circle' color='black' size={26}/>
                </TouchableOpacity>
            </View>
            <View style= {{ marginTop: 20, height: '93%' }}>
                <FlatList
                    data={data}
                    renderItem = {(item) => renderItem(item)}
                    keyExtractor = {item => item.code}/>
            </View>

            {/* modal menu */}
            <Modal
                visible={menuModal}
                animationType="fade"
                transparent={true}>
                {showMenuLeft()}
            </Modal>

            {/* modal sign out */}
            <Modal
                visible={signOutModal}
                animationType='slide'
                transparent={true}>
                {showSignOutModal()}
            </Modal>

            {/* modal add home */}
            <Modal
                visible={addHomeModal}
                animationType='slide'
                transparent={true}>
                {showAddHomeModal()}
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

export default Ad_Dasboard;

// import React, {useEffect, useState} from "react";
// import { View, Text, FlatList, TouchableOpacity, Modal, Dimensions, ScrollView } from "react-native";
// import Home from '../../components/admin/homeItem';
// import Icon from 'react-native-vector-icons/Feather';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Input, NativeBaseProvider } from "native-base";
// import MenuLeft from "../../components/admin/menuLeft";
//
// let id =  (Math.random() + 1).toString(36).substring(6);
// const height = Dimensions.get('window').height;
//
// const Ad_Dasboard = (props) => {
//     const [addHomeModal, setAddHomeModal] = useState(false);
//     const [address, setAddress] = useState('');
//     const [desc, setDesc] = useState('');
//     const [data, setData] = useState([]);
//     const [tmp, setTmp] = useState(false);
//
//     async function fetchHome() {
//         const res = await fetch('https://dev-smarthome.onrender.com/api/home', {
//             method: 'GET',
//             headers: {
//               'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJlNjMyYzczYmRjYzJlMDg2ZGJiMCIsImlhdCI6MTY3MTg0ODM2Nn0.QLZsHyTQwhx5KHyXiUDUdcHfDaKGm_il8CcfJY1FKSk'
//             }
//         })
//         const json = await res.json();
//         console.log(json)
//         setData(json);
//     }
//
//     useEffect(() => {
//         fetchHome();
//         while(1){
//             let check = true;
//             data.map(item => {
//                 if(item.code == id) {
//                     id = (Math.random() + 1).toString(36).substring(6);
//                     check = false;
//                 }
//             })
//             if(check) break;
//         }
//     },[tmp])
//
//     function renderItem(item){
//         return <Home item={item} {...props} tmp={tmp} setTmp={setTmp}/>
//     }
//
//     const addHome = async ( desc, address, code) => {
//         const res = await fetch('https://dev-smarthome.onrender.com/api/home',
//         {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Accept: 'application/json',
//                 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJlNjMyYzczYmRjYzJlMDg2ZGJiMCIsImlhdCI6MTY3MTg0ODM2Nn0.QLZsHyTQwhx5KHyXiUDUdcHfDaKGm_il8CcfJY1FKSk'
//
//             },
//             body: JSON.stringify({ name: 'default name', desc, address, code })
//         }
//         )
//         const json = await res.json();
//         console.log(json)
//         alert('Thêm nhà thành công');
//         setAddHomeModal(false);
//         fetchHome();
//     }
//
//     function showAddHomeModal() {
//         return(
//             <NativeBaseProvider>
//                 <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
//                     <View style={{ backgroundColor: 'white', height: '97%', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
//                         <View style={{ flexDirection: 'row', justifyContent:'space-between', margin: 10 }}>
//                             <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>Thêm smart home</Text>
//                             <TouchableOpacity
//                                 style={{ alignSelf: 'flex-end', marginRight: 5 }}
//                                 onPress={() => setAddHomeModal(false)}>
//                                 <Ionicons name='close' color='black' size={26} />
//                             </TouchableOpacity>
//                         </View>
//                         <View style={{ marginLeft: 20, marginTop: 20 }}>
//                             <Text style={{ color: 'black', fontSize: 18, marginBottom: 5 }}>ID
//                                 <Text style={{ color: 'red' }}>*</Text>
//                             </Text>
//                             <View style= {{ marginRight: 20, borderRadius: 10 }}>
//                                 <Input
//                                     defaultValue={id.toString()}
//                                     isDisabled={true} />
//                             </View>
//                             <Text style={{ color: 'black', fontSize: 18, marginBottom: 5, marginTop: 20 }}>Địa chỉ
//                                 <Text style={{ color: 'red' }}>*</Text>
//                             </Text>
//                             <View style= {{ marginRight: 20, borderRadius: 10 }}>
//                                 <Input
//                                     placeholder="Please enter adrress"
//                                     onChangeText={text => {
//                                         setAddress(text);
//                                     }}
//                                     isDisabled={false} />
//                             </View>
//                             <Text style={{ color: 'black', fontSize: 18, marginBottom: 5, marginTop: 20 }}>Mô tả
//                                 <Text style={{ color: 'red' }}>*</Text>
//                             </Text>
//                             <View style= {{ marginRight: 20, borderRadius: 10 }}>
//                                 <Input
//                                     placeholder="Please enter description"
//                                     onChangeText={text => {
//                                         setDesc(text);
//                                     }}
//                                     isDisabled={false} />
//                             </View>
//                             <Text style={{ color: 'black', fontSize: 18, marginBottom: 5, marginTop: 20 }}>Trạng thái đăng ký
//                                 <Text style={{ color: 'red' }}>*</Text>
//                             </Text>
//                             <View style= {{ marginRight: 20, borderRadius: 10 }}>
//                                 <Input
//                                     style={{ color: 'red' }}
//                                     defaultValue='false'
//                                     isDisabled={true} />
//                             </View>
//                             <Text style={{ color: 'black', fontSize: 18, marginBottom: 5, marginTop: 20 }}>Trạng thái sử dụng
//                                 <Text style={{ color: 'red' }}>*</Text>
//                             </Text>
//                             <View style= {{ marginRight: 20, borderRadius: 10 }}>
//                                 <Input
//                                     style={{ color: 'red' }}
//                                     defaultValue='false'
//                                     isDisabled={true} />
//                             </View>
//                         </View>
//                         <TouchableOpacity style={{marginTop: 30}} onPress={() => addHome( desc, address, id)}>
//                             <View style={{ backgroundColor: '#3366CC', width: '40%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
//                                 <Text style={{ fontWeight: 'bold', fontSize: 26, color: 'white', paddingTop: 5, paddingBottom: 5 }}>Lưu</Text>
//                             </View>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </NativeBaseProvider>
//         )
//     }
//
//     return (
//         <View style={{ marginHorizontal: 10, marginTop: 20 }}>
//             <View style= {{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
//                 <MenuLeft navigation={props.navigation}/>
//                 <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', color: 'black', flex: 6 }}>List of smart home</Text>
//                 <TouchableOpacity style={{ alignItems: 'flex-end', justifyContent: 'center' }} onPress={() => setAddHomeModal(!addHomeModal)}>
//                     <Icon name='plus-circle' color='black' size={26}/>
//                 </TouchableOpacity>
//             </View>
//             <ScrollView style= {{ marginTop: 20, height: '93%' }}>
//                 {data.map(item => (
//                     renderItem(item)
//                 ))}
//             </ScrollView>
//
//             {/* modal add home */}
//             <Modal
//                 visible={addHomeModal}
//                 animationType='slide'
//                 transparent={true}>
//                 {showAddHomeModal()}
//             </Modal>
//         </View>
//     )
// }
//
// export default Ad_Dasboard;
