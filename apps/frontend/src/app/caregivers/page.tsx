"use client";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import { Caregiver } from "../types/caregiver";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const caregivers: Caregiver[] = [
  {
    id: 1,
    name: "Maria Oliveira",
    gender: "female",
    age: 45,
    city: "São Paulo",
    description:
      "Committed caregiver focused on elderly care and comfort, with extensive experience.",
    image: "https://via.placeholder.com/150?text=Maria+Oliveira",
  },
  {
    id: 2,
    name: "Carlos Souza",
    gender: "male",
    age: 38,
    city: "Rio de Janeiro",
    description:
      "Trained caregiver with extensive experience in dementia patients.",
    image: "https://via.placeholder.com/150?text=Carlos+Souza",
  },
  {
    id: 3,
    name: "Fernanda Costa",
    gender: "female",
    age: 30,
    city: "Minas Gerais",
    description:
      "Attentive and kind caregiver for fully dependent patients.",
    image: "https://via.placeholder.com/150?text=Fernanda+Costa",
  },
  {
    id: 4,
    name: "João Pereira",
    gender: "male",
    age: 50,
    city: "São Paulo",
    description: "Caregiver specialized in post-surgery recovery",
    image: "https://via.placeholder.com/150?text=João+Pereira",
  },
  {
    id: 5,
    name: "Ana Ribeiro",
    gender: "female",
    age: 35,
    city: "Rio de Janeiro",
    description:
      "Bilingual caregiver offering services in Portuguese and English.",
    image: "https://via.placeholder.com/150?text=Ana+Ribeiro",
  },
  {
    id: 6,
    name: "Clara Almeida",
    gender: "female",
    age: 28,
    city: "São Paulo",
    description: "Passionate caregiver focused on Alzheimer's patients.",
    image: "https://via.placeholder.com/150?text=Clara+Almeida",
  },
];

const CaregiversPage = () => {
  const [filteredCaregivers, setFilteredCaregivers] =
    useState<Caregiver[]>(caregivers);
  const [age, setAge] = useState<[number, number] | undefined>(undefined);
  const [city, setCity] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const handleFilterChange = () => {
    let filteredList = caregivers;

    if (age) {
      const [minAge, maxAge] = age;
      filteredList = filteredList.filter(
        (caregiver) => caregiver.age >= minAge && caregiver.age <= maxAge
      );
    }

    if (city) {
      filteredList = filteredList.filter((caregiver) =>
        caregiver.city.toLowerCase().includes(city.toLowerCase())
      );
    }

    if (gender) {
      filteredList = filteredList.filter(
        (caregiver) => caregiver.gender === gender
      );
    }

    setFilteredCaregivers(filteredList);
  };

  const clearFilters = () => {
    setAge(undefined);
    setCity("");
    setGender("");
    setFilteredCaregivers(caregivers);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Available Caregivers</h1>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl">Filters</AccordionTrigger>
          <AccordionContent>
            <div className="mb-6">
              <div className="mb-4">
                <label htmlFor="minAge" className="block text-lg">
                  Age
                </label>
                <div className="flex gap-4 mt-2">
                  <input
                    id="minAge"
                    type="number"
                    placeholder="Minimum Age"
                    value={age?.[0] || ""}
                    onChange={(e) =>
                      setAge([Number(e.target.value), age ? age[1] : 100])
                    }
                    className="p-2 border rounded"
                  />
                  <input
                    id="maxAge"
                    type="number"
                    placeholder="Maximum Age"
                    value={age?.[1] || ""}
                    onChange={(e) =>
                      setAge([age ? age[0] : 0, Number(e.target.value)])
                    }
                    className="p-2 border rounded"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="city" className="block text-lg">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="mt-2 p-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <span className="text-lg">Gender</span>
                <div className="mt-2 flex gap-4">
                  <label>
                    <input
                      type="checkbox"
                      value="female"
                      checked={gender === "female"}
                      onChange={() =>
                        setGender(gender === "female" ? "" : "female")
                      }
                      className="mr-2"
                    />
                    Female
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="male"
                      checked={gender === "male"}
                      onChange={() =>
                        setGender(gender === "male" ? "" : "male")
                      }
                      className="mr-2"
                    />
                    Male
                  </label>
                </div>
              </div>

              <button
                onClick={handleFilterChange}
                className="px-4 py-2 bg-blue-500 text-white rounded mr-4"
              >
                Apply Filters
              </button>

              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Clear Filters
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 object-center">
        {filteredCaregivers.map((caregiver) => (
          <Link
            key={caregiver.id}
            href={`/caregivers/${caregiver.id}`}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Image
              src={caregiver.image}
              alt={caregiver.name}
              width={500}
              height={300}
              className="w-full h-52 object-cover object-center rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{caregiver.name}</h2>
              <p className="text-gray-600">{caregiver.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CaregiversPage;
