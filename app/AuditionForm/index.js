import React, { Component } from 'react';
import {  
	View,
	Text,
	Platform,
	StatusBar,
	I18nManager,
	TextInput,
	TouchableOpacity,
	ScrollView,
	BackHandler,
	Image,Picker
} from 'react-native';
import {
	Right,
	Left,
	Body,
	Header,
} from 'native-base';
// Screen Styles
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Metrics } from '../Themes';


import Entypo from "react-native-vector-icons/Entypo";
import DatePicker from "react-native-datepicker";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Dropdown } from 'react-native-material-dropdown';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';

export default class AuditionForm extends Component {
	constructor(props, context) {
    super(props, context);
    this.onChangeText = this.onChangeText.bind(this);

    this.countryRef = this.updateRef.bind(this, 'country');
    this.genderRef = this.updateRef.bind(this, 'gender');
		this.state = {
			fullname : "",
			dob: "15-01-2018",
			address: "",
			country: "Nepal",
			email: "",
			gender: "Female",
			mobile: "",
			phone: "", 
			notes: "",
			file: "",
		}

	}
	componentWillMount() {
		var that = this
		BackHandler.addEventListener('hardwareBackPress', function() {
		  that.props.navigation.navigate('Drawer')
		  return true;
		});
	  }
   
    onChangeText(text) {
      ['country', 'gender']
        .map((name) => ({ name, ref: this[name] }))
        .filter(({ ref }) => ref && ref.isFocused())
        .forEach(({ name, ref }) => {
          this.setState({ [name]: text });
          console.log('name and text are: '+{[name] : text});
        });
    }

    updateRef(name, ref) {
      this[name] = ref;
    }

	  onChangeTextCountry = country => {
		if (country == "Nepal") {
		  this.setState({ country: "Nepal" });
		}
		if (country == "India") {
		  this.setState({ country: "India" });
    }
    if (country == "Other") {
      this.setState({ country: "Other"})
    }
    alert('this selected is:'+this.state.country)
	  };

	  onChangeTextGender = gender => {
		if (gender == "Female") {
		  this.setState({ gender: "Female" });
		}
		if (gender == "Male") {
		  this.setState({ gender: "Male" });
		}
		if (gender == "Other") {
			this.setState({ gender: "Other" });
      }
    alert('this selected is:'+this.state.gender)
	  };

	  handleChange() {
		//Opening Document Picker
		DocumentPicker.show(
		  {
			filetype: [DocumentPickerUtil.pdf(),DocumentPickerUtil.plainText(),DocumentPickerUtil.audio()],
			//All type of Files DocumentPickerUtil.allFiles()
			//Only PDF DocumentPickerUtil.pdf()
			//Audio DocumentPickerUtil.audio()
			//Plain Text DocumentPickerUtil.plainText()
		  },
		  (error, res) => {

			console.log('res : ' + JSON.stringify(res));
			console.log('URI : ' + res.uri);
			console.log('Type : ' + res.type);
			console.log('File Name : ' + res.fileName);
			console.log('File Size : ' + res.fileSize);
		  }
		);
	  }

	render(){

    let countryList = [{
      value: 'Nepal', label: 'Nepal'
    }, {
      value: 'India', label: 'India'
    }, {
      value: 'Other', label: 'Other'
    }];
    let genderList = [{
      value: 'Female', label: 'Female'
    }, {
      value: 'Male', label: 'Male'
    }, {
      value: 'Other', label: 'Other'
    }];
    let { country,gender } = this.state;

		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}

		var that = this;

