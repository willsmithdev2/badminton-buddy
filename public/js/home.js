
import * as d3 from 'd3-selection';
import court from './components/court';
const foo = () => {
    court(d3.select('.container-fluid').append('div').classed('tester', true)); //Example of D3 selections};
}
foo();
