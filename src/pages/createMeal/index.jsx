import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

export default function CreateMeal() {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nova Refeição</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}> Nome</Text>
        <TextInput
          style={styles.inputInput}
          autoCapitalize="words"
          placeholder="Dê um nome para a refeição"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Descrição</Text>
        <TextInput
          style={{ ...styles.inputInput, height: 150 }}
          multiline
          autoCapitalize="sentences"
          placeholder="Descreva a refeição"
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
      <View style={{ marginTop: 24 }}>
        <Text style={styles.inputLabel}>Está dentro da dieta?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.inputButton}>
            <Text style={{ fontWeight: 'bold' }}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputButton}>
            <Text style={{ fontWeight: 'bold' }}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Cadastrar refeição</Text>
      </TouchableOpacity>
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
    paddingTop: 120,
    padding: 28,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Poppins_700Bold',
    marginBottom: 40,
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
});
