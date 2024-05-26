import { useState } from "react";
import Swal from "sweetalert2";
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import { Node, LinkedList } from "../../data/LinkedList";
import StudentListSection from "./StudentListSection";
import './SectionForm.css';


function SectionForm() {
    const [nombreAlumno, setNombreAlumno] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [tutor, setTutor] = useState('');
    const [numeroTutor, setNumeroTutor] = useState('');
    const [listaEstudiantes, setListaEstudiantes] = useState(new LinkedList());

    const handlerClick = () => {
        const newStudent = {
            nombreAlumno,
            apellidos,
            email,
            fechaNacimiento,
            tutor,
            numeroTutor
        };

        // Actualizamos la lista enlazada con el nuevo estudiante
        const updatedList = new LinkedList();
        let current = listaEstudiantes.head;
        while (current) {
            updatedList.insert(current.data);
            current = current.next;
        }
        updatedList.insert(newStudent);

        setListaEstudiantes(updatedList);  // Forzar re-renderizado

        Swal.fire({
            title: "¡Éxito!",
            text:  "Alumno creado",
            footer: ` ${nombreAlumno}  ${apellidos}`,
            imageUrl: "https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg",
            imageHeight: 250,
            imageAlt: "React Image"
        });

        // Limpiar los campos del formulario
        setNombreAlumno(''); 
        setApellidos(''); 
        setEmail(''); 
        setFechaNacimiento(''); 
        setTutor(''); 
        setNumeroTutor('');
    };

    return (
        <>
            <div id="login_section">
                <Field type="text" placeholder="ej. Daniela" text="Nombre del Alumno (a)" val={nombreAlumno} fnVal={setNombreAlumno}/>
                <Field type="text" placeholder="ej. De la Cruz Jimenez" text="Apellidos" val={apellidos} fnVal={setApellidos}/>
                <Field type="email" placeholder="ejemplo@gmail.com" text="Email" val={email} fnVal={setEmail}/>
                <Field type="date" placeholder="16/07/2024" text="Fecha de nacimiento" val={fechaNacimiento} fnVal={setFechaNacimiento}/>
                <Field type="text" placeholder="ej. Antonio de la Cruz" text="Nombre del tutor (a)" val={tutor} fnVal={setTutor}/>
                <Field type="number" placeholder="ej. 9612767861" text="Número telefónico del tutor" val={numeroTutor} fnVal={setNumeroTutor}/>

                <Button type="submit" title="Crear Alumno" onclick={handlerClick}/>
            </div>
            <StudentListSection studentsList={listaEstudiantes} />
        </>
     );
}

export default SectionForm;
