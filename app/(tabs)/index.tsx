
import Header from "@/components/Header"
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "@/hooks/useTheme";

export default function Index() {
  const {colors} = useTheme()
  return (
    <SafeAreaView style={{backgroundColor:colors.bg}}>
      <Header/>
      
    
    </SafeAreaView>
  );
}
