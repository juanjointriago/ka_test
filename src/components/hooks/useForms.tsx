import { useState } from "react";

/**
 * 
 * @param  initState type T Generic Object  for processing diferents data with different functions
 * @returns data provided in some method for process formulary
 * @author JuanIntriagoVillarreal
 * @version 0.0.0.1
 */


export const useForms = <T extends Object>(formulario: T) => {
  const [state, setState] = useState( formulario );

    const onChange = ( value: string, campo: keyof T ) => {
        setState({
            ...state,
            [campo]: value
        });
    }

    return {
        ...state,
        formulario: state,
        onChange,
    }

};