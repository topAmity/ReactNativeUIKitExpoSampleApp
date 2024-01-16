import React, { useState } from 'react';
import {
  AmityUiKitProvider,
  AmityUiKitSocial,
} from '@amityco/asc-react-native-ui-kit'

import { AmityUiKitProvider as ChatProvider, AmityUiKitChat } from '@amityco/react-native-chat-ui-kit'
import LoginPage from './Login';

export interface ILoginForm {
  userId: string;
  apiKey: string;
  apiRegion: string;
  module: string
}
export default function App() {
  const [form, setForm] = useState<ILoginForm>();

  const submitForm = (value: ILoginForm) => {
    setForm(value);
  };
  return !form ? (
    <LoginPage onSubmit={submitForm} />
  ) : (
    form.module === 'chat' ?
      <ChatProvider
        apiKey={form.apiKey}
        apiRegion={form.apiRegion}
        userId={form.userId}
        displayName={form.userId}
        apiEndpoint={`https://api.${form.apiRegion}.amity.co`}>

        <AmityUiKitChat />
      </ChatProvider> :
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
