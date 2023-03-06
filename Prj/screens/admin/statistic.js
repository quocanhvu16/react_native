import React, {useState, useEffect, useMemo} from 'react'
import { View, Text, ScrollView, Image, Dimensions } from 'react-native' 
import MenuLeft from '../../components/admin/menuLeft'
import { PieChart } from 'react-native-chart-kit'
import Svg, {Path} from 'react-native-svg';

const {height, width} = Dimensions.get('window')
export default function Statistic(props){

    const [home, setHome] = useState([])  
    const [rooms, setRooms] = useState([])  
    const [lights, setLights] = useState([])  
    const [airs, setAirs] = useState([])
    const [statusUseNumber, setStatusUseNumber] = useState(0)
    const [statusRegisterNumber, setStatusRegisterNumber] = useState(0)
    const [livingRoomNumber, setLivingRoomNumber] = useState(0)
    const [bathRoomNumber, setBathRoomNumber] = useState(0)
    const [kitchenNumber, setKitchenNumber] = useState(0)
    const [bedRoomNumber, setBedRoomNumber] = useState(0)

    const chartConfig = {
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    };

    const statusUseHomeChart = [
        { name: 'Đã sử dụng', population: parseInt(statusUseNumber), color: '#999999', legendFontColor: 'black', legendFontSize: 15 },
        { name: 'Chưa sử dụng', population: parseInt(parseInt(home.length)-parseInt(statusUseNumber)), color: '#CCCCCC', legendFontColor: 'black', legendFontSize: 15 },
    ];

    const statusRegisterHomeChart = [
        { name: 'Đã đăng ký', population: parseInt(statusRegisterNumber), color: '#999999', legendFontColor: 'black', legendFontSize: 15 },
        { name: 'Chưa đăng ký', population: parseInt(parseInt(home.length)-parseInt(statusRegisterNumber)), color: '#CCCCCC', legendFontColor: 'black', legendFontSize: 15 },
    ];

    // const statusUseHomeChart = [
    //     {
    //         name: 'Đang sử dụng được',
    //         // polulation: parseInt(statusUseNumber),
    //         polulation: 20,
    //         color: '#297AB1' ,
    //         legendFontColor: "#7F7F7F",
    //         legendFontSize: 15  
    //     },
    //     {
    //         name: "Toronto",
    //         // polulation: parseInt(parseInt(home.length)-parseInt(statusUseNumber)),
    //         polulation: 40,
    //         color: 'blue',
    //         legendFontColor: "#7F7F7F",
    //         legendFontSize: 15
    //     }
    // ];

    const RoomChart = [
        { name: 'Phòng khách', population: parseInt(livingRoomNumber), color: '#AAAAAA', legendFontColor: 'black', legendFontSize: 15 },
        { name: 'Phòng tắm', population: parseInt(bathRoomNumber), color: '#FFFF66', legendFontColor: 'black', legendFontSize: 15 },
        { name: 'Nhà bếp', population: parseInt(kitchenNumber), color: '#FFCC66', legendFontColor: 'black', legendFontSize: 15 },
        { name: 'Phòng ngủ', population: parseInt(bedRoomNumber), color: '#CC00FF', legendFontColor: 'black', legendFontSize: 15 },
    ];

    const DeviceChart = [
        { name: 'Đèn', population: parseInt(lights.length), color: '#999999', legendFontColor: 'black', legendFontSize: 15 },
        { name: 'Air', population: parseInt(airs.length), color: '#CCCCCC', legendFontColor: 'black', legendFontSize: 15 },
    ];

    async function fetchHome() {
        const res = await fetch('https://dev-smarthome.onrender.com/api/home', {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJlNjMyYzczYmRjYzJlMDg2ZGJiMCIsImlhdCI6MTY3MTg0ODM2Nn0.QLZsHyTQwhx5KHyXiUDUdcHfDaKGm_il8CcfJY1FKSk'
            }
        })
        const json = await res.json();
        console.log(json)
        let useCount = 0;
        let registerCount = 0
        json.map((item, index) => {
            if(item){
                if (item.statusUse) useCount ++
                if(item.statusRegister) registerCount ++
            }
        })
        setHome(json);
        setStatusUseNumber(useCount);
        setStatusRegisterNumber(registerCount);
    }

    async function fetchRooms() {
        const res = await fetch('https://dev-smarthome.onrender.com/api/room', {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJlNjMyYzczYmRjYzJlMDg2ZGJiMCIsImlhdCI6MTY3MTg0ODM2Nn0.QLZsHyTQwhx5KHyXiUDUdcHfDaKGm_il8CcfJY1FKSk'
            }
        })
        const json = await res.json();
        console.log(json)
        let livCount = 0
        let bathCount = 0
        let kitCount = 0
        let bedCount = 0
        json.map((item, index) => {
            if(item){
                switch(item.desc){
                    case 'Livingroom': {
                        livCount++;
                        break;
                    }
                    case 'Bathroom': {
                        bathCount++
                        break;
                    }
                    case 'Bedroom': {
                        bedCount ++;
                        break;
                    }
                    case 'Kitchen': {
                        kitCount ++;
                        break;
                    }
                }
            }
        })

        setLivingRoomNumber(livCount)
        setBathRoomNumber(bathCount)
        setKitchenNumber(kitCount)
        setBedRoomNumber(bedCount)

        setRooms(json);
    }

    async function fetchLights() {
        const res = await fetch('https://dev-smarthome.onrender.com/api/light', {
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
        const res = await fetch('https://dev-smarthome.onrender.com/api/air', {
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
        fetchHome()
        fetchRooms()
        fetchAirs()
        fetchLights()
    }, [props])
    console.log('home', home)  
    console.log('rooms', rooms)  
    console.log('lights', lights)  
    console.log('airs', airs)  
    
    console.log('statusUseNumber', statusUseNumber)
    console.log('statusRegisterNumber', statusRegisterNumber)
    console.log('livingRoomNumber', livingRoomNumber)
    console.log('bathRoomNumber', bathRoomNumber)
    console.log('kitchenNumber', kitchenNumber)
    console.log('bedRoomNumber', bedRoomNumber)

    return (
        <ScrollView style={{ marginHorizontal: 10, marginTop: 20 }}>
            <View style= {{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                <MenuLeft navigation={props.navigation} page={"Statistic"}/>
                <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', color: 'black', flex: 6 }}>Thống kê</Text>
                <View></View>
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>{`Số nhà: ${home.length}`}</Text>
                <View>
                    <Text style={{ color: 'black', fontSize: 18, paddingHorizontal: 10 }}>Tình trạng sử dụng</Text>
                    <PieChart
                        data={statusUseHomeChart}
                        width={width-40}
                        height={170}
                        chartConfig={chartConfig}
                        accessor={"population"}
                        backgroundColor={"transparent"}
                        paddingLeft={"-10"}
                        center={[10, 10]}
                        absolute
                    />
                    <Text style={{ color: 'black', fontSize: 18, paddingHorizontal: 10, marginTop: 20 }}>Tình trạng đăng ký</Text>
                    <PieChart
                        data={statusRegisterHomeChart}
                        width={width-40}
                        height={170}
                        chartConfig={chartConfig}
                        accessor={"population"}
                        backgroundColor={"transparent"}
                        paddingLeft={"-10"}
                        center={[10, 10]}
                        absolute
                    />           
                </View>
            </View>
            <View>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>{`Số phòng: ${rooms.length}`}</Text>
                <PieChart
                    data={RoomChart}
                    width={width-40}
                    height={170}
                    chartConfig={chartConfig}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                    paddingLeft={"-10"}
                    center={[10, 10]}
                    absolute
                />        
            </View>
            <View>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>{`Số thiết bị: ${lights.length + airs.length}`}</Text>        
                <PieChart
                    data={DeviceChart}
                    width={width-40}
                    height={170}
                    chartConfig={chartConfig}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                    paddingLeft={"-10"}
                    center={[10, 10]}
                    absolute
                />  
            </View>
        </ScrollView>
    )
}