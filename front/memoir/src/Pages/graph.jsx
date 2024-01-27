import * as d3 from "d3"; // we will need d3.js

type NetworkDiagramProps = {
  width: number;
  height: number;
  data: number[];
};

export const NetworkDiagram = ({ width, height, data }: NetworkDiagramProps) => {

  // read the data
  // compute the nodes position using a d3-force
  // build the links
  // build the nodes

  return (
    <div>
      <svg width={width} height={height}>
        // render all the lines and circles
      </svg>
    </div>
  );
};