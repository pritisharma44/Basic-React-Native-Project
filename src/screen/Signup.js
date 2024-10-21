import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { darkGreen } from '../component/Constant'
import Field from '../component/Field'
import Btn from '../component/Btn'

export default function Signup(props) {
    return (
        <ImageBackground  source={require("../assets/leaves.jpg")} style={{height:'100%'}}>
            <View style={{ alignItems: 'center', width: 370 }}>
                <Text style={{ color: 'white', fontSize: 54, fontWeight: 'bold', marginTop: 10 }}>Register</Text>
                <Text style={{ color: 'white', marginBottom: 20, fontSize: 19, fontWeight: 'bold' }}>Create a new account</Text>
                <ScrollView>
                    <View style={{ backgroundColor: 'white', height: 800, width: 370, borderTopLeftRadius: 130, paddingTop: 40, alignItems: 'center' }}>
                        <Field placeholder="First Name" />
                        <Field placeholder="Last Name" />
                        <Field placeholder="Email/Username" keyboardType={'email-address'} />
                        <Field placeholder="Contact Number" keyboardType={"number-pad"} />
                        <Field placeholder="Password" secureTextEntry={true} />
                        <Field placeholder="Confirm Password" secureTextEntry={true} />

                        <View style={{ alignItems: 'flex-end', width: '68%', paddingRight: 16, marginBottom: 80 }}>
                            {/* <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Terms & Policy</Text> */}
                        </View>

                        <Btn textColor='white' bgColor={darkGreen} btnLabel="Signup" Press={() => {
                            alert("Account Created")
                            props.navigation.navigate("Login")
                        }} />
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Already have an account ? </Text>
                            <TouchableOpacity Press={() => props.navigation.navigate("Login")}>
                                <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}