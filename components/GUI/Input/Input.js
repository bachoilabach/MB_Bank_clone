import { Easing, Keyboard, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { TextInput, Animated } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native';

const Input = ({ input , type}) => {
    const transY = useRef(new Animated.Value(0));
    const textColor = useRef(new Animated.Value(0));
    const [borderColor,setBorderColor] = useState('#91939b');
    const [fontSize, setFontSize] = useState(17);
    const [text,setText] = useState('');

    const handleKeyboradDissmiss  = ()=>{
        Keyboard.dismiss();
    }
    const handleChangeText = (text)=>{
        setText(text)
    }

    const handleFocus = () => {
        Animated.parallel([
            Animated.timing(transY.current, {
                toValue: -18,
                duration: 300,
                useNativeDriver: true,
                easing: Easing.ease,
            }),
            Animated.timing(textColor.current, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false,
                easing: Easing.ease,
            }),
        ]).start();
        setBorderColor('blue');
        setFontSize(14);
    };

    const handleBlur = () => {
        if(text) return;
        Animated.parallel([
            Animated.timing(transY.current, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
                easing: Easing.ease,
            }),
            Animated.timing(textColor.current, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
                easing: Easing.ease,
            }),
        ]).start();
        setBorderColor('#91939b');
        setFontSize(17);
    }

    const interpolatedTextColor = textColor.current.interpolate({
        inputRange: [0, 1],
        outputRange: ['#91939b', 'blue'],
    });

    return (
        <View style={[styles.container,{borderColor}]}>
            <Animated.View style={[styles.inputContainer, { transform: [{ translateY: transY.current }] }]}>
                <Animated.Text style={{ fontSize, color: interpolatedTextColor }}>
                    {input}
                </Animated.Text>
            </Animated.View>
            <TouchableWithoutFeedback onPress={handleKeyboradDissmiss}>
                <TextInput
                    style={styles.textInput}
                    value={text}
                    onChangeText={handleChangeText}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    keyboardType={type}
                    returnKeyType='done'
                />
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1.5,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: '#fcfcfc',
    },

    inputContainer: {
        position: 'absolute',
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 23
    },

    textInput: {
        paddingTop: 35,
        paddingBottom: 15,
        paddingLeft: 23,
        fontSize: 17,
    },
})

export default Input;