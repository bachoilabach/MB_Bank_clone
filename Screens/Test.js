import React from "react";
import { View,Text,Image } from "react-native"

const Test = ()=>{
    const courses = [
        {
            name: 'React Course',
            des: 'Course 1',
        },
        {
            name: 'React Native Course',
            des: 'Course 2',
        },{
            name: 'Redux Course',
            des: 'Course 3',
        },
    ]

    return (
        <View style={{flex: 1}}>
            {courses.map((course,index)=>(
                <View key={index} style={{
                    flexDirection: 'row'
                }}>
                        <Image
                        style={{
                            height: 100,
                            width: 100,
                            marginRight: 10
                        }}
                        resizeMode="contain"
                        source={require('../assets/reactLogo.png')}
                    />
                    <View style={{justifyContent:'center'}}>
                        <Text style={{fontSize: 24,fontWeight: 800}}>{course.name}</Text>
                        <Text>{course.des}</Text>
                    </View>
                </View>
            ))}
        </View>
    )
}

export default Test