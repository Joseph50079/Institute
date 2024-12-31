import { useState } from "react";
import PropTypes from "prop-types";

const ProfileImageUploader = ({ onImageSelect }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        setError("Please select an image file.");
        setImagePreview(null);
        return;
      }
      setError("");
      setImagePreview(URL.createObjectURL(file));

      // Send the file to the parent component
      if (onImageSelect) {
        onImageSelect(file);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Upload Profile Picture
      </h2>

      <div className="relative w-48 h-48 mb-4">
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Profile Preview"
            className="w-full h-full object-cover rounded-full shadow-lg border-4 border-blue-400"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-full border-2 border-dashed border-gray-400">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>

      <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out">
        Choose Image
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};
ProfileImageUploader.propTypes = {
  onImageSelect: PropTypes.func.isRequired,
};

export default ProfileImageUploader;
