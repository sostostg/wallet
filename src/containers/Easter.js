/**
 * Created by gtsotsos on 2017-07-27.
 */
import EasterEgg from 'react-easter';
import React from 'react';

export default class Easter extends React.Component {
    render() {
        const konamiCode = [
            'arrowup',
            'arrowup',
            'arrowdown',
            'arrowdown',
        ];

        return (
            <EasterEgg keys={konamiCode}
                       timeout={10000}>
                <div class="overlay">
                    <iframe class="sexy-nude-geek-girls-playing-mario"
                            src="https://www.youtube.com/embed/DLzxrzFCyOs?autoplay=1"
                            frameborder="0"
                            title="easteregg"
                            allowfullscreen/>
                </div>
            </EasterEgg>
        );
    }
}