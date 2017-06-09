
import * as d3 from 'd3-selection';
import Court from './components/court';
const setUpCourts = (numberOfCourts) => {

    const courtSVG = d3.select('.courts-container')

    for (let i = 0; i < numberOfCourts; i++) {
        const court1 = new Court();
        court1.setScale(300, 300);
        court1.render(courtSVG);
    }
}

setUpCourts(3);