		return (
			<View style={styles.drawercontainer}>
			<Header style={styles.headerSec}>
              <Left style={styles.left}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Drawer")}
                  style={styles.backArrow}
                >
                  <Ionicons
                      name="ios-arrow-round-back"
                      size={30}
                      color="#ffffff"
                    />
                </TouchableOpacity>
              </Left>
              <Body style={styles.body}>
                <Text style={styles.textTitle}>Audition Application Form</Text>
              </Body>
              <Right style={styles.right}>
              </Right>
            </Header>
			<View style={styles.borderhorizontal} />

          <View style={styles.contentView}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ flexGrow: 1 }}
            >
              <View style={styles.subScrollView}>
                <TextInput
                  ref="fullname"
                  style={styles.infoText}
                  maxLength={40}
                  placeholder="Name"
                  placeholderTextColor="#929292"
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  keyboardType="default"
                  textAlign= "left"
                  value={this.state.fullname}
                  onChangeText={name => this.setState({ fullname:name })}
                  onSubmitEditing={event => {
                    this.refs.address.focus();
                  }}
                  returnKeyType="next"
                />

                <View style={styles.divider} />
				
				<TextInput
                  ref="address"
                  style={styles.infoText}
                  maxLength={40}
                  placeholder="Address"
                  placeholderTextColor="#929292"
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  keyboardType="default"
                  textAlign= "left"
                  value={this.state.address}
                  onChangeText={address => this.setState({ address:address })}
                  onSubmitEditing={event => {
                    this.refs.datepicker.focus();
                  }}
                  returnKeyType="next"
                />

                <View style={styles.divider} />

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    width: Metrics.WIDTH * 0.8,
                    justifyContent: "space-between"
                  }}
                  onPress={() => this.refs.datepicker.onPressDate()}
                >
                  <TextInput
                    editable={false}
                    ref="date"
                    style={[
                      styles.infoText,
                      {
                        width: Metrics.WIDTH * 0.7,
                        ...Platform.select({
                          ios: { marginTop: 20 },
                          android: { marginTop: 8 }
                        })
                      }
                    ]}
                    maxLength={15}
                    placeholder="Date of Birth"
                    placeholderTextColor="#929292"
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    keyboardType="default"
                    textAlign={I18nManager.isRTL ? "right" : "left"}
                    value={this.state.dob}
                  />

                  <EvilIcons
                    name="calendar"
                    size={25}
                    color="#da3c47"
                    style={{ marginTop: 20 }}
                  />
                </TouchableOpacity>

                <DatePicker
                  ref="datepicker"
                  style={{ width: 0, height: 0 }}
                  customStyles={{
                    dateIcon: {
                      width: 0,
                      height: 0
                    },
                    dateInput: {
                      borderWidth: 0
                    }
                  }}
                  date={this.state.dob}
                  mode="date"
                  format="YYYY-MM-DD"
                  maxDate={new Date()}
                  hideText={true}
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  onDateChange={dob => {
                    this.setState({ dob: dob });
                  }}
                />

                <View style={styles.divider} />

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: Metrics.WIDTH * 0.8
                  }}
                >
                  {/* <Dropdown
                    label='Select Your Country'
                    data={countryList}
                    ref={this.countryRef}
                    value={country}
                    onChangeText={this.onChangeText}
                    containerStyle={styles.mainstyle}
                    overlayStyle={styles.dropdownstyle}
                    itemTextStyle={styles.dropdownTextStyle}
                  /> */}
                  <Picker style={styles.infoText}  
                        selectedValue={this.state.country}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({country: itemValue})}  
                    >  
                    <Picker.Item label="Nepal" value="Nepal" />  
                    <Picker.Item label="India" value="India" />  
                    <Picker.Item label="Other" value="Other" />  
                </Picker>  

                </View>

                <View style={styles.genderDivider} />

			        	<View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: Metrics.WIDTH * 0.8
                  }}
                >
                  {/* <Dropdown
                    data={genderList}
                    label= "Select Your Gender"
                    ref={this.genderRef}
                    value={gender}
                    onChangeText={this.onChangeText}
                    containerStyle={styles.mainstyle}
                    overlayStyle={styles.dropdownstyle}
                    itemTextStyle={styles.dropdownTextStyle}
                  /> */}
                  <Picker style={styles.infoText}  
                        selectedValue={this.state.gender}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({gender: itemValue})}  
                    >  
                    <Picker.Item label="Female" value="Female" />  
                    <Picker.Item label="Male" value="Male" />  
                    <Picker.Item label="Other" value="Other" />  
                </Picker>  
                </View>

                <View style={styles.genderDivider} />

                <TextInput
                  ref="email"
                  style={[
                    styles.infoText,
                    {
                      ...Platform.select({
                        ios: { marginTop: 20 },
                        android: { marginTop: 8 }
                      })
                    }
                  ]}
                  maxLength={40}
                  placeholder="Email"
                  placeholderTextColor="#929292"
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  textAlign="left"
                  value={this.state.email}
				  onChangeText={email => this.setState({ email })}
				  onSubmitEditing={event => {
                    this.refs.mobile.focus();
                  }}
                  returnKeyType="next"
                />

                <View style={styles.divider} />

				<TextInput
                  ref="mobile"
                  style={styles.infoText}
                  maxLength={40}
                  placeholder="Mobile"
                  placeholderTextColor="#929292"
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  keyboardType="phone-pad"
                  textAlign= "left"
                  value={this.state.mobile}
                  onChangeText={mobile => this.setState({ mobile:mobile })}
                  onSubmitEditing={event => {
                    this.refs.phone.focus();
                  }}
                  returnKeyType="next"
                />

                <View style={styles.divider} />

				<TextInput
                  ref="phone"
                  style={styles.infoText}
                  maxLength={40}
                  placeholder="Phone"
                  placeholderTextColor="#929292"
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  keyboardType="phone-pad"
                  textAlign= "left"
                  value={this.state.phone}
                  onChangeText={phone => this.setState({ phone })}
                  onSubmitEditing={event => {
                    this.refs.notes.focus();
                  }}
                  returnKeyType="next"
                />

                <View style={styles.divider} />

				<TextInput
                  ref="notes"
                  style={styles.infoText}
				  multiline={true}
				  numberOfLines={5}
                  placeholder="Notes"
                  placeholderTextColor="#929292"
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  keyboardType="phone-pad"
                  textAlign= "left"
                  value={this.state.notes}
                  onChangeText={notes => this.setState({ notes })}
                  
                  returnKeyType="done"
                />

        <View style={styles.divider} />
				<TouchableOpacity
         		 activeOpacity={0.5}
				  	style={{ alignItems: 'center' }}
				  	onPress={this.handleChange.bind(this)}>
              <Image
              source={{
              uri:
                'https://aboutreact.com/wp-content/uploads/2018/09/clips.png',
              }}
                  />
         		 <Text style={{ marginTop: 10 }}>Add Attachment</Text>
        	</TouchableOpacity>

          <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Drawer")}
                  style={styles.applicationForm}
                  >
                    <Text 
                      style = {{textAlign:"center", color:"white",
                      fontSize: 20 }}
                    >
                      Submit Form 
                    </Text>

            </TouchableOpacity>

              </View>
            </ScrollView>
          </View>
		</View>
		);

	}


}