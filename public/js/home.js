
import * as d3 from 'd3-selection';
const foo = () => {
    d3.select('.container-fluid').append('div').classed('tester', true); //Example of D3 selections
};

foo();
