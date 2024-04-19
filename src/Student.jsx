import React from 'react';


const Student = () => {
  const Name = [
    "urvi",
    "vanshika",
    "nikki",
    "aksh",
    "garv",
    "shivani",
  ];
  
  const Students = [
    { rollno: 1123278, techStack: "react" },
    { rollno: 1123285, techStack: "javascript" },
    { rollno: 1123236, techStack: "html" },
    { rollno: 1123245, techStack: "python" },
  ];

  return (
    <>
      <ul>
        {Students.map((item) => (
          <li key={item.rollno}>
            Roll No: {item.rollno}, Tech Stack: {item.techStack}
          </li>
        ))}
      </ul>
    </>
  );
};


export default Student;
