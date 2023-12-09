import React, {useState} from 'react';
import {Alert, KeyboardAvoidingView, View} from 'react-native';
import TextComponent from './src/components/TextComponent';
import InputComponent from './src/components/InputComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [searchKey, setSearchKey] = useState('');

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <View style={{justifyContent: 'center', flex: 1}}>
        <View style={{paddingHorizontal: 16}}>
          <InputComponent
            value={email}
            onChange={val => setEmail(val)}
            title="Your email"
            prefix={
              <Ionicons name="mail-outline" size={18} color={'#e0e0e0'} />
            }
            placeholder="Email address"
            allowClear
            type="email-address"
          />

          <InputComponent
            value={password}
            onChange={val => setPassword(val)}
            placeholder="Password"
            prefix={
              <MaterialIcons name="password" size={18} color={'#e0e0e0'} />
            }
            title="Password"
            password
            showPass={showPass}
            setShowPass={() => setShowPass(!showPass)}
          />
        </View>
        <View style={{paddingHorizontal: 16}}>
          <InputComponent
            value={searchKey}
            onChange={val => setSearchKey(val)}
            placeholder="Search..."
            allowClear
            onEnd={() => Alert.alert('', searchKey)}
            prefix={<Ionicons name="search" size={20} color={'#676767'} />}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default App;
