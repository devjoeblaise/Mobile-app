import { Stack } from "expo-router";
import { ThemeProvider } from "@/hooks/useTheme";
import "./global.css";
import { useState } from "react";
export default function RootLayout() {
  const [isauthenticated, setIsAuthenticated] = useState<boolean>(false)
  return (
  <ThemeProvider>
  <Stack screenOptions={{
    headerShown:false
  }}>
    {!isauthenticated ?(
      <Stack.Screen
    name="(auth)"
  />
    ):(
     <Stack.Screen
    name="(tabs)"
  /> 
    )
    }
    
  </Stack >;
  </ThemeProvider>
  );
}
