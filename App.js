import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const App = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (Time) => {
    console.warn("A time has been picked: ", Time);
    hideTimePicker();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showDatePicker} style={styles.button}>
        <Text style={styles.txt}>Show Date</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={showTimePicker} style={styles.button}>
        <Text style={styles.txt}>Show Time</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: {
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    backgroundColor: 'blue',
    margin: 10,
  },
  txt: { fontSize: 15, color: 'white', fontWeight: 'bold' },
});
