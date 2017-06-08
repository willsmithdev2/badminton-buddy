
import * as d3 from 'd3-selection';
export default (node) => {
    const svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 125\" style=\"enable-background:new 0 0 100 100;\" xml:space=\"preserve\">";
    const style = "<style type=\"text/css\">.st0{fill:none;stroke:#000000;stroke-miterlimit:10;}.st1{fill:none;stroke:#000000;stroke-miterlimit:10;stroke-dasharray:0.9969,0.9969;}"
    const courtHtml = "<rect x=\"10.1\" y=\"31.9\" class=\"st0\" width=\"79.8\" height=\"36.2\"/><line class=\"st0\" x1=\"10.1\" y1=\"50\" x2=\"38.2\" y2=\"50\"/><line class=\"st0\" x1=\"14.4\" y1=\"68.1\" x2=\"14.2\" y2=\"31.9\"/><line class=\"st0\" x1=\"10.1\" y1=\"65.3\" x2=\"89.9\" y2=\"65.3\"/><line class=\"st0\" x1=\"10.1\" y1=\"34.7\" x2=\"89.9\" y2=\"34.7\"/><line class=\"st0\" x1=\"61.7\" y1=\"68.1\" x2=\"61.6\" y2=\"31.9\"/><line class=\"st0\" x1=\"85.5\" y1=\"67.9\" x2=\"85.3\" y2=\"31.7\"/><line class=\"st0\" x1=\"38.3\" y1=\"68.1\" x2=\"38.2\" y2=\"31.9\"/><line class=\"st0\" x1=\"61.6\" y1=\"50\" x2=\"89.9\" y2=\"50\"/><g><g><path class=\"st0\" d=\"M50.1,67.9c0-0.2,0-0.3,0-0.5\"/><path class=\"st1\" d=\"M50.1,66.4C50,55.3,50,44.2,49.9,33\"/><path class=\"st0\" d=\"M49.9,32.5c0-0.2,0-0.3,0-0.5\"/></g></g></svg>"
    const svgNode = node.append('svg')
      .html(svg + courtHtml)
    svgNode.append('style').html(style);

}