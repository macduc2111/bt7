import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StatusBar as RNStatusBar,
} from "react-native";

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.content}>
        <View style={styles.shadowBox}>
          <Text style={styles.title}>Đăng nhập</Text>
        </View>
        <Text style={styles.subtitle}>Nhập số điện thoại</Text>
        <Text style={styles.instruction}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing
          Pro
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="numeric"
          maxLength={10}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <TouchableOpacity
          style={[
            styles.button,
            phoneNumber.length === 10
              ? styles.buttonEnabled
              : styles.buttonDisabled,
          ]}
          disabled={phoneNumber.length !== 10}
        >
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 40,
  },
  content: {
    justifyContent: "center",
  },
  shadowBox: {
    // Hiệu ứng đổ bóng
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    shadowColor: "#000", // Màu của bóng (trên iOS)
    shadowOffset: { width: 0, height: 2 }, // Độ lệch bóng
    shadowOpacity: 0.3, // Độ mờ của bóng
    shadowRadius: 4, // Bán kính của bóng
    elevation: 4, // Độ cao của bóng (trên Android)
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 5,
    textAlign: "left",
    fontWeight: "500",
  },
  instruction: {
    fontSize: 14,
    color: "gray",
    marginBottom: 30,
    textAlign: "left",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 40,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonEnabled: {
    backgroundColor: "#0a84ff",
  },
  buttonDisabled: {
    backgroundColor: "#e0e0e0",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
});
