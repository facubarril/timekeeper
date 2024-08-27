import { useState } from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { TimerPickerModal } from "react-native-timer-picker";
import { LinearGradient } from "expo-linear-gradient";
import { Audio } from "expo-av";
import * as Haptics from "expo-haptics";

import MoonIcon from '../../../assets/icons/moon.svg'

const Midnight = ({ midnight, setMidnight}) => {

  const [showPicker, setShowPicker] = useState(false);

  const formatTime = ({ hours, minutes }) => {
    const timeParts = [];

    if (hours !== undefined) {
        timeParts.push(hours.toString().padStart(2, "0"));
    }
    if (minutes !== undefined) {
        timeParts.push(minutes.toString().padStart(2, "0"));
    }

    return timeParts.join(":");
};

  return (
    <>
      <View>
        <Text style={ styles.configs_title }><Image source={ MoonIcon } style={ styles.icon } /> Virtual midnight</Text>
        <Text style={ styles.configs_text }>Handles the log list reset.</Text>
      </View>
      <View>
        <TouchableOpacity activeOpacity={0.7} onPress={() => setShowPicker(true)}>
          <View>
            <Text style={[ styles.configs_text, styles.btn ]}>
              { midnight }
            </Text>
          </View>
        </TouchableOpacity>
        <TimerPickerModal
            visible={ showPicker }
            setIsVisible={ setShowPicker }
            onConfirm={ (pickedDuration) => {
              setMidnight(formatTime(pickedDuration));
              setShowPicker(false);
            }}
            modalTitle="Set Virtual Midnight"
            onCancel={() => setShowPicker(false)}
            closeOnOverlayPress
            Audio={ Audio }
            LinearGradient={ LinearGradient }
            Haptics={ Haptics }
            styles={{ theme: "dark", }}
            modalProps={{ overlayOpacity: 0.2, }}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  configs_title: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    marginBottom: 14,
    color: '#dfe7e8'
  },
  toggle_item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    height: 14,
    width: 14,
    color: '#ffffff'
  },
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 14,
    borderColor: '#dfe7e8',
    borderWidth: 1,
    borderRadius: 2,
    textAlign: 'center',
    width: '48%'
  },
  configs_text: {
    fontSize: 16,
    lineHeight: 23,
    color: '#dfe7e8'
  }
});

export default Midnight