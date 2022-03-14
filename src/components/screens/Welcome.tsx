import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForms } from '../hooks/useForms';

export const Welcome = () => {
    const { formulario, inyectorA, inyectorB, inyectorC, lightSpeed, onChange } = useForms({
        inyectorA: 0,
        inyectorB: 0,
        inyectorC: 0,
        lightSpeed: 0,
    })
    const navigate = useNavigate();
    const handleCalculate = () => {

    }

    return (
        <div className='container'>
            <h1 className=''>KinAnalitics Test Formulary</h1>
            <hr />
            <label className='form-label'>Inyector A:</label>
            <input className='form-control' type={'number'} pattern="[0-9]{1,3}" required placeholder="Inyector A" value={inyectorA} onChange={({ target }) => onChange(target.value, 'inyectorA')} />
            <label className='form-label'>Inyector B:</label>
            <input className='form-control' type={'number'} pattern="[0-9]{1,3}" required placeholder="Inyector A" value={inyectorB} onChange={({ target }) => onChange(target.value, 'inyectorB')} />
            <label className='form-label'>Inyector C:</label>
            <input className='form-control' type={'number'} pattern="[0-9]{1,3}" required placeholder="Inyector A" value={inyectorC} onChange={({ target }) => onChange(target.value, 'inyectorC')} />
            <label className='form-label'>Light Speed Percentage:</label>
            <input className='form-control' type={'number'} pattern="[0-9]{1,3}" required placeholder="Velocidad de la luz" value={lightSpeed} onChange={({ target }) => onChange(target.value, 'lightSpeed')} />
            <button type='submit' className='btn btn-primary' onClick={handleCalculate}>Calcular</button>
            <code>
                <pre>{JSON.stringify(formulario, null, 2)}</pre>
            </code>
        </div>
    )
}
