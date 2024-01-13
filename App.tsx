import React, { useState } from 'react';
import {
  AmityUiKitProvider,
  AmityUiKitSocial,
} from '@amityco/asc-react-native-ui-kit'
import LoginPage from './Login';

export interface ILoginForm {
  userId: string;
  apiKey: string;
  apiRegion: string;
}
export default function App() {
  const [form, setForm] = useState<ILoginForm>();

  const submitForm = (value: ILoginForm) => {
    setForm(value);
  };
  return !form ? (
    <LoginPage onSubmit={submitForm} />
  ) : (

    <AmityUiKitProvider
      apiKey={form.apiKey}
      apiRegion={form.apiRegion}
      userId={form.userId}
      displayName={form.userId}
      apiEndpoint={`https://api.${form.apiRegion}.amity.co`}>
      <AmityUiKitSocial />
    </AmityUiKitProvider>
  );
}
