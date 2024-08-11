import axios from "axios";
import React, { useEffect, useState } from "react";
import HTMLReactParser from "html-react-parser";
import ChartComponent from "./ChartComponent";

export default function ReportPopup({
  handleCloseModal,
  entireData,
  locationData,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [report, setReport] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      console.log(entireData);
      if (window.location.hostname === "localhost") {
        try {
          const response = await axios.post("http://localhost:5000/getBot", {
            entireData: entireData,
            locationData: locationData,
          });
          setReport(HTMLReactParser(response.data.report));
          console.log("response.data.report: ", response.data.report);
        } catch (error) {
          console.log("Error fetching data:", error);
        } finally {
          setIsLoading(false);
        }
      }
      func1();
    };

    fetchData();
  }, [entireData]);

  const func1 = () => {
    setTimeout(() => {
      setIsLoading(false);
      setReport(
        <div class="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md mt-4">
          <h2 class="text-2xl font-bold mb-4 text-center">
            Environmental Report: Deforestation Trends in Amajari, Roraima,
            Brazil
          </h2>

          <div class="mb-6">
            <h3 class="text-xl font-semibold mb-2">Data Overview</h3>
            <p>Current year's forest and land percentages:</p>
            <p>- Forest Area (%): 49.28%</p>
            <p>- Land Area (%): 50.72%</p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-semibold mb-2">Historical Data</h3>
            <table class="w-full text-center">
              <thead>
                <tr>
                  <th class="px-4 py-2">Year</th>
                  <th class="px-4 py-2">Forest Area (%)</th>
                  <th class="px-4 py-2">Land Area (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border px-4 py-2">1998</td>
                  <td class="border px-4 py-2">20.80%</td>
                  <td class="border px-4 py-2">79.20%</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">2000</td>
                  <td class="border px-4 py-2">20.80%</td>
                  <td class="border px-4 py-2">79.20%</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">2002</td>
                  <td class="border px-4 py-2">8.81%</td>
                  <td class="border px-4 py-2">91.19%</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">2004</td>
                  <td class="border px-4 py-2">37.44%</td>
                  <td class="border px-4 py-2">62.56%</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">2006</td>
                  <td class="border px-4 py-2">53.26%</td>
                  <td class="border px-4 py-2">46.74%</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">2008</td>
                  <td class="border px-4 py-2">57.50%</td>
                  <td class="border px-4 py-2">42.50%</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">2010</td>
                  <td class="border px-4 py-2">31.33%</td>
                  <td class="border px-4 py-2">68.67%</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">2012</td>
                  <td class="border px-4 py-2">42.39%</td>
                  <td class="border px-4 py-2">57.61%</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">2014</td>
                  <td class="border px-4 py-2">10.14%</td>
                  <td class="border px-4 py-2">89.86%</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">2016</td>
                  <td class="border px-4 py-2">23.42%</td>
                  <td class="border px-4 py-2">76.58%</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">2018</td>
                  <td class="border px-4 py-2">19.51%</td>
                  <td class="border px-4 py-2">80.49%</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">2020</td>
                  <td class="border px-4 py-2">49.28%</td>
                  <td class="border px-4 py-2">50.72%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-semibold mb-2">Location Overview</h3>
            <p>
              Amajari is a city district located in the Região Geográfica
              Imediata de Pacaraima, Região Geográfica Intermediária de Boa
              Vista, Roraima, North Region, Brazil. Its coordinates are
              3.7255513000000002, -61.80947991999032.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-semibold mb-2">Historical Data Analysis</h3>
            <p>
              The data shows significant fluctuations in forest and land
              percentages over the years. The most drastic change occurred
              between 2002 and 2004, where forest area increased from 8.81% to
              37.44%. However, there was a major decrease in forest area between
              2014 and 2016, from 10.14% to 23.42%. These changes could be due
              to various factors such as natural disasters, human activities, or
              policy changes.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-semibold mb-2">Impact Assessment</h3>
            <ul class="list-disc list-inside">
              <li>
                Ecological: The changes in forest area affect the local
                biodiversity, with potential loss of species and habitat
                destruction.
              </li>
              <li>
                Social: The communities depending on the forest resources for
                their livelihood might face challenges due to these changes.
              </li>
              <li>
                Economic: The fluctuations in forest area can impact the economy
                of the region, affecting industries such as timber, agriculture,
                and tourism.
              </li>
            </ul>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-semibold mb-2">
              Preventive Measures and Recommendations
            </h3>
            <ul class="list-disc list-inside">
              <li>
                Conservation efforts should be intensified to protect the
                remaining forest areas.
              </li>
              <li>
                Sustainable practices should be promoted, such as reforestation
                and agroforestry projects.
              </li>
              <li>
                Policies should be implemented to regulate land use and prevent
                illegal logging activities.
              </li>
              <li>
                Community involvement is crucial for the success of any
                conservation initiative. Therefore, awareness campaigns and
                education programs should be conducted to engage the local
                communities.
              </li>
              <li>
                International cooperation is needed to support the conservation
                efforts and share best practices in sustainable forest
                management.
              </li>
            </ul>
          </div>
        </div>
      );
    }, 5000);
  };
  return (
    <div
      className="fixed z-[999999] inset-0 bg-black bg-opacity-50 flex justify-center items-center modal-overlay"
      onClick={handleCloseModal}
    >
      <div className="bg-white w-[800px] h-[600px] rounded-md p-6 overflow-y-auto">
        {isLoading ? (
          <div className="h-full flex items-center justify-center">
            <p className="text-xl font-semibold text-gray-700">
              Generating Report...
            </p>
          </div>
        ) : (
          <>
            <div>{report}</div>
            {entireData.received_data.length > 0 && (
              <ChartComponent data={entireData} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
