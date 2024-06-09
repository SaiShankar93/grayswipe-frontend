import { View, Text , Image , TouchableOpacity , Switch} from 'react-native'
import React, {useState , useRef} from 'react';
import Icon from "@expo/vector-icons/Feather"
import Drawer from "react-native-drawer";
import DrawerNav from "../drawer/DrawerNav";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const SeeDetails = () => {
  const drawerRef = useRef(null);

  const openDrawer = () => {
    drawerRef.current.open();
  };

  const closeDrawer = () => {
    drawerRef.current.close();
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        ref={drawerRef}
        content={<DrawerNav closeDrawer={closeDrawer} />}
        tapToClose={true}
        onClose={() => console.log("Drawer closed!")}
        side="left"
      >
        <View
          style={{
            height: 100,
            backgroundColor: "#eaf0ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingLeft: 35,
            paddingRight: 35,
          }}
        >
          <TouchableOpacity onPress={openDrawer}>
            <Image
              source={require("../../assets/settings.png")}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>Grayswipe</Text>
          <Image
            source={require("../../assets/notification.png")}
            style={{ width: 30, height: 30 }}
          />
        </View>
    <View style={[{backgroundColor:'#eaf0ff' , height:'100%', }]}>
      <View style={[{padding:20 , display:'flex',justifyContent:'center', alignItems:'center'}]}>
        <View style={[{borderTopWidth:1 ,width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between' , padding:10}]}>
          <View style={[{gap:12}]}>
            <Text style={[{fontSize:15, fontWeight:600,}]}>Store Name</Text>
            <Text style={[{fontSize:15, fontWeight:600, color:'#757575'}]}>Owner Name</Text>
            <Text style={[{fontSize:15, fontWeight:600, color:'#757575'}]}>Adress</Text>
            <Text style={[{fontSize:15, fontWeight:600, color:'#757575'}]}>Mobile number</Text>
            <Text style={[{fontSize:15, fontWeight:600, color:'#757575'}]}>Bill No:</Text>
            <View style={[{display:'flex', flexDirection:'row',gap:8}]}>
              <Text style={[{fontSize:15, fontWeight:600, color:'#757575'}]}>Verify</Text>
              <Icon name='info' size={20}/>
            </View>
          </View>
          <View style={[{display:'flex', flexDirection:'column', justifyContent:'space-between'}]}>
            <TouchableOpacity style={[{ backgroundColor: "#0b233c" ,width:130, height: 43 , borderRadius: 10, alignItems: 'center', justifyContent:'space-between', display:'flex' , flexDirection: 'row' , paddingHorizontal:15 }]}>
              <Text style={[{ color: "white" , fontSize: 13, fontFamily: 'poppins' , fontWeight:600 }]}>Edit Details</Text>
              <Icon name='edit' size={20} color='#ff8e00'></Icon>

            </TouchableOpacity>
            <View style={[{display:'flex',justifyContent:'flex-end', alignItems:'flex-end'}]}>
              <Text style={[{fontSize:15, fontWeight:600, color:'#757575'}]}>Date</Text>
              <Text style={[{fontSize:15, fontWeight:600,}]}>20 April 2003</Text>
            </View>
            <Switch
              trackColor={{false: '#767577', true: '#0b233c'}}
              thumbColor={isEnabled ? '#ff8e00' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}

            />
            

          </View>
        </View>
        <View style={[{height:380,width:'100%' , backgroundColor:'white' , borderRadius:20 ,display:'flex', flexDirection:'column'}]}>
          <View style={[{height:50, backgroundColor:'#0b233c' , borderTopLeftRadius:20 , borderTopRightRadius:20 ,display:'flex',justifyContent:'space-between', alignItems:'center', flexDirection:'row' , paddingHorizontal:20}]}>
            <View>
              <Text style={[{color:'white', fontSize:14, fontWeight:600}]}>DESCRIPTION</Text>
            </View>
            <View style={[{display:'flex', flexDirection:'row' , gap:20}]}>
              <Text style={[{color:'white', fontSize:14, fontWeight:600}]}>Rate</Text>
              <Text style={[{color:'white', fontSize:14, fontWeight:600}]}>QNTY</Text>
              <Text style={[{color:'white', fontSize:14, fontWeight:600}]}>Total</Text>
            </View>

          </View>
          <View style={[{height:330,justifyContent:'space-between', display:'flex', flexDirection:'column'}]}>
            <View style={[{display:'flex',justifyContent:'space-between', alignItems:'center', flexDirection:'row' , paddingHorizontal:20 ,paddingVertical:10}]}>
              <View style={[]}>
                <Text style={[{color:'black', fontSize:14, fontWeight:600}]}>shirt</Text>
              </View>
              <View style={[{display:'flex', flexDirection:'row' , gap:30}]}>
                <Text style={[{color:'black', fontSize:14, fontWeight:600}]}>120</Text>
                <Text style={[{color:'black', fontSize:14, fontWeight:600}]}>10</Text>
                <Text style={[{color:'black', fontSize:14, fontWeight:600}]}>1200</Text>
              </View>

            </View>
            <View style={[{display:'flex', flexDirection:'row', justifyContent:'space-between' , paddingHorizontal:20 ,paddingVertical:10}]}>
              <View style={[{display:'flex',justifyContent:'center', alignItems:'center'}]}>
                <Text style={[{fontSize:15, fontWeight:600, color:'#757575'}]}>IN WORDS</Text>

              </View>
              <View style={[{gap:12 ,justifyContent:'flex-end', alignItems:'flex-end'}]}>
                <View style={[{display:'flex',flexDirection:'row' , gap:5}]}>
                  <Text style={[{fontSize:15, fontWeight:600, color:'#757575'}]}>Subtotal:</Text>
                  <Text style={[{fontSize:15, fontWeight:600, color:'black'}]}>1200</Text>

                </View>
                <Text style={[{fontSize:15, fontWeight:600, color:'#757575'}]}>GST</Text>
                <View style={[{display:'flex',flexDirection:'row' , gap:5}]}>
                  <Text style={[{fontSize:15, fontWeight:600, color:'#757575'}]}>Paid:</Text>
                  <Text style={[{fontSize:15, fontWeight:600, color:'black'}]}>1200</Text>

                </View>
                <View style={[{display:'flex',flexDirection:'row' , gap:5}]}>
                  <Text style={[{fontSize:15, fontWeight:600, color:'#757575'}]}>Due:</Text>
                  <Text style={[{fontSize:15, fontWeight:600, color:'black'}]}>1200</Text>

                </View>
              </View>
            </View>

          </View>
          <View style={[{display:'flex', flexDirection:'row', justifyContent:'space-between',paddingVertical:10}]}>
            <TouchableOpacity style={[{ backgroundColor: "#0b233c" ,width:80, height: 43 , borderRadius: 10, alignItems: 'center', justifyContent:'space-between', display:'flex' , flexDirection: 'row' , paddingHorizontal:15 }]}>
              <Text style={[{ color: "white" , fontSize: 13, fontFamily: 'poppins' , fontWeight:600 }]}>Print</Text>
              <Icon name='edit' size={18} color='#ff8e00'></Icon>

            </TouchableOpacity>
            <View style={[{display:'flex',flexDirection:'row' , gap:10}]}>
            <TouchableOpacity style={[{ backgroundColor: "#0b233c" ,width:90, height: 43 , borderRadius: 10, alignItems: 'center', justifyContent:'space-between', display:'flex' , flexDirection: 'row' , paddingHorizontal:15 }]}>
              <Text style={[{ color: "white" , fontSize: 13, fontFamily: 'poppins' , fontWeight:600 }]}>Share</Text>
              <Icon name='edit' size={18} color='#ff8e00'></Icon>

            </TouchableOpacity>
            <TouchableOpacity style={[{ backgroundColor: "#0b233c" ,width:125, height: 43 , borderRadius: 10, alignItems: 'center', justifyContent:'space-between', display:'flex' , flexDirection: 'row' , paddingHorizontal:15 }]}>
              <Text style={[{ color: "white" , fontSize: 13, fontFamily: 'poppins' , fontWeight:600 }]}>View Details</Text>
              <Icon name='edit' size={18} color='#ff8e00'></Icon>

            </TouchableOpacity>

            </View>

          </View>

          


        </View>
      </View>
    </View>
    </Drawer>
    </GestureHandlerRootView>
    
  )
}

export default SeeDetails