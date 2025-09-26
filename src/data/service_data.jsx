import {construction_guy, house_interior, modern_house, interior1, interior2, interior3} from "../assets/images";
import { GiPalmTree } from "react-icons/gi";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { PiBuilding } from "react-icons/pi";

export const gridData = [
    {
        id: "1001",
        logo: GiPalmTree,
        title: "Modern Living Room",
        description: "A spacious and elegant living room design that brings comfort and style.",
        image: interior1,
        category: "Living Room",
    },
    {
        id: "1002",
        logo: FaHandHoldingDollar,
        title: "Cozy Bedroom",
        description: "A warm and inviting bedroom setup for a restful sleep.",
        image: interior2,
        category: "Bedroom",
    },
    {
        id: "1003",
        logo: FaHandHoldingDollar,
        title: "Sleek Kitchen",
        description: "A modern kitchen with state-of-the-art appliances and sleek design.",
        image: interior3,
        category: "Kitchen",
    },
    {
        id: "1004",
        logo: PiBuilding,
        title: "Luxury Bathroom",
        description: "A bathroom design that combines luxury and functionality.",
        image: house_interior,
        category: "Bathroom",
    },
    {
        id: "1005",
        logo: FaHandHoldingDollar,
        title: "Contemporary Office",
        description: "A professional office space with a contemporary touch.",
        image: modern_house,
        category: "Office",
    },
    {
        id: "1006",
        logo: PiBuilding ,
        title: "Stylish Exterior",
        description: "An exterior design that showcases modern architectural excellence.",
        image: construction_guy,
        category: "Exterior",
    }
];
