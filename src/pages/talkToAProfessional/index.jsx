import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';

export default function TalkToAProfessional() {
  const {user} = useContext(AuthContext);

  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();

  async function handleSubmit(){
    const date = new Date();

    const body = {
      subject: subject,
      description: description,
      user_id: user.id,
      created_at: date.toISOString().slice(0, 10),
    }
    
    const response = await fetch('http://0.0.0.0:8080/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  
    const data = await response.json();
  
    if (data.message === 'chat information added successfully') {
      setSubject('')
      setDescription('')
      setError('')
    } else {
      setError('Erro ao enviar solicitação, tente novamente.')
    }
  }

  return(
    <ScrollView contentContainerStyle={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="left" size={20} color="#000" />
    </TouchableOpacity>
    <Text style={styles.title}>Fale com um profissional</Text>

    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>Assunto</Text>
      <TextInput
        style={styles.inputInput}
        autoCapitalize="words"
        placeholder="Defina o assunto"
        onChangeText={text => setSubject(text)}
        value={subject}
      />
    </View>
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>Descrição</Text>
      <TextInput
        style={{ ...styles.inputInput, height: 150 }}
        multiline
        autoCapitalize="sentences"
        placeholder="Descreva sua solicitação"
        onChangeText={text => setDescription(text)}
        value={description}
      />
    </View>

    <TouchableOpacity style={styles.registerButton} onPress={handleSubmit}>
      <Text style={styles.registerButtonText}>Enviar</Text>
    </TouchableOpacity>
    <Text style={styles.textError}>{error}</Text>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf6f3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 80,
    padding: 28,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Poppins_700Bold',
    marginBottom: 40,
    marginTop: 40,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: 'Poppins_700Bold',
    marginBottom: 6,
  },
  inputInput: {
    width: '100%',
    height: 40,
    padding: 8,
    borderWidth: 1,
    borderColor: '#DDDEDF',
    borderRadius: 8,
    marginBottom: 20,
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: 10,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    width: '100%',
  },
  inputButton: {
    backgroundColor: '#D9D0E3',
    borderRadius: 10,
    padding: 16,
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButton: {
    backgroundColor: '#0B7CCE',
    padding: 16,
    width: '100%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 118,
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  textError: {
    alignSelf: 'center', 
    fontSize:16, 
    fontWeight: '400', 
    color: "#E86D52", 
    marginTop: 5
  }
});
