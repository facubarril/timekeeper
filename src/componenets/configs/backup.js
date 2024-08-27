import { StyleSheet, View, Text, Pressable } from 'react-native';
import { fileUrl } from '../../utils/functions'
import { Image } from 'expo-image';
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';
import * as Sharing from 'expo-sharing';

import BackupIcon from '../../../assets/icons/download-cloud.svg'

const Backup = () => {

  const downloadBackup = async () => {
    try {
      const fileInfo = await FileSystem.getInfoAsync(fileUrl);
      if (!fileInfo.exists) {
        Alert.alert('Error', 'El archivo no existe.');
        return;
      }

      await Sharing.shareAsync(fileUrl);
    } catch (error) {
      console.error('Error al intentar compartir el archivo:', error);
      Alert.alert('Error', 'No se pudo compartir el archivo.');
    }
  };

  const restoreBackup = async () => {
    try {
      // Permitir al usuario seleccionar un archivo
      const result = await DocumentPicker.getDocumentAsync({
        type: 'text/plain', // Tipo de archivo permitido
      });

      if (result.type === 'cancel') {
        return; // El usuario canceló la selección
      }

      // Leer el contenido del archivo seleccionado
      const selectedFileUri = result.uri;
      const selectedFileContent = await FileSystem.readAsStringAsync(selectedFileUri);

      // Reemplazar el contenido del archivo original con el contenido del archivo seleccionado
      await FileSystem.writeAsStringAsync(fileUrl, selectedFileContent);

      Alert.alert('Éxito', 'El archivo ha sido reemplazado exitosamente.');
    } catch (error) {
      console.error('Error al intentar reemplazar el archivo:', error);
      Alert.alert('Error', 'No se pudo reemplazar el archivo.');
    }
  };


  return (
    <>
      <View style={ styles.configs_title }>
        <Text style={ styles.configs_title }><Image source={ BackupIcon } style={ styles.icon } /> Backup & restore</Text>
      </View>
      <View style={ styles.btn_container }>
        <Pressable
          style={[ styles.btn ]}
          onPress={() => downloadBackup()}>
          <Text style={ styles.btn_text }>Backup</Text>
        </Pressable>
        <Pressable
          style={[ styles.btn ]}
          onPress={() => restoreBackup()}>
          <Text style={ styles.btn_text }>Restore</Text>
        </Pressable>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  configs_title: {
    fontSize: 20,
    lineHeight: 28,
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
  btn_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
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
  btn_text: {
    color: '#dfe7e8',
    fontSize: 16
  }
});

export default Backup