import DashboardContent from "../components/DashboardContent";
import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
    const [matierPremier, setMatierPremier] = useState([]);
    const [orderDeFabrication, setOrderDeFabrication] = useState([]);
    const token = sessionStorage.getItem("token");

    useEffect(() => {
        async function getMatieres() {
            try {
                const response = await axios.get(
                    "http://localhost:3000/api/matieres-premieres",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const data = response.data.data;
                if (Array.isArray(data)) {
                    setMatierPremier(data);      
                }

            } catch (error) {
                console.log(error.response?.data);
            }
        }

        getMatieres();
        // console.log(matierPremier);
    }, []);

    const countMatieres = matierPremier.length;

    useEffect(() => {
        async function getOrder() {
            try {
                const response = await axios.get(
                    "http://localhost:3000/api/ordres-fabrication",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const data = response.data.data;
                
                if (Array.isArray(data)) {
                    setOrderDeFabrication(data);
                }

            } catch (error) {
                console.log(error.response?.data);
            }
        }

        getOrder();
    }, []);

    const countOrders = orderDeFabrication.length ;
   
    // function alertStock(matierPremier){
    //     matierPremier.filer(()=>{
    //         matierPremier.
    //     })
    // }

    return (
        <>
            <DashboardContent
                countMatieres={countMatieres}
                countOrders={countOrders}
            />
        </>
    
    );
}

export default Dashboard;