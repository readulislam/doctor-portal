import { Button, Label } from "flowbite-react";
import React from "react";

const Filtering = () => {
  return (
    <from>
      <div className=" grid grid-cols-4 gap-4 place-items-center mt-10">
        <input
          placeholder="Search"
          color="white"
          type="text"
          className=" border-t-0 w-52 px-2 border-r-0 border-l-0
        border-b-2 focus:outline-none focus:ring-0 border-gray-200 appearance-none"
        />
        <div className="w-80 ">
          <Label className="flex items-center gap-1">
            <span className="text-sm whitespace-nowrap">Filter by :</span>

              <select
                id="underline_select"
                className=" py-2.5  w-full  text-md  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
              >
                <option selected>Location</option>
                <option className="" value="JA">mSmart Hospital, jaipur</option>
                <option  value="DE">mSmart Hospital, Delhi</option>
                <option  value="GR">mSmart Hospital, Gurugram</option>
                <option  value="Aj">mSmart Hospital, Ajmer</option>
              </select>
          </Label>
        </div>
        <div className="w-52">
          <select
            id="underline_select"
            className=" py-2.5  w-full  text-md  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
          >
            <option selected>Speciality</option>
              <option value="JA">Cardiology</option>
              <option value="DE">Neurology</option>
              <option value="GR">Nephrology</option>
              <option value="Aj">Urology</option>
              <option value="JA">Gastroenterology</option>
              <option value="DE">Radiaton Oncology</option>
              <option value="GR">CTVS</option>
              <option value="Aj">Neuro Surgery</option>
              <option value="JA">Orthopedics</option>
              <option value="DE">Obstetrics & Gynaecology</option>
              <option value="GR">Kidney Transplant</option>
              <option value="Aj">Plastic Surgery</option>
              <option value="JA">Internal Medicine</option>
              <option value="DE">Critical Care</option>
              <option value="GR">Endocrinology</option>
              <option value="Aj">ENT</option>
              <option value="JA">Emergency Medicine</option>
              <option value="DE">Dermatology</option>
              <option value="GR">Psychiatry</option>
              <option value="Aj">Rheumatology And Clinical Immunology</option>
              <option value="JA">Opthalmollogy</option>
              <option value="DE">Pediatrics</option>
              <option value="GR">Respiratory Medicine</option>
              
          </select>
        </div>

        <div className="flex items-center gap-4">
          <Button type="submit" className="px-2 " gradientDuoTone="cyanToBlue">
            Search
          </Button>
          <Button color="gray">Reset</Button>
        </div>
      </div>
    </from>
  );
};

export default Filtering;
