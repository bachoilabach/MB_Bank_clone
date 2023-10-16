import { View,Text,StyleSheet, Image, TextInput, TouchableOpacity,SafeAreaView, ImageBackground, StatusBar} from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faQrcode, faComments, faBars, faUnlockKeyhole,faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { Dimensions } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const statusBarHeight = StatusBar.currentHeight || 0;
const backGround = require("../assets/a.jpg");

const Login = () => {
    const items = [
        {
            icon: faQrcode,
            text1: 'Quét QR',
            text2: '',
        },
        {
            icon: faUnlockKeyhole,
            text1: 'Xác thực',
            text2: 'D-OTP',
        },
        {
            icon: faBars,
            text1: 'Tiện ích',
            text2: '',
        },
        {
            icon: faComments,
            text1: 'Chat với',
            text2: 'eMBee',
        },
    ];

    const [text, setText] = useState('');
    const [showPassword, setShowPassword] = useState(false); 

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleForgotPassword = () => {
        navigation.navigate('ForgotPassword');
    };

    const navigation = useNavigation();

    const pressButton = ()=>{
        navigation.navigate('Tabs');
    }

    return(
        <View style= {styles.background}>
            <ImageBackground 
                source={backGround} 
                style={{
                    ...styles.container,
                    width: windowWidth, 
                    height: windowHeight + statusBarHeight,
                }}
            >
            <View style={{display:'flex',flexDirection:'row',marginBottom: '5%'}}>
                <View style={{flex: 1}}></View>
                <Image 
                    source={require('../assets/9d8ed5_03ea4831549b46ecabc9cd0117623d0e~mv2.webp')}
                    style= {styles.logo}
                    resizeMode="contain"
                />
                <View style={{flexDirection:'row',alignItems:'center',justifyContent: '',flex: 1,gap: 5}}>
                    <Image 
                        source={require('../assets/united-kingdom.png')}
                        style={{height: 30,width: 30}}
                    />
                    <Text style={{fontWeight:'bold',fontSize: 18,color: '#fff'}}>ENG</Text>
                </View>
            </View>
            <View>
                <Image 
                    style={styles.userAva}
                    resizeMode="contain"
                    source={require('../assets/user.png')}
                />
            </View>
            <View style={styles.heloUser}>
                <Text style={styles.hello}>Xin chào,</Text>
                <Text style= {styles.userName}>TRAN VIET BACH</Text>
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.input}>
                    <TextInput
                        style={styles.password}
                        value={text}
                        textContentType="password"
                        editable
                        secureTextEntry={!showPassword}
                        placeholder="Mật khẩu"
                        placeholderTextColor={"#fff"}
                        onChangeText={(inputText)=>setText(inputText)}
                    />
                    <View style={styles.showPassword} >
                        <TouchableOpacity onPress={toggleShowPassword}>
                            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} size={20} color="#fff"/>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image source={require('../assets/face-id.png')} style={styles.faceId}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={pressButton}
                >
                        <Text style={styles.buttonText}>Đăng nhập</Text>
                </TouchableOpacity>

                <View style={styles.authentication}>
                    <TouchableOpacity onPress={handleForgotPassword}>
                        <View style={styles.forgotPasswordContainer} >
                            <Text style={{fontWeight: 'bold',fontSize: 12,color: '#fff'}}>QUÊN MẬT KHẨU</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.forgotPasswordContainer}>
                            <Text style={{fontWeight: 'bold',fontSize: 12,color: '#fff'}}>ĐĂNG NHẬP BẰNG TÀI KHOẢN KHÁC</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.functional}>
                    {items.map((item,index)=>(
                        <View style={styles.items} key={index}>
                        <TouchableOpacity style={{alignItems: 'center'}}>
                            <View>
                                <FontAwesomeIcon icon={item.icon} size={27} style={{marginBottom: '5%',color: '#fff'}}/>
                            </View>
                            <Text style={{color: '#fff'}}>{item.text1}</Text>
                            <Text style={{color: '#fff'}}>{item.text2}</Text>
                        </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },

    container: {
        flex: 1,
        width: '100%',
        alignItems:"center",
        justifyContent: "center",
        paddingRight:20,
        paddingLeft: 20,
        paddingTop: '10%',
    },
    

    logo: {
        flex: 4,
        width: 50,
        height: 50
    },
    
    userAva: {
        width: 160,
        height: 160,
        marginBottom: '3%'
    },

    heloUser: {
        alignItems:"center",
        justifyContent: "flex-start",
        marginBottom: '10%',
    },

    hello: {
        fontSize: 22,
        color: '#fff',
    },

    userName: {
        fontSize: 30,
        fontWeight: '600',
        color: '#fff',
    },

    inputContainer: {
        flex: 1, 
        alignItems: "center",
        justifyContent: "flex-start",
        width: '100%',
    },

    input: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#fff',
    },

    showPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    password: {
        width: '80%',
        height: 40,
        borderWidth: 0,
        padding: 10,
        fontSize: 16,
        borderColor: '#fff',
        color: '#fff',
    },

    button: {
        backgroundColor: "#63c2fb",
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%',
        borderRadius: 25,
    },

    buttonText: {
        color: '#fff',
        fontSize: 15
    },

    authentication: {
        flexDirection: 'row',
        marginTop: '9%',
        gap: '30%',
        borderColor: '#fff',
    },

    faceId:{
        width: 50,
        height: 50
    },

    forgotPasswordContainer: {
        borderBottomWidth: 1.5,
        borderColor: "#fff"
    },

    functional: {
        marginTop: '60%',
        flexDirection: 'row',
        gap: 40
    },

})

export default Login