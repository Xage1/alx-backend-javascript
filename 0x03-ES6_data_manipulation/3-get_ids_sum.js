function getStudentIdsSum(studentList) {
	const sum = studentList.reduce((accumulator, student) => accumulator + student.id, 0);
	return sum;
}

export default getStudentIdsSum;
