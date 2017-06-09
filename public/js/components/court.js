
import * as d3 from 'd3-selection';
import courtHtml from '../../views/components/court.html'

export default class Court {
    constructor() {
        this.scale = '0 0 100 125';
        this.width = 100;
        this.height = 125;
    }

    render(node) {
      node.append('svg')
        .attr('width', this.width)
        .attr('height', this.height)
        .attr('viewBox', this.scale)
        .html(courtHtml);
    }

    setScale (x, y) {
        this.width = x;
        this.height = y;
        this.scale = '0 0 ' + x + ' ' + y;
    }
}
