import styled from "styled-components";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";

const UniverseNav = () => {
    return (
        <StyledWrapper>
            <div className="button-container">
                <Link to="/home" className="button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 1024 1024"
                        strokeWidth={0}
                        fill="currentColor"
                        stroke="currentColor"
                        className="icon"
                    >
                        <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
                    </svg>
                </Link>

                <Link to="/students" className="button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        fill="none"
                        stroke="currentColor"
                        className="icon"
                    >
                        <path
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        />
                    </svg>
                </Link>

                <Link to="/about" className="button">
                    <InfoIcon />
                </Link>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .button-container {
        width: 100%;
        height: 74px;
        display: flex;
        background: linear-gradient(135deg, rgba(109, 111, 222, 0.95) 0%, rgba(245, 73, 144, 0.95) 100%);
        align-items: center;
        justify-content: space-around;
        border-radius: 25px 25px 0 0;
        box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.3),
            0 -2px 10px rgba(109, 111, 222, 0.5);
        backdrop-filter: blur(10px);
    }

    .button {
        outline: 0 !important;
        border: 0 !important;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        transition: all ease-in-out 0.3s;
        cursor: pointer;
        text-decoration: none;
        backdrop-filter: blur(5px);
    }

    .button:hover {
        transform: translateY(-5px) scale(1.1);
        background-color: rgba(255, 255, 255, 0.3);
        box-shadow: 0 5px 15px rgba(255, 193, 7, 0.4);
    }

    .button:active {
        transform: translateY(-2px) scale(1.05);
    }

    .icon {
        font-size: 24px;
        transition: all ease-in-out 0.3s;
    }

    .button:hover .icon {
        color: #FFC107;
    }
`;

export default UniverseNav;
