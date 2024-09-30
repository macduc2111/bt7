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
  const [error, setError] = useState("");

  // Hàm kiểm tra định dạng số điện thoại
  const validatePhoneNumber = (number) => {
    const regex = /^[0-9]{10}$/; // Kiểm tra định dạng số điện thoại 10 chữ số
    return regex.test(number);
  };

  // Hàm xử lý khi nhập số điện thoại
  const handleChangeText = (text) => {
    // Format lại số điện thoại
    const formattedText = text.replace(/[^0-9]/g, ""); // Chỉ cho phép ký tự số
    setPhoneNumber(formattedText);

    // Kiểm tra định dạng và cập nhật thông báo lỗi
    if (!validatePhoneNumber(formattedText)) {
      setError("Số điện thoại không đúng định dạng. Vui lòng nhập lại.");
    } else {
      setError("");
    }
  };

  // Hàm xử lý khi nhấn nút "Tiếp tục"
  const handleContinue = () => {
    if (validatePhoneNumber(phoneNumber)) {
      alert("Số điện thoại hợp lệ: " + phoneNumber);
      // Thực hiện hành động tiếp theo ở đây
    } else {
      alert("Số điện thoại không đúng định dạng. Vui lòng nhập lại.");
    }
  };

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
          onChangeText={handleChangeText}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TouchableOpacity
          style={styles.buttonEnabled} // Luôn hiển thị màu xanh
          onPress={handleContinue}
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
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
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
    marginBottom: 5,
  },
  buttonEnabled: {
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: "#0a84ff", // Màu xanh cho nút
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
  errorText: {
    fontSize: 14,
    color: "red", // Màu đỏ cho thông báo lỗi
    marginBottom: 20,
  },
});
