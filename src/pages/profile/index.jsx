import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Profile() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.iconContainer}>
          <FeatherIcon name="user" size={80} color="#000" />
        </View>
        <Text style={styles.userTitle}>Maria Fonseca</Text>
      </View>
      <View>
        <ProfileItem text={'Editar Perfil'} icon={'edit'} />
        <ProfileItem text={'Configurações'} icon={'settings'} />
        <ProfileItem text={'Ajuda'} icon={'help-outline'} />
        <ProfileItem text={'Sair'} icon={'logout'} />
      </View>
    </ScrollView>
  );
}

function ProfileItem({ text, icon }) {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.itemText}>
        <MaterialIcons name={icon} size={20} color="#000" />
        <Text>{text}</Text>
      </View>
      <AntDesign name="right" size={20} color="#000" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf6f3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 120,
    padding: 28,
  },
  userContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
  userTitle: {
    fontSize: 22,
    fontFamily: 'Poppins_700Bold',
    marginBottom: 12,
  },
  iconContainer: {
    width: 150,
    height: 150,
    display: 'flex',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D3EAD0',
    borderRadius: 9999,
    marginBottom: 20,
  },
  itemText: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  itemContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
