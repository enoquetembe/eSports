import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
interface  ButtonProps {
 title: string;
}

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World </Text>
      <Button title="Hello" />
      <StatusBar style="auto" backgroundColor='green' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
