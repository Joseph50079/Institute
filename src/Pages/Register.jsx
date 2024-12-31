import  { useState } from "react";
import {
  Input,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Progress,
} from "@material-tailwind/react";
import { useCountries } from "use-react-countries";
import { FileUploader } from "react-drag-drop-files";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputCountryNumber from "./registerpage/InputCountry";
import ProgramSelector from "../components/utils/StudentMajor";
import ProfileImageUploader from "../components/utils/ProfileImage";
import axios from "axios";
import "./Register.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function Register() {
  const { countries } = useCountries();
  const [country, setCountry] = useState(0);
  const { name, flags } = countries[country];
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState([]);
  const [Identity, setIdentity] = useState([]);
  const [image, setImage] = useState({ profileImage: null });
  const [major, setMajor] = useState("");
  const [category, setCategory] = useState("");
  const [password, setPassword] = useState("");

  const [passtat, setStatus] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    middleName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    dateOfBirth: "",
  });
  const fileTypes = ["JPG", "PNG", "GIF", "PDF"];

  // Step navigation
  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const handleChange = (fileList) => {
    const selectedFiles = Array.isArray(fileList) ? fileList : Array.from(fileList);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleChangeId = (idList) => {
    const selectedFiles = Array.isArray(idList) ? idList : Array.from(idList);
    setIdentity((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleChangeimage = (image) => {
    setImage({ profileImage: image });
  };

  const handleMajorSelect = (major) => {
    setMajor(major);
  };

  const handleCategory = (category) => {
    setCategory(category);
  };

  const handleConfirmPass = (pass) => {

    setStatus(pass === password);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        ...formData,
        major,
        category,
        country: name,
        files,
        Identity,
        profileImage: image.profileImage,
      };
      const response = await axios.post("/api/register", payload);
      toast.success(response.data.message || "Registration successful!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed!");
    }
  };

  // Steps content
  const steps = [
    {
      title: "Programs Majors",
      content: (
        <ProgramSelector
          onSelectMajor={handleMajorSelect}
          onSelectCategory={handleCategory}
        />
      ),
    },
    {
      title: "(1 / 7)Your Details:",
      content: (
        <>
          <div className="flex flex-wrap sm:flex-nowrap gap-4 mb-4">
            <Input
              type="text"
              label="First Name"
              name="firstName"
              required
              onChange={handleInputChange}
            />
            <Input
              type="text"
              label="Second Name"
              name="secondName"
              required
              onChange={handleInputChange}
            />
            <Input
              type="text"
              label="Middle Name (optional)"
              name="middleName"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <Input
              type="date"
              label="Date of Birth"
              name="dateOfBirth"
              required
              onChange={handleInputChange}
            />
          </div>
        </>
      ),
    },
    {
      title: "(2 / 7) Contact Details:",
      content: (
        <>
          <div className="flex flex-wrap sm:flex-nowrap gap-4 mb-4">
            <Input
              type="email"
              label="Email Address"
              name="email"
              required
              onChange={handleInputChange}
            />
            <InputCountryNumber />
          </div>
          <Typography className="font-bold mb-5">Address</Typography>
          <Input
            type="text"
            label="Street Address"
            name="street"
            required
            onChange={handleInputChange}
          />
          <div className="flex flex-wrap sm:flex-nowrap gap-4 mt-4 mb-4">
            <Input
              type="text"
              label="City"
              name="city"
              required
              onChange={handleInputChange}
            />
            <Input
              type="text"
              label="State / Province"
              name="state"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-wrap sm:flex-nowrap gap-4 mt-4 mb-4">
            <Input
              type="number"
              label="Zip code / Postal Code"
              name="zip"
              required
              onChange={handleInputChange}
            />
            <div className="relative flex w-full max-w-[24rem]">
              <Menu placement="bottom-start">
                <MenuHandler>
                  <Button
                    ripple={false}
                    variant="text"
                    color="blue-gray"
                    className="flex justify-center h-10 w-10 items-center gap-2 rounded-r-none border border-r border-blue-gray-200 bg-blue-gray-500/10"
                  >
                    <img
                      src={flags.svg}
                      alt={name}
                      className="h-auto w-auto max-h-10 max-w-10 rounded-full"
                    />
                  </Button>
                </MenuHandler>
                <MenuList className="max-h-[20rem] max-w-[18rem]">
                  {countries.map(({ name, flags }, index) => (
                    <MenuItem
                      key={name}
                      value={name}
                      className="flex items-center gap-2"
                      onClick={() => setCountry(index)}
                    >
                      <img
                        src={flags.svg}
                        alt={name}
                        className="h-5 w-5 rounded-full object-cover"
                      />
                      {name}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
              <Input
                type="text"
                value={name}
                label="Country"
                placeholder="Country"
                required
              />
            </div>
          </div>
        </>
      ),
    },
    {
        title: "(3 / 7) Educational Background",
        content: (
            <div className="min-h-96">
                <FileUploader
                    multiple={true}
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                    required
                >
                    <div className="border-dashed border-2 h-56 border-gray-400 rounded-lg p-6 text-center">
                        <p className="mb-4">Drag and drop your Academic Transcript and Certificates here</p>
                        <Typography>e.g, WAEC, NECO, JAMB, B.Sc. transcripts</Typography>
                        <Button variant="outlined" color="blue-gray">
                            Browse Files
                        </Button>
                        <div>
                            {files.length > 0 ? (
                                <Typography color="lightgray">Uploaded Successfully<span className="font-extrabold text-green-600"> ✔</span></Typography>
                            ) : null}
                        </div>
                    </div>
                </FileUploader>
                {files.length > 0 && files.map((file, index) => (
                    <p key={index} className={`font-bold mt-6 ${file ? 'text-green-700' : 'text-lightgray' }`}>{file ? `File name: ${file.name}` : "no files uploaded yet"}</p>
                ))}
            </div>
        ),
    },
    {
        title: "(4 / 7) Proof of Identity",
        content: (
            <div className="min-h-96">
                <FileUploader
                    multiple={true}
                    handleChange={handleChangeId}
                    name="file"
                    types={fileTypes}
                    required
                >
                    <div className="border-dashed border-2 h-56 border-green-600 rounded-lg p-6 text-center">
                        <p className="mb-4">Drag and drop your Proof of Identifycation here</p>
                        <Typography>e.g, National ID card, Passport, or Driver&apos;s License</Typography>
                        <Button variant="outlined" color="blue-gray">
                            Browse Files
                        </Button>
                        <div>
                            {Identity.length > 0 ? (
                                <Typography color="lightgray">Uploaded Successfully<span className="font-extrabold text-green-600"> ✔</span></Typography>
                            ) : null}
                        </div>
                    </div>
                </FileUploader>
                {Identity.length > 0 && files.map((file, index) => (
                    <p key={index} className={`font-bold mt-6 ${file ? 'text-green-700' : 'text-lightgray' }`}>{file ? `File name: ${file.name}` : "no files uploaded yet"}</p>
                ))}
            </div>
        ),
    },
    {
        title: "(5 / 7) Profile Info",
        content: (
            <div>
                <ProfileImageUploader onImageSelect={handleChangeimage} />
            </div>
        ),
    },
    {
        title: "(6 / 7) Confirm password:",
        content: (
            <div className=" sm:w-[32rem]">
                <Input 
                type="password" 
                label="Password" 
                onChange={(e) => setPassword(e.target.value)}
                />
                
                <Typography
                    variant="small"
                    color="gray"
                    className="mt-2 mb-10 flex items-center gap-1 font-normal"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-px h-4 w-4"
                    >
                    <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                    />
                    </svg>
                    Use at least 6 characters, one uppercase, one lowercase and one number.
                </Typography>
                <Input 
                type="password" 
                label="Confirm Password"
                onChange={(e) => handleConfirmPass(e.target.value)}
                success={passtat}
                />
                {!passtat && (
                    <p className="text-red-500 text-sm mt-2">Passwords do not match</p>
                )}
            </div>
        )
    },
    {
        title: "(7 / 7) Confirmation:",
        content: (
            <>
                <Typography className="font-bold mb-5">Review your details and submit</Typography>
                <div className="text-left">
                    <div className="mb-4">
                        <Typography variant="small" className="font-bold">
                            Selected Major:
                        </Typography>
                        <Typography variant="body" color="blue-gray">
                            {major || "Not selected"}
                        </Typography>
                    </div>
                    <div className="mb-4">
                        <Typography variant="small" className="font-bold">
                            Selected Category:
                        </Typography>
                        <Typography variant="body" color="blue-gray">
                            {category || "Not selected"}
                        </Typography>
                    </div>
                    <div className="mb-4">
                        <Typography variant="small" className="font-bold">
                            Profile Image:
                        </Typography>
                        {image.profileImage ? (
                            <img
                                src={URL.createObjectURL(image.profileImage)}
                                alt="Profile Preview"
                                className="w-20 h-20 rounded-full"
                            />
                        ) : (
                            <Typography variant="body" color="blue-gray">
                                Not uploaded
                            </Typography>
                        )}
                    </div>
                    <div className="mb-4">
                        <Typography variant="small" className="font-bold">
                            Uploaded Documents:
                        </Typography>
                        {files.length > 0 ? (
                            files.map((file, index) => (
                                <Typography key={index} variant="body" color="blue-gray">
                                    {file.name}
                                </Typography>
                            ))
                        ) : (
                            <Typography variant="body" color="blue-gray">
                                No files uploaded
                            </Typography>
                        )}
                    </div>
                    <div className="mb-4">
                        <Typography variant="small" className="font-bold">
                            Uploaded Identity Documents:
                        </Typography>
                        {Identity.length > 0 ? (
                            Identity.map((id, index) => (
                                <Typography key={index} variant="body" color="blue-gray">
                                    {id.name}
                                </Typography>
                            ))
                        ) : (
                            <Typography variant="body" color="blue-gray">
                                No identity documents uploaded
                            </Typography>
                        )}
                    </div>
                    <div className="mb-4">
                        <Typography variant="small" className="font-bold">
                            Password:
                        </Typography>
                        <Typography variant="body" color="blue-gray">
                            {password ? "******" : "Not set"}
                        </Typography>
                    </div>
                </div>
                <div className="text-center mt-6">
                    <Button color="green" onClick={handleSubmit}>
                        Confirm and Submit
                    </Button>
                </div>
            </>
        ),
    },
    // Add the rest of the steps here
  ];

  return (
    <div className="register h-auto min-h-screen overflow-clip flex flex-col justify-center p-6">
        <ToastContainer />
      <h1 className="flex justify-center font-extrabold p-3 " color="blueGray">Registration</h1>
      <Progress value={(step / steps.length) * 100} color="blue" label="completed" className="mb-6" />
      <div className="bg-offwhite opacity-90 m-auto md:min-w-96 rounded-xl p-6 shadow-2xl ">
        <TransitionGroup>
          <CSSTransition key={step} timeout={300} classNames="fade">
            <div>
              <Typography className="font-extrabold text-lg mb-7" color="blueGray">
                {steps[step - 1].title}
              </Typography>
              {steps[step - 1].content}
            </div>
          </CSSTransition>
        </TransitionGroup>
        <div className="flex justify-between mt-4">
          {step > 1 && (
            <Button color="blue" onClick={prevStep} ripple={false} className="w-auto">
              Previous Step
            </Button>
          )}
          {step < steps.length && (
            <Button color="blue" onClick={nextStep} ripple={false} className="w-auto">
              Next Step
            </Button>
          )}
          {step === steps.length && (
            <Button
              color="green"
              onClick={handleSubmit}
              ripple={false}
              className="w-auto"
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
