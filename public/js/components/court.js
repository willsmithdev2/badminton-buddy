
import * as d3 from 'd3-selection';
import courtHtml from '../../views/components/court.html'

export default class Court {
    constructor() {
        this.scale = '9 30 100 125';
        this.width = 100;
        this.height = 125;
    }

    render(node) {
        node.append('div')
          .classed('court', true)
          .append('svg')
          .attr('viewBox', '9.2 30 83 40')
          .html(courtHtml);
    }

    setScale (width, height) {
        this.width = width;
        this.height = height;
    }
}
