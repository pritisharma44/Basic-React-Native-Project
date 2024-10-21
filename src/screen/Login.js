import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Background from '../component/Background'
import { darkGreen } from '../component/Constant'
import Field from '../component/Field'
import Btn from '../component/Btn'

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://php8.singsys.net/radium-medical-aesthetics/public/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                alert("Logged In");
                props.navigation.navigate("HomePage");
            } else {
                // If response status is not OK, handle validation errors
                if (data.message) {
                    // Display validation errors
                    // const errorMessage = Object.values(data.message).join("\n");
                    alert(data.message);
                } else {
                    // Handle other types of errors
                    alert("Login failed. Please try again.");
                }
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Network error. Please try again.");
        }
        setLoading(false);
    };
    

    return (
        <Background>
            <View style={{ alignItems: 'center', width: 370 }}>
                <Text style={{ color: 'white', fontSize: 54, fontWeight: 'bold', marginVertical: 10 }}>Login</Text>
                <View style={{ backgroundColor: 'white', height: 700, width: 370, borderTopLeftRadius: 130, paddingTop: 50, alignItems: 'center' }}>
                    <Text style={{ fontSize: 40, color: darkGreen, fontWeight: 'bold' }}>Welcome Back</Text>
                    <Text style={{ color: 'grey', fontSize: 19, fontWeight: 'bold', marginBottom: 20 }}>Login to your account</Text>
                    <Field placeholder="Email/Username" keyboardType={'email-address'} onChangeText={setEmail} value={email} />
                    <Field placeholder="Password" secureTextEntry={true} onChangeText={setPassword} value={password} />
                    <View style={{ alignItems: 'flex-end', width: '68%', paddingRight: 16, marginBottom: 100 }}>
                        <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Forgot Password ?</Text>
                    </View>
                    <Btn textColor='white' bgColor={darkGreen} btnLabel={loading ? "Logging In..." : "Login"} Press={handleLogin} disabled={loading} />
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Don't have an account ? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
                            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    )
}
