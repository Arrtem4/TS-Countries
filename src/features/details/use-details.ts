import { useSelector } from "react-redux";
import { useEffect } from "react";

import { clearDetails, loadCountryByName } from "./details-slice";
import { selectDetails } from "./select-details";
import { useAppDispatch } from "store";

export const useDetails = (name: string) => {
    const dispatch = useAppDispatch();
    const details = useSelector(selectDetails);

    useEffect(() => {
        dispatch(loadCountryByName(name));

        return () => {
            dispatch(clearDetails());
        };
    }, [name, dispatch]);

    return details;
};
