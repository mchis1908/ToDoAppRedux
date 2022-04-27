import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
  Image,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { RadioButton } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
const AddTask = (props) => {
const [checked, setChecked] = React.useState("Normal");
const [completedDate, setCompletedDate] = useState(new Date());
const [showCompleted, setShowCompleted] = useState(false);
const [isHidden, setHidden] = useState(true);
const [text, setText] = useState('');
const onChange = (event, selectedDate) => {
  const completedDate = selectedDate || Date;
  setShowCompleted(Platform.OS === 'ios');
  setCompletedDate(completedDate);
  let tempDate= new Date(completedDate);
  let fDate=tempDate.getDate()+'/'+tempDate.getMonth()+'/'+tempDate.getFullYear();
  setText(fDate);
  console.log(fDate);
};

const showDatepicker = () => {
  setShowCompleted(!showCompleted);
};
const [completedDate1, setCompletedDate1] = useState(new Date());
const [showCompleted1, setShowCompleted1] = useState(false);
const [isHidden1, setHidden1] = useState(true);
const [text1, setText1] = useState('');
const onChange1 = (event, selectedDate1) => {
  const completedDate1 = selectedDate1 || Date;
  setShowCompleted1(Platform.OS === 'ios');
  setCompletedDate1(completedDate1);
  let tempDate1= new Date(completedDate1);
  let fDate1=tempDate1.getDate()+'/'+tempDate1.getMonth()+'/'+tempDate1.getFullYear();
  setText1(fDate1);
  console.log(fDate1);
};

const showDatepicker1 = () => {
  setShowCompleted1(!showCompleted1);
};
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Title</Text>
        <TextInput style={styles.input} placeholder="Add Title" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Write Description"
          multiline
          numberOfLines={5}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Due Date</Text>
        <View style={styles.timeContainer}>
          <Text style={{ ...styles.input, width: "80%" }}>{text}</Text>
          <TouchableNativeFeedback
              onPress={showDatepicker}
          >
            <Image
              style={styles.image}
              source={{
                uri: "https://img.icons8.com/emoji/96/000000/calendar-emoji.png",
              }}
            /> 
          </TouchableNativeFeedback>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Set Task Priorety</Text>
        <View style={styles.radionContainer}>
          <RadioButton
            value="Normal"
            status={checked === "Normal" ? "checked" : "unchecked"}
            onPress={() => setChecked("Normal")}
          />
          <Text>Normal</Text>
          <RadioButton
            value="Urgent"
            status={checked === "Urgent" ? "checked" : "unchecked"}
            onPress={() => setChecked("Urgent")}
          />
          <Text>Urgent</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>End Date</Text>
        <View style={styles.timeContainer}>
          <Text style={{ ...styles.input, width: "80%" }} >{text1}</Text>
          <TouchableNativeFeedback
             onPress={showDatepicker1}
          >
            <Image
              style={styles.image}
              source={{
                uri: "https://img.icons8.com/emoji/96/000000/calendar-emoji.png",
              }}
            />
          </TouchableNativeFeedback>
        </View>
        
      </View>
      {isHidden ? (
          <View>
            {showCompleted && (
              <DateTimePicker
                testID='dateTimePicker'
                placeholder='Completed Date'
                value={completedDate}
                mode='date'
                display='default'
                onChange={onChange}
              />
            )}
          </View>
        ) : null}
        {isHidden1 ? (
          <View>
            {showCompleted1 && (
              <DateTimePicker
                testID='dateTimePicker1'
                placeholder='Completed Date'
                value={completedDate1}
                mode='date'
                display='default'
                onChange={onChange1}
              />
            )}
          </View>
        ) : null}
      <View style={styles.buttonContainer}>
        <Button title="ADD Task" />
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#888",
  },
  buttonContainer: {
    margin: 20,
    borderRadius: 25,
    overflow: "hidden",
  },
  radionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    height: 50,
    width: 50,
  },
});
export default AddTask;
