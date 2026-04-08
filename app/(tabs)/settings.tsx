import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Switch,
  TouchableOpacity,
  StatusBar,
  Platform,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "@/hooks/useTheme"

const RowItem = ({ title, subtitle, showArrow = true }: any) => {
  const {isDarkMode, toggleDarkMode, colors } = useTheme()
  return (
    <TouchableOpacity style={styles.row}>
      <View>
        <Text style={styles.rowTitle}>{title}</Text>
        {subtitle && <Text style={styles.rowSubtitle}>{subtitle}</Text>}
      </View>

      {showArrow && (
        <Ionicons name="chevron-forward" size={18} color="#aaa" />
      )}
    </TouchableOpacity>
  );
};

const ToggleItem = ({ title, value, onValueChange }: any) => {
  return (
    <View style={styles.row}>
      <Text style={styles.rowTitle}>{title}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: "#555", true: "#2dd4bf" }}
        thumbColor="#fff"
      />
    </View>
  );
};

export default function SettingsScreen() {
  const [sound, setSound] = React.useState(true);
  const [badge, setBadge] = React.useState(true);
  const [lockScreen, setLockScreen] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(true);
  const {isDarkMode, toggleDarkMode, colors } = useTheme()

  return (
    <SafeAreaView style={{flex: 1,
    backgroundColor: colors.bg,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,}}>
      <StatusBar barStyle="light-content" />

      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Header */}
          <View style={styles.header}>
            <Ionicons name="chevron-back" size={22} color="#fff" />
            <Text style={styles.headerTitle}>Settings</Text>
            <View style={{ width: 22 }} /> 
          </View>

          {/* Profile */}
          <View style={styles.profile}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.location}>New York, USA</Text>
          </View>

          {/* Account */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Account</Text>

            <RowItem title="Username" subtitle="JohnDoe123" />
            <RowItem title="Email" subtitle="johndoe@contact.com" />
          </View>

          {/* Notifications */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Notifications</Text>

            <ToggleItem title="Sound" value={sound} onValueChange={setSound} />
            <ToggleItem
              title="Badge in app icon"
              value={badge}
              onValueChange={setBadge}
            />
            <ToggleItem
              title="Show on lock screen"
              value={lockScreen}
              onValueChange={setLockScreen}
            />
          </View>

          {/* Preferences */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferences</Text>

            <RowItem title="Language" subtitle="English (USA)" />
            <ToggleItem
              title="Dark mode"
              value={isDarkMode}
              onValueChange={toggleDarkMode}
            />
            <RowItem title="Text size" />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  scrollContent: {
    paddingBottom: 100, 
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 20,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  profile: {
    alignItems: "center",
    marginBottom: 25,
  },

  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },

  location: {
    color: "#aaa",
    fontSize: 13,
    marginTop: 4,
  },

  section: {
    backgroundColor: "#3a3a3a",
    borderRadius: 16,
    paddingVertical: 10,
    marginBottom: 18,
  },

  sectionTitle: {
    color: "#bbb",
    fontSize: 13,
    marginBottom: 8,
    marginLeft: 14,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderTopWidth: 0.5,
    borderTopColor: "#555",
  },

  rowTitle: {
    color: "#fff",
    fontSize: 15,
  },

  rowSubtitle: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 3,
  },
});
