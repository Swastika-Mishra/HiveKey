import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateDataComponent = () => {
    const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await getAccessTokenSilently({
                    audience: "https://hivekey-api",
                });
                const response = await fetch("http://localhost:8081/api/private", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [getAccessTokenSilently]);

    // return <div></div>;
};

export default PrivateDataComponent;
