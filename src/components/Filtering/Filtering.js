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
        <div className="w-60 ">
          <Label className="flex items-center gap-1">
            <span className="text-sm whitespace-nowrap">Filter by :</span>

            <select
              id="underline_select"
              class=" py-2.5  w-full text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
            >
              <option selected>Location</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </Label>
        </div>
        <div className="w-52">
          <select
            id="underline_select"
            class=" py-2.5  w-full  text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
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
