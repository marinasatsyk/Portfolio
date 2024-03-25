import React from 'react';
import { ReactComponent as Ranc } from '../../../../assets/circle-solid_dark.svg';

function RatingScale({ scaleValue, Pkey }) {
    const range = [1, 2, 3, 4, 5];

    return (
        <>
            {range.map((rangeElem, index) =>
                scaleValue >= rangeElem ? (
                    <span
                        key={`${rangeElem.toString()}-${Pkey}-${index}`}
                        className="rank-circle"
                    >
                        <Ranc
                            className="rank-circle"
                            style={{ fill: '#ffc600', width: '7px' }}
                        />
                    </span>
                ) : (
                    <span
                        key={`${rangeElem.toString()}-${Pkey}-${index}`}
                        className="rank-circle"
                    >
                        <Ranc
                            className="rank-circle"
                            style={{ fill: '#D9D9D9', width: '7px' }}
                        />
                    </span>
                )
            )}
        </>
    );
}
export default RatingScale;
