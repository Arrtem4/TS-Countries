import { useEffect } from "react";
import { useAppDispatch } from "store";
import { Theme, setTheme } from "./theme-slice";

export const useLocalTheme = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const themeInLocalStorage = localStorage.getItem("theme");
        if (themeInLocalStorage) {
            document.body.setAttribute("data-theme", themeInLocalStorage);

            dispatch(setTheme(themeInLocalStorage as Theme));
        }
    }, [dispatch]);
};
