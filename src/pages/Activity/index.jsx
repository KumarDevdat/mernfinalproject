import { Link } from "react-router-dom";
import { useState } from "react";
import { activityFields } from "../../utils/formFields.js";
import FormButton from "../../components/FormButton";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar.jsx";
import { beams } from "../../assets/index.js";
const fields = activityFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function ActivityPage() {
  const [activityState, setActivityState] = useState(fieldsState);

  const handleChange = (e) =>
    setActivityState({ ...activityState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(activityState);
    createActivity();
  };

  //handle Activity API Integration here
  const createActivity = () => {};

  return (
    <>
      <img
        src={beams}
        alt=""
        className="absolute mt-20 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-none"
        width="1308"
      />
      <Navbar />
      <div className="flex items-center justify-center h-screen min-h-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md p-8 space-y-7 min-w-sm rounded-2xl drop-shadow-2xl bg-gradient-to-bl from-[#4897afd3] from-20% to-[#55f0f065] to-40%">
          <h2 className="mt-1 font-mono text-3xl text-center text-gray-900">
            Activity
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="">
              {fields.map((field) => (
                <Input
                  key={field.id}
                  handleChange={handleChange}
                  value={activityState[field.id]}
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  isRequired={field.isRequired}
                  placeholder={field.placeholder}
                  options={field.options}
                />
              ))}
              <FormButton handleSubmit={handleSubmit} text="Activity" />
            </div>
          </form>
          <p className="mt-5 text-sm text-center text-gray-600">
            It is the Activity Time{" "}
            <Link
              to="/Activity"
              className="font-medium text-purple-600 hover:text-purple-500"
            >
              Activity
            </Link>
          </p>
          <div className="absolute bottom-0 left-0 h-[5vw] w-[5vw] rounded-full bg-gradient-to-r from-[#72eeba4b] from-20% to-[#72EEEE] to-100% shadow-gray-400"></div>
        </div>
      </div>
    </>
  );
}
