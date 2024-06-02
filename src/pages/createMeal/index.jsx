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
import { UserContext } from '../../context/userContext';

export default function CreateMeal() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [isInDiet, setIsInDiet] = useState('');
  const [error, setError] = useState('');
  const {user} = useContext(UserContext);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };
  const onChangeTime = (event, selectedDate) => {
    const currentDate = selectedDate;
    setTime(currentDate);
  };

  async function handleRegister(){
    let hours = time.getUTCHours();
    let minutes = time.getUTCMinutes();
  
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    const timeStr = `${hours}:${minutes}`;

    const body = {
      title: name,
      description: description,
      date: date.toISOString().slice(0, 10),
      time: timeStr,
      is_in_diet: isInDiet,
      user_id: user.id,
    }
    
    const response = await fetch('http://0.0.0.0:8080/diary_new_meal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  
    const data = await response.json();
  
    if (data.message === 'Diary added successfully') {
      setName('')
      setDescription('')
      setIsInDiet('')
      setDate(new Date())
      setTime(new Date())
      setError('')
    } else {
      setError('Erro ao registrar refeição, tente novamente.')
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="left" size={20} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Nova Refeição</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}> Nome</Text>
        <TextInput
          style={styles.inputInput}
          autoCapitalize="words"
          placeholder="Dê um nome para a refeição"
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Descrição</Text>
        <TextInput
          style={{ ...styles.inputInput, height: 150 }}
          multiline
          autoCapitalize="sentences"
          placeholder="Descreva a refeição"
          value={description}
          onChangeText={text => setDescription(text)}
        />
      </View>
      <View style={styles.dateContainer}>
        <View style={{ ...styles.inputContainer, width: '50%' }}>
          <Text style={styles.inputLabel}>Data</Text>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            onChange={onChangeDate}
          />
        </View>
        <View style={{ ...styles.inputContainer, width: '50%' }}>
          <Text style={styles.inputLabel}>Hora</Text>
          <DateTimePicker
            testID="dateTimePicker"
            value={time}
            mode="time"
            is24Hour={true}
            onChange={onChangeTime}

          />
        </View>
      </View>
      <View style={{ marginTop: 24 }}>
        <Text style={styles.inputLabel}>Está dentro da dieta?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={{...styles.inputButton, backgroundColor: isInDiet === 1 ? '#5263E8' : '#D9D0E3' }} onPress={()=>setIsInDiet(1)}>
            <Text style={{ fontWeight: 'bold' }}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.inputButton, backgroundColor: isInDiet === 0 ? '#5263E8' : '#D9D0E3' }} onPress={()=>setIsInDiet(0)}>
            <Text style={{ fontWeight: 'bold' }}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Cadastrar refeição</Text>
      </TouchableOpacity>
      <Text style={styles.textError}>{error}</Text>
    </ScrollView>
  );
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
    marginTop: 90,
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
