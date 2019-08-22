import { Dimensions } from "react-native";
import { createStackNavigator, createDrawerNavigator,createAppContainer } from "react-navigation";
const { width, height } = Dimensions.get("window");

/* Food List START */
import SearchResultOne from "../SearchResultOne/index";
import FoodLogin from "../FoodLogin/index";
import ProductDetails from "../ProductDetails/index";
import TabView from "../TabView/index";
import BookTable from "../BookTable/index";
import AllCategories from "../AllCategories/index";
import Reviews from "../Reviews/index";
import SignIn from "../SignIn/index";
import Drawer from "../Drawer/index";
import SearchScreen from "../SearchScreen/index";
import PaymentMethod from "../PaymentMethod/index";
import Walkthrough from "../Walkthrough/index";
import AboutUs from "../AboutUs/index";
import Judges from "../Judges/index";
import Venue from "../Venue/index";
import VenueSingle from "../VenueSingle/index";
import Sponsers from "../Sponsers/index";
import Notification from "../Notification/index";
import AuditionForm from "../AuditionForm/index"

/* Food List END */


/*Food Drawer START*/
const MainStackFood = createDrawerNavigator(
    {
      Walkthrough: { screen : Walkthrough},
      SignIn: { screen: SignIn },
      Drawer: {screen: Drawer},
      FoodLogin: { screen: FoodLogin },
      AboutUs: { screen: AboutUs},
      Judges: { screen: Judges},
      Venue: { screen: Venue },
      VenueSingle: { screen: VenueSingle },
      Sponsers: { screen: Sponsers },
      Notification: { screen : Notification },
      AuditionForm: { screen : AuditionForm }
    },
    {
      headerMode: "none",
      navigationOptions: {
        gesturesEnabled: false,
        contentComponent: Walkthrough
      }
    }
  );
  /*Food Drawer END*/
  const PrimaryNav = createStackNavigator(
    {
     
      MainStackFood: { screen: MainStackFood },
     
    },
    {
      headerMode: "none",
      initialRouteName: "MainStackFood",
      gesturesEnabled: false
    }
  );
  
const App = createAppContainer(PrimaryNav);

  
  
export default App;