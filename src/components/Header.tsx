import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container } from "./Container";
import { ThemeSwitcher } from "../features/theme/ThemeSwitcher";
import { useCleanup } from "../features/controls/use-cleanup";

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;
`;

const Title = styled(Link).attrs({
    to: "/",
})`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
    background-color: var(--colors-bg);
    padding: 0.5rem;
    border-radius: var(--radii);
`;

export const Header = () => {
    const cleanUp = useCleanup();

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title onClick={cleanUp}>All countries</Title>
                    <ThemeSwitcher />
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};
