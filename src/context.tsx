import React, { Provider } from 'react';
import { BrowserInfo } from './game/types';

export type AppContextType = Readonly<{
  browserInfo?: BrowserInfo;
  repeat: boolean;
  setRepeat: (repeat: boolean) => void;
}>;

export const AppContext = React.createContext<AppContextType | undefined>(undefined);

export function createCtx<ContextType>(): Readonly<
  [() => ContextType, Provider<ContextType | undefined>]
> {
  const context = React.createContext<ContextType | undefined>(undefined);

  function useContext() {
    const c = React.useContext(context);
    if (!c) {
      throw new Error('useContext must be inside a Provider with a value');
    }
    return c;
  }
  return [useContext, context.Provider] as const;
}

export const [useAppContextConsumer, AppContextProvider] = createCtx<AppContextType>();
