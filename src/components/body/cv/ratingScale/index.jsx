import React from 'react';
import { ReactComponent as Ranc } from '../../../../assets/circle-solid_dark.svg';
// import { ReactComponent as NonActivRanc } from '../../../../assets/circle-solid_light.svg';

function RatingScale({ scaleValue, key }) {
    // const scaleRating = props.rating;
    const range = [1, 2, 3, 4, 5];

    return (
        <>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                    <span
                        key={`${rangeElem.toString()}-${key}`}
                        className="rank-circle"
                    >
                        <Ranc
                            className="rank-circle"
                            style={{ fill: '#ffc600', width: '7px' }}
                        />
                    </span>
                ) : (
                    <span
                        key={`${rangeElem.toString()}-${key}`}
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
