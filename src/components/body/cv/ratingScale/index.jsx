import React from 'react';
import Dark_circle from '../../../../assets/circle-solid_dark.svg';
import Light_circle from '../../../../assets/circle-solid_light.svg';

function RatingScale({ scaleValue, key }) {
    // const scaleRating = props.rating;
    const range = [1, 2, 3, 4, 5];
    const activRanc = <img src={Dark_circle} alt="sun-icon" />;
    const nonActivRanc = <img src={Light_circle} alt="sun-icon" />;

    return (
        <>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                    <span
                        key={`${rangeElem.toString()}-${key}`}
                        className="rank-circle"
                    >
                        {activRanc}
                    </span>
                ) : (
                    <span
                        key={`${rangeElem.toString()}-${key}`}
                        className="rank-circle"
                    >
                        {nonActivRanc}
                    </span>
                )
            )}
        </>
    );
}
export default RatingScale;
