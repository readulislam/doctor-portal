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
              <option value="Cardiology">Cardiology</option>
              <option value="Oncology">Oncology</option>
              <option value="Neurology">Neurology</option>
              <option value="Nephrology">Nephrology</option>
              <option value="Urology">Urology</option>
              <option value="Gastroenterology">Gastroenterology</option>
              <option value="Radiaton Oncology<">Radiaton Oncology</option>
              <option value="CtYS">CTVS</option>
              <option value="Neuro Surgery">Neuro Surgery</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Obstetrics  & Gynaecology">Obstetrics & Gynaecology</option>
              <option value="Kidney Transplant">Kidney Transplant</option>
              <option value="Plastic Surgery">Plastic Surgery</option>
              <option value="Internal Medicine">Internal Medicine</option>
              <option value="Critical Care">Critical Care</option>
              <option value="Endocrinology">Endocrinology</option>
              <option value="ENT">ENT</option>
              <option value="Emergency Medicine">Emergency Medicine</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Psychiatry">Psychiatry</option>
              <option value="Rheumatology And Clinical Immunology">Rheumatology And Clinical Immunology</option>
              <option value="Opthalmollogy">Opthalmollogy</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Respiratory Medicine">Respiratory Medicine</option>
              
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
