
import { ChangeEvent, useState } from 'react';

// export function useForm<T> ( initialState: T ) {
export const useForm = <T extends Object> ( initialState: T ) => {

    const [ formulario, setFormulario ] = useState( initialState );

    // llenamos los datos de nuestros input
    const handleChange = ( { target }: ChangeEvent<HTMLInputElement> ): void => {

        const { name, value } = target;

        setFormulario( {
            ...formulario,
            [ name ]: value
        } );

    };

    return {
        formulario,
        handleChange,
        ...formulario // ENVIAMOS DE FORMA DESESTRUCTURADA
    };
};

