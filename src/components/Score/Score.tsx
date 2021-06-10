import React from 'react';


type Props = {
    score: number
}

const Score: React.FC<Props> = ({score}) => {

    return (
        <div className="score-container" data-testid="Score">
            <p>Score: {score}</p>
        </div>
    )

}

export default Score;