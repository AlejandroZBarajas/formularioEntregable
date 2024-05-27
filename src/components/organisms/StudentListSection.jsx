import React from "react";
import './StudentListSection.css';

function StudentListSection({ studentsList }) {
    return (
        <div id="student_list_section">
            <h2>Lista de Alumnos Registrados</h2>
            {studentsList.head ? (
                <IterateNodes node={studentsList.head} />
            ) : (
                <p>No hay alumnos registrados</p>
            )}
        </div>
    );
}

function IterateNodes({ node }) {
    if (!node) return null;
    return (
        <>
            <div id="student-record">
                <h2>{node.data.nombreAlumno}</h2>
                <h2>{node.data.apellidos}</h2>
                <p>Email: {node.data.email}</p>
                <p>Fecha de Nacimiento: {node.data.fechaNacimiento}</p>
                <p>Tutor: {node.data.tutor}</p>
                <p>Número del Tutor: {node.data.numeroTutor}</p>
            </div>
            {node.next && <IterateNodes node={node.next} />}
        </>
    );
}

export default StudentListSection;
