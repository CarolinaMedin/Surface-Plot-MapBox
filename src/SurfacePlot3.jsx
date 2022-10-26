import React from "react";
import Plot from "react-plotly.js";

function SurfacePlot3() {

    const graphData = {
        z: [
          [8.83, 8.89, 8.81, 8.87, 8.9, 8.87],
          [8.89, 8.94, 8.85, 8.94, 8.96, 8.92],
          [8.84, 8.9, 8.82, 8.92, 8.93, 8.91],
          [8.79, 8.85, 8.79, 8.9, 8.94, 8.92],
          [8.79, 8.88, 8.81, 8.9, 8.95, 8.92],
          [8.8, 8.82, 8.78, 8.91, 8.94, 8.92],
          [8.75, 8.78, 8.77, 8.91, 8.95, 8.92],
          [8.8, 8.8, 8.77, 8.91, 8.95, 8.94],
          [8.74, 8.81, 8.76, 8.93, 8.98, 8.99],
          [8.89, 8.99, 8.92, 9.1, 9.13, 9.11],
          [8.97, 8.97, 8.91, 9.09, 9.11, 9.11],
          [9.04, 9.08, 9.05, 9.25, 9.28, 9.27],
          [9, 9.01, 9, 9.2, 9.23, 9.2],
          [8.99, 8.99, 8.98, 9.18, 9.2, 9.19],
          [8.93, 8.97, 8.97, 9.18, 9.2, 9.18]
        ],
        masterGraph: {
          title: "Title",
          xAxis: "X-Axis",
          yAxis: "Y-Axis",
          zAxis: "Z-Axis"
        }
      }

      return (
            <Plot
        data={[
          {
            type: "surface",
            z: graphData.z
          }
        ]}
        layout={{
          width: 800,
          height: 600,
          margin: {
            l: 50,
            r: 50,
            b: 80,
            t: 90,
            pad: 4
          },
          title: graphData.masterGraph.title,
          annotations: [
            {
              text: graphData.masterGraph.model,
              font: {
                size: 14,
                color: "#444444"
              },
              showarrow: false,
              align: "center",
              x: 0.5,
              y: 1.1,
              xref: "paper",
              yref: "paper"
            }
          ],
          scene: {
            xaxis: {
              title: graphData.masterGraph.xAxis,
              titlefont: {
                family: "Courier New, monospace",
                size: 12,
                color: "#444444"
              }
            },
            yaxis: {
              title: graphData.masterGraph.yAxis,
              titlefont: {
                family: "Courier New, monospace",
                size: 12,
                color: "#444444"
              }
            },
            zaxis: {
              title: graphData.masterGraph.zAxis,
              titlefont: {
                family: "Courier New, monospace",
                size: 12,
                color: "#444444"
              }
            }
          }
        }}
      />
      )
}

export default SurfacePlot3;