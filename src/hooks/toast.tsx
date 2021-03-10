import React, {createContext,useCallback, useContext , useState} from 'react';
import {uuid} from 'uuidv4';

import ToastContainer from '../components/ToastContainer';

export interface ToastMessage{
  id: string;
  type?: 'sucess' | 'error' | 'info';
  title: string;
  description?: string;

}

interface ToastContextData{
  addToast(message: Omit<ToastMessage, 'id'>):void;
  removeToast():void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
    const [messages, setMessages] = useState<ToastMessage[]>([]);


    const addToast = useCallback(({type, title, description}: Omit<ToastMessage, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };


      setMessages((state) => [...state, toast]); // Não queremos perder os toast em tela
    },
    [],
    );

    const removeToast = useCallback(() => {
      console.log('removeToast');
    },[],
    );

  return (
    <ToastContext.Provider value={{ addToast, removeToast}}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
}

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if(!context){
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export {ToastProvider, useToast};