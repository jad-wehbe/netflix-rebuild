import { ResultType } from "api/requests";
import { useEffect, useState } from "react";
import api from "api/axios";

// Todo: Fetch runtime when needed
const useFetchData = (fetchUrl: string) => {
    const [show, setShow] = useState<ResultType>({});

    useEffect(() => {
        async function fetchData() {
            console.log("Fetching Data");
            const request = await api.get(fetchUrl);
            setShow(
                request.data.results[
                    Math.floor(Math.random() * request?.data.results.length)
                ]
            );
        }
        fetchData();
    }, [fetchUrl]);

    return [show];
};

export { useFetchData };
