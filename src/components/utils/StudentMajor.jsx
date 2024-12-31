import { useState} from "react";
import { Select, Option } from "@material-tailwind/react";
import PropTypes from "prop-types";

const programCategories = {
  "Science and Technology": [
    "Computer Science",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Data Science and AI",
    "Civil Engineering",
    "Robotics and Automation",
  ],
  "Business and Management": [
    "Business Administration",
    "Accounting and Finance",
    "Marketing",
    "Entrepreneurship",
    "Human Resource Management",
  ],
  "Arts and Humanities": [
    "English Language and Literature",
    "History",
    "Philosophy",
    "Fine Arts",
    "Communication and Media Studies",
  ],
  "Health and Medical": [
    "Medicine and Surgery",
    "Nursing",
    "Pharmacy",
    "Public Health",
    "Physiotherapy",
    "Nutrition and Dietetics",
  ],
  "Social Sciences": [
    "Psychology",
    "Political Science",
    "Sociology",
    "International Relations",
    "Development Studies",
  ],
};

const ProgramSelector = ({ onSelectMajor, onSelectCategory, onSelectType }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [programs, setPrograms] = useState([]);
  const [type, setType] = useState("");

  const handleCategoryChange = (category) => {
    // Reset program when category changes
    setSelectedProgram("");
    
    if (!category) {
      setSelectedCategory("");
      setPrograms([]);
      onSelectCategory("");
      return;
    }
    
    setSelectedCategory(category);
    setPrograms(programCategories[category] || []);
    onSelectCategory(category);
  };

  const handleProgramChange = (major) => {
    setSelectedProgram(major);
    onSelectMajor(major);
  };

  const handleStudyType = (type) => {
    setType(type);
    onSelectType(type);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Select Your Program
      </h1>

      {/* Category Selection */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Choose a Category
        </label>
        <Select
          key="category-select"
          label="Select Category"
          value={selectedCategory}
          onChange={(value) => {
            handleCategoryChange(value || "");
          }}
        >
          <Option value="">-- Select Category --</Option>
          {Object.keys(programCategories).map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </Select>
      </div>

      {/* Program/Major Selection */}
      {programs.length > 0 && (
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Choose a Major
          </label>
          <Select
            key={`program-select-${selectedCategory}`}
            label="Select Major"
            value={selectedProgram}
            onChange={(value) => {
              handleProgramChange(value || "");
            }}
          >
            <Option value="">-- Select Major --</Option>
            {programs.map((program) => (
              <Option key={program} value={program}>
                {program}
              </Option>
            ))}
          </Select>
        </div>
      )}
      <Select 
      label="Study Type"
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }} 
      value={type}
      onChange={(val) => handleStudyType(val)}>

        <Option value="Onsite">Onsite</Option>
        <Option value="Online">Online</Option>
      </Select>
    </div>
  );
};

ProgramSelector.propTypes = {
  onSelectMajor: PropTypes.func.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
  onSelectType: PropTypes.func.isRequired,
};

export default ProgramSelector;