import {
  CloudSun,
  Thermometer,
  Droplets,
  Wind,
  MapPin,
  Sparkles,
} from "lucide-react";


function WeatherCard({ weather }) {


  const getWeatherStatus = (code) => {

    if(code === 0)
      return "Clear Sky";

    if(code <= 3)
      return "Partly Cloudy";

    if(code >= 50 && code <= 67)
      return "Rainy";

    if(code >= 80)
      return "Heavy Rain";

    return "Weather Update";

  };


  return (
      <div className="rounded-3xl border border-secondary-200 bg-white p-7 shadow-card">


        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm font-semibold uppercase tracking-wide text-secondary-500">
              Weather Forecast
            </p>


            <h2 className="mt-2 text-2xl font-bold text-secondary-900">
              {weather?.place || "Weather Information"}
            </h2>

          </div>


          <div className="rounded-2xl bg-primary-50 p-4 text-primary-700">

            <CloudSun size={28}/>

          </div>

        </div>



        <div className="mt-8 grid gap-4">


          {/* Temperature */}

          <div className="flex items-center gap-3 rounded-2xl bg-secondary-50 p-4">

            <Thermometer
                size={22}
                className="text-primary-600"
            />

            <div>

              <p className="text-sm text-secondary-500">
                Temperature
              </p>


              <p className="font-semibold text-secondary-900">

                {weather?.temperature ?? "--"}°C

              </p>

            </div>

          </div>



          {/* Humidity */}

          <div className="flex items-center gap-3 rounded-2xl bg-secondary-50 p-4">

            <Droplets
                size={22}
                className="text-primary-600"
            />


            <div>

              <p className="text-sm text-secondary-500">
                Humidity
              </p>


              <p className="font-semibold text-secondary-900">

                {weather?.humidity ?? "--"}%

              </p>


            </div>

          </div>



          {/* Wind */}

          <div className="flex items-center gap-3 rounded-2xl bg-secondary-50 p-4">


            <Wind
                size={22}
                className="text-primary-600"
            />


            <div>

              <p className="text-sm text-secondary-500">
                Wind Speed
              </p>


              <p className="font-semibold text-secondary-900">

                {weather?.windSpeed ?? "--"} km/h

              </p>


            </div>


          </div>


        </div>



        {/* AI Weather Advice */}

        <div className="mt-5 rounded-2xl bg-primary-50 p-4">


          <div className="mb-2 flex items-center gap-2 text-primary-700">

            <MapPin size={18}/>

            <span className="font-semibold">
            Weather Advice
          </span>

          </div>


          <p className="text-sm leading-6 text-secondary-600">
            {weather?.advice ||
                "Weather conditions are analyzed based on your destination."}
          </p>


        </div>


      </div>
  );
}


export default WeatherCard;