import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useRecoilState } from "recoil";
import { brightnessMode } from "../states/brightnessMode";
import { showAccount } from "../states/showAccount";
import { wHeight } from "../utils/Utils";

// shows the users email in the top right corner
const AccountInfo = () => {
    const [email, setEmail] = useState("");
    const [mode, setMode] = useRecoilState(brightnessMode);
    const [showEmail, setShowEmail] = useState("");
    const [showAccountState, setShowAccountState] = useRecoilState(showAccount);

    const handleShowEmail = () => {
        if(showAccountState.show) {
            setShowAccountState({show: false});
        }
        else {
            setShowAccountState({show: true});
        }
    }

    // sets new state when clicking on the user icon regardless of which page
    useEffect(() => {
        if(showAccountState.show) {
            setShowEmail(email);
        }
        else {
            setShowEmail("");
        }
    }, [showAccountState.show, email]);

    //get email for account
    const getEmail = async () => {
        const previousEmail = await AsyncStorage.getItem("email");
        if(previousEmail !== undefined) {
            setEmail(previousEmail || "");
        }
    };

    useEffect(() => {
        getEmail();
    },[]);

    return(
        <View style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row"}}>
            <TouchableOpacity onPress={handleShowEmail}>
            <TextInput
                editable={false}
                value={showEmail}
                textColor={mode.navbarColor}
                underlineColor={mode.navbarBackgroundColor}
                right={
                    <TextInput.Icon icon={() => 
                        <TouchableOpacity onPress={handleShowEmail}>
                            <Image 
                                source={require('../resources/account.png')} 
                                resizeMode="contain" 
                                style={{height: wHeight(3.2)}} 
                            />
                        </TouchableOpacity>} 
                    />
                }
                style={{
                    backgroundColor: mode.navbarBackgroundColor,
                    height: wHeight(3),
                    textAlign: "right",
                    fontSize: wHeight(1.4),
                    marginBottom: wHeight(1.4)
                }}
            />
            </TouchableOpacity>
        </View>
    );
}

export default AccountInfo;