import Output from '../atoms/Output';
import StudentName from '../atoms/StudentNames';
import React from 'react';

const StudentCard = (props) => {
    return (
        <div className="student">
            <StudentName>{props.names}</StudentName>
            <Output>{props.lastname}</Output>
            <Output>{props.mail}</Output>
            <Output>{props.bday}</Output>
            <Output>{props.tutor}</Output>
            <Output>{props.tutornum}</Output>
        </div>
    );
};

export default StudentCard;