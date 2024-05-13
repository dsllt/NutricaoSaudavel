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
import { useState } from 'react';

export default function ScheduleAppointment() {
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="left" size={20} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Agendar consulta</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}> Nome do profissional</Text>
        <TextInput
          style={styles.inputInput}
          autoCapitalize="words"
          placeholder="Indique o nome do profissional"
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
            onChange={onChange}
          />
        </View>
        <View style={{ ...styles.inputContainer, width: '50%' }}>
          <Text style={styles.inputLabel}>Hora</Text>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="time"
            is24Hour={true}
            onChange={onChange}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Agendar</Text>
      </TouchableOpacity>
    </View>
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
    marginTop: 350,
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
