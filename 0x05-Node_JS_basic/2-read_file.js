const fs = require('fs');
// We use fs so that data can be read synchronously

function countStudents(path) {
	try {
		const data = fs.readFileSync(path, 'utf-8');
		const lines = data.split('\n').filter(line => line.trim() !== '');

		if (lines.length === 0) {
			throw new Error('Empty database');
		}

		const students = lines.map(line => line.split(','));
		const fields = {};
		students.forEach(student => {
			const field = student[3];
			if (field in fields) {
				fields[field].push(student[0]);
			} else {
				fields[field] = [student[0]];
			}
		});

		let totalStudents = 0;
		Object.entries(fields).forEach(([field, names]) => {
			totalStudents += names.length;
			console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
		});

		console.log(`Number of students: ${totalStudents}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
	}
}

module.exports = countStudents;
