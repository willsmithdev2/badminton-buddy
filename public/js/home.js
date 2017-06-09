
import * as d3 from 'd3-selection';
import Court from './components/court';
const setUpCourts = () => {

    const courtSVG = d3.select('.courts-container')
                      .append('div')
                      .classed('court', true);
    const court1 = new Court();
    court1.setScale(300, 300);
    court1.render(courtSVG);

}
setUpCourts();
