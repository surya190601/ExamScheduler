import React from 'react'
import { Link } from 'react-router-dom'
import CreateButton from './CreateButton'
const CreateCard = () => {
    return (
        <div style={{ position: 'relative',marginBottom:'51px'}}>
            <svg
                width="392"
                height="252"
                viewBox="0 0 392 252"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="0.5"
                    y="0.5"
                    width="391"
                    height="251"
                    rx="9.5"
                    fill="#F6F6F6"
                    stroke="black"
                    stroke-dasharray="15 15"
                />
            </svg>
            <Link
                to="/CreateSchedulePage"
                style={{
                    textDecoration: 'none',
                    position: 'absolute',
                    height: '35.96px',
                    left: "-30px",
                    top: '101px',
                }}
            >
                <CreateButton />
            </Link>
        </div>
    )
}

export default CreateCard
