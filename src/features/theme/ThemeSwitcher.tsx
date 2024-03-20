import { IoMoon, IoMoonOutline } from "react-icons/io5";
import styled from "styled-components";
import { useTheme } from "./use-theme";

const ModeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    text-transform: capitalize;
`;

const ThemeSwitcher = () => {
    const [theme, toggleTheme] = useTheme();

    const localStorageThemeSwitcher = () => {
        localStorage.setItem("theme", theme === "light" ? "dark" : "light");
        toggleTheme();
    };
    return (
        <ModeSwitcher onClick={localStorageThemeSwitcher}>
            {theme === "light" ? (
                <IoMoonOutline size="14px" />
            ) : (
                <IoMoon size="14px" />
            )}{" "}
            <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
        </ModeSwitcher>
    );
};

export { ThemeSwitcher };
