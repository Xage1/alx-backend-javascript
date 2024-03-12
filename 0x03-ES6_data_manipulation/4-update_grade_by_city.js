function updateStudentGradeByCity(studentList, city, newGrades) {
  const updateStudents = studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);

      if (matchingGrade) {
        return {
          id: student.id,
          firstname: student.firstname,
          location: student.location,
          grade: matchingGrade.grade,
        };
      }
      return {
        id: student.id,
        firstName: student.firstname,
        location: student.location,
        grade: 'N/A',
      };
    });
  return updateStudents;
}
export default updateStudentGradeByCity;
