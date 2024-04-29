const fs = require('fs');

function countStudents(path) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, 'utf8', (err, data) => {
			if (err) {
				reject(new Error('Cannot load the database'));
			} else {
				const lines = data.split('\n').filter(line => line.trim() !== '');
				if (lines.length === 0) {
					reject(new Error('Empty database'));
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
				resolve();
			}
		});
	});
}

module.exports = countStudents;
