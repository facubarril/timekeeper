import { useState } from 'react';
import { StyleSheet, View, Text, Alert, Modal, Pressable } from 'react-native';
import { fileUrl } from '../../utils/functions'
import * as FileSystem from 'expo-file-system';
import { Image } from 'expo-image';

import WarningIcon from '../../../assets/icons/warning.svg'

const ClearData = ({ setLog }) => {

    const [ modalVisible, setModalVisible ] = useState(false);
    const [ dataCleared, setDataCleared ] = useState(false);

    const nukeIt = async () => {
      try {
        await FileSystem.writeAsStringAsync(fileUrl, '', { encoding: FileSystem.EncodingType.UTF8 });
        setDataCleared(true)
        setLog([])
      }
      catch (error) {
        console.error('Error reading log file:', error);
      }
    }

    return (
      <>
        <View>
          <Text style={ styles.configs_title }><Image source={ WarningIcon } style={ styles.icon } /> Clear data</Text>
          <Text style={ styles.configs_text }>Use with caution, this clears all your log. Cannot be reversed without backups.</Text>
        </View>
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={ styles.centeredView }>
              <View style={ styles.modalView }>
                <Text style={ styles.configs_text }>
                  {
                    dataCleared
                    ? 'Data was cleared.'
                    : 'Are you sure yo want to continue?'
                  }
                </Text>
                <View style={ styles.btn_container }>
                  {
                    dataCleared ?
                    (
                      <Pressable
                        style={[ styles.btn, styles.btn_full ]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={ styles.btn_text }>Ok</Text>
                      </Pressable>
                    ) :
                    (
                      <>
                        <Pressable
                          style={[ styles.btn, styles.btn_danger ]}
                          onPress={() => nukeIt(!modalVisible)}>
                          <Text style={ styles.btn_text }>Yes</Text>
                        </Pressable>
                        <Pressable
                          style={[ styles.btn, styles.btn_inverted ]}
                          onPress={() => setModalVisible(!modalVisible)}>
                          <Text style={[ styles.btn_text, styles.btn_text_inverted ]}>No</Text>
                        </Pressable>
                      </>
                    )
                  }
                </View>
              </View>
            </View>
          </Modal>
          <Pressable
            style={[ styles.btn, styles.btn_caution ]}
            onPress={() => setModalVisible(true)}>
            <Text style={ styles.btn_text }>Clear</Text>
          </Pressable>
        </View>
      </>
    )
  }

  const styles = StyleSheet.create({
    configs_title: {
      fontSize: 20,
      lineHeight: 28,
      marginBottom: 14,
      fontWeight: '700',
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
      width: 14
    },
    configs_text: {
      fontSize: 16,
      lineHeight: 23,
      color: '#dfe7e8'
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    modalView: {
      margin: 20,
      backgroundColor: '#151722',
      borderRadius: 10,
      padding: 35,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: '80%'
    },
    btn_container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%'
    },
    btn: {
      display: 'flex',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 16,
      marginTop: 14,
      borderColor: '#dfe7e8',
      borderWidth: 1,
      borderRadius: 2,
      width: '48%'
    },
    btn_full: {
      width: '100%'
    },
    btn_caution: {
      borderColor: '#FF4000'
    },
    btn_danger: {
      borderColor: '#FF4000',
      backgroundColor: '#FF4000'
    },
    btn_inverted: {
      backgroundColor: '#fff',
      borderColor: '#fff'
    },
    btn_text: {
      color: '#dfe7e8',
      fontSize: 16
    },
    btn_text_inverted: {
      color: '#151722'
    }
  });

export default ClearData