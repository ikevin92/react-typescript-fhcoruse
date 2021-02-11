import { useState } from 'react';

// creamos una interface para las reglas de los objetos
interface User {
    uid: string;
    name: string;
}

const tempUser: User = {
    uid: 'XTZ123',
    name: 'Maria'
};

const Usuario = () => {

    const [ user, setUser ] = useState<User>( tempUser ); // le decimos que es de tipo User

    const login = () => {
        setUser( {
            uid: 'ABC123',
            name: 'Kevin'
        } );
    };

    return (
        <div className="mt-5">
            <h3>Usuario: useState</h3>
            
            <button
                onClick={ login }
                className="btn btn-outline-primary"
            >
                Login

            </button>

            {
                ( !user )
                    ? <pre className="mt-3"> No hay Usuario </pre>
                    : <pre className="mt-3"> { JSON.stringify( user ) } </pre>
            }

        </div>
    );
};

export default Usuario;
