import React, { FC, ChangeEvent, useState } from 'react';

export interface Props {
    name: string;
    age: number;
    email: string;
    car: CarManufacturer;
}
// One way of doing it
// const Person = (props: Props) => {
//     // States
//     return (
//         <div>
//         <h1>
//             {props.name}
//         </h1>
//         <h1>
//             {props.age}
//         </h1>
//         <h1>
//             {props.email}
//         </h1>
//     </div>
//   )
// }
// Funtional component way

// enum
export enum CarManufacturer {
    BMW = 'BMW',
    VW = 'VolksWagen',
    Porsche = 'Porsche'
}

const Person:FC<Props> = ({name,age,email, car}) => {
    const [country, setCountry] = useState<string  | null>()
    const haddleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value) 
    } 

    return (
        <div>
            <h1> { name } </h1>
            <h1> { age } </h1>
            <h1> { email } </h1>
            <input placeholder='Enter your country' onChange={haddleChange} />
        
            { country }
            { car }
        </div>
    )
}

export default Person

