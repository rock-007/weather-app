import WeeklyForecast from "./WeeklyForecast";
import "./css/WeekForecast.css";
import DailyChart from "../Containers/DailyChart";

const City = ({ cities }) => {
    // const eachCity = cities.map((city, index) => {
    //     console.log(city);
    //     return <DailyForcast city={city.daily} key={index} />;
    // });
    console.log(cities);

    const cityforecast = cities.map((city) => {
        console.log(city.forecast);

        return (
            <div className="city-card">
                <h3 id="city-name">{city.daily.city.name}</h3>
                <DailyChart daily={city.daily.list} />
                {city.forecast.list
                    .map((eachDay, index) => (
                        <WeeklyForecast
                            main={eachDay.main}
                            eachday={eachDay}
                            visibility={eachDay.visibility}
                            wind={eachDay.wind}
                            day={index}
                            clouds={eachDay["clouds"]}
                            rain={eachDay.rain}
                            key={index}
                        />
                    ))
                    .splice(0, 7)}{" "}
            </div>
        );
    });
    return (
        <div>
            <ul>{cityforecast}</ul>
        </div>
    );
};

export default City;
