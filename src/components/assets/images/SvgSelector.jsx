import React from 'react'

export const SvgSelector = ({ id }) => {
    switch (id) {
        case 'plus':
            return (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1V19M18.9706 10H1" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            )
        case 'minus':
            return (
                <svg width="18" height="2" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="18" height="2" rx="1" fill="white" />
                </svg>
            )
        default:
            return null
    }
}