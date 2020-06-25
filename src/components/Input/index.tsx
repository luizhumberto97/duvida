import React, {InputHTMLAttributes} from 'react';
import {IconBaseProps} from 'react-icons'

import { Container } from './styles';

// O Que o input vai receber? -> todas as propriedades do HTML -> por isso vamos criar uma interface
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string; /* Nome Obrigatorio */
  icon: React.ComponentType<IconBaseProps>;

}


const Input: React.FC<InputProps> = ({icon: Icon, ...rest}) => (
  <Container>

    {
    // Se o ICON EXISTIR
      Icon && <Icon size={20} />
    }
    <input {...rest} />
  </Container>

)

export default Input;
